<script lang="ts">
	import { type UseSortableInput, useSortable } from '@dnd-kit-svelte/svelte/sortable';
	import { co } from 'jazz-tools';
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

	// Tilt state for this card
	let tiltX = $state(0);
	let tiltY = $state(0);

	// Track flipped state
	let isFlipped = $state(false);

	function handlePointerMove(event: PointerEvent) {
		if (isDragging.current) return;

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
		tiltX = 0;
		tiltY = 0;
	}

	function handleClick() {
		if (!isDragging.current) {
			isFlipped = !isFlipped;
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
		onclick={handleClick}
	>
		<Card
			totalCards={0}
			index={0}
			progress={0}
			direction={1}
			{tiltX}
			{tiltY}
			{isFlipped}
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
