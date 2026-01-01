<script lang="ts">
	import { AccountCoState } from 'jazz-tools/svelte';
	import CardGrid from '$lib/components/ui/grids/card-grid.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
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
		layout.title = 'All Cards';
		if (totalItems > 0) {
			layout.subtitle = `${scrollIndex + 1}/${totalItems}`;
		} else if (me.current.$isLoaded) {
			const count = me.current.profile.cards?.length ?? 0;
			layout.subtitle = `${count} card${count !== 1 ? 's' : ''}`;
		}
	});
</script>

{#if me.current.$isLoaded && me.current.profile.cards.$isLoaded}
	<CardGrid cards={me.current.profile.cards} bind:scrollIndex bind:totalItems />
{/if}
