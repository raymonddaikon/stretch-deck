<script lang="ts">
	import type { ID } from 'jazz-tools';
	import { CoState } from 'jazz-tools/svelte';
	import { page } from '$app/state';
	import { DeckEditor } from '$lib/components/ui/deck-editor';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { Deck } from '$lib/schema';

	// Load the current user's cards (available cards to choose from)
	const layoutContext = getLayoutContext();

	// Load the deck to edit
	const deck = new CoState(Deck, () => page.params.deckId as ID<typeof Deck>, {
		resolve: {
			cards: { $each: { thumbnails: { $each: true } } }
		}
	});

	const availableCards = $derived(
		layoutContext.me.current?.$isLoaded && layoutContext.me.current.profile?.cards?.$isLoaded
			? layoutContext.me.current.profile.cards
			: undefined
	);

	$effect(() => {
		layoutContext.title = m.edit_deck();
		layoutContext.subtitle = '';
		// layout.subtitle = deck.current?.$isLoaded ? (deck.current.name ?? '') : '';
	});
</script>

{#if deck.current?.$isLoaded && availableCards}
	<DeckEditor mode="edit" cards={availableCards} initialDeck={deck.current} />
{:else}
	<div class="flex h-full w-full items-center justify-center">
		<span class="text-gray-500">Loading deck...</span>
	</div>
{/if}
