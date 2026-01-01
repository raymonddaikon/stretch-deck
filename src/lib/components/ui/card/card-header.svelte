<script lang="ts">
	import { co } from 'jazz-tools';
	import { highestResAvailable } from 'jazz-tools/media';
	import { watch } from 'runed';
	import { onDestroy } from 'svelte';
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
		gridWidth = 24,
		rowHeight = 4,
		rowOffset = 12,
		class: className = '',
		thumbnails = null
	}: Props = $props();

	// Track blob URLs for cleanup
	let blobUrls: string[] = [];

	// Get image blob URLs from Jazz thumbnails using highestResAvailable
	let imageUrls = $derived.by(() => {
		if (!thumbnails || thumbnails.length === 0) return [];

		// Revoke previous blob URLs before creating new ones
		blobUrls.forEach((url) => {
			if (url.startsWith('blob:')) {
				URL.revokeObjectURL(url);
			}
		});

		const newUrls: string[] = [];

		for (const thumbnail of thumbnails) {
			if (!thumbnail?.$isLoaded) continue;

			const bestImage = highestResAvailable(thumbnail, 800, 800);
			if (!bestImage) continue;

			const blob = bestImage.image.toBlob();
			if (blob) {
				const url = URL.createObjectURL(blob);
				newUrls.push(url);
			}
		}

		blobUrls = newUrls;
		return newUrls;
	});

	// Cleanup blob URLs on component destroy
	onDestroy(() => {
		blobUrls.forEach((url) => {
			if (url.startsWith('blob:')) {
				URL.revokeObjectURL(url);
			}
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

	// Use Svelte's Spring for smooth tilt interpolation (same as Card.svelte)
	let smoothTiltY = new Spring(0, {
		stiffness: 0.15,
		damping: 0.7,
		precision: 0.001
	});

	// Load images when imageUrls change
	$effect(() => {
		if (imageUrls.length > 0) {
			preload();
		}
	});

	// Effect to rebuild when grid props change
	watch(
		() => [gridWidth, rowHeight, rowOffset],
		() => {
			if (isLoaded && loadedImages.length === imageUrls.length) {
				rebuild();
			}
		}
	);

	// Effect to update spring target when tiltY changes
	$effect(() => {
		smoothTiltY.set(tiltY);
	});

	// Effect to update barrier when spring value changes
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

		// Find smallest dimensions across all images
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
		if (!ctxComposite) return;
		ctxComposite.clearRect(0, 0, width, height);
		const numImages = loadedImages.length;
		const numStrips = Math.ceil(width / gridWidth) + 1;
		const sliceWidth = gridWidth / numImages;
		const numRows = Math.ceil(height / rowHeight);

		for (let row = 0; row < numRows; row++) {
			const y = row * rowHeight;
			const xShift = row % 2 === 0 ? 0 : rowOffset;

			for (let i = -1; i < numStrips; i++) {
				const xBase = i * gridWidth + xShift;

				for (let j = 0; j < numImages; j++) {
					const img = loadedImages[j];
					const dx = xBase + j * sliceWidth;

					// Center crop offset
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

	// Maximum tilt angle in degrees (matches CardDeck.svelte tilt calculation)
	const TILT_RANGE = 3;

	function updateBarrier(tiltDegrees: number) {
		if (!ctxBarrier) return;
		ctxBarrier.clearRect(0, 0, width, height);
		ctxBarrier.fillStyle = 'black';

		const numImages = loadedImages.length;
		const sliceWidth = gridWidth / numImages;
		const barWidth = gridWidth - sliceWidth;
		const totalBars = Math.ceil(width / gridWidth) + 2;
		const numRows = Math.ceil(height / rowHeight);
		// Map tilt from degrees (-TILT_RANGE to TILT_RANGE) to normalized (0 to 1)
		// Then scale by gridWidth to shift the barrier across one full grid cell
		const clampedTilt = Math.max(-TILT_RANGE, Math.min(TILT_RANGE, tiltDegrees));
		const normalizedProgress = (clampedTilt + TILT_RANGE) / (TILT_RANGE * 2);
		const offsetX = normalizedProgress * gridWidth;

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
	<canvas bind:this={cvsComposite} class="pixelated absolute inset-0 z-10 block h-full w-full"
	></canvas>
	<canvas
		bind:this={cvsBarrier}
		class="pixelated pointer-events-none absolute inset-0 z-20 block h-full w-full"
	></canvas>
</div>

<style>
	.pixelated {
		image-rendering: pixelated;
		object-fit: cover;
	}
</style>
