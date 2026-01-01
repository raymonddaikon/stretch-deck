<script lang="ts">
	import { type Config, removeBackground } from '@imgly/background-removal';
	import { co } from 'jazz-tools';
	import { highestResAvailable } from 'jazz-tools/media';
	import { useResizeObserver, watch } from 'runed';
	import { onDestroy } from 'svelte';
	import { CropIcon, ExitIcon, UploadIcon } from '$lib/components/icons';
	import ImageDithering from '$lib/components/shaders/image-dithering.svelte';
	import Cropper from '$lib/components/ui/cropper/cropper.svelte';
	import type { CropArea, DispatchEvents } from '$lib/components/ui/cropper/types';
	import { getCroppedImg } from '$lib/components/ui/image-cropper/utils';
	import BlockLoader from '$lib/components/ui/loader/block-loader.svelte';
	import * as Resizable from '$lib/components/ui/resizable';
	import * as m from '$lib/paraglide/messages';
	import { cn } from '$lib/utils.js';

	interface Props {
		class?: string;
		/** Initial thumbnails (Jazz image list) for edit mode */
		initialThumbnails?: co.loaded<co.List<co.Image>> | null;
		/** Callback when images change, receives the updated images array and the index that changed */
		onImagesChange?: (images: (string | null)[], changedIndex: number) => void;
		/** Callback to get final images (with dithering applied if enabled) */
		getImagesRef?: (getFn: () => Promise<(string | null)[]>) => void;
	}

	let { class: className = '', initialThumbnails, onImagesChange, getImagesRef }: Props = $props();

	// Track blob URLs created from Jazz images for cleanup
	let initialBlobUrls: string[] = [];

	// Convert Jazz thumbnails to blob URLs
	let initialImageUrls = $derived.by(() => {
		// Revoke previous blob URLs before creating new ones
		initialBlobUrls.forEach((url) => {
			if (url.startsWith('blob:')) {
				URL.revokeObjectURL(url);
			}
		});
		initialBlobUrls = [];

		if (!initialThumbnails || initialThumbnails.length === 0) return [null, null, null];

		const urls: (string | null)[] = [null, null, null];

		for (let i = 0; i < Math.min(initialThumbnails.length, 3); i++) {
			const thumbnail = initialThumbnails[i];
			if (!thumbnail?.$isLoaded) continue;

			const bestImage = highestResAvailable(thumbnail, 800, 800);
			if (!bestImage) continue;

			const blob = bestImage.image.toBlob();
			if (blob) {
				const url = URL.createObjectURL(blob);
				initialBlobUrls.push(url);
				urls[i] = url;
			}
		}

		return urls;
	});

	// Cleanup blob URLs on component destroy
	onDestroy(() => {
		initialBlobUrls.forEach((url) => {
			if (url.startsWith('blob:')) {
				URL.revokeObjectURL(url);
			}
		});
	});

	// Store the three cropped images as data URLs
	let images: (string | null)[] = $state([null, null, null]);

	// Sync initial URLs to images state when they become available
	$effect(() => {
		const urls = initialImageUrls;
		if (urls.some((url) => url !== null) && images.every((img) => img === null)) {
			images = [...urls];
		}
	});

	// Store temporary images being cropped (one per pane)
	let tempImages: (string | undefined)[] = $state([undefined, undefined, undefined]);

	// Store original (uncropped) images for re-cropping
	let originalImages: (string | undefined)[] = $state([undefined, undefined, undefined]);

	// Store crop areas for each image
	let cropAreas: (CropArea | undefined)[] = $state([undefined, undefined, undefined]);

	// Store saved crop positions and zooms for each image (for re-cropping)
	let savedCropPositions: ({ x: number; y: number } | undefined)[] = $state([
		undefined,
		undefined,
		undefined
	]);
	let savedCropZooms: (number | undefined)[] = $state([undefined, undefined, undefined]);

	// Track which pane is in crop mode
	let croppingIndex: number | null = $state(null);

	// Cropper control state
	let cropPosition = $state({ x: 0, y: 0 });
	let cropZoom = $state(1);

	// Store image dimensions for calculating fill zoom
	let currentImageDimensions: { width: number; height: number } | null = $state(null);

	function handleMediaLoaded(e: { width: number; height: number }) {
		currentImageDimensions = { width: e.width, height: e.height };
	}

	function centerImage() {
		cropPosition = { x: 0, y: cropPosition.y };
	}

	function fillImage() {
		if (!currentImageDimensions || containerWidth === 0 || containerHeight === 0) return;
		const { width: imgWidth, height: imgHeight } = currentImageDimensions;
		const imgAspect = imgWidth / imgHeight;
		const containerAspect = containerWidth / containerHeight;

		// At zoom=1, svelte-easy-crop scales the image to "contain" within the crop area
		// We need to calculate how much to zoom so the image fills the container width

		if (imgAspect < containerAspect) {
			// Image is taller/narrower than container
			// At zoom=1, image height matches container height, width is smaller
			// Need to zoom until image width = container width
			cropZoom = containerAspect / imgAspect;
		} else {
			// Image is wider than container - at zoom=1 it already fills or exceeds width
			cropZoom = 1;
		}

		// Ensure zoom is within bounds
		cropZoom = Math.max(0.1, Math.min(10, cropZoom));
		cropPosition = { x: 0, y: 0 };
	}

	// Background removal state
	let removingBgIndex: number | null = $state(null);
	let bgRemovedIndices: Set<number> = $state(new Set());

	// Dithering state
	let ditheringEnabled = $state(false);

	// Refs to dithering container divs to access canvases
	let ditheringRefs: (HTMLDivElement | undefined)[] = $state([undefined, undefined, undefined]);

	/** Get the final images, applying dithering if enabled */
	async function getFinalImages(): Promise<(string | null)[]> {
		if (!ditheringEnabled) {
			return images;
		}

		const finalImages: (string | null)[] = [];

		for (let i = 0; i < 3; i++) {
			const image = images[i];
			if (!image) {
				finalImages.push(null);
				continue;
			}

			const containerDiv = ditheringRefs[i];
			if (!containerDiv) {
				finalImages.push(image);
				continue;
			}

			const canvas = containerDiv.querySelector('canvas');
			if (!canvas) {
				finalImages.push(image);
				continue;
			}

			// Convert canvas to data URL
			const dataUrl = canvas.toDataURL('image/png');
			finalImages.push(dataUrl);
		}

		return finalImages;
	}

	// Expose the getFinalImages function to parent
	$effect(() => {
		getImagesRef?.(getFinalImages);
	});

	// Track container dimensions for proper image sizing
	let containerRef: HTMLDivElement | undefined = $state();
	let containerWidth = $state(0);
	let containerHeight = $state(0);

	// Track pane sizes (as percentages)
	let paneSizes = $state([33.33, 33.34, 33.33]);

	// File input refs
	let fileInputs: (HTMLInputElement | null)[] = $state([null, null, null]);

	useResizeObserver(
		() => containerRef,
		(entries) => {
			const entry = entries[0];
			if (!entry) return;

			const { width, height } = entry.contentRect;
			containerWidth = width ?? 0;
			containerHeight = height ?? 0;
		}
	);

	// Check if any images are uploaded
	let hasAnyImage = $derived(images.some((img) => !!img));
	let isRemovingBackground = $derived(removingBgIndex !== null);

	// Get indices that need background removal (1-indexed for display)
	let indicesToProcess = $derived(
		images
			.map((img, index) => (img && !bgRemovedIndices.has(index) ? index + 1 : -1))
			.filter((index) => index !== -1)
	);

	// Calculate cumulative offsets for each pane (in pixels)
	let paneOffsetsPx = $derived([
		0,
		(paneSizes[0] / 100) * containerWidth,
		((paneSizes[0] + paneSizes[1]) / 100) * containerWidth
	]);

	// Calculate pane widths in pixels
	let paneWidthsPx = $derived([
		(paneSizes[0] / 100) * containerWidth,
		(paneSizes[1] / 100) * containerWidth,
		(paneSizes[2] / 100) * containerWidth
	]);

	function handleFileSelect(index: number, event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) return;

		const url = URL.createObjectURL(file);
		tempImages[index] = url;
		// Store as original for future re-crops
		// Revoke previous original if exists
		if (originalImages[index]) {
			URL.revokeObjectURL(originalImages[index]);
		}
		originalImages[index] = url;
		croppingIndex = index;
		// Reset crop state for new image
		cropPosition = { x: 0, y: 0 };
		cropZoom = 1;
		currentImageDimensions = null;
		input.value = '';
	}

	function handleCropComplete(index: number) {
		return (e: DispatchEvents['cropcomplete']) => {
			cropAreas[index] = e.pixels;
		};
	}

	async function confirmCrop(index: number) {
		const tempImage = tempImages[index];
		const cropArea = cropAreas[index];

		if (!tempImage || !cropArea) return;

		const croppedUrl = await getCroppedImg(tempImage, cropArea);

		// Save the current crop position and zoom for future re-crops
		savedCropPositions[index] = { ...cropPosition };
		savedCropZooms[index] = cropZoom;

		// Revoke previous cropped image if re-cropping
		if (previousCroppedImage) {
			URL.revokeObjectURL(previousCroppedImage);
			previousCroppedImage = null;
		}

		images[index] = croppedUrl;

		// Clean up - don't revoke tempImage if it's the original (we want to keep it for future re-crops)
		tempImages[index] = undefined;
		cropAreas[index] = undefined;
		croppingIndex = null;

		onImagesChange?.(images, index);
	}

	function cancelCrop(index: number) {
		if (previousCroppedImage !== null) {
			// Re-cropping - restore the previous cropped image
			images[index] = previousCroppedImage;
			previousCroppedImage = null;
		} else if (tempImages[index]) {
			// New upload being cancelled - revoke the blob URL and clear original
			URL.revokeObjectURL(tempImages[index]!);
			originalImages[index] = undefined;
		}

		tempImages[index] = undefined;
		cropAreas[index] = undefined;
		croppingIndex = null;
	}

	function clearImage(index: number) {
		if (images[index]) {
			URL.revokeObjectURL(images[index]);
		}
		if (originalImages[index]) {
			URL.revokeObjectURL(originalImages[index]);
			originalImages[index] = undefined;
		}
		images[index] = null;
		savedCropPositions[index] = undefined;
		savedCropZooms[index] = undefined;
		bgRemovedIndices.delete(index);

		onImagesChange?.(images, index);
	}

	// Store the previous cropped image when re-cropping (for cancel restore)
	let previousCroppedImage: string | null = null;

	function recropImage(index: number) {
		const originalImage = originalImages[index];
		if (!originalImage) return;

		// Store current cropped image to restore if cancelled
		previousCroppedImage = images[index];
		// Use the original image for re-cropping
		tempImages[index] = originalImage;
		images[index] = null;
		croppingIndex = index;
		// Restore saved crop position and zoom, or reset if not available
		cropPosition = savedCropPositions[index] ? { ...savedCropPositions[index]! } : { x: 0, y: 0 };
		cropZoom = savedCropZooms[index] ?? 1;
		currentImageDimensions = null;
	}

	function triggerFileInput(index: number) {
		fileInputs[index]?.click();
	}

	async function removeAllBackgrounds() {
		// Find all indices with images that haven't been processed yet
		const indicesToProcess = images
			.map((img, index) => (img && !bgRemovedIndices.has(index) ? index : -1))
			.filter((index) => index !== -1);

		if (indicesToProcess.length === 0 || removingBgIndex !== null) return;

		for (const index of indicesToProcess) {
			const imageUrl = images[index];
			if (!imageUrl) continue;

			removingBgIndex = index;

			const config: Config = {
				debug: false,
				device: 'gpu',
				output: {
					quality: 0.8,
					format: 'image/png'
				}
			};

			try {
				const imageBlob = await removeBackground(imageUrl, config);
				const newUrl = URL.createObjectURL(imageBlob);

				// Clean up old URL and set new one
				URL.revokeObjectURL(imageUrl);
				images[index] = newUrl;

				// Mark this index as processed
				bgRemovedIndices.add(index);

				onImagesChange?.(images, index);
			} catch (error) {
				console.error(`Background removal failed for image ${index}:`, error);
			}
		}

		removingBgIndex = null;
	}
</script>

<div
	bind:this={containerRef}
	class={cn('relative h-full w-full overflow-hidden border', className)}
>
	<!-- Hidden file inputs -->
	{#each [0, 1, 2] as index (index)}
		<input
			bind:this={fileInputs[index]}
			type="file"
			accept="image/*"
			class="hidden"
			onchange={(e) => handleFileSelect(index, e)}
		/>
	{/each}

	<!-- Cropper overlay - lives at container level, clipped by CSS clip-path to show only in active pane -->
	{#if croppingIndex !== null && tempImages[croppingIndex]}
		<div
			class="absolute inset-0 z-20"
			style="clip-path: inset(0 {containerWidth -
				paneOffsetsPx[croppingIndex] -
				paneWidthsPx[croppingIndex]}px 0 {paneOffsetsPx[croppingIndex]}px);"
		>
			<Cropper
				image={tempImages[croppingIndex]}
				cropShape="rect"
				aspect={containerWidth / containerHeight}
				showGrid={true}
				minZoom={0.1}
				maxZoom={10}
				bind:crop={cropPosition}
				bind:zoom={cropZoom}
				restrictPosition={false}
				cropSize={{ width: containerWidth, height: containerHeight }}
				oncropcomplete={handleCropComplete(croppingIndex)}
				onimgload={handleMediaLoaded}
			/>
		</div>
		<!-- Crop buttons positioned within the active pane -->
		<div
			class="absolute bottom-2 z-30 flex flex-col gap-2"
			style="left: {paneOffsetsPx[croppingIndex] +
				paneWidthsPx[croppingIndex] / 2}px; transform: translateX(-50%);"
		>
			<button
				type="button"
				class="bg-black/70 px-px py-1 text-xs text-white uppercase hover:bg-black/90"
				onclick={() => cancelCrop(croppingIndex!)}
			>
				{m.cancel()}
			</button>
			<button
				type="button"
				class="bg-black/70 px-px py-1 text-xs text-white uppercase hover:bg-black/90"
				onclick={centerImage}
			>
				{m.center()}
			</button>
			<button
				type="button"
				class="bg-black/70 px-px py-1 text-xs text-white uppercase hover:bg-black/90"
				onclick={fillImage}
			>
				{m.fill()}
			</button>

			<button
				type="button"
				class="bg-indigo-600 px-px py-1 text-xs text-white uppercase hover:bg-indigo-700"
				onclick={() => confirmCrop(croppingIndex!)}
			>
				{m.crop()}
			</button>
		</div>
	{/if}

	<Resizable.PaneGroup
		direction="horizontal"
		class="h-full w-full"
		onLayoutChange={(layout) => {
			paneSizes = layout;
		}}
	>
		<!-- Pane 1 -->
		<Resizable.Pane defaultSize={33.33} minSize={15.5}>
			<div class="relative h-full w-full overflow-hidden">
				{#if croppingIndex === 0}
					<!-- Placeholder during crop mode - cropper is rendered at container level -->
					<div class="h-full w-full"></div>
				{:else if images[0]}
					<!-- Display cropped image -->
					<div class="absolute inset-y-0 left-0 h-full" style="width: {containerWidth}px;">
						{#if ditheringEnabled}
							<div bind:this={ditheringRefs[0]} class="h-full w-full">
								<ImageDithering
									class="h-full w-full"
									image={images[0]}
									colorBack="#000c38"
									colorFront="#94ffaf"
									colorHighlight="#eaff94"
									type="8x8"
									size={2}
									colorSteps={2}
									originalColors={true}
									fit="cover"
									webGlContextAttributes={{
										alpha: true,
										premultipliedAlpha: false,
										preserveDrawingBuffer: true
									}}
								/>
							</div>
						{:else}
							<img class="h-full w-full object-cover" src={images[0]} alt="Position 1" />
						{/if}
					</div>
					<div class="absolute top-1 left-1 z-10 flex flex-col gap-1">
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => clearImage(0)}
							aria-label="Remove position 1"
						>
							<ExitIcon />
						</button>
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => recropImage(0)}
							aria-label="Re-crop position 1"
						>
							<CropIcon />
						</button>
					</div>
					{#if removingBgIndex === 0}
						<div class="absolute inset-0 z-20 flex items-center justify-center bg-black/60">
							<BlockLoader />
						</div>
					{/if}
				{:else}
					<!-- Upload trigger -->
					<button
						type="button"
						class="flex h-full w-full cursor-pointer items-center justify-center transition-colors"
						onclick={() => triggerFileInput(0)}
						aria-label="Upload position 1"
					>
						<div class="flex flex-col items-center justify-center gap-1 text-center">
							<div
								class="flex size-8 items-center justify-center border border-dashed border-border text-muted-foreground"
							>
								<UploadIcon />
							</div>
						</div>
					</button>
				{/if}
			</div>
		</Resizable.Pane>

		<Resizable.Handle withHandle class="z-50" />

		<!-- Pane 2 -->
		<Resizable.Pane defaultSize={33.34} minSize={15.5}>
			<div class="relative h-full w-full overflow-hidden">
				{#if croppingIndex === 1}
					<!-- Placeholder during crop mode - cropper is rendered at container level -->
					<div class="h-full w-full"></div>
				{:else if images[1]}
					<!-- Display cropped image -->
					<div
						class="absolute inset-y-0 h-full"
						style="width: {containerWidth}px; left: -{paneOffsetsPx[1]}px;"
					>
						{#if ditheringEnabled}
							<div bind:this={ditheringRefs[1]} class="h-full w-full">
								<ImageDithering
									class="h-full w-full"
									image={images[1]}
									colorBack="#000c38"
									colorFront="#94ffaf"
									colorHighlight="#eaff94"
									type="8x8"
									size={2}
									colorSteps={2}
									originalColors={true}
									fit="cover"
									webGlContextAttributes={{
										alpha: true,
										premultipliedAlpha: false,
										preserveDrawingBuffer: true
									}}
								/>
							</div>
						{:else}
							<img class="h-full w-full object-cover" src={images[1]} alt="Position 2" />
						{/if}
					</div>
					<div class="absolute top-1 left-1 z-10 flex flex-col gap-1">
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => clearImage(1)}
							aria-label="Remove position 2"
						>
							<ExitIcon />
						</button>
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => recropImage(1)}
							aria-label="Re-crop position 2"
						>
							<CropIcon />
						</button>
					</div>
					{#if removingBgIndex === 1}
						<div class="absolute inset-0 z-20 flex items-center justify-center bg-black/60">
							<BlockLoader />
						</div>
					{/if}
				{:else}
					<!-- Upload trigger -->
					<button
						type="button"
						aria-label="Upload position 2"
						class="flex h-full w-full cursor-pointer items-center justify-center transition-colors"
						onclick={() => triggerFileInput(1)}
					>
						<div class="flex flex-col items-center justify-center gap-1 text-center">
							<div
								class="flex size-8 items-center justify-center border border-dashed border-border text-muted-foreground"
							>
								<UploadIcon />
							</div>
						</div>
					</button>
				{/if}
			</div>
		</Resizable.Pane>

		<Resizable.Handle withHandle class="z-50" />

		<!-- Pane 3 -->
		<Resizable.Pane defaultSize={33.33} minSize={15.5}>
			<div class="relative h-full w-full overflow-hidden">
				{#if croppingIndex === 2}
					<!-- Placeholder during crop mode - cropper is rendered at container level -->
					<div class="h-full w-full"></div>
				{:else if images[2]}
					<!-- Display cropped image -->
					<div
						class="absolute inset-y-0 h-full"
						style="width: {containerWidth}px; left: -{paneOffsetsPx[2]}px;"
					>
						{#if ditheringEnabled}
							<div bind:this={ditheringRefs[2]} class="h-full w-full">
								<ImageDithering
									class="h-full w-full"
									image={images[2]}
									colorBack="#000c38"
									colorFront="#94ffaf"
									colorHighlight="#eaff94"
									type="8x8"
									size={2}
									colorSteps={2}
									originalColors={true}
									fit="cover"
									webGlContextAttributes={{
										alpha: true,
										premultipliedAlpha: false,
										preserveDrawingBuffer: true
									}}
								/>
							</div>
						{:else}
							<img class="h-full w-full object-cover" src={images[2]} alt="Position 3" />
						{/if}
					</div>
					<div class="absolute top-1 right-1 z-10 flex flex-col gap-1">
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => clearImage(2)}
							aria-label="Remove position 3"
						>
							<ExitIcon />
						</button>
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => recropImage(2)}
							aria-label="Re-crop position 3"
						>
							<CropIcon />
						</button>
					</div>
					{#if removingBgIndex === 2}
						<div class="absolute inset-0 z-20 flex items-center justify-center bg-black/60">
							<BlockLoader />
						</div>
					{/if}
				{:else}
					<!-- Upload trigger -->
					<button
						aria-label="Upload position 3"
						type="button"
						class="flex h-full w-full cursor-pointer items-center justify-center transition-colors"
						onclick={() => triggerFileInput(2)}
					>
						<div class="flex flex-col items-center justify-center gap-1 text-center">
							<div
								class="flex size-8 items-center justify-center border border-dashed border-border text-muted-foreground"
							>
								<UploadIcon />
							</div>
						</div>
					</button>
				{/if}
			</div>
		</Resizable.Pane>
	</Resizable.PaneGroup>

	<!-- Image processing buttons (only show if any image is uploaded) -->
	{#if hasAnyImage && croppingIndex === null}
		<div class="absolute right-2 bottom-2 z-60 flex gap-2">
			<button
				type="button"
				class="px-2 py-1 text-xs text-white backdrop-blur-md {ditheringEnabled
					? 'bg-black ring-1 ring-border hover:bg-black/50'
					: 'bg-black/50 hover:bg-black/70'}"
				onclick={() => (ditheringEnabled = !ditheringEnabled)}
			>
				{m.dither()}
			</button>
			{#if indicesToProcess.length > 0}
				<button
					type="button"
					class="hidden bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-md hover:bg-black/70 disabled:opacity-50 md:flex"
					onclick={removeAllBackgrounds}
					disabled={isRemovingBackground}
				>
					{isRemovingBackground ? 'Removing...' : `Remove BG [${indicesToProcess.join(',')}]`}
				</button>
			{/if}
		</div>
	{/if}
</div>
