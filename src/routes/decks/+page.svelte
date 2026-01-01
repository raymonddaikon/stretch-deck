<script lang="ts">
	import { watch } from 'runed';
	import { afterNavigate } from '$app/navigation';
	import DeckGrid from '$lib/components/ui/grids/deck-grid.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';

	const layoutContext = getLayoutContext();

	let scrollIndex = $state(0);
	let totalItems = $state(0);
	let itemsShown = $state(0);

	// Capture the previous page URL to determine which deck's cards should have view transition names
	let fromPath = $state<string | null>(null);

	afterNavigate(({ from }) => {
		fromPath = from?.url.pathname ?? null;
	});

	$effect(() => {
		layoutContext.title = m.all_decks();
	});

	watch(
		() => [itemsShown, totalItems],
		() => {
			layoutContext.subtitle = `${itemsShown}/${m.deck_count({ count: totalItems })}`;
		}
	);

	// TODO: Add logic to filter out deleted decks.
	// watch(
	// 	() => [me.current.$isLoaded, me.current?.profile?.decks?.$isLoaded],
	// 	() => {
	// 		if (me.current.$isLoaded && me.current.profile.decks.$isLoaded) {
	// 			// me.current.profile.decks.filter
	// 		}
	// 	}
	// );
</script>

{#if layoutContext.me.current.$isLoaded && layoutContext.me.current.profile.decks.$isLoaded}
	<DeckGrid
		decks={layoutContext.me.current.profile.decks}
		{fromPath}
		bind:scrollIndex
		bind:totalItems
		bind:itemsShown
	/>
{/if}
