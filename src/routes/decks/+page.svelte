<script lang="ts">
	import { AccountCoState } from 'jazz-tools/svelte';
	import DeckGrid from '$lib/components/ui/grids/deck-grid.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
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

	$effect(() => {
		layout.title = 'All Decks';
		if (totalItems > 0) {
			layout.subtitle = `${scrollIndex + 1}/${totalItems}`;
		} else if (me.current.$isLoaded) {
			const count = me.current.profile.decks?.length ?? 0;
			layout.subtitle = `${count} deck${count !== 1 ? 's' : ''}`;
		}
	});
</script>

{#if me.current.$isLoaded && me.current.profile.decks.$isLoaded}
	<DeckGrid decks={me.current.profile.decks} bind:scrollIndex bind:totalItems />
{/if}
