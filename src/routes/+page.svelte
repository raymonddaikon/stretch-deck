<script lang="ts">
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';

	const layoutContext = getLayoutContext();

	// Check if user has any content
	const hasContent = $derived.by(() => {
		if (!layoutContext.me.current.$isLoaded || !layoutContext.me.current.profile.$isLoaded)
			return null;
		const decksCount = layoutContext.me.current.profile.decks?.length ?? 0;
		const cardsCount = layoutContext.me.current.profile.cards?.length ?? 0;
		return decksCount > 0 || cardsCount > 0;
	});

	$effect(() => {
		// if (hasContent === true) {
		// 	goto('/decks');
		// } else {
		layoutContext.title = m.welcome();
		layoutContext.subtitle = '';
		// }
	});
</script>

<!-- {#if hasContent === false} -->
<div
	class="pointer-events-auto col-start-2 row-start-2 flex flex-col items-center justify-center gap-6 px-4 text-center"
>
	<div class="flex flex-none flex-col gap-2">
		<h1 class="text-center text-2xl font-medium text-balance text-black md:text-3xl">
			Get Started with Stretch Deck
		</h1>
		<p class="text-center text-base text-pretty text-black/60 md:text-lg">
			Create your first deck of stretches to start building your personalized stretching routine.
		</p>
	</div>

	<div class="flex w-full flex-none flex-col items-center gap-2 sm:flex-row">
		<a href="/create-deck" class="button flex-1">Create a Deck</a>
		<a href="/create-card" class="button flex-1">Create a Card</a>
	</div>

	<div class="flex flex-col gap-1 text-base text-black/40">
		<p>Cards are individual stretches with instructions.</p>
		<p>Decks are collections of cards for your routines.</p>
	</div>
</div>
<!-- {:else}
	<div
		class="pointer-events-auto col-start-2 row-start-2 flex items-center justify-center text-black/40"
	>
		Loading...
	</div>
{/if} -->
