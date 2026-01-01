<script lang="ts">
	import {
		DragDropProvider,
		DragOverlay,
		KeyboardSensor,
		PointerSensor
	} from '@dnd-kit-svelte/svelte';
	import { co } from 'jazz-tools';
	import { Card as CardSchema } from '$lib/schema';
	import SortableCard from './sortable-card.svelte';

	type SortDeckProps = {
		cards: co.loaded<typeof CardSchema>[];
		onOrderChange?: (
			orderedCards: {
				type: 'stretch';
				$jazz: { id: string };
				areas: string[];
				thumbnails: any[];
				name: string;
				shareSecret: string;
				description: string;
				reps: number;
				units: string;
				sets: number;
				activity: any[];
				creator: any;
			}[]
		) => void;
		getViewTransitionName?: (cardId: string) => string;
		minWidth?: string;
		class?: string;
	};

	let {
		cards,
		onOrderChange,
		getViewTransitionName,
		minWidth = '200px',
		class: className
	}: SortDeckProps = $props();

	// Track if we're currently dragging
	let isDragging = $state(false);

	// Local state for the card order - initialized from props
	let orderedCards = $state<
		{
			type: 'stretch';
			$jazz: { id: string };
			areas: string[];
			thumbnails: any[];
			name: string;
			shareSecret: string;
			description: string;
			reps: number;
			units: string;
			sets: number;
			activity: any[];
			creator: any;
		}[]
	>(cards.map((card) => (card.$isLoaded ? card.toJSON() : null)));

	// Sync with props when they change, but only when not dragging
	// $effect(() => {
	// 	if (!isDragging) {
	// 		untrack(() => {
	// 			orderedCards = cards.toJSON();
	// 		});
	// 	}
	// });

	const sensors = [
		PointerSensor.configure({
			activationConstraints: {
				distance: { value: 8 }
			}
		}),
		KeyboardSensor
	];

	// Helper to reorder array
	function arrayMove<T>(array: T[], from: number, to: number): T[] {
		if (from === to) return array;
		const newArray = [...array];
		const [item] = newArray.splice(from, 1);
		newArray.splice(to, 0, item);
		return newArray;
	}

	function handleDragStart(event: any, manager: any) {
		isDragging = true;
	}

	function handleDragOver(event: any, manager: any) {
		const { source, target } = manager.dragOperation;

		if (!source || !target) return;

		// Check if both are sortables with our group
		const sourceSortable = source.sortable;
		const targetSortable = target.sortable;

		if (!sourceSortable || !targetSortable) return;
		if (sourceSortable.group !== 'deck' || targetSortable.group !== 'deck') return;

		const sourceIndex = orderedCards.findIndex((c) => c.$jazz.id === source.id);
		const targetIndex = orderedCards.findIndex((c) => c.$jazz.id === target.id);

		if (sourceIndex === -1 || targetIndex === -1) return;
		if (sourceIndex === targetIndex) return;

		// Reorder the cards

		orderedCards = arrayMove(orderedCards, sourceIndex, targetIndex);
	}

	function handleDragEnd(event: any, manager: any) {
		isDragging = false;
		// Notify parent of the final order
		// cards.$jazz.applyDiff()
		onOrderChange?.(orderedCards);
	}
</script>

<DragDropProvider
	{sensors}
	onDragStart={handleDragStart}
	onDragOver={handleDragOver}
	onDragEnd={handleDragEnd}
>
	<div
		class={[
			'sort-deck-container flex flex-col items-center gap-3 focus-visible:outline-0 md:overflow-x-visible',
			className
		]}
	>
		<div
			class="grid-wrapper scrollbar-none h-full w-full overflow-x-auto p-2 md:min-h-0 md:overflow-x-visible! md:overflow-y-auto md:pt-4 md:pb-12"
		>
			<div class="sort-deck-grid grid gap-4" style:--grid-min-size={minWidth}>
				{#each orderedCards as card, index (card.$jazz.id)}
					{@const cardObject = cards.find((c) => c.$jazz.id === card.$jazz.id)}
					<div
						class="@container relative aspect-2/3 scroll-mt-14 scroll-mb-8 transition"
						style="--grid-item-size: 100cqw;"
					>
						{#if cardObject?.$isLoaded}
							<SortableCard
								card={cardObject}
								id={card.$jazz.id}
								index={() => index}
								group="deck"
								data={{ group: 'deck' }}
								type="card"
								viewTransitionName={getViewTransitionName?.(card.$jazz.id)}
							/>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>

	<DragOverlay>
		{#snippet children(source)}
			{@const card = cards.find((c) => c.$jazz.id === source.id)}
			{@const rect = source.element?.getBoundingClientRect()}
			{#if card && rect}
				<div
					class="overlay-card-container"
					style:width="{rect.width}px"
					style:height="{rect.height}px"
				>
					{#if card.$isLoaded}
						<SortableCard {card} id={card.$jazz.id} index={() => 0} isOverlay />
					{/if}
				</div>
			{/if}
		{/snippet}
	</DragOverlay>
</DragDropProvider>

<style>
	/* Enable container queries for the grid wrapper */
	.grid-wrapper {
		container-type: size;
	}

	/* Mobile: horizontal scroll with exactly 2 rows */
	.sort-deck-grid {
		height: 100%;
		grid-auto-flow: column;
		/* 2 rows that split the container height evenly */
		grid-template-rows: repeat(2, 1fr);
		/* Column width based on row height and 2:3 aspect ratio */
		/* Each row is 50% height, so column width = (50% height) * (2/3) */
		grid-auto-columns: calc((50cqh - 0.5rem) * (2 / 3));
	}

	/* md breakpoint (768px): standard responsive grid with vertical scroll */
	@media (min-width: 768px) {
		.sort-deck-grid {
			height: auto;
			grid-auto-flow: row;
			grid-auto-columns: auto;
			grid-template-rows: none;
			grid-template-columns: repeat(auto-fill, minmax(var(--grid-min-size), 1fr));
		}
	}

	/* Overlay card styling */
	.overlay-card-container {
		position: relative;
	}
</style>
