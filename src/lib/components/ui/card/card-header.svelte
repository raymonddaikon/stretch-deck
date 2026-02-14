<script lang="ts">
	import { CoValueLoadingState, co, ImageDefinition } from 'jazz-tools';
	import { highestResAvailable } from 'jazz-tools/media';
	import { CoState } from 'jazz-tools/svelte';
	import { watch } from 'runed';
	import { onDestroy, onMount } from 'svelte';
	import { Spring } from 'svelte/motion';

	interface Props {
		tiltY?: number;
		gridWidth?: number;
		rowHeight?: number;
		rowOffset?: number;
		class?: string;
		thumbnails?: co.loaded<co.List<co.Image>> | null;
		/** Preview URLs (data URLs) - alternative to thumbnails for preview mode */
		previewUrls?: (string | null)[];
		/** Whether this card is currently visible in the viewport */
		isVisible?: boolean;
	}

	let {
		tiltY = 0,
		gridWidth = 8,
		rowHeight = 80,
		rowOffset = 6,
		class: className = '',
		thumbnails = null,
		previewUrls,
		isVisible = true
	}: Props = $props();

	// Determine if we're in preview mode (using data URLs instead of Jazz thumbnails)
	const isPreviewMode = $derived(!!previewUrls && previewUrls.length > 0);

	// Extract image IDs from thumbnails for per-image reactive loading
	const thumbnailIds = $derived.by(() => {
		if (!thumbnails || thumbnails.length === 0) return [null, null, null];
		const ids: (string | null)[] = [null, null, null];
		for (let i = 0; i < Math.min(thumbnails.length, 3); i++) {
			const thumbnail = thumbnails[i];
			if (thumbnail?.$isLoaded) {
				ids[i] = thumbnail.$jazz.id;
			}
		}
		return ids;
	});

	// Create per-image CoState instances for reactive loading.
	// CoState subscribes to each ImageDefinition and re-triggers derived
	// computations as image resolution data loads progressively.
	const imageState0 = new CoState(ImageDefinition, () => thumbnailIds[0] ?? undefined);
	const imageState1 = new CoState(ImageDefinition, () => thumbnailIds[1] ?? undefined);
	const imageState2 = new CoState(ImageDefinition, () => thumbnailIds[2] ?? undefined);
	const imageStates = [imageState0, imageState1, imageState2];

	// Track blob URLs by image ID for caching and cleanup
	let blobUrlCache = new Map<string, string>();

	function revokeObjectURL(url: string | undefined) {
		if (url?.startsWith('blob:')) {
			URL.revokeObjectURL(url);
		}
	}

	// Derive image URLs from CoState instances or preview URLs.
	// This re-runs reactively as each CoState updates when image data loads.
	let imageUrls = $derived.by(() => {
		// Preview mode: use data URLs directly
		if (isPreviewMode && previewUrls) {
			return previewUrls.filter((url): url is string => url !== null);
		}

		const urls: string[] = [];
		const activeIds = new Set<string>();

		for (let i = 0; i < 3; i++) {
			const image = imageStates[i].current;

			if (image.$jazz.loadingState === CoValueLoadingState.LOADING) continue;
			if (!image.$isLoaded) continue;

			const imageId = image.$jazz.id;
			activeIds.add(imageId);

			// Return cached blob URL if we already have one
			const cached = blobUrlCache.get(imageId);
			if (cached) {
				urls.push(cached);
				continue;
			}

			const bestImage = highestResAvailable(image, 800, 800);
			if (!bestImage) continue;

			const blob = bestImage.image.toBlob();
			if (blob) {
				const url = URL.createObjectURL(blob);
				blobUrlCache.set(imageId, url);
				urls.push(url);
			}
		}

		// Evict blob URLs for image IDs that are no longer active
		for (const [id, url] of blobUrlCache) {
			if (!activeIds.has(id)) {
				revokeObjectURL(url);
				blobUrlCache.delete(id);
			}
		}

		return urls;
	});

	onDestroy(() => {
		blobUrlCache.forEach((url) => {
			revokeObjectURL(url);
		});
		blobUrlCache.clear();
	});

	let cvsComposite: HTMLCanvasElement;
	let cvsBarrier: HTMLCanvasElement;
	let ctxComposite: CanvasRenderingContext2D | null = null;
	let ctxBarrier: CanvasRenderingContext2D | null = null;

	let width = $state(800);
	let height = $state(800);
	let loadedImages: HTMLImageElement[] = $state([]);
	let isLoaded = $state(false);
	let isIntersecting = $state(false);
	let containerElement: HTMLElement | undefined = $state();
	let intersectionObserver: IntersectionObserver | null = null;

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

	// Track the number of URLs that were last preloaded, so we can
	// re-preload when more images finish loading (progressive Jazz loading).
	let lastPreloadedCount = 0;

	// Reset loaded state when thumbnails change (e.g. component reused for a different card)
	let prevThumbnailRef: typeof thumbnails = thumbnails;
	$effect(() => {
		const current = thumbnails;
		if (current !== prevThumbnailRef) {
			prevThumbnailRef = current;
			isLoaded = false;
			loadedImages = [];
			lastPreloadedCount = 0;
			// Clear canvas
			ctxComposite?.clearRect(0, 0, width, height);
			ctxBarrier?.clearRect(0, 0, width, height);
			// Clear blob cache
			blobUrlCache.forEach((url) => {
				revokeObjectURL(url);
			});
			blobUrlCache.clear();
		}
	});

	// Preload when visible and images are available, or when the set of
	// available images grows (e.g. Jazz loads additional resolutions).
	$effect(() => {
		const visible = isVisible || isIntersecting;
		const hasImages = imageUrls.length > 0;
		const moreImagesAvailable = imageUrls.length !== lastPreloadedCount;

		if (visible && hasImages && (!isLoaded || moreImagesAvailable)) {
			lastPreloadedCount = imageUrls.length;
			preload();
		}
	});

	watch(
		() => [gridWidth, rowHeight, rowOffset],
		() => {
			if (isLoaded && loadedImages.length === imageUrls.length && (isVisible || isIntersecting)) {
				rebuild();
			}
		}
	);

	$effect(() => {
		smoothTiltY.set(tiltY);
	});

	// Barrier update via rAF loop — avoids reactive $effect on every spring tick.
	// The loop runs only while the card is loaded and visible, reading the spring
	// value directly each frame instead of subscribing reactively.
	let barrierRaf: number | null = null;
	let lastBarrierTilt: number | undefined;

	function barrierLoop() {
		barrierRaf = requestAnimationFrame(barrierLoop);
		const tiltValue = smoothTiltY.current;
		if (tiltValue !== lastBarrierTilt) {
			lastBarrierTilt = tiltValue;
			updateBarrier(tiltValue);
		}
	}

	$effect(() => {
		const shouldRun =
			isLoaded && loadedImages.length === imageUrls.length && (isVisible || isIntersecting);
		if (shouldRun) {
			if (!barrierRaf) {
				lastBarrierTilt = undefined;
				barrierLoop();
			}
		} else if (barrierRaf) {
			cancelAnimationFrame(barrierRaf);
			barrierRaf = null;
		}
		return () => {
			if (barrierRaf) {
				cancelAnimationFrame(barrierRaf);
				barrierRaf = null;
			}
		};
	});

	// OPTIMIZATION: Intersection Observer to pause when off-screen
	onMount(() => {
		if (containerElement && 'IntersectionObserver' in window) {
			intersectionObserver = new IntersectionObserver(
				(entries) => {
					const [entry] = entries;
					isIntersecting = entry.isIntersecting;
					// Preload when becoming visible
					if (entry.isIntersecting && imageUrls.length > 0 && !isLoaded) {
						preload();
					}
				},
				{
					root: null,
					rootMargin: '100px', // Start loading slightly before visible
					threshold: 0
				}
			);
			intersectionObserver.observe(containerElement);
		} else {
			// Fallback: always consider intersecting if observer not available
			isIntersecting = true;
		}
	});

	onDestroy(() => {
		if (intersectionObserver) {
			intersectionObserver.disconnect();
		}
	});

	function rebuild() {
		if (loadedImages.length === imageUrls.length && loadedImages[0]?.complete) {
			createComposite();
			updateBarrier(smoothTiltY.current);
		}
	}

	function preload() {
		// Don't preload if already loaded with same URLs
		if (isLoaded && loadedImages.length === imageUrls.length) {
			const allMatch = loadedImages.every((img, i) => img.src === imageUrls[i]);
			if (allMatch) return;
		}

		isLoaded = false;
		loadedImages = []; // Clear previous images
		const newImages: HTMLImageElement[] = [];
		let loadedCount = 0;

		if (imageUrls.length === 0) {
			return;
		}

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
			img.onerror = () => {
				loadedCount++;
				// Still count as loaded to avoid hanging, but image will be blank
				if (loadedCount === imageUrls.length) {
					loadedImages = newImages;
					init();
				}
			};
		});
	}

	function init() {
		if (!cvsComposite || !cvsBarrier) return;
		if (loadedImages.length === 0) return;

		// Get dimensions from smallest image
		const validImages = loadedImages.filter((img) => img.complete && img.width > 0);
		if (validImages.length === 0) return;

		width = Math.min(...validImages.map((img) => img.width));
		height = Math.min(...validImages.map((img) => img.height));

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

<div
	bind:this={containerElement}
	class="pointer-events-none relative overflow-hidden transform-flat {className}"
>
	<canvas bind:this={cvsComposite} class="pixelated absolute inset-0 z-10 block h-full w-full"
	></canvas>
	<canvas bind:this={cvsBarrier} class="pixelated absolute inset-0 z-20 block h-full w-full"
	></canvas>
</div>

<style>
	.pixelated {
		image-rendering: pixelated;
	}
</style>
