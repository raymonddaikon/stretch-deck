<script lang="ts">
	import { co } from 'jazz-tools';
	import { highestResAvailable } from 'jazz-tools/media';
	import { watch } from 'runed';
	import { onDestroy, onMount, untrack } from 'svelte';
	import { Spring } from 'svelte/motion';

	interface Props {
		tiltY?: number;
		gridWidth?: number;
		rowHeight?: number;
		rowOffset?: number;
		class?: string;
		thumbnails?: co.loaded<co.List<co.Image>> | null;
	}

	let {
		tiltY = 0,
		gridWidth = 8,
		rowHeight = 80,
		rowOffset = 6,
		class: className = '',
		thumbnails = null
	}: Props = $props();

	// Track blob URLs for cleanup
	let blobUrls: string[] = [];

	// Extract image URLs and placeholder data URLs from thumbnails
	let imageData = $derived.by(() => {
		if (!thumbnails || thumbnails.length === 0) return { urls: [], placeholders: [] };

		blobUrls.forEach((url) => {
			if (url.startsWith('blob:')) URL.revokeObjectURL(url);
		});

		const newUrls: string[] = [];
		const placeholders: (string | undefined)[] = [];

		for (const thumbnail of thumbnails) {
			if (!thumbnail?.$isLoaded) continue;
			const bestImage = highestResAvailable(thumbnail, 800, 800);
			if (!bestImage) continue;
			const blob = bestImage.image.toBlob();
			if (blob) {
				newUrls.push(URL.createObjectURL(blob));
				placeholders.push(thumbnail.placeholderDataURL);
			}
		}

		blobUrls = newUrls;
		return { urls: newUrls, placeholders };
	});

	let imageUrls = $derived(imageData.urls);

	onDestroy(() => {
		blobUrls.forEach((url) => {
			if (url.startsWith('blob:')) URL.revokeObjectURL(url);
		});
	});

	let cvsComposite: HTMLCanvasElement;
	let cvsBarrier: HTMLCanvasElement;
	let ctxComposite: CanvasRenderingContext2D | null = null;
	let ctxBarrier: CanvasRenderingContext2D | null = null;

	let width = $state(800);
	let height = $state(800);
	let loadedImages: HTMLImageElement[] = $state([]);
	let isLoaded = $state(false);

	// For 1 image: just use the single image
	// For 2+ images: use first 2 or 3 images directly
	let compositeImages = $derived.by(() => {
		if (loadedImages.length === 0) return [];
		if (loadedImages.length === 1) return [loadedImages[0]];
		if (loadedImages.length === 2) return [loadedImages[0], loadedImages[1]];
		return loadedImages.slice(0, 3);
	});

	// For 2 images, we cycle twice (0->1->0) so track this separately
	let isTwoImageMode = $derived(loadedImages.length === 2);

	let useLenticularEffect = $derived(loadedImages.length > 1);

	let smoothTiltY = new Spring(0, {
		stiffness: 0.15,
		damping: 0.7,
		precision: 0.001
	});

	$effect(() => {
		if (imageUrls.length > 0) {
			untrack(() => preload());
		}
	});

	watch(
		() => [gridWidth, rowHeight, rowOffset],
		() => {
			if (isLoaded && loadedImages.length === imageUrls.length) {
				rebuild();
			}
		}
	);

	$effect(() => {
		smoothTiltY.set(tiltY);
	});

	$effect(() => {
		if (isLoaded && loadedImages.length === imageUrls.length) {
			updateBarrier(smoothTiltY.current);
		}
	});

	function rebuild() {
		if (loadedImages.length === imageUrls.length && loadedImages[0]?.complete) {
			createComposite();
			updateBarrier(smoothTiltY.current);
		}
	}

	function preload() {
		isLoaded = false;
		const newImages: HTMLImageElement[] = [];
		let loadedCount = 0;

		imageUrls.forEach((url, index) => {
			const img = new Image();
			img.crossOrigin = 'Anonymous';
			img.src = url;
			newImages[index] = img;
			img.onload = () => {
				loadedCount++;
				if (loadedCount === imageUrls.length) {
					loadedImages = newImages;
					init();
				}
			};
		});
	}

	function init() {
		if (!cvsComposite || !cvsBarrier) return;

		width = Math.min(...loadedImages.map((img) => img.width));
		height = Math.min(...loadedImages.map((img) => img.height));

		cvsComposite.width = width;
		cvsComposite.height = height;
		cvsBarrier.width = width;
		cvsBarrier.height = height;

		ctxComposite = cvsComposite.getContext('2d');
		ctxBarrier = cvsBarrier.getContext('2d');

		createComposite();
		updateBarrier(smoothTiltY.current);
		isLoaded = true;
	}

	function createComposite() {
		if (!ctxComposite || compositeImages.length === 0) return;
		ctxComposite.clearRect(0, 0, width, height);

		if (!useLenticularEffect) {
			const img = compositeImages[0];
			const offsetX = (img.width - width) / 2;
			const offsetY = (img.height - height) / 2;
			ctxComposite.drawImage(img, offsetX, offsetY, width, height, 0, 0, width, height);
			return;
		}

		const numImages = compositeImages.length;
		const numStrips = Math.ceil(width / gridWidth) + 1;
		const sliceWidth = gridWidth / numImages;
		const numRows = Math.ceil(height / rowHeight);

		for (let row = 0; row < numRows; row++) {
			const y = row * rowHeight;
			const xShift = row % 2 === 0 ? 0 : rowOffset;

			for (let i = -1; i < numStrips; i++) {
				const xBase = i * gridWidth + xShift;

				for (let j = 0; j < numImages; j++) {
					const img = compositeImages[j];
					const dx = xBase + j * sliceWidth;

					const offsetX = (img.width - width) / 2;
					const offsetY = (img.height - height) / 2;

					ctxComposite.drawImage(
						img,
						offsetX + dx,
						offsetY + y,
						sliceWidth,
						rowHeight,
						dx,
						y,
						sliceWidth,
						rowHeight
					);
				}
			}
		}
	}

	const TILT_RANGE = 3;
	const DEAD_ZONE = 1.2; // Tilt values within this range stay on middle image

	function updateBarrier(tiltDegrees: number) {
		if (!ctxBarrier) return;
		ctxBarrier.clearRect(0, 0, width, height);

		if (!useLenticularEffect) return;

		ctxBarrier.fillStyle = 'rgba(0, 0, 0, 0.8)';

		const numImages = compositeImages.length;
		const sliceWidth = gridWidth / numImages;
		const barWidth = gridWidth - sliceWidth;
		const totalBars = Math.ceil(width / gridWidth) + 2;
		const numRows = Math.ceil(height / rowHeight);

		// Map tilt to progress (0 to 1) with dead zone in the middle
		const clampedTilt = Math.max(-TILT_RANGE, Math.min(TILT_RANGE, tiltDegrees));
		let progress: number;
		if (Math.abs(clampedTilt) <= DEAD_ZONE) {
			// Within dead zone - stay on middle image
			progress = 0.5;
		} else {
			// Outside dead zone - map remaining range to 0-0.5 or 0.5-1
			const effectiveRange = TILT_RANGE - DEAD_ZONE;
			if (clampedTilt < 0) {
				progress = 0.5 * ((clampedTilt + DEAD_ZONE) / effectiveRange + 1);
			} else {
				progress = 0.5 + 0.5 * ((clampedTilt - DEAD_ZONE) / effectiveRange);
			}
		}

		// For 2 images: triangle wave with half cycle, progress 0->0.5->1 maps to 0->0.5->0
		// This shifts barrier by half gridWidth (one slice) then back
		// For 3 images: linear mapping 0->1 shifts through all 3 slices
		let adjustedProgress: number;
		if (isTwoImageMode) {
			adjustedProgress = progress <= 0.5 ? progress : 1 - progress;
		} else {
			adjustedProgress = progress;
		}

		// Barrier shifts smoothly across one gridWidth
		const shift = adjustedProgress * gridWidth;
		const offsetX = shift % gridWidth;

		for (let row = 0; row < numRows; row++) {
			const y = row * rowHeight;
			const xShift = row % 2 === 0 ? 0 : rowOffset;

			for (let i = -1; i < totalBars; i++) {
				const x = i * gridWidth + offsetX + xShift;
				ctxBarrier.fillRect(x, y, barWidth, rowHeight);
			}
		}
	}
</script>

<div class="pointer-events-none relative overflow-hidden transform-flat {className}">
	<canvas bind:this={cvsComposite} class="pixelated absolute inset-0 z-10 block h-full w-full" />
	<canvas bind:this={cvsBarrier} class="pixelated absolute inset-0 z-20 block h-full w-full" />
</div>

<style>
	.pixelated {
		image-rendering: pixelated;
	}
</style>
