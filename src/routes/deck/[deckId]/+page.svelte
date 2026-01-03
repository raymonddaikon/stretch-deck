<script lang="ts">
	import type { ID } from 'jazz-tools';
	import { CoState } from 'jazz-tools/svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Deck from '$lib/components/ui/deck/deck.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { ActivityItem, Deck as DeckSchema } from '$lib/schema';

	const deck = new CoState(DeckSchema, () => page.params.deckId as ID<typeof DeckSchema>, {
		resolve: {
			cards: { $each: { thumbnails: { $each: true } } }
		}
	});

	let completedCards = new SvelteSet<string>();

	const totalCards = $derived(deck?.current.$isLoaded ? deck.current.cards?.length : 0);
	const completedCount = $derived(completedCards.size);

	const layout = getLayoutContext();

	$effect(() => {
		layout.title = deck.current?.$isLoaded ? (deck.current.name ?? 'Deck') : 'Deck';
		layout.subtitle = totalCards > 0 ? `${completedCount}/${totalCards}` : '';
	});
</script>

{#if deck.current.$isLoaded}
	<div class="col-span-3 row-span-3" style:view-transition-name={`deck-${deck.current.$jazz.id}`}>
		<Deck
			class="h-full w-full"
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
