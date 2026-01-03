<script lang="ts">
	import { AccountCoState } from 'jazz-tools/svelte';
	import { CardEditor } from '$lib/components/ui/card-editor';
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

	$effect(() => {
		layout.title = m.create_card();
		layout.subtitle = '';
	});
</script>

{#if me.current.$isLoaded && me.current.profile.cards.$isLoaded}
	<CardEditor mode="create" />
{/if}
