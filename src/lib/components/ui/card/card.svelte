<script lang="ts">
	import { co } from 'jazz-tools';
	import { transform } from 'motion';
	import { watch } from 'runed';
	import { Spring } from 'svelte/motion';
	import { page } from '$app/state';
	import { Card as CardSchema } from '$lib/schema';
	import { cn } from '$lib/utils';
	import CardHeader from './card-header.svelte';

	interface Props {
		index: number;
		progress: number;
		direction: number;
		totalCards: number;
		tiltX?: number;
		tiltY?: number;
		tiltRange?: number;
		isFlipped?: boolean;
		isActive?: boolean;
		onElementMount?: (element: HTMLElement | undefined) => void;
		// Glare/shine effect options
		glareIntensity?: number;
		glareHue?: number;
		blendMode?: string;
		// Shadow options
		shadow?: boolean;
		// Scale on hover
		scaleFactor?: number;
		// Spring physics options
		springOptions?: { stiffness?: number; damping?: number; precision?: number };
		class?: string;
		// Card data
		card: co.loaded<typeof CardSchema>;
		aligned?: boolean;
		// View transition name for same-document view transitions
		viewTransitionName?: string;
	}

	const defaultSpringOptions = {
		stiffness: 0.15,
		damping: 0.7,
		precision: 0.001
	};

	let {
		index,
		progress,
		direction,
		totalCards,
		tiltX = 0,
		tiltY = 0,
		tiltRange = 15,
		isFlipped = false,
		isActive = false,
		onElementMount,
		glareIntensity = 0.5,
		glareHue = 270,
		blendMode = 'overlay',
		shadow = true,
		scaleFactor = 1.02,
		springOptions = {},
		class: className,
		card,
		aligned = false,
		viewTransitionName
	}: Props = $props();

	// Default card data for when no card prop is provided
	// const defaultCard: CardData = {
	// 	id: 'default',
	// 	name: 'Cat Cow',
	// 	description:
	// 		'Dynamic stretch used to stretch out back. Fully inhale at the top and exhale while pushing out.',
	// 	areas: ['Neck', 'Back'],
	// 	reps: '20 seconds',
	// 	sets: 3
	// };

	// Merge spring options with defaults
	const springConfig = { ...defaultSpringOptions, ...springOptions };

	// Spring-animated values for smooth tilt transitions
	// These take the externally-passed tilt values and smooth them
	let springTiltX = new Spring(0, springConfig);
	let springTiltY = new Spring(0, springConfig);
	let springActivation = new Spring(0, springConfig);

	// Update springs when props change
	$effect(() => {
		springTiltX.set(tiltX);
		springTiltY.set(tiltY);
	});

	$effect(() => {
		// Slower exit animation
		if (isActive || isFirst) {
			springActivation.stiffness = springConfig.stiffness;
			springActivation.damping = springConfig.damping;
		} else {
			springActivation.stiffness = springConfig.stiffness * 0.3;
			springActivation.damping = springConfig.damping * 0.6;
		}
		springActivation.set(isActive || isFirst ? 1 : 0);
	});

	// Normalized pointer values for effects (0 to 1 range, with 0.5 as center)
	// Convert from tilt degrees to normalized position
	let normalizedX = $derived(0.5 + springTiltY.current / (tiltRange * 2)); // Y tilt controls X position
	let normalizedY = $derived(0.5 + springTiltX.current / (tiltRange * 2)); // X tilt controls Y position

	// Pointer derivatives for advanced effects
	let pointerAngle = $derived.by(() => {
		const dx = normalizedX - 0.5;
		const dy = normalizedY - 0.5;
		if (dx === 0 && dy === 0) return 0;
		let degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
		if (degrees < 0) degrees += 360;
		return degrees;
	});

	let pointerDistance = $derived.by(() => {
		const dx = normalizedX - 0.5;
		const dy = normalizedY - 0.5;
		return Math.hypot(dx, dy) * 200; // Scale to reasonable pixel value
	});

	let pointerEdge = $derived.by(() => {
		const dx = Math.abs(normalizedX - 0.5);
		const dy = Math.abs(normalizedY - 0.5);
		return Math.max(dx, dy) * 2; // 0 at center, 1 at edge
	});

	// For holographic effects (-1 to 1 range)
	let pointerX = $derived((normalizedX - 0.5) * 2);
	let pointerY = $derived((normalizedY - 0.5) * 2);

	// Scale value based on activation
	let scaleValue = $derived(1 + (scaleFactor - 1) * springActivation.current);

	let wrapperElement: HTMLElement | undefined = $state();

	// Calculate light position based on tilt (maps pointer to card coordinates)
	// The light position should be in card-local coordinates
	// let lightX = $derived(150 + pointerX * 100); // Center at 150, range ~50-250
	// let lightY = $derived(200 + pointerY * 100); // Center at 200, range ~100-300

	// Update point light position reactively
	// $effect(() => {
	// 	if (pointLightElement) {
	// 		pointLightElement.setAttribute('x', String(Math.floor(lightX)));
	// 		pointLightElement.setAttribute('y', String(Math.floor(lightY)));
	// 	}
	// });

	// Notify parent when element is mounted/unmounted
	$effect(() => {
		onElementMount?.(wrapperElement);

		return () => onElementMount?.(undefined);
	});

	// Computed values
	let distanceFromFront = $derived(progress - index);
	let distanceFromFrontABS = $derived(Math.abs(distanceFromFront));

	// Shadow opacity based on distance from front - strongest at front, fades as card moves back
	// Maps [0, 1] -> [0.5, 0] with smooth falloff
	let shadowOpacity = $derived.by(() => {
		const maxOpacity = 0.5;
		// Use a smooth curve that drops off as distance increases
		return Math.max(0, maxOpacity * (1 - distanceFromFrontABS));
	});

	// Glare opacity based on distance from front - visible when card is at front
	// Maps [0, 0.5] -> [1, 0] so glare is only visible on front card
	let glareOpacity = $derived.by(() => {
		// Only show glare on the frontmost card (within 0.5 distance)
		if (distanceFromFrontABS > 0.5) return 0;
		return 1 - distanceFromFrontABS * 2;
	});

	// isFirst needs to be persistent state, not derived
	// It only changes on specific events (sign change or distance >= 1)
	let isFirst = $state(true);
	let prevDistanceFromFront: number | undefined;

	// Track isFirst changes based on distanceFromFront transitions
	watch(
		() => [distanceFromFront, prevDistanceFromFront],
		() => {
			const current = distanceFromFront;
			const previous = prevDistanceFromFront;
			// Initialize on first run
			if (previous === undefined) {
				isFirst = distanceFromFrontABS < 0.5;
				prevDistanceFromFront = current;
				return;
			}

			// Check when the progress sign changes (crossing zero)
			if (current * previous <= 0) {
				isFirst = true;
			}

			// When the progress becomes greater than 1 or less than -1
			if (Math.abs(current) >= 1) {
				isFirst = false;
			}

			prevDistanceFromFront = current;
		}
	);

	// Compute transform values
	const scale = $derived.by(() => {
		if (isFirst) {
			return transform(distanceFromFrontABS, [0, 0.5, 1], [1, 0.95, 1]);
		}
		return 1;
	});

	// Helper for linear interpolation without clamping
	function interpolateUnclamped(
		value: number,
		inputRange: number[],
		outputRange: number[]
	): number {
		// Find the segment
		let i = 0;
		for (i = 0; i < inputRange.length - 1; i++) {
			if (value < inputRange[i + 1]) break;
		}

		// Clamp index to valid segment range
		i = Math.min(i, inputRange.length - 2);

		const inputStart = inputRange[i];
		const inputEnd = inputRange[i + 1];
		const outputStart = outputRange[i];
		const outputEnd = outputRange[i + 1];

		const t = (value - inputStart) / (inputEnd - inputStart);
		return outputStart + t * (outputEnd - outputStart);
	}

	const x = $derived.by(() => {
		const inputRange = [-1, -0.5, 0, 0.5, 1];
		const outputRange = aligned
			? isFirst
				? [0, 77, 0, -77, 0]
				: [0, 0, 0, 0, 0]
			: isFirst
				? [12, 77, 0, -77, -12]
				: [12, 5, 0, -5, -12];
		return interpolateUnclamped(distanceFromFront, inputRange, outputRange);
	});

	const y = $derived.by(() => {
		if (!aligned) return 0;
		const inputRange = [-1, -0.5, 0, 0.5, 1];
		const outputRange = isFirst ? [2, 0, 0, 0, 2] : [1.5, 1, 0, 1, 1.5];
		return interpolateUnclamped(distanceFromFront, inputRange, outputRange);
	});

	const z = $derived.by(() => {
		// Linear interpolation for z depth
		// Use tighter stacking in aligned mode for a more compact deck appearance
		const zDepthPerCard = aligned ? -1 : -30;
		return interpolateUnclamped(distanceFromFrontABS, [0, 1], [0, totalCards * zDepthPerCard]);
	});

	const rotateZ = $derived.by(() => {
		// Linear interpolation from [0,1] -> [0, -2.4], extrapolated
		return interpolateUnclamped(distanceFromFront, [0, 1], aligned ? [0, 0] : [0, -2.4]);
	});

	const rotateY = $derived.by(() => {
		const fractional = distanceFromFrontABS % 1;
		const baseRotation = aligned
			? isFirst
				? transform(fractional, [0, 0.5, 1], [0, -45, 0])
				: transform(fractional, [0, 0.5, 1], [0, -5, 0])
			: isFirst
				? transform(fractional, [0, 0.5, 1], [0, -45, 0])
				: transform(fractional, [0, 0.5, 1], [0, -20, 0]);
		return baseRotation * direction;
	});

	const zIndex = $derived.by(() => {
		const inputRange = [-2, -1, 0, 0.7, 2];
		const outputRange = [-2, -1, 0, 0, -2];
		return Math.round(interpolateUnclamped(distanceFromFront, inputRange, outputRange));
	});

	const transformStyle = $derived(`
		perspective(1000px)
		translateX(${x}%)
		translateY(${y}%)
		translateZ(${z}px)
		rotateZ(${rotateZ}deg)
		rotateY(calc(${rotateY}deg + var(--tilt-y)))
		rotateX(var(--tilt-x))
		scale(${scale})
	`);

	const isHolographic = false;
	// const isHolographic = $derived(
	// 	card.activity.$isLoaded && card.activity.$isLoaded
	// 		? Array.from(card.activity.perAccount.all).length > 99
	// 		: false
	// );

	// Edit URL with return path
	const editUrl = $derived(
		`/edit/card/${card.$jazz.id}?returnTo=${encodeURIComponent(page.url.pathname + page.url.search)}`
	);
</script>

{#snippet cardFront()}
	<div class="card-front border-[0.5px] border-border bg-background p-2">
		<!-- Base content layer -->
		<div
			class="relative z-1 box-border grid h-full w-full grid-cols-6 grid-rows-[auto_auto_auto_auto_auto_1fr] gap-1 border-4 border-double border-border p-2"
		>
			<header
				class="relative col-span-6 row-span-1 flex items-center justify-start divide-x divide-border border border-border text-base"
			>
				<div class="size-9 flex-none"></div>
				<h2 class="card-title flex-1 text-left text-black uppercase select-none">
					{card.name}
				</h2>
			</header>
			<section class="col-span-6 row-span-5 grid grid-cols-subgrid grid-rows-subgrid gap-1">
				<div
					class="card-header-container relative col-span-6 row-span-1 aspect-3/2 w-full overflow-hidden transform-flat"
				>
					{#if card.thumbnails.$isLoaded}
						<CardHeader {tiltY} thumbnails={card.thumbnails} class="h-full w-full object-cover" />
					{/if}
					{#if isHolographic}
						<div class="holo-shine"></div>
						<div class="holo-glare"></div>
					{/if}
				</div>
				<div
					class="col-span-6 row-span-4 grid grid-cols-subgrid grid-rows-subgrid gap-0 divide-y divide-border border border-border"
				>
					<div
						class="col-span-6 row-span-1 flex h-full w-full flex-row items-start justify-between gap-1 pl-2"
					>
						<span class="flex flex-none py-2 text-sm font-normal text-black uppercase text-box-trim"
							>Areas:</span
						>
						<div class="flex flex-none gap-1 p-2">
							{#each card.areas as area (area)}
								<span
									class="flex flex-none bg-foreground px-1 align-baseline text-sm font-normal text-black uppercase text-box-trim"
									>{area}</span
								>
							{/each}
						</div>
					</div>
					<div class="col-span-6 row-span-1 flex h-full w-full justify-between p-2">
						<span class="flex flex-none text-sm font-normal text-black uppercase">Reps:</span>
						<span class="flex flex-none text-sm font-normal text-black uppercase tabular-nums"
							>{card.units !== 'reps' ? `${card.reps} ${card.units}` : card.reps}</span
						>
					</div>
					<div class="col-span-6 row-span-1 flex h-full w-full justify-between p-2">
						<span class="flex flex-none text-sm font-normal text-black uppercase">Sets:</span>
						<span class="flex flex-none text-sm font-normal text-black uppercase tabular-nums"
							>{card.sets}</span
						>
					</div>
					<div class="col-span-6 row-span-1 flex h-full w-full flex-col items-start gap-1 p-2">
						<span class="inline text-sm font-normal text-black uppercase">Description:</span>
						<p class="inline text-left text-sm leading-4 font-normal text-black">
							{card.description}
						</p>
					</div>
				</div>
			</section>
		</div>
	</div>
{/snippet}

{#snippet cardBack()}
	<div class="card-back border-[0.5px] border-border bg-background p-2 text-sm">
		<div
			class="relative z-1 box-border grid h-full w-full grid-cols-6 grid-rows-[auto_auto_auto_auto_1fr] gap-1 border-4 border-double border-border p-2"
		>
			<a
				href={editUrl}
				class="pointer-events-auto absolute top-2 right-2 flex items-center justify-center border bg-background p-1 transition-colors hover:bg-muted"
				aria-label="Edit card"
			>
				Edit
			</a>
		</div>
	</div>
{/snippet}

<div
	bind:this={wrapperElement}
	class={cn('card-wrapper', className)}
	style:z-index={zIndex}
	style:view-transition-name={viewTransitionName}
>
	<article
		class="card"
		class:card-shadow={shadow}
		class:card-glare={glareIntensity > 0}
		data-is-active={springActivation.current >= 0.01}
		style:transform={transformStyle}
		style:--tilt-x="{springTiltX.current}deg"
		style:--tilt-y="{springTiltY.current * 3}deg"
		style:--pointer-x={pointerX}
		style:--pointer-y={pointerY}
		style:--normalized-x={normalizedX}
		style:--normalized-y={normalizedY}
		style:--activation={springActivation.current}
		style:--scale={scaleValue}
		style:--pointer-angle="{pointerAngle}deg"
		style:--pointer-distance="{pointerDistance}px"
		style:--pointer-edge={pointerEdge}
		style:--glare-intensity={glareIntensity}
		style:--glare-hue={glareHue}
		style:--blend-mode={blendMode}
		style:--shadow-opacity={shadowOpacity}
		style:--shadow-shift-x="{springTiltY.current * (isFlipped ? 1.5 : -1.5)}px"
		style:--shadow-shift-y="{springTiltX.current * 1}px"
		style:--glare-opacity={glareOpacity}
	>
		<div class="card-content p-1" class:flipped={isFlipped}>
			{@render cardFront()}
			{@render cardBack()}
		</div>
	</article>
</div>

<style>
	@property --tilt-x {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}

	@property --tilt-y {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}

	.card-title {
		flex-shrink: 0;
		padding: 0 1ch 0 1ch;
		font-weight: 400;
	}
	.card-wrapper {
		margin: auto;
		inset: 0;
		position: absolute;
		aspect-ratio: 2 / 3;
		width: min(360px, 90%);
		transform-style: preserve-3d;
		pointer-events: none;
	}

	.card {
		/* Default values for CSS custom properties */
		--tilt-x: 0deg;
		--tilt-y: 0deg;
		--pointer-x: 0;
		--pointer-y: 0;
		--normalized-x: 0.5;
		--normalized-y: 0.5;
		--activation: 0;
		--scale: 1;
		--glare-intensity: 1;
		--glare-hue: 270;
		--blend-mode: overlay;

		/* Computed values for effects */
		--gradient-x: calc(var(--normalized-x) * 100%);
		--gradient-y: calc(var(--normalized-y) * 100%);
		--shadow-x: calc(var(--normalized-x) * 2 - 1);
		--shadow-y: calc(var(--normalized-y) * 2 - 1);

		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		will-change: transform, box-shadow;
		image-rendering: pixelated;
	}

	/* Glare overlay effect - radial gradient that follows pointer position */
	/* Applied directly to .card-glare element for proper CSS variable inheritance */
	/* Glare opacity is driven by distanceFromFront via --glare-opacity CSS variable */
	.card-glare {
		--glare-gradient: radial-gradient(
			farthest-corner circle at var(--gradient-x) var(--gradient-y),
			/*lch(95% 2.7 var(--glare-hue) / calc(var(--glare-intensity, 1) * 0.66)) 8%,
			lch(88% 5.5 var(--glare-hue) / calc(var(--glare-intensity, 1) * 0.5)) 28%,
			lch(5% 3.5 var(--glare-hue) / calc(var(--glare-intensity, 1) * 0.15)) 90%*/
			lch(95% 2 var(--glare-hue) / calc(var(--glare-intensity) * 0.5)) 10%,
			lch(88% 3 var(--glare-hue) / calc(var(--glare-intensity) * 0.35)) 30%,
			transparent 85%
		);
	}

	.card-glare .card-content::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 6px;
		pointer-events: none;
		z-index: 100;
		background-image: var(--glare-gradient);
		mix-blend-mode: luminosity;
		opacity: var(--glare-opacity);
		will-change: background-image, opacity;
	}

	/* Dynamic shadow that shifts based on tilt */
	/* Shadow moves opposite to the raised edge for realistic effect */
	/* Uses layered box-shadows for realistic depth */
	.card-shadow {
		--shadow-shift-x: 0px;
		--shadow-shift-y: 0px;
	}

	.card-shadow .card-content::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 6px;
		pointer-events: none;
		z-index: -1;
		opacity: var(--shadow-opacity);
		box-shadow:
			/* Largest, most diffused shadow - ambient occlusion */
			calc(var(--shadow-shift-x) * 3) calc(78px + var(--shadow-shift-y) * 3) 51px 0
				rgba(0, 0, 0, 0.1),
			/* Medium-large shadow */ calc(var(--shadow-shift-x) * 2.5)
				calc(50px + var(--shadow-shift-y) * 2.5) 30px 0 rgba(0, 0, 0, 0.07),
			/* Medium shadow */ calc(var(--shadow-shift-x) * 2) calc(30px + var(--shadow-shift-y) * 2)
				16px 0 rgba(0, 0, 0, 0.06),
			/* Small-medium shadow */ calc(var(--shadow-shift-x) * 1.5)
				calc(16px + var(--shadow-shift-y) * 1.5) 8px rgba(0, 0, 0, 0.04),
			/* Small shadow - contact shadow */ calc(var(--shadow-shift-x) * 1)
				calc(6px + var(--shadow-shift-y) * 1) 4px rgba(0, 0, 0, 0.04),
			/* Smallest shadow - tight contact */ calc(var(--shadow-shift-x) * 0.5)
				calc(2px + var(--shadow-shift-y) * 0.5) 2px rgba(0, 0, 0, 0.02);
	}

	.card-content {
		position: absolute;
		inset: 0;
		transform-style: preserve-3d;
		transition: rotate 0.5s ease-out;
	}

	.card-content.flipped {
		rotate: y 180deg;
	}

	.card-front {
		transform: rotateY(0deg);
	}
	.card-back {
		transform: rotateY(180deg);
	}
	.card-front,
	.card-back {
		position: absolute;
		inset: 0;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		corner-shape: superellipse(1.5);
		border-radius: 6px;
		overflow: hidden;
		height: 100%;
		width: 100%;
		transform-style: preserve-3d;
	}

	/* Holographic effect layers - clipped to header container */
	.card-header-container {
		position: relative;
		/* CSS variables for holographic effects - computed from pointer position */
		--holo-space: 5%;
		--holo-angle: -22deg;
		--background-x: calc(var(--normalized-x, 0.5) * 100%);
		--background-y: calc(var(--normalized-y, 0.5) * 100%);
		--pointer-from-center: calc(
			sqrt(
				(var(--pointer-x, 0) * var(--pointer-x, 0)) + (var(--pointer-y, 0) * var(--pointer-y, 0))
			)
		);
	}

	/* Shine layer - rainbow repeating linear gradient */
	.holo-shine {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 30;

		background-image: repeating-linear-gradient(
			var(--holo-angle),
			hsla(283, 49%, 60%, 0.75) calc(var(--holo-space) * 1),
			hsla(2, 74%, 59%, 0.75) calc(var(--holo-space) * 2),
			hsla(53, 67%, 53%, 0.75) calc(var(--holo-space) * 3),
			hsla(93, 56%, 52%, 0.75) calc(var(--holo-space) * 4),
			hsla(176, 38%, 50%, 0.75) calc(var(--holo-space) * 5),
			hsla(228, 100%, 77%, 0.75) calc(var(--holo-space) * 6),
			hsla(283, 49%, 61%, 0.75) calc(var(--holo-space) * 7)
		);

		background-size: 300% 400%;
		background-position:
			0% calc(var(--background-y) * 1),
			var(--background-x) var(--background-y);

		filter: brightness(calc((var(--pointer-from-center) * 0.3) + 0.5)) contrast(2.3) saturate(1);
		mix-blend-mode: color-dodge;
		opacity: 1;
	}

	/* Shine layer ::after for depth/vignette effect */
	.holo-shine::after {
		content: '';
		position: absolute;
		inset: 0;

		background-image: radial-gradient(
			farthest-corner ellipse at calc(((var(--pointer-x, 0)) * 0.5 + 0.5) * 50% + 25%)
				calc(((var(--pointer-y, 0)) * 0.5 + 0.5) * 50% + 25%),
			hsla(0, 0%, 100%, 0.6) 5%,
			hsla(300, 100%, 11%, 0.2) 40%,
			transparent 100%
		);

		background-position: center center;
		background-size: 400% 500%;

		filter: brightness(calc((var(--pointer-from-center) * 0.2) + 0.4)) contrast(0.85) saturate(1.1);
		mix-blend-mode: hard-light;
	}

	/* Glare layer - radial gradient that follows pointer */
	.holo-glare {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 31;

		background-image: radial-gradient(
			farthest-corner circle at var(--background-x) var(--background-y),
			hsla(0, 0%, 100%, 0.8) 10%,
			hsla(0, 0%, 100%, 0.4) 35%,
			transparent 60%
		);

		mix-blend-mode: soft-light;
	}
</style>
