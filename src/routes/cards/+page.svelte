<script lang="ts">
	import { watch } from 'runed';
	import CardGrid from '$lib/components/ui/grids/card-grid.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';

	const layoutContext = getLayoutContext();

	let scrollIndex = $state(0);
	let totalItems = $state(0);
	let itemsShown = $state(0);

	$effect(() => {
		layoutContext.title = m.all_cards();
	});

	watch(
		() => [itemsShown, totalItems],
		() => {
			layoutContext.subtitle = `${itemsShown}/${m.card_count({ count: totalItems })}`;
		}
	);

	// TODO: Add logic to filter out deleted cards.
	// watch(
	// 	() => [layoutContext.me.current.$isLoaded, layoutContext.me.current?.profile?.decks?.$isLoaded],
	// 	() => {
	// 		if (layoutContext.me.current.$isLoaded && layoutContext.me.current.profile.decks.$isLoaded) {
	// 			// layoutContext.me.current.profile.decks.filter
	// 		}
	// 	}
	// );
</script>

{#if layoutContext.me.current.$isLoaded && layoutContext.me.current.profile.cards.$isLoaded}
	<CardGrid
		cards={layoutContext.me.current.profile.cards}
		bind:scrollIndex
		bind:totalItems
		bind:itemsShown
	/>
{/if}
