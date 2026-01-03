<script lang="ts">
	import { AccountCoState } from 'jazz-tools/svelte';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { StretchDeckAccount } from '$lib/schema';

	const me = new AccountCoState(StretchDeckAccount, {
		resolve: {
			root: true,
			profile: {
				decks: { $each: true },
				cards: { $each: true }
			}
		}
	});

	const layout = getLayoutContext();

	// Check if user has any content
	const hasContent = $derived.by(() => {
		if (!me.current.$isLoaded || !me.current.profile.$isLoaded) return null;
		const decksCount = me.current.profile.decks?.length ?? 0;
		const cardsCount = me.current.profile.cards?.length ?? 0;
		return decksCount > 0 || cardsCount > 0;
	});

	$effect(() => {
		// if (hasContent === true) {
		// 	goto('/decks');
		// } else {
		layout.title = m.welcome();
		layout.subtitle = '';
		// }
	});
</script>

<!-- {#if hasContent === false} -->
<div
	class="pointer-events-auto col-start-2 row-start-2 flex flex-col items-center justify-center gap-6 px-4 text-center"
>
	<div class="flex flex-col gap-2">
		<h1 class="text-2xl font-medium text-black md:text-3xl">Get Started with Stretch Deck</h1>
		<p class="max-w-md text-base text-black/60 md:text-lg">
			Create your first deck of stretches to start building your personalized stretching routine.
		</p>
	</div>

	<div class="flex flex-col gap-3 sm:flex-row">
		<Button href="/create-deck" size="lg" class="min-w-40">Create a Deck</Button>
		<Button href="/create-card" variant="outline" size="lg" class="min-w-40">Create a Card</Button>
	</div>

	<div class="mt-4 flex flex-col gap-1 text-sm text-black/40">
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
