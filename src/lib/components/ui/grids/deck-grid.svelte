<script lang="ts">
	import { co } from 'jazz-tools';
	import { flushSync } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Deck from '$lib/components/ui/deck/deck.svelte';
	import QrShareButton from '$lib/components/ui/qr-share-button.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { Card as CardSchema, Deck as DeckSchema } from '$lib/schema';
	import ItemGrid from './item-grid.svelte';

	const layoutContext = getLayoutContext();

	// Check if user can edit a deck
	function canEditDeck(deck: co.loaded<typeof DeckSchema>): boolean {
		const role = deck.$jazz.owner.myRole();
		return !!role && role !== 'reader' && role !== 'readerInvite';
	}

	type DeckGridProps = {
		decks: co.loaded<co.List<typeof DeckSchema>>;
		/** Path of the page we navigated from (used to determine initial view transition names) */
		fromPath?: string | null;
		scrollIndex?: number;
		totalItems?: number;
		itemsShown?: number;
	};

	let {
		decks,
		fromPath = null,
		scrollIndex = $bindable(0),
		totalItems = $bindable(0),
		itemsShown = $bindable(0)
	}: DeckGridProps = $props();

	// Use SvelteSet for reactive mutations without replacing the object
	let visibleIds = new SvelteSet<string>();

	// Extract deck ID from a path like /deck/[deckId] or /edit/deck/[deckId]
	function getDeckIdFromPath(pathname: string | null): string | null {
		if (!pathname) return null;
		// Match /deck/[deckId] or /edit/deck/[deckId]
		const deckMatch = pathname.match(/^\/deck\/([^/]+)/);
		const editDeckMatch = pathname.match(/^\/edit\/deck\/([^/]+)/);
		return deckMatch?.[1] ?? editDeckMatch?.[1] ?? null;
	}

	// Track which deck is selected for navigation (its cards get view transition names)
	// - When navigating TO this page: use fromPath to determine which deck we came from
	// - When navigating FROM this page: use the deck that was clicked
	let overrideDeckId = $state<string | null>(null);
	const selectedDeckId = $derived(overrideDeckId ?? getDeckIdFromPath(fromPath));

	// Track which deck's remove confirmation is shown
	let showRemoveConfirmForDeck = $state<string | null>(null);

	function handleEditClick(event: MouseEvent, deckId: string) {
		event.stopPropagation();
		flushSync(() => {
			overrideDeckId = deckId;
		});
		goto(`/edit/deck/${deckId}`);
	}

	function handleDeckSelect(deck: co.loaded<typeof DeckSchema>) {
		flushSync(() => {
			overrideDeckId = deck.$jazz.id;
		});
		goto(`/deck/${deck.$jazz.id}`);
	}

	// When a deck is selected, only its cards get view transition names.
	// Builds a Set for the selected deck (cheap), or a deduped Map across all decks (lazy fallback).
	const selectedDeckCardIds = $derived.by(() => {
		if (!selectedDeckId) return null;
		const selectedDeck = decks.find((d) => d.$jazz.id === selectedDeckId);
		if (!selectedDeck?.$isLoaded || !selectedDeck.cards.$isLoaded) return null;
		const ids = new Set<string>();
		for (const card of selectedDeck.cards) {
			if (card?.$isLoaded) ids.add(card.$jazz.id);
		}
		return ids;
	});

	// Fallback map only built when no deck is selected — first occurrence of each card wins
	const fallbackTransitionMap = $derived.by(() => {
		if (selectedDeckId) return null;
		const map = new Map<string, string>();
		for (const deck of decks) {
			if (!deck.$isLoaded || !deck.cards.$isLoaded) continue;
			for (const card of deck.cards) {
				if (!card?.$isLoaded) continue;
				if (!map.has(card.$jazz.id)) {
					map.set(card.$jazz.id, deck.$jazz.id);
				}
			}
		}
		return map;
	});

	// Get view transition name for a card, only if this deck owns the transition
	function getViewTransitionName(
		deckId: string,
		card: co.loaded<typeof CardSchema>
	): string | undefined {
		if (selectedDeckCardIds) {
			// Selected deck mode: only cards in the selected deck get names
			if (deckId === selectedDeckId && selectedDeckCardIds.has(card.$jazz.id)) {
				return `card-${card.$jazz.id}`;
			}
			return undefined;
		}
		// Fallback: first occurrence wins
		if (fallbackTransitionMap?.get(card.$jazz.id) === deckId) {
			return `card-${card.$jazz.id}`;
		}
		return undefined;
	}

	async function handleRemove(deckId: string) {
		if (!layoutContext.me.current.$isLoaded) {
			return;
		}
		const profile = await layoutContext.me.current.profile.$jazz.ensureLoaded({
			resolve: {
				cards: true,
				decks: { $each: { cards: true } }
			}
		});
		if (!profile.decks.$isLoaded) return;

		profile.decks.$jazz.remove((c) => c.$jazz.id === deckId);
	}
</script>

<ItemGrid
	items={decks}
	searchProperty="name"
	searchPlaceholder="Search decks..."
	emptyTitle="No decks found"
	onSelect={handleDeckSelect}
	minWidth="300px"
	emptyDescription="Try a different search term"
	bind:scrollIndex
	bind:totalItems
	bind:itemsShown
	{visibleIds}
	class="pointer-events-auto col-span-3 row-span-2 row-start-2 md:row-span-3 md:overflow-x-hidden! md:px-35"
>
	{#snippet header({ item, highlighted })}
		<div
			class="deck-header-area absolute top-0 left-0 z-100 flex w-full items-start justify-between"
		>
			<span class="truncate bg-foreground p-1 text-center text-base font-medium text-black">
				{item.name}
			</span>
			<QrShareButton
				shareUrl={`${page.url.origin}/add?type=deck&id=${item.$jazz.id}`}
				class="qr-code-button"
			/>
		</div>
	{/snippet}
	{#snippet children({ item, highlighted })}
		{@const isVisible = visibleIds.size === 0 ? true : visibleIds.has(item.$jazz.id)}
		<div
			class="deck-grid-wrapper relative flex h-full w-full flex-col items-center justify-start border border-border md:overflow-x-visible!"
		>
			<div
				class="deck-card-area flex w-full flex-1 items-center justify-center md:overflow-x-visible!"
			>
				<div
					class="deck-grid-item relative h-full w-full overflow-x-visible overflow-y-clip"
					class:ring-2={highlighted}
					class:ring-accent-500={highlighted}
				>
					<Deck
						aligned
						tiltRange={8}
						cards={item.cards}
						class="deck-grid-deck"
						getViewTransitionName={(card) => getViewTransitionName(item.$jazz.id, card)}
						{isVisible}
					/>
				</div>
			</div>
		</div>
	{/snippet}
	{#snippet footer({ item, highlighted })}
		<div class="absolute bottom-0 left-0 z-100 flex w-full items-end justify-between">
			{#if canEditDeck(item)}
				<button
					type="button"
					class="flex cursor-pointer items-center justify-center bg-foreground p-1 text-center text-base font-medium text-black opacity-100 transition-opacity"
					onclick={(e) => handleEditClick(e, item.$jazz.id)}
					aria-label={m.edit_deck()}
				>
					{m.edit()}
				</button>
			{:else}
				<button
					type="button"
					class="button-destructive flex cursor-pointer items-center justify-center p-1 text-center text-base font-medium opacity-100 transition-opacity"
					onclick={(e) => {
						e.stopPropagation();
						showRemoveConfirmForDeck = item.$jazz.id;
					}}
					aria-label={m.remove()}
				>
					{m.remove()}
				</button>
			{/if}
			<span
				class="flex items-center justify-center bg-foreground p-1 text-center text-base font-medium text-black opacity-100 transition-opacity"
			>
				{item.cards.length}
			</span>
		</div>

		{#if showRemoveConfirmForDeck === item.$jazz.id}
			<div
				class="absolute inset-0 z-200 flex items-center justify-center rounded-sm bg-background/80 backdrop-blur-sm"
			>
				<div class="flex max-w-4/5 flex-col gap-4 p-6">
					<p class="text-base font-medium text-black">
						{m.delete_confirm()}
					</p>
					<p class="text-sm font-medium text-black">
						{m.remove_deck_disclosure()}
					</p>
					<div class="flex gap-2">
						<button
							class="button flex-1 rounded-md transition-colors"
							onclick={(e) => {
								e.stopPropagation();
								showRemoveConfirmForDeck = null;
							}}
						>
							{m.cancel()}
						</button>
						<button
							class="button-destructive flex-1 transition-colors"
							onclick={(e) => {
								e.stopPropagation();
								// TODO: Implement actual remove logic
								handleRemove(item.$jazz.id);
								showRemoveConfirmForDeck = null;
							}}
						>
							{m.remove()}
						</button>
					</div>
				</div>
			</div>
		{/if}
	{/snippet}
</ItemGrid>

<style>
	.deck-grid-wrapper {
		container-type: size;
	}

	.deck-card-area {
		/* Leave room for the deck name at bottom */
		height: calc(100% - 2.5rem);
	}

	.deck-grid-item {
		container-type: size;
	}

	.deck-grid-item :global(.deck-grid-deck) {
		/* Override the default deck sizing */
		position: absolute;
		inset: unset;
		margin: unset;
		top: 50%;
		left: 50%;
		width: 360px;
		aspect-ratio: 2 / 3;
		/* Scale based on the smaller of width or height to ensure deck fits */
		/* Use 65% of container to leave room for deck spread */
		translate: -50% -50%;
		scale: min(calc(65cqh / 540px), calc(65cqw / 360px));
	}

	/*
	 * QR code sizing: Calculate available corner space based on deck scaling.
	 * The deck is 360x540px centered at 65% of the deck-card-area (which is container height - 2.5rem).
	 * The grid item has aspect-ratio 2/3, so height = width * 1.5.
	 * The deck-card-area height = (width * 1.5) - 2.5rem.
	 *
	 * Available corner width = (container width - scaled deck width) / 2
	 * Available corner height = (deck-card-area height - scaled deck height) / 2
	 * Use the smaller dimension to keep QR code square and non-overlapping.
	 */
	.deck-header-area :global(.qr-code-button) {
		/*
		 * Grid item has aspect-ratio 2/3, and deck-card-area has height: calc(100% - 2.5rem).
		 * Using container query width (cqw) since @container only provides inline-size.
		 * Container width = 100cqw, Container height = 100cqw * 1.5 (from aspect ratio)
		 * Deck card area height = (100cqw * 1.5) - 2.5rem
		 */
		--container-width: 100cqw;
		--container-height: calc(100cqw * 1.5);
		--deck-area-height: calc(var(--container-height) - 2.5rem);

		/* Calculate the deck scale factor (same formula as deck-grid-deck, but using deck-area dimensions) */
		--deck-scale: min(
			calc(0.65 * var(--deck-area-height) / 540px),
			calc(0.65 * var(--container-width) / 360px)
		);

		/* Scaled deck dimensions */
		--scaled-deck-width: calc(360px * var(--deck-scale));
		--scaled-deck-height: calc(540px * var(--deck-scale));

		/* Available space in corners (half of remaining space on each side) */
		--corner-width: calc((var(--container-width) - var(--scaled-deck-width)) / 2);
		--corner-height: calc((var(--deck-area-height) - var(--scaled-deck-height)) / 2);

		/* Use 85% of the smaller corner dimension, with min/max constraints */
		--qr-size: clamp(40px, min(var(--corner-width), var(--corner-height)) * 0.85, 100px);
		width: var(--qr-size);
		height: var(--qr-size);
	}
</style>
