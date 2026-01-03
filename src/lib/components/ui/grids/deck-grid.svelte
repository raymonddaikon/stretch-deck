<script lang="ts">
	import { co } from 'jazz-tools';
	import { goto } from '$app/navigation';
	import Deck from '$lib/components/ui/deck/deck.svelte';
	import { Deck as DeckSchema } from '$lib/schema';
	import ItemGrid from './item-grid.svelte';

	type DeckGridProps = {
		decks: co.loaded<co.List<typeof DeckSchema>>;
		scrollIndex?: number;
		totalItems?: number;
	};

	let { decks, scrollIndex = $bindable(0), totalItems = $bindable(0) }: DeckGridProps = $props();

	function handleEditClick(event: MouseEvent, deckId: string) {
		event.stopPropagation();
		goto(`/edit/deck/${deckId}`);
	}
</script>

<ItemGrid
	items={decks}
	searchProperty="name"
	searchPlaceholder="Search decks..."
	emptyTitle="No decks found"
	onSelect={(selected) => {
		goto(`/deck/${selected.$jazz.id}`);
	}}
	minWidth="300px"
	emptyDescription="Try a different search term"
	bind:scrollIndex
	bind:totalItems
	class="pointer-events-auto col-span-3 row-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-span-3 md:overflow-x-visible"
>
	{#snippet children({ item, highlighted })}
		<div
			class="deck-grid-wrapper relative flex h-full w-full flex-col items-center justify-start md:overflow-x-visible!"
			style:view-transition-name={`deck-${item.$jazz.id}`}
		>
			<button
				type="button"
				class="absolute top-2 right-2 z-50 flex items-center justify-center bg-foreground p-1 text-center text-base font-medium text-black opacity-0 transition-opacity group-hover:opacity-100"
				onclick={(e) => handleEditClick(e, item.$jazz.id)}
				aria-label="Edit deck"
			>
				Edit
			</button>
			<div
				class="deck-card-area flex w-full flex-1 items-center justify-center md:overflow-x-visible!"
			>
				<div
					class="deck-grid-item relative h-full w-full overflow-x-visible overflow-y-clip"
					class:ring-2={highlighted}
					class:ring-accent-500={highlighted}
				>
					<Deck
						aligned
						cards={item.cards}
						class="deck-grid-deck"
						getViewTransitionName={(card) => `card-${card.$jazz.id}`}
					/>
				</div>
			</div>
		</div>
	{/snippet}
	{#snippet footer({ item, highlighted })}
		<div class="deck-name-area absolute bottom-0 left-0 z-100 flex w-full items-end justify-start">
			<span class="truncate bg-foreground p-1 text-center text-base font-medium text-black">
				{item.name}
			</span>
		</div>
	{/snippet}
</ItemGrid>

<style>
	.deck-grid-wrapper {
		container-type: size;
	}

	.deck-card-area {
		/* Leave room for the deck name at bottom */
		height: calc(100% - 2.5rem);
	}

	.deck-name-area {
		height: 2.5rem;
	}

	.deck-grid-item {
		container-type: size;
	}

	.deck-grid-item :global(.deck-grid-deck) {
		/* Override the default deck sizing */
		/* Use transform for both centering and scaling */
		position: absolute;
		inset: unset;
		margin: unset;
		top: 50%;
		left: 50%;
		width: 360px;
		aspect-ratio: 2 / 3;
		/* Scale based on the smaller of width or height to ensure deck fits */
		/* Use 65% of container to leave room for deck spread */
		translate: -50% -50%;
		scale: min(calc(65cqh / 540px), calc(65cqw / 360px));
	}
</style>
