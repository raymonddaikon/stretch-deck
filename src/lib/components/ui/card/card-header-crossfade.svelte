<script lang="ts">
	import { CoValueLoadingState, co, ImageDefinition } from 'jazz-tools';
	import { highestResAvailable } from 'jazz-tools/media';
	import { CoState } from 'jazz-tools/svelte';
	import { onDestroy } from 'svelte';
	import { Spring } from 'svelte/motion';
	import {
		type LenticularCard,
		registerCard,
		unregisterCard,
		updateCardImages
	} from '../../shaders/lenticular-renderer';

	interface Props {
		tiltY?: number;
		tiltRange?: number;
		class?: string;
		thumbnails?: co.loaded<co.List<co.Image>> | null;
		/** Preview URLs (data URLs) - alternative to thumbnails for preview mode */
		previewUrls?: (string | null)[];
		/** Whether this card is currently visible in the viewport */
		isVisible?: boolean;
		/** Number of lenticular stripes across the width */
		divisions?: number;
	}

	let {
		tiltY = 0,
		tiltRange = 15,
		class: className = '',
		thumbnails = null,
		previewUrls,
		isVisible = true,
		divisions = 60
	}: Props = $props();

	const instanceId = crypto.randomUUID();

	const isPreviewMode = $derived(!!previewUrls && previewUrls.length > 0);

	const thumbnailIds = $derived.by(() => {
		if (!thumbnails || thumbnails.length === 0) return [null, null, null];
		const ids: (string | null)[] = [null, null, null];
		for (let i = 0; i < Math.min(thumbnails.length, 3); i++) {
			const thumbnail = thumbnails[i];
			if (thumbnail?.$isLoaded) ids[i] = thumbnail.$jazz.id;
		}
		return ids;
	});

	const imageState0 = new CoState(ImageDefinition, () => thumbnailIds[0] ?? undefined);
	const imageState1 = new CoState(ImageDefinition, () => thumbnailIds[1] ?? undefined);
	const imageState2 = new CoState(ImageDefinition, () => thumbnailIds[2] ?? undefined);
	const imageStates = [imageState0, imageState1, imageState2];

	// Decode Jazz images into HTMLImageElements for Three.js textures.
	// Blob URLs are created, used for decoding, then revoked immediately after decode.
	// The HTMLImageElement retains the decoded pixel data even after the blob URL is gone.
	let decodedImages: HTMLImageElement[] = $state([]);
	let decodedImageIds: string[] = [];
	let card: LenticularCard | null = null;

	onDestroy(() => {
		unregisterCard(instanceId);
	});

	$effect(() => {
		if (isPreviewMode && previewUrls) {
			const urls = previewUrls.filter((u): u is string => u !== null);
			if (urls.length === 0) return;
			decodeFromUrls(urls);
			return;
		}

		const ids: string[] = [];
		const blobs: Blob[] = [];
		for (let i = 0; i < 3; i++) {
			const image = imageStates[i].current;
			if (image.$jazz.loadingState === CoValueLoadingState.LOADING) continue;
			if (!image.$isLoaded) continue;
			const bestImage = highestResAvailable(image, 800, 800);
			if (!bestImage) continue;
			const blob = bestImage.image.toBlob();
			if (!blob) continue;
			// Only track ID if we successfully got a blob
			ids.push(image.$jazz.id);
			blobs.push(blob);
		}

		// Skip if same set of images
		if (ids.length === decodedImageIds.length && ids.every((id, i) => id === decodedImageIds[i]))
			return;
		if (blobs.length === 0) return;

		decodedImageIds = ids;
		decodeFromBlobs(blobs);
	});

	async function decodeFromBlobs(blobs: Blob[]) {
		const imgs: HTMLImageElement[] = [];
		for (const blob of blobs) {
			const url = URL.createObjectURL(blob);
			try {
				const img = new Image();
				img.src = url;
				await img.decode();
				imgs.push(img);
			} catch {
				// skip failed
			} finally {
				URL.revokeObjectURL(url);
			}
		}
		decodedImages = imgs;
	}

	async function decodeFromUrls(urls: string[]) {
		const imgs: HTMLImageElement[] = [];
		for (const url of urls) {
			try {
				const img = new Image();
				img.src = url;
				await img.decode();
				imgs.push(img);
			} catch {
				// skip failed
			}
		}
		decodedImages = imgs;
	}

	let smoothTiltY = new Spring(0, {
		stiffness: 0.15,
		damping: 0.7,
		precision: 0.001
	});

	$effect(() => {
		smoothTiltY.set(tiltY);
	});

	let canvasElement: HTMLCanvasElement | undefined = $state();

	// Register/update with the shared renderer when decoded images and canvas are ready
	$effect(() => {
		const imgs = decodedImages;
		const cvs = canvasElement;
		if (!cvs || imgs.length === 0) return;

		if (!card) {
			card = registerCard(instanceId, cvs, imgs, divisions);
		} else {
			updateCardImages(instanceId, imgs, divisions);
		}
	});

	// Push tilt to the card entry every frame via rAF
	let raf: number | null = null;

	function rafLoop() {
		raf = requestAnimationFrame(rafLoop);
		if (card) {
			// Normalize tilt to [-1, 1] range for the shader.
			// Amplify by 1.6x so full image transitions happen at ~60% physical tilt.
			card.tilt = Math.max(-1, Math.min(1, (smoothTiltY.current / tiltRange) * 1.6));
		}
	}

	$effect(() => {
		if (!raf) rafLoop();
		return () => {
			if (raf) {
				cancelAnimationFrame(raf);
				raf = null;
			}
		};
	});
</script>

<!--
	Inline 2D canvas that receives rendered frames from the shared WebGL renderer.
	Lives in the card's DOM tree so it inherits all CSS transforms (perspective, rotate, scale).
-->
<div class="pointer-events-none relative overflow-hidden {className}">
	<canvas
		bind:this={canvasElement}
		width="512"
		height="512"
		class="absolute inset-0 block h-full w-full"
	></canvas>
</div>
