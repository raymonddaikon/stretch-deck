<script lang="ts">
	import { DeckEditor } from '$lib/components/ui/deck-editor';
	import { getLayoutContext } from '$lib/context/layout.svelte';

	const layoutContext = getLayoutContext();
</script>

{#if layoutContext.me.current.$isLoaded && layoutContext.me.current.profile.cards.$isLoaded}
	<DeckEditor mode="create" cards={layoutContext.me.current.profile.cards} />
{/if}
