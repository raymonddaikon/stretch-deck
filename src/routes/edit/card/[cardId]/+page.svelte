<script lang="ts">
	import type { ID } from 'jazz-tools';
	import { CoState } from 'jazz-tools/svelte';
	import { page } from '$app/state';
	import { CardEditor } from '$lib/components/ui/card-editor';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import { Card } from '$lib/schema';

	// Load the card to edit
	const card = new CoState(Card, () => page.params.cardId as ID<typeof Card>, {
		resolve: {
			thumbnails: { $each: true }
		}
	});

	const layout = getLayoutContext();

	$effect(() => {
		layout.title = 'Edit Card';
		layout.subtitle = card.current?.$isLoaded ? (card.current.name ?? '') : '';
	});
</script>

{#if card.current.$isLoaded}
	<CardEditor mode="edit" initialCard={card.current} />
{:else}
	<div class="flex h-full w-full items-center justify-center">
		<span class="text-gray-500">Loading card...</span>
	</div>
{/if}
