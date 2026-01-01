<script lang="ts">
	import { CardEditor } from '$lib/components/ui/card-editor';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';

	const layoutContext = getLayoutContext();

	$effect(() => {
		layoutContext.title = m.create_card();
		layoutContext.subtitle = '';
	});
</script>

{#if layoutContext.me.current.$isLoaded && layoutContext.me.current.profile.cards.$isLoaded}
	<CardEditor mode="create" />
{/if}
