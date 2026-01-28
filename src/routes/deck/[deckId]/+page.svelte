<script lang="ts">
	import type { ID } from 'jazz-tools';
	import { CoState } from 'jazz-tools/svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Deck from '$lib/components/ui/deck/deck.svelte';

	import { getLayoutContext } from '$lib/context/layout.svelte';
	import { ActivityItem, Deck as DeckSchema } from '$lib/schema';

	const deck = new CoState(DeckSchema, () => page.params.deckId as ID<typeof DeckSchema>, {
		resolve: {
			cards: { $each: { thumbnails: { $each: true } } }
		}
	});

	let completedCards = new SvelteSet<string>();

	// const totalCards = $derived(deck?.current.$isLoaded ? deck.current.cards?.length : 0);
	// const completedCount = $derived(completedCards.size);

	const layoutContext = getLayoutContext();

	$effect(() => {
		layoutContext.title = deck.current?.$isLoaded ? (deck.current.name ?? 'Deck') : 'Deck';
		// layout.subtitle = totalCards > 0 ? `${completedCount}/${totalCards}` : '';
		layoutContext.subtitle = deck.current?.$isLoaded ? (deck.current.description ?? '') : '';
		layoutContext.qrLink = `${page.url.origin}/add?type=deck&id=${deck.current.$jazz.id}`;
		return () => {
			layoutContext.qrLink = null;
		};
	});
</script>

{#if deck.current.$isLoaded}
	<div class="deck-page-item col-span-3 row-span-2 row-start-2">
		<Deck
			class="deck-page-deck"
			deck={deck.current}
			completedCards={[...completedCards]}
			getViewTransitionName={(card) => `card-${card.$jazz.id}`}
			onDeckComplete={() => {
				if (deck.current.$isLoaded && deck.current.activity.$isLoaded) {
					deck.current.activity.$jazz.push(
						ActivityItem.create({
							completed: new Date()
						})
					);
				}
				goto('/decks');
			}}
			onCardComplete={(cardId) => {
				completedCards.add(cardId);
				if (deck.current.$isLoaded) {
					const completedCard = deck.current.cards.find((card) => card.$jazz.id === cardId);
					if (completedCard?.activity.$isLoaded) {
						completedCard.activity.$jazz.push(
							ActivityItem.create({
								completed: new Date()
							})
						);
					}
				}
			}}
		/>
	</div>
{/if}

<style>
	.deck-page-item {
		container-type: size;
		width: 100%;
		height: 100%;
	}

	.deck-page-item :global(.deck-page-deck) {
		position: absolute;
		top: 50%;
		left: 50%;
		/* Deck is 360px wide, cards are 540px tall, button is ~48px */
		/* Total height: 540 + 48 = 588px */
		width: 360px;
		height: 588px;
		translate: -50% -50%;
		scale: min(calc(100cqh / 588px), calc(100cqw / 360px));
	}
</style>
