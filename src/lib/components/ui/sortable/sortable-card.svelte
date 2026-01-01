<script lang="ts">
	import { type UseSortableInput, useSortable } from '@dnd-kit-svelte/svelte/sortable';
	import { co } from 'jazz-tools';
	import { MediaQuery } from 'svelte/reactivity';
	import { Card } from '$lib/components/ui/card';
	import { Card as CardSchema } from '$lib/schema';

	interface Props extends UseSortableInput {
		card: co.loaded<typeof CardSchema>;
		isOverlay?: boolean;
		viewTransitionName?: string;
	}

	let { card, isOverlay = false, viewTransitionName, ...rest }: Props = $props();

	const { ref, isDragging, isDropping } = useSortable(rest);

	// Card should be hidden while dragging OR while the drop animation is playing
	let isHidden = $derived((isDragging.current || isDropping.current) && !isOverlay);

	// Detect mobile devices
	const isMobile = new MediaQuery('(pointer: coarse) and (hover: none)');

	// Tilt state for this card
	let tiltX = $state(0);
	let tiltY = $state(0);

	// Device orientation for tilt effect on mobile
	let deviceTiltX = $state(0);
	let deviceTiltY = $state(0);
	let orientationPermissionGranted = $state(false);

	// Request permission and set up device orientation listener
	async function requestOrientationPermission() {
		// Check if DeviceOrientationEvent exists and requires permission (iOS 13+)
		if (
			typeof DeviceOrientationEvent !== 'undefined' &&
			typeof (DeviceOrientationEvent as any).requestPermission === 'function'
		) {
			try {
				const permission = await (DeviceOrientationEvent as any).requestPermission();
				if (permission === 'granted') {
					orientationPermissionGranted = true;
				}
			} catch (e) {
				console.error('Device orientation permission denied:', e);
			}
		} else {
			// Non-iOS devices don't require permission
			orientationPermissionGranted = true;
		}
	}

	function handleDeviceOrientation(event: DeviceOrientationEvent) {
		if (!isMobile.current) return;

		const beta = event.beta; // Front-to-back tilt (-180 to 180)
		const gamma = event.gamma; // Left-to-right tilt (-90 to 90)

		if (beta === null || gamma === null) return;

		// Normalize values to -1 to 1 range
		// Beta: typical holding angle is around 45 degrees, so we center around that
		// and use a range of about ±30 degrees for full tilt
		const normalizedBeta = Math.max(-1, Math.min(1, (beta - 45) / 30));
		// Gamma: use ±30 degrees for full tilt
		const normalizedGamma = Math.max(-1, Math.min(1, gamma / 30));

		deviceTiltX = normalizedBeta;
		deviceTiltY = normalizedGamma;

		// Update tilt values from device orientation
		tiltX = deviceTiltX * -10;
		tiltY = deviceTiltY * 10;
	}

	// Request permission on first interaction for iOS
	const handleFirstInteraction = () => {
		if (!orientationPermissionGranted) {
			requestOrientationPermission();
		}
		window.removeEventListener('touchstart', handleFirstInteraction);
	};

	// Set up device orientation listener
	$effect(() => {
		if (!isMobile.current) return;

		window.addEventListener('touchstart', handleFirstInteraction, { once: true });
		window.addEventListener('deviceorientation', handleDeviceOrientation);

		return () => {
			window.removeEventListener('touchstart', handleFirstInteraction);
			window.removeEventListener('deviceorientation', handleDeviceOrientation);
		};
	});

	function handlePointerMove(event: PointerEvent) {
		if (isDragging.current || isMobile.current) return;

		const target = event.currentTarget as HTMLElement;
		const bounds = target.getBoundingClientRect();
		const posX = event.clientX - bounds.x;
		const posY = event.clientY - bounds.y;
		const ratioX = posX / bounds.width - 0.5;
		const ratioY = posY / bounds.height - 0.5;

		// Clamp to -1 to 1 range and convert to tilt degrees
		const normalizedX = Math.max(-1, Math.min(1, ratioX * 2));
		const normalizedY = Math.max(-1, Math.min(1, ratioY * 2));

		tiltX = normalizedY * -10;
		tiltY = normalizedX * 10;
	}

	function handlePointerLeave() {
		// Only reset tilt on desktop (mobile uses device orientation)
		if (!isMobile.current) {
			tiltX = 0;
			tiltY = 0;
		}
	}
</script>

<div
	class="sortable-card-wrapper relative h-full w-full select-none"
	style:view-transition-name={viewTransitionName ?? 'none'}
	{@attach ref}
>
	<!-- Original element - becomes invisible during drag but maintains dimensions -->
	<button
		class={[
			'sortable-card-item relative h-full w-full overflow-visible rounded-md',
			{ invisible: isHidden }
		]}
		onpointermove={handlePointerMove}
		onpointerleave={handlePointerLeave}
	>
		<Card
			totalCards={0}
			index={0}
			progress={0}
			direction={1}
			{tiltX}
			{tiltY}
			isFlipped={false}
			shadow={true}
			class="sortable-grid-card"
			{card}
		/>
	</button>

	<!-- Drag placeholder - shown when this card is being dragged -->
	{#if !isOverlay && isDragging.current}
		<div class="absolute inset-0 flex items-center justify-center">
			<div
				class="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-orange-400 bg-orange-50/10"
			></div>
		</div>
	{/if}
</div>

<style>
	.sortable-card-item {
		container-type: size;
	}

	.sortable-card-item :global(.sortable-grid-card) {
		/* Override the default card-wrapper sizing */
		/* Use transform for both centering and scaling */
		inset: unset;
		margin: unset;
		top: 50%;
		left: 50%;
		width: 360px;
		aspect-ratio: 2 / 3;
		/* Scale so card height (540px) matches container height (100cqh) */
		/* Use translate for centering, scale for sizing */
		translate: -50% -50%;
		scale: calc(100cqh / 540px);
		/* Reset border color to match other cards */
		border-color: initial;
	}
</style>
