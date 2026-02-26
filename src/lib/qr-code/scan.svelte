<script lang="ts">
	import type { ScanResult } from 'qr-scanner-wechat';
	import { ready, scan } from 'qr-scanner-wechat';
	import { onMount } from 'svelte';
	import * as m from '$lib/paraglide/messages';

	interface ScannerState {
		grayscale: boolean;
		contrast: number;
		brightness: number;
		blur: number;
		cameraSampleDelay: number;
		cameraViewMode: 'original' | 'processed';
		cameraMirror: boolean;
	}

	interface Props {
		onScan?: (result: string) => void;
	}

	let { onScan }: Props = $props();

	// Scanner state
	let scannerState: ScannerState = $state({
		grayscale: false,
		contrast: 100,
		brightness: 100,
		blur: 0,
		cameraSampleDelay: 100,
		cameraViewMode: 'original',
		cameraMirror: false
	});

	// Tab state
	let activeTab: 'camera' | 'upload' = $state('camera');

	// Camera state
	let videoEl: HTMLVideoElement | undefined = $state();
	let canvasEl: HTMLCanvasElement | undefined = $state();
	let devices: MediaDeviceInfo[] = $state([]);
	let selectedCamera: string | undefined = $state();
	let stream: MediaStream | null = null;
	let isScanning = $state(false);
	let cameraError: unknown = $state();
	let cameraResult: ScanResult | undefined = $state();
	let scanCount = $state(0);

	// Upload state
	let uploadedImage: HTMLImageElement | undefined = $state();
	let uploadedDataUrl: string | undefined = $state();
	let canvasPreview: HTMLCanvasElement | undefined = $state();
	let canvasRect: HTMLCanvasElement | undefined = $state();
	let uploadResult: ScanResult | undefined = $state();
	let uploadError: unknown = $state();
	let isReading = $state(false);
	let fileInput: HTMLInputElement | undefined = $state();

	// Library state
	let isLibraryLoaded = $state(false);
	let libraryError: unknown = $state();

	let cameras = $derived(devices.filter((d) => d.kind === 'videoinput'));

	// Load the scanner library
	onMount(() => {
		ready()
			.then(() => {
				isLibraryLoaded = true;
			})
			.catch((e) => {
				libraryError = e;
			});
	});

	// Request camera permissions and get device list
	$effect(() => {
		if (activeTab === 'camera') {
			navigator.mediaDevices
				.getUserMedia({ audio: false, video: true })
				.then(() => navigator.mediaDevices.enumerateDevices())
				.then((deviceList) => {
					devices = deviceList;
				})
				.catch((e) => {
					cameraError = e;
				});
		}
	});

	// Auto-select first camera if none selected
	$effect(() => {
		if (!selectedCamera && cameras.length > 0) {
			selectedCamera = cameras[0]?.deviceId;
		}
	});

	// Start display when camera is selected
	$effect(() => {
		if (selectedCamera && activeTab === 'camera') {
			display();
		}
	});

	// Stop camera when switching to upload tab
	$effect(() => {
		if (activeTab === 'upload') {
			dispose();
		}
	});

	function dispose() {
		isScanning = false;
		stream?.getTracks().forEach((track) => {
			track.stop();
		});
		stream = null;
	}

	function display() {
		dispose();

		navigator.mediaDevices
			.getUserMedia({
				audio: false,
				video: {
					width: 512,
					height: 512,
					deviceId: selectedCamera
				}
			})
			.then((_stream) => {
				stream = _stream;

				if (videoEl) {
					videoEl.srcObject = stream;
					videoEl.onloadedmetadata = () => {
						videoEl?.play();
						startCameraScan();
					};
				}
			})
			.catch((e) => {
				cameraError = e;
			});
	}

	async function scanFrame() {
		if (!isScanning) return;
		if (!videoEl || !canvasEl || videoEl.videoWidth === 0 || videoEl.videoHeight === 0) {
			// Video not ready yet, retry
			setTimeout(scanFrame, scannerState.cameraSampleDelay);
			return;
		}

		scanCount += 1;

		const canvas = canvasEl;
		canvas.width = videoEl.videoWidth;
		canvas.height = videoEl.videoHeight;

		const ctx = canvas.getContext('2d', { willReadFrequently: true });
		if (!ctx) return;
		ctx.filter = [
			scannerState.grayscale ? 'grayscale(1)' : '',
			`contrast(${scannerState.contrast / 100})`,
			`brightness(${scannerState.brightness / 100})`,
			`blur(${scannerState.blur}px)`
		]
			.filter(Boolean)
			.join(' ');

		ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);

		try {
			cameraResult = await scan(canvas);

			if (cameraResult?.text) {
				videoEl?.pause();
				isScanning = false;
				onScan?.(cameraResult.text);
				return;
			}
		} catch (e) {
			console.error(e);
		}

		setTimeout(scanFrame, scannerState.cameraSampleDelay);
	}

	function startCameraScan() {
		if (!isScanning) {
			scanCount = 0;
			cameraResult = undefined;
			videoEl?.play();
			isScanning = true;
			scanFrame();
		}
	}

	// Upload handlers
	function handleFileSelect(event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];
		if (
			file &&
			(file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/webp')
		) {
			const reader = new FileReader();
			reader.onload = () => {
				uploadedDataUrl = reader.result as string;
				loadUploadedImage();
			};
			reader.readAsDataURL(file);
		}
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		const file = event.dataTransfer?.files[0];
		if (
			file &&
			(file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/webp')
		) {
			const reader = new FileReader();
			reader.onload = () => {
				uploadedDataUrl = reader.result as string;
				loadUploadedImage();
			};
			reader.readAsDataURL(file);
		}
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
	}

	async function loadUploadedImage() {
		if (!uploadedDataUrl) return;

		const img = new Image();
		const promise = new Promise((resolve) => {
			img.onload = resolve;
		});
		img.src = uploadedDataUrl;
		await promise;
		uploadedImage = img;

		await scanUploadedImage();
	}

	async function scanUploadedImage() {
		if (!uploadedImage || !canvasPreview) return;

		uploadResult = undefined;
		uploadError = undefined;
		isReading = true;

		const { width, height } = uploadedImage;
		const maxSize = 500;
		let w = width;
		let h = height;

		// Resize if needed
		if (width > height) {
			if (height > maxSize) {
				w = (width * maxSize) / height;
				h = maxSize;
			}
		} else {
			if (width > maxSize) {
				h = (height * maxSize) / width;
				w = maxSize;
			}
		}

		canvasPreview.width = w;
		canvasPreview.height = h;
		const ctx = canvasPreview.getContext('2d');
		if (ctx) {
			ctx.filter = [
				scannerState.grayscale ? 'grayscale(1)' : '',
				`contrast(${scannerState.contrast / 100})`,
				`brightness(${scannerState.brightness / 100})`,
				`blur(${scannerState.blur}px)`
			]
				.filter(Boolean)
				.join(' ');
			ctx.drawImage(uploadedImage, 0, 0, uploadedImage.width, uploadedImage.height, 0, 0, w, h);
		}

		try {
			uploadResult = await scan(canvasPreview, { includeRectCanvas: true });

			if (uploadResult?.rectCanvas && canvasRect) {
				canvasRect.width = uploadResult.rectCanvas.width;
				canvasRect.height = uploadResult.rectCanvas.height;
				const rectCtx = canvasRect.getContext('2d');
				rectCtx?.clearRect(0, 0, canvasRect.width, canvasRect.height);
				rectCtx?.drawImage(uploadResult.rectCanvas, 0, 0);
			}

			if (uploadResult?.text) {
				onScan?.(uploadResult.text);
			}
		} catch (e) {
			uploadError = e;
		} finally {
			isReading = false;
		}
	}

	function clearUpload() {
		uploadedImage = undefined;
		uploadedDataUrl = undefined;
		uploadResult = undefined;
		uploadError = undefined;
		if (fileInput) {
			fileInput.value = '';
		}
	}

	function resetSettings() {
		scannerState = {
			grayscale: false,
			contrast: 100,
			brightness: 100,
			blur: 0,
			cameraSampleDelay: 100,
			cameraViewMode: 'original',
			cameraMirror: false
		};
	}

	// Re-scan when settings change (for upload mode)
	$effect(() => {
		if (activeTab === 'upload' && uploadedImage) {
			// Access the state values to create dependency
			const _ = [
				scannerState.grayscale,
				scannerState.contrast,
				scannerState.brightness,
				scannerState.blur
			];
			scanUploadedImage();
		}
		return () => {
			dispose();
		};
	});
</script>

<div class="flex flex-col">
	<!-- Library loading state -->
	{#if libraryError}
		<div
			class="flex items-center gap-2 rounded border border-red-500 bg-red-500/10 p-4 text-red-500"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-5"
			>
				<path
					fill-rule="evenodd"
					d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
					clip-rule="evenodd"
				/>
			</svg>
			<span>Error loading scanner: {libraryError}</span>
		</div>
	{:else if !isLibraryLoaded}
		<div class="flex items-center gap-2 rounded border p-4 text-muted-foreground">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-5 animate-spin"
			>
				<path
					d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
					opacity="0.25"
				/>
				<path d="M12 2a10 10 0 019.95 9h-2.02A8 8 0 0012 4V2z" />
			</svg>
			<span>Loading scanner...</span>
		</div>
	{/if}

	<!-- Tab switcher -->
	<div class="flex">
		<button
			type="button"
			class="flex-1 border px-4 py-1 text-left text-sm font-medium transition-colors {activeTab ===
			'camera'
				? 'border-primary bg-foreground text-black'
				: 'bg-foreground text-black hover:bg-muted'}"
			onclick={() => (activeTab = 'camera')}
		>
			{m.camera()}
		</button>
		<button
			type="button"
			class="flex-1 border px-4 py-1 text-left text-sm font-medium transition-colors {activeTab ===
			'upload'
				? 'border-primary bg-foreground text-black'
				: 'bg-foreground text-black hover:bg-muted'}"
			onclick={() => (activeTab = 'upload')}
		>
			{m.upload()}
		</button>
	</div>

	<!-- Camera Tab -->
	{#if activeTab === 'camera'}
		<div class="flex flex-col gap-4">
			<!-- Camera error -->
			{#if cameraError}
				<div
					class="flex items-center gap-2 rounded border border-red-500 bg-red-500/10 p-4 text-red-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="size-5"
					>
						<path
							fill-rule="evenodd"
							d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>Camera error: {cameraError}</span>
				</div>
			{/if}

			<!-- Camera view -->
			<div
				class="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded border bg-black"
			>
				{#if selectedCamera}
					<video
						bind:this={videoEl}
						autoplay
						muted
						playsinline
						class="absolute inset-0 h-full w-full object-cover"
					></video>
					<canvas bind:this={canvasEl} class="hidden"></canvas>
				{:else if !cameraError}
					<div class="absolute inset-0 flex items-center justify-center text-white/50">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-5 animate-spin"
						>
							<path
								d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
								opacity="0.25"
							/>
							<path d="M12 2a10 10 0 019.95 9h-2.02A8 8 0 0012 4V2z" />
						</svg>
					</div>
				{/if}

				<!-- Camera selector overlay -->
				{#if cameras.length > 1}
					<div class="absolute top-2 right-2 left-2">
						<select
							class="w-full rounded border border-white/20 bg-black/50 px-2 py-1.5 text-sm text-white backdrop-blur-sm"
							bind:value={selectedCamera}
						>
							{#each cameras as camera (camera.deviceId)}
								<option value={camera.deviceId}>{camera.label || 'Camera'}</option>
							{/each}
						</select>
					</div>
				{/if}

				<!-- Success overlay -->
				{#if cameraResult?.text}
					<div
						class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-green-500/20 text-green-500 backdrop-blur backdrop-brightness-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-8"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clip-rule="evenodd"
							/>
						</svg>
						<div class="max-w-full px-4 text-center font-mono break-all">
							{cameraResult.text}
						</div>
						<button
							type="button"
							class="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
							onclick={startCameraScan}
						>
							Continue
						</button>
					</div>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Upload Tab -->
	{#if activeTab === 'upload'}
		<div class="flex flex-col gap-4">
			<!-- Upload area - same dimensions as camera feed -->
			<div
				class="relative mx-auto flex aspect-square w-full max-w-md cursor-pointer flex-col items-center justify-center gap-2 rounded border-2 border-dashed p-8 transition-colors hover:border-primary hover:bg-muted/50"
				role="button"
				tabindex="0"
				ondrop={handleDrop}
				ondragover={handleDragOver}
				onclick={() => fileInput?.click()}
				onkeydown={(e) => e.key === 'Enter' && fileInput?.click()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-8 text-muted-foreground"
				>
					<path
						fill-rule="evenodd"
						d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
						clip-rule="evenodd"
					/>
				</svg>
				<span class="text-sm text-muted-foreground">
					Click to upload or drag and drop an image
				</span>
				<span class="text-xs text-muted-foreground">PNG, JPG, or WebP</span>
				<input
					bind:this={fileInput}
					type="file"
					accept="image/png,image/jpeg,image/webp"
					class="hidden"
					onchange={handleFileSelect}
				/>
			</div>

			<!-- Uploaded image preview and result -->
			{#if uploadedDataUrl}
				<div class="grid grid-cols-2 gap-4">
					<div class="flex flex-col gap-2">
						<span class="text-center text-sm text-muted-foreground">Original</span>
						<div class="flex aspect-square items-center justify-center rounded border">
							<img
								src={uploadedDataUrl}
								alt="Uploaded"
								class="max-h-full max-w-full object-contain"
							/>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-center text-sm text-muted-foreground">Processed</span>
						<div class="flex aspect-square items-center justify-center rounded border">
							<canvas bind:this={canvasPreview} class="max-h-full max-w-full object-contain"
							></canvas>
						</div>
					</div>
				</div>

				{#if uploadResult?.rectCanvas}
					<div class="flex flex-col gap-2">
						<span class="text-center text-sm text-muted-foreground">Detected QR Code</span>
						<div class="mx-auto flex aspect-square w-32 items-center justify-center rounded border">
							<canvas bind:this={canvasRect} class="max-h-full max-w-full object-contain"></canvas>
						</div>
					</div>
				{/if}

				<!-- Result display -->
				<div
					class="flex items-center gap-2 rounded border p-4 {uploadError
						? 'border-red-500 bg-red-500/10 text-red-500'
						: isReading
							? 'text-muted-foreground'
							: uploadResult?.text
								? 'border-green-500 bg-green-500/10 text-green-500'
								: 'border-orange-500 bg-orange-500/10 text-orange-500'}"
				>
					{#if uploadError}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-5"
						>
							<path
								fill-rule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>Error: {uploadError}</span>
					{:else if isReading}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-5 animate-spin"
						>
							<path
								d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
								opacity="0.25"
							/>
							<path d="M12 2a10 10 0 019.95 9h-2.02A8 8 0 0012 4V2z" />
						</svg>
						<span>Scanning...</span>
					{:else if uploadResult?.text}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-5 shrink-0"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clip-rule="evenodd"
							/>
						</svg>
						<span class="font-mono break-all">{uploadResult.text}</span>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-5"
						>
							<path
								fill-rule="evenodd"
								d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>No QR code found</span>
					{/if}
				</div>

				<!-- Image processing settings -->
				<div class="flex flex-col gap-2 rounded border p-4">
					<span class="text-sm font-medium">Image Processing</span>

					<div class="flex items-center justify-between">
						<span class="text-sm">Grayscale</span>
						<input type="checkbox" bind:checked={scannerState.grayscale} />
					</div>

					<div class="flex items-center justify-between">
						<span class="text-sm">Contrast</span>
						<div class="flex items-center gap-2">
							<input
								type="range"
								min="0"
								max="1000"
								step="10"
								bind:value={scannerState.contrast}
								class="w-24"
							/>
							<span class="w-12 text-right text-sm">{scannerState.contrast}%</span>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<span class="text-sm">Brightness</span>
						<div class="flex items-center gap-2">
							<input
								type="range"
								min="0"
								max="1000"
								step="10"
								bind:value={scannerState.brightness}
								class="w-24"
							/>
							<span class="w-12 text-right text-sm">{scannerState.brightness}%</span>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<span class="text-sm">Blur</span>
						<div class="flex items-center gap-2">
							<input
								type="range"
								min="0"
								max="10"
								step="0.05"
								bind:value={scannerState.blur}
								class="w-24"
							/>
							<span class="w-12 text-right text-sm">{scannerState.blur.toFixed(2)}px</span>
						</div>
					</div>

					<div class="flex justify-end gap-2">
						<button
							type="button"
							class="text-sm text-muted-foreground hover:text-foreground"
							onclick={resetSettings}
						>
							Reset Settings
						</button>
						<button
							type="button"
							class="text-sm text-red-500 hover:text-red-600"
							onclick={clearUpload}
						>
							Clear Image
						</button>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
