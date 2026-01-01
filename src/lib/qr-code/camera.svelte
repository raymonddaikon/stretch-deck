<script lang="ts">
	import type { ScanResult } from 'qr-scanner-wechat';
	import { scan } from 'qr-scanner-wechat';
	import { onDestroy } from 'svelte';

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
		scannerState: ScannerState;
	}

	let { scannerState }: Props = $props();

	let videoEl: HTMLVideoElement | undefined = $state();
	let canvasEl: HTMLCanvasElement | undefined = $state();

	let error: unknown = $state();
	let isScanning = $state(false);
	let stream: MediaStream | null = null;

	let devices: MediaDeviceInfo[] = $state([]);
	let selectedCamera: string | undefined = $state();
	let result: ScanResult | undefined = $state();
	let count = $state(0);

	let cameras = $derived(devices.filter((d) => d.kind === 'videoinput'));

	// Request camera permissions and get device list
	$effect(() => {
		navigator.mediaDevices
			.getUserMedia({ audio: false, video: true })
			.then(() => navigator.mediaDevices.enumerateDevices())
			.then((deviceList) => {
				devices = deviceList;
			})
			.catch((e) => {
				error = e;
			});
	});

	// Auto-select first camera if none selected
	$effect(() => {
		if (!selectedCamera && cameras.length > 0) {
			selectedCamera = cameras[0]?.deviceId;
		}
	});

	// Start display when camera is selected
	$effect(() => {
		if (selectedCamera) {
			display();
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
					videoEl.play();
				}

				start();
			})
			.catch((e) => {
				error = e;
			});
	}

	async function scanFrame() {
		if (!isScanning) return;

		count += 1;

		const canvas = canvasEl!;
		canvas.width = videoEl!.videoWidth;
		canvas.height = videoEl!.videoHeight;

		const ctx = canvas.getContext('2d')!;
		ctx.filter = [
			scannerState.grayscale ? 'grayscale(1)' : '',
			`contrast(${scannerState.contrast / 100})`,
			`brightness(${scannerState.brightness / 100})`,
			`blur(${scannerState.blur}px)`
		]
			.filter(Boolean)
			.join(' ');

		ctx.drawImage(videoEl!, 0, 0, canvas.width, canvas.height);

		try {
			result = await scan(canvas);
			console.log('Scan result', result);

			if (result?.text) {
				videoEl?.pause();
				isScanning = false;
				return;
			}
		} catch (e) {
			console.error(e);
		}

		setTimeout(scanFrame, scannerState.cameraSampleDelay);
	}

	function start() {
		if (!isScanning) {
			count = 0;
			result = undefined;
			videoEl?.play();
			isScanning = true;
			scanFrame();
		}
	}

	onDestroy(dispose);
</script>

<div class="flex flex-col gap-2">
	<div class="flex flex-col gap-2 rounded border p-4">
		<div class="flex items-center justify-between">
			<span class="text-sm font-medium">Camera</span>
			{#if cameras.length}
				<select class="rounded border bg-transparent px-2 py-1 text-sm" bind:value={selectedCamera}>
					{#each cameras as camera (camera.deviceId)}
						<option value={camera.deviceId}>{camera.label || 'Camera'}</option>
					{/each}
				</select>
			{:else}
				<span class="text-sm text-muted-foreground">No camera found</span>
			{/if}
		</div>

		{#if selectedCamera}
			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">View</span>
				<select
					class="rounded border bg-transparent px-2 py-1 text-sm"
					bind:value={scannerState.cameraViewMode}
				>
					<option value="original">Original</option>
					<option value="processed">Processed</option>
				</select>
			</div>

			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">Mirror</span>
				<input type="checkbox" bind:checked={scannerState.cameraMirror} />
			</div>

			<div class="flex items-center justify-between">
				<div class="flex flex-col">
					<span class="text-sm font-medium">Sample Delay</span>
					<span class="text-xs text-muted-foreground">
						Delay before scanning the next frame. Lower = more frequent scans.
					</span>
				</div>
				<div class="flex items-center gap-2">
					<input
						type="range"
						min="50"
						max="1000"
						step="10"
						bind:value={scannerState.cameraSampleDelay}
						class="w-24"
					/>
					<span class="w-16 text-right text-sm">{scannerState.cameraSampleDelay}ms</span>
					<button
						type="button"
						class="text-xs text-muted-foreground hover:text-foreground"
						onclick={() => (scannerState.cameraSampleDelay = 100)}
					>
						Reset
					</button>
				</div>
			</div>

			<hr class="my-1 border-t" />

			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">Grayscale</span>
				<input type="checkbox" bind:checked={scannerState.grayscale} />
			</div>

			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">Contrast</span>
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
					<button
						type="button"
						class="text-xs text-muted-foreground hover:text-foreground"
						onclick={() => (scannerState.contrast = 100)}
					>
						Reset
					</button>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">Brightness</span>
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
					<button
						type="button"
						class="text-xs text-muted-foreground hover:text-foreground"
						onclick={() => (scannerState.brightness = 100)}
					>
						Reset
					</button>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">Blur</span>
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
		{/if}
	</div>

	<div class="relative mx-auto aspect-square w-120 max-w-full overflow-hidden rounded border">
		<video
			bind:this={videoEl}
			autoplay
			muted
			playsinline
			class="aspect-square w-full {scannerState.cameraMirror ? '-scale-x-100' : ''}"
		></video>
		<canvas
			bind:this={canvasEl}
			class="absolute inset-0 aspect-square w-full {scannerState.cameraViewMode === 'processed'
				? ''
				: 'hidden'} {scannerState.cameraMirror ? '-scale-x-100' : ''}"
		></canvas>
		<div class="absolute right-0 bottom-0 p-2 font-mono text-sm opacity-50">
			x{count}
		</div>
		{#if result?.text}
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
				<div class="font-mono">
					{result.text}
				</div>
				<button
					type="button"
					class="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
					onclick={start}
				>
					Continue
				</button>
			</div>
		{/if}
	</div>
</div>
