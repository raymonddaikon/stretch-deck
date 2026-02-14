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
</script>

<div
	class="sortable-card-wrapper relative h-full w-full select-none"
	style:view-transition-name={viewTransitionName ?? 'none'}
	{@attach ref}
>
	<!-- Original element - becomes invisible during drag but maintains dimensions -->
	<div
		class={[
			'sortable-card-item relative h-full w-full overflow-visible rounded-md',
			{ invisible: isHidden }
		]}
	>
		<Card
			totalCards={0}
			index={0}
			progress={0}
			direction={1}
			tiltX={0}
			tiltY={0}
			isFlipped={false}
			shadow={true}
			class="sortable-grid-card"
			{card}
		/>
	</div>

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
