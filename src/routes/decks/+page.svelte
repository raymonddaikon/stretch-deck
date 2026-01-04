<script lang="ts">
	import { AccountCoState } from 'jazz-tools/svelte';
	import { watch } from 'runed';
	import DeckGrid from '$lib/components/ui/grids/deck-grid.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { StretchDeckAccount } from '$lib/schema';

	const me = new AccountCoState(StretchDeckAccount, {
		resolve: {
			root: true,
			profile: { decks: { $each: { cards: { $each: true } } } }
		}
	});

	const layout = getLayoutContext();

	let scrollIndex = $state(0);
	let totalItems = $state(0);
	let itemsShown = $state(0);

	$effect(() => {
		layout.title = m.all_decks();
	});

	watch(
		() => [itemsShown, totalItems],
		() => {
			layout.subtitle = `${itemsShown}/${m.deck_count({ count: totalItems })}`;
		}
	);
</script>

{#if me.current.$isLoaded && me.current.profile.decks.$isLoaded}
	<DeckGrid decks={me.current.profile.decks} bind:scrollIndex bind:totalItems bind:itemsShown />
{/if}
