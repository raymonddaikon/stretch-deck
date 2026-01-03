<script lang="ts">
	import { AccountCoState } from 'jazz-tools/svelte';
	import { watch } from 'runed';
	import CardGrid from '$lib/components/ui/grids/card-grid.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { StretchDeckAccount } from '$lib/schema';

	const me = new AccountCoState(StretchDeckAccount, {
		resolve: {
			root: true,
			profile: { cards: { $each: { thumbnails: { $each: true } } } }
		}
	});

	const layout = getLayoutContext();

	let scrollIndex = $state(0);
	let totalItems = $state(0);

	$effect(() => {
		layout.title = m.all_cards();
	});

	watch(
		() => totalItems,
		() => {
			if (totalItems > 0) {
				layout.subtitle = `${scrollIndex + 1}/${m.card_count({ count: totalItems })}`;
			} else {
				layout.subtitle = `${0}/${m.card_count({ count: totalItems })}`;
			}
		}
	);
</script>

{#if me.current.$isLoaded && me.current.profile.cards.$isLoaded}
	<CardGrid cards={me.current.profile.cards} bind:scrollIndex bind:totalItems />
{/if}
