<script lang="ts">
	import { type Config, removeBackground } from '@imgly/background-removal';
	import { co } from 'jazz-tools';
	import { highestResAvailable } from 'jazz-tools/media';
	import { useResizeObserver } from 'runed';
	import { onDestroy } from 'svelte';

	import type { CropArea, DispatchEvents } from 'svelte-easy-crop';

	import Cropper from 'svelte-easy-crop';
	// import ImageDithering from '$lib/components/shaders/image-dithering.svelte';
	import { getCroppedImg } from '$lib/components/ui/image-cropper/utils';
	import BlockLoader from '$lib/components/ui/loader/block-loader.svelte';
	import * as Resizable from '$lib/components/ui/resizable';
	import { cn } from '$lib/utils.js';

	interface Props {
		class?: string;
		/** Initial thumbnails (Jazz image list) for edit mode */
		initialThumbnails?: co.loaded<co.List<co.Image>> | null;
		/** Callback when images change, receives the updated images array and the index that changed */
		onImagesChange?: (images: (string | null)[], changedIndex: number) => void;
	}

	let { class: className = '', initialThumbnails, onImagesChange }: Props = $props();

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

	// Store crop areas for each image
	let cropAreas: (CropArea | undefined)[] = $state([undefined, undefined, undefined]);

	// Track which pane is in crop mode
	let croppingIndex: number | null = $state(null);

	// Background removal state
	let removingBgIndex: number | null = $state(null);
	let bgRemovedIndices: Set<number> = $state(new Set());

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

	function handleLayout(layout: number[]) {
		paneSizes = layout;
	}

	function handleFileSelect(index: number, event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) return;

		const url = URL.createObjectURL(file);
		tempImages[index] = url;
		croppingIndex = index;
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
		images[index] = croppedUrl;

		// Clean up
		URL.revokeObjectURL(tempImage);
		tempImages[index] = undefined;
		cropAreas[index] = undefined;
		croppingIndex = null;

		onImagesChange?.(images, index);
	}

	function cancelCrop(index: number) {
		const tempImage = tempImages[index];
		if (tempImage) {
			URL.revokeObjectURL(tempImage);
		}
		tempImages[index] = undefined;
		cropAreas[index] = undefined;
		croppingIndex = null;
	}

	function clearImage(index: number) {
		if (images[index]) {
			URL.revokeObjectURL(images[index]);
		}
		images[index] = null;
		bgRemovedIndices.delete(index);

		onImagesChange?.(images, index);
	}

	function recropImage(index: number) {
		const currentImage = images[index];
		if (!currentImage) return;

		// Set the current cropped image as the temp image to re-crop
		tempImages[index] = currentImage;
		images[index] = null;
		croppingIndex = index;
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

{#snippet uploadIcon()}
	<svg width="15px" height="15px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"
		><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"
			><path
				d="M3 7H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 11H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 15H3.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M3 19H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 23H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 27H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 7H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 11H7.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 15H7.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 19H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 23H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 27H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M11 7H11.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M11 11H11.01"
				stroke="rgba(197, 216, 253, 0.52)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-2="on"
			></path><path
				d="M11 15H11.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M11 19H11.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M11 23H11.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M11 27H11.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M15 7H15.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M15 11H15.01"
				stroke="rgba(197, 216, 253, 0.52)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-2="on"
			></path><path
				d="M15 15H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 19H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 23H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 27H15.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 7H19.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 11H19.01"
				stroke="rgba(197, 216, 253, 0.52)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-2="on"
			></path><path
				d="M19 15H19.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 19H19.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 23H19.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 27H19.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M23 7H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 11H23.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 3H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 3H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M11 3H11.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 3H15.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 3H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 3H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 3H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 15H23.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M23 19H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 23H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 27H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 27H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 7H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 11H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 15H27.01"
				stroke="rgba(197, 216, 253, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M27 19H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 23H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path></g
		></svg
	>
{/snippet}

{#snippet clearIcon()}
	<svg width="15px" height="15px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"
		><g fill="none" class="nc-icon-wrapper"
			><path
				d="M3 7H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 11H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 15H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 19H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 23H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 27H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 7H7.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 11H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 15H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 19H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 23H7.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 27H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M11 7H11.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M11 11H11.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M11 15H11.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M11 19H11.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M11 23H11.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M11 27H11.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 7H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 11H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 15H15.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M15 19H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 23H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 27H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 7H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 11H19.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 15H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 19H19.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 23H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 27H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 7H23.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M23 11H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 3H7.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 3H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M11 3H11.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 3H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 3H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 3H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 3H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 15H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 19H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 23H23.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M27 27H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 27H23.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 7H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 11H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 15H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 19H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 23H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path></g
		></svg
	>
{/snippet}

{#snippet cropIcon()}
	<svg width="15px" height="15px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"
		><g fill="none" class="nc-icon-wrapper" stroke-linejoin="miter" stroke-linecap="butt"
			><path
				d="M3 7H3.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M3 11H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 15H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 19H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M3 23H3.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M3 27H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M7 7H7.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 11H7.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 15H7.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 19H7.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 23H7.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 27H7.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M11 7H11.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M11 11H11.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M11 15H11.01"
				stroke="rgba(197, 216, 253, 0.5215686274509804)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-2="on"
			></path><path
				d="M11 19H11.01"
				stroke="rgba(197, 216, 253, 0.5215686274509804)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-2="on"
			></path><path
				d="M11 23H11.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M10.99 27H11"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 7H15.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M15 11H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 15H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 19H15.01"
				stroke="rgba(197, 216, 253, 0.5215686274509804)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-2="on"
			></path><path
				d="M15 23H15.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M15 27H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 7H19.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 11H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 15H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 19H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 23H19.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M19 27H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 7H23.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M23 11H23.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M7 3H7.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M3 3H3.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M11 3H11.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M15 3H15.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M19 3H19.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 3H23.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M27 3H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 15H23.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M23 19H23.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M23 23H23.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M27 27H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M23 27H23.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M27 7H27.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path><path
				d="M27 11H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 15H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 19H27.01"
				stroke="#1c1f2100"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-3="on"
			></path><path
				d="M27 23H27.01"
				stroke="rgba(255, 255, 255, 1)"
				stroke-width="3"
				stroke-linecap="square"
				data-arcade-1="on"
			></path></g
		></svg
	>
{/snippet}

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
			class="cropper-container absolute inset-0 z-20"
			style="clip-path: inset(0 {containerWidth -
				paneOffsetsPx[croppingIndex] -
				paneWidthsPx[croppingIndex]}px 0 {paneOffsetsPx[croppingIndex]}px);"
		>
			<Cropper
				image={tempImages[croppingIndex]}
				cropShape="rect"
				aspect={containerWidth / containerHeight}
				showGrid={false}
				cropSize={{ width: containerWidth, height: containerHeight }}
				oncropcomplete={handleCropComplete(croppingIndex)}
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
				Cancel
			</button>
			<button
				type="button"
				class="bg-indigo-600 px-px py-1 text-xs text-white uppercase hover:bg-indigo-700"
				onclick={() => confirmCrop(croppingIndex!)}
			>
				Crop
			</button>
		</div>
	{/if}

	<Resizable.PaneGroup direction="horizontal" class="h-full w-full" onLayoutChange={handleLayout}>
		<!-- Pane 1 -->
		<Resizable.Pane defaultSize={33.33} minSize={15}>
			<div class="relative h-full w-full overflow-hidden">
				{#if croppingIndex === 0}
					<!-- Placeholder during crop mode - cropper is rendered at container level -->
					<div class="h-full w-full"></div>
				{:else if images[0]}
					<!-- Display cropped image -->
					<div class="absolute inset-y-0 left-0 h-full" style="width: {containerWidth}px;">
						<img class="h-full w-full object-cover" src={images[0]} alt="Position 1" />
						<!-- <ImageDithering
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
							webGlContextAttributes={{ alpha: true, premultipliedAlpha: false }}
						/> -->
					</div>
					<div class="absolute top-1 left-1 z-10 flex flex-col gap-1">
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => clearImage(0)}
							aria-label="Remove position 1"
						>
							{@render clearIcon()}
						</button>
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => recropImage(0)}
							aria-label="Re-crop position 1"
						>
							{@render cropIcon()}
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
								{@render uploadIcon()}
							</div>
						</div>
					</button>
				{/if}
			</div>
		</Resizable.Pane>

		<Resizable.Handle withHandle class="z-50" />

		<!-- Pane 2 -->
		<Resizable.Pane defaultSize={33.34} minSize={15}>
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
						<img class="h-full w-full object-cover" src={images[1]} alt="Position 2" />
						<!-- <ImageDithering
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
							webGlContextAttributes={{ alpha: true, premultipliedAlpha: false }}
						/> -->
					</div>
					<div class="absolute top-1 left-1 z-10 flex flex-col gap-1">
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => clearImage(1)}
							aria-label="Remove position 2"
						>
							{@render clearIcon()}
						</button>
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => recropImage(1)}
							aria-label="Re-crop position 2"
						>
							{@render cropIcon()}
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
								{@render uploadIcon()}
							</div>
						</div>
					</button>
				{/if}
			</div>
		</Resizable.Pane>

		<Resizable.Handle withHandle class="z-50" />

		<!-- Pane 3 -->
		<Resizable.Pane defaultSize={33.33} minSize={15}>
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
						<img class="h-full w-full object-cover" src={images[2]} alt="Position 3" />
						<!-- <ImageDithering
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
							webGlContextAttributes={{ alpha: true, premultipliedAlpha: false }}
						/> -->
					</div>
					<div class="absolute top-1 right-1 z-10 flex flex-col gap-1">
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => clearImage(2)}
							aria-label="Remove position 3"
						>
							{@render clearIcon()}
						</button>
						<button
							type="button"
							class="cursor-pointer bg-black/50 p-1 text-white hover:bg-black/70"
							onclick={() => recropImage(2)}
							aria-label="Re-crop position 3"
						>
							{@render cropIcon()}
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
								{@render uploadIcon()}
							</div>
						</div>
					</button>
				{/if}
			</div>
		</Resizable.Pane>
	</Resizable.PaneGroup>

	<!-- Remove All Backgrounds button (only show if any image is uploaded) -->
	{#if hasAnyImage && croppingIndex === null}
		{#if indicesToProcess.length > 0}
			<button
				type="button"
				class="absolute right-2 bottom-2 z-60 bg-black/50 px-2 py-1 text-xs text-white hover:bg-black/70 disabled:opacity-50"
				onclick={removeAllBackgrounds}
				disabled={isRemovingBackground}
			>
				{isRemovingBackground ? 'Removing...' : `Remove BG [${indicesToProcess.join(',')}]`}
			</button>
		{/if}
	{/if}
</div>

<style>
	/* Make the cropper fill its container and hide overlay */
	:global(.cropper-container .svelte-easy-crop-container) {
		width: 100% !important;
		height: 100% !important;
	}

	:global(.cropper-container .svelte-easy-crop-area) {
		box-shadow: none !important;
		border: none !important;
		color: transparent !important;
		/* Fill the entire container */
		left: 0 !important;
		top: 0 !important;
		transform: none !important;
		width: 100% !important;
		height: 100% !important;
	}

	/* Make the image fill the crop area */
	:global(.cropper-container .svelte-easy-crop-image) {
		max-width: none !important;
		max-height: none !important;
		width: 100% !important;
		height: 100% !important;
		object-fit: cover !important;
		margin: 0 !important;
	}
</style>
