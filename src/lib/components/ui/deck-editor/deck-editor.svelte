<script lang="ts">
	import { co } from 'jazz-tools';
	import { AccountCoState } from 'jazz-tools/svelte';
	import { flushSync } from 'svelte';
	import { MediaQuery, SvelteMap, SvelteSet } from 'svelte/reactivity';
	import type { ZodError } from 'zod';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import Deck from '$lib/components/ui/deck/deck.svelte';
	import * as Field from '$lib/components/ui/field';
	import ItemGrid from '$lib/components/ui/grids/item-grid.svelte';
	import { Input } from '$lib/components/ui/input';
	import SortDeck from '$lib/components/ui/sortable/sort-deck.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import {
		ActivityFeed,
		ActivityItem,
		Card as CardSchema,
		Deck as DeckSchema,
		StretchDeckAccount
	} from '$lib/schema';
	import { cn } from '$lib/utils';
	import { schema } from './schema';

	type DeckEditorProps = {
		/** All available cards to choose from */
		cards: co.loaded<co.List<typeof CardSchema>>;
		/** Mode: 'create' for new deck, 'edit' for existing deck */
		mode: 'create' | 'edit';
		/** Initial deck data (used in edit mode) */
		initialDeck?: co.loaded<typeof DeckSchema>;
	};

	let { cards, initialDeck, mode }: DeckEditorProps = $props();

	const me = new AccountCoState(StretchDeckAccount, {
		resolve: {
			root: true,
			profile: { decks: { $each: { cards: { $each: true } } } }
		}
	});
	// Media query for md breakpoint (768px)
	const isMd = new MediaQuery('(min-width: 768px)');
	const gridMinWidth = $derived(isMd.current ? '200px' : '120px');

	// Form state for deck name and description - initialize from initialDeck if provided
	let deckName = $state(initialDeck?.name ?? '');
	let deckDescription = $state(initialDeck?.description ?? '');

	// Form validation errors
	let errors = $state<
		| ZodError<{
				name: string;
				description: string;
		  }>
		| undefined
	>();

	const buttonLabel = $derived(mode === 'create' ? 'Create Deck' : 'Save Deck');

	// Check if form is valid for enabling submit button
	const isFormValid = $derived(deckName.trim().length > 0);

	// Track selected cards for the deck (using array to preserve order)
	// Initialize from initialDeck if provided
	let selectedCardIds = $state<string[]>(
		initialDeck?.cards.$isLoaded ? initialDeck.cards.map((c) => c.$jazz.id) : []
	);

	// Get the selected cards as an array (preserving selection order)
	let selectedCards = $derived(
		selectedCardIds.map((id) => cards.find((card) => card.$jazz.id === id)!).filter(Boolean)
	);

	// Tilt state for each card in the grid
	let cardTilts = new SvelteMap<string, { tiltX: number; tiltY: number }>();

	// Track flipped state per card
	let flippedCards = new SvelteSet<string>();

	// Track which card is currently transitioning
	let transitioningCardId = $state<string | null>(null);

	// Reorder dialog state
	let reorderDialogElement = $state<HTMLDialogElement | null>(null);
	let isReorderDialogOpen = $state(false);

	function openReorderDialog() {
		isReorderDialogOpen = true;
		reorderDialogElement?.showModal();
	}

	function closeReorderDialog() {
		isReorderDialogOpen = false;
		reorderDialogElement?.close();
	}

	function handleReorderDialogClose() {
		// Handle native dialog close (e.g., Escape key, backdrop click via closedby="any")
		isReorderDialogOpen = false;
	}

	// View transition name for cards in the reorder dialog (SortDeck)
	// No view transitions needed - just open/close the dialog normally
	function getReorderCardTransitionName(_card: string): string {
		return 'none';
	}

	function handleOrderChange(
		orderedCards: {
			type: 'stretch';
			$jazz: { id: string };
			areas: string[];
			thumbnails: any[];
			name: string;
			shareSecret: string;
			description: string;
			reps: number;
			units: string;
			sets: number;
			activity: any[];
			creator: any;
		}[]
	) {
		// Update the selectedCardIds to match the new order
		selectedCardIds = orderedCards.map((card) => card.$jazz.id);
	}

	function isSelected(cardId: string): boolean {
		return selectedCardIds.includes(cardId);
	}

	function handleCardClick(cardId: string) {
		const wasSelected = isSelected(cardId);

		// Use view transition if supported
		if (document.startViewTransition) {
			transitioningCardId = cardId;
			transitionDirection = wasSelected ? 'to-grid' : 'to-deck';

			const transition = document.startViewTransition(() => {
				flushSync(() => {
					if (wasSelected) {
						selectedCardIds = selectedCardIds.filter((id) => id !== cardId);
					} else {
						// Add new card at the beginning so it appears on top of the deck
						selectedCardIds = [cardId, ...selectedCardIds];
					}
				});
			});

			transition.finished.then(() => {
				transitioningCardId = null;
				transitionDirection = null;
			});
		} else {
			// Fallback for browsers without view transition support
			if (wasSelected) {
				selectedCardIds = selectedCardIds.filter((id) => id !== cardId);
			} else {
				// Add new card at the beginning so it appears on top of the deck
				selectedCardIds = [cardId, ...selectedCardIds];
			}
		}
	}

	function handleCardPointerMove(cardId: string, event: PointerEvent) {
		const target = event.currentTarget as HTMLElement;
		const bounds = target.getBoundingClientRect();
		const posX = event.clientX - bounds.x;
		const posY = event.clientY - bounds.y;
		const ratioX = posX / bounds.width - 0.5;
		const ratioY = posY / bounds.height - 0.5;

		// Clamp to -1 to 1 range and convert to tilt degrees
		const normalizedX = Math.max(-1, Math.min(1, ratioX * 2));
		const normalizedY = Math.max(-1, Math.min(1, ratioY * 2));

		cardTilts.set(cardId, {
			tiltX: normalizedY * -10,
			tiltY: normalizedX * 10
		});
	}

	function handleCardPointerLeave(cardId: string) {
		cardTilts.set(cardId, { tiltX: 0, tiltY: 0 });
	}

	function getCardTilt(cardId: string) {
		return cardTilts.get(cardId) ?? { tiltX: 0, tiltY: 0 };
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const data = {
			name: formData.get('name') as string,
			description: formData.get('description') as string
		};

		const result = schema.safeParse(data);

		if (!result.success) {
			const newErrors: Record<string, string> = {};
			errors = result.error;
			return;
		}

		errors = undefined;
		if (!me.current.$isLoaded) {
			return;
		}
		const cardsInOrder = selectedCardIds
			.map((id) => cards.find((card) => card.$jazz.id === id))
			.filter((card) => !!card?.$isLoaded);
		if (mode === 'create') {
			const newDeckOwnerGroup = co.group().create({ owner: me.current });
			// Map selectedCardIds to cards in the same order to ensure indices align

			const newDeck = DeckSchema.create(
				{
					name: result.data.name,
					description: result.data.description,
					cards: cardsInOrder,
					activity: ActivityFeed.create([]),
					shareSecret: newDeckOwnerGroup.$jazz.createInvite('reader'),
					creator: me.current.profile
				},
				{ owner: newDeckOwnerGroup }
			);
			me.current.profile.decks.$jazz.push(newDeck);

			goto('/decks');
		} else if (initialDeck) {
			initialDeck.$jazz.applyDiff({
				name: result.data.name,
				description: result.data.description
			});
			if (initialDeck.cards.$isLoaded) {
				initialDeck.cards.$jazz.applyDiff(cardsInOrder);
			}

			goto('/decks');
		}
	}

	// Track the direction of the transition: 'to-deck' or 'to-grid'
	let transitionDirection = $state<'to-deck' | 'to-grid' | null>(null);

	function getGridTransitionName(cardId: string, isPlaceholder: boolean): string {
		if (transitioningCardId !== cardId) return 'none';

		// The view transition captures old state, then new state.
		// We need the transition name on:
		// - to-deck: card (old) -> placeholder appears, deck card (new) - so card in grid gets name
		// - to-grid: placeholder (old) -> card (new) appears, deck card removed - so card in grid gets name
		//
		// For to-deck: isPlaceholder=false (showing card) should get the name
		// For to-grid: isPlaceholder=false (showing card after state change) should get the name
		//
		// So the CARD (not placeholder) always gets the transition name in the grid
		if (!isPlaceholder) {
			return `card-${cardId}`;
		}
		return 'none';
	}

	function getDeckCardTransitionName(card: co.loaded<typeof CardSchema>): string {
		// For grid-to-deck transitions only
		if (transitioningCardId === card.$jazz.id) {
			return `card-${card.$jazz.id}`;
		}
		return 'none';
	}
</script>

<div
	class="deck-editor-container pointer-events-auto col-span-3 row-span-3 grid grid-cols-1 grid-rows-[220px_1fr_30px] gap-1 overflow-visible scrollbar-thin md:grid-cols-[150px_1fr_300px]"
>
	<!-- Deck preview area - top right on small screens (row 1), right column on md+ -->
	<div
		class="deck-preview-area pointer-events-none col-span-1 row-span-1 row-start-1 flex max-w-full flex-row-reverse items-end justify-end gap-x-0 overflow-visible px-3 pt-5 pb-0 md:col-start-3 md:row-span-3 md:flex-col md:items-center md:justify-start md:py-4 md:pr-4"
	>
		<div
			class="deck-preview-wrapper pointer-events-none relative flex aspect-2/3 w-32 flex-col items-center justify-center overflow-visible md:w-full"
		>
			<!-- Match grid item size: 200px min-width with 2:3 aspect ratio = 200x300 container -->
			<div
				class="deck-preview pointer-events-none relative flex h-full w-full items-center justify-center overflow-visible rounded-lg border-2 border-dashed"
			>
				{#if selectedCards.length > 0}
					<div
						class="deck-preview-item pointer-events-auto relative h-full w-full overflow-visible"
					>
						<Deck
							aligned
							cards={selectedCards as any as co.loaded<co.List<typeof CardSchema>>}
							getViewTransitionName={getDeckCardTransitionName}
							onCardClick={() => openReorderDialog()}
							class="deck-preview-deck pointer-events-auto z-100"
						/>
					</div>
				{:else}
					<div class="flex h-full w-full flex-col items-center justify-center text-center">
						<span class="text-sm text-gray-500">Select cards to add to your deck</span>
						<!-- <span class="text-xs text-gray-400">0 cards selected</span> -->
					</div>
				{/if}
			</div>
			<div class="mt-2 hidden flex-col items-center gap-2 text-center md:flex">
				<span class="text-sm text-gray-600">{selectedCards.length} cards selected</span>
			</div>
			<Button type="submit" class="flex w-full md:hidden" disabled={!isFormValid}>
				{buttonLabel}
			</Button>
		</div>
		<!-- Form area - hidden on small screens, shown on md+ -->
		<form
			class="pointer-events-auto relative z-100 flex h-1/2 w-full flex-1 flex-col items-start justify-start md:h-full md:gap-4 md:py-4"
			onsubmit={handleSubmit}
		>
			<Field.Group
				class="flex max-h-full w-full flex-row gap-1 pt-1.5 pr-1 md:flex-col md:gap-4 md:pt-0 md:pr-0"
			>
				<Field.Field class="flex min-w-0 flex-1 gap-1" data-invalid={!!errors?.name}>
					<Field.Label
						class="bg-foreground px-0.5 text-sm leading-snug font-normal text-black uppercase"
						>Name</Field.Label
					>
					<Input
						id="deck-name"
						name="name"
						type="text"
						placeholder="Deck name"
						bind:value={deckName}
						class="text-base text-black md:text-xl"
					/>
					{#if errors}
						<Field.Error>{errors.name}</Field.Error>
					{/if}
				</Field.Field>
				<Field.Field class="relative flex min-w-0 flex-1 gap-1" data-invalid={!!errors?.message}>
					<Field.Label
						class="bg-foreground px-0.5 text-sm leading-snug font-normal text-black uppercase"
						>Description</Field.Label
					>
					<Textarea
						id="deck-description"
						name="description"
						placeholder="Deck description"
						bind:value={deckDescription}
						class="max-h-full min-h-20 max-w-full resize-none overflow-y-auto pt-1 text-sm text-black md:text-base"
					/>
					{#if errors}
						<Field.Error>{errors.message}</Field.Error>
					{/if}
				</Field.Field>
			</Field.Group>
			<Button type="submit" class="hidden w-full md:flex" disabled={!isFormValid}>
				{buttonLabel}
			</Button>
		</form>
	</div>

	<!-- Card grid area - full width row 2 on small screens, columns 1-2 rows 1-3 on md+ -->
	<ItemGrid
		items={cards}
		searchProperty="name"
		searchPlaceholder="Search cards..."
		emptyTitle="No cards found"
		onSelect={(item) => {
			handleCardClick(item.$jazz.id);
		}}
		emptyDescription="Try a different search term"
		minWidth={gridMinWidth}
		class="z-0 col-span-1 row-span-1 row-start-2 md:col-start-2 md:row-span-3 md:row-start-1 md:overflow-x-visible"
	>
		{#snippet children({ item, highlighted })}
			{@const cardId = item.$jazz.id}
			{@const tilt = getCardTilt(cardId)}
			{@const cardIsSelected = isSelected(cardId)}
			<div class="flex h-full w-full items-center justify-center">
				<button
					class="card-grid-item relative h-full w-full overflow-visible rounded-md transition-all focus-visible:outline-none!"
					class:ring-2={highlighted}
					class:ring-accent-500={highlighted}
					onpointermove={(e) => handleCardPointerMove(cardId, e)}
					onpointerleave={() => handleCardPointerLeave(cardId)}
				>
					{#if cardIsSelected}
						<!-- Empty placeholder for selected cards - no transition name here -->
						<div
							class="card-placeholder absolute inset-0 flex items-center justify-center rounded-lg border-2 border-dashed"
						>
							<!-- <span class="text-xs text-gray-400">In deck</span> -->
						</div>
					{:else}
						<!-- Show the actual card - has transition name only when card is visible -->
						<div
							class="card-wrapper h-full w-full"
							style:view-transition-name={transitioningCardId === cardId
								? `card-${cardId}`
								: 'none'}
						>
							<Card
								totalCards={0}
								index={0}
								progress={0}
								direction={1}
								tiltX={tilt.tiltX}
								tiltY={tilt.tiltY}
								isFlipped={flippedCards.has(cardId)}
								shadow={true}
								class="card-grid-card"
								card={item}
							/>
						</div>
					{/if}
				</button>
			</div>
		{/snippet}
		{#snippet footer({ item, highlighted })}
			<div
				data-selected={isSelected(item.$jazz.id)}
				class={cn(
					'deck-name-area transition-300 absolute bottom-0 left-0 z-100 flex w-full items-end justify-start opacity-0 data-[selected=true]:opacity-100'
				)}
			>
				<span
					class="truncate bg-foreground px-1 py-1 text-center text-sm font-medium text-black md:text-base"
				>
					{item.name}
				</span>
			</div>
		{/snippet}
	</ItemGrid>
</div>

<!-- Reorder cards modal -->
<dialog
	bind:this={reorderDialogElement}
	class="reorder-modal"
	onclose={handleReorderDialogClose}
	closedby="any"
>
	<div class="reorder-modal-content relative bg-background">
		<div class="grid-bg"></div>
		<div class="reorder-modal-header z-10">
			<h2 class="text-lg font-semibold text-black">Reorder Cards</h2>
			<p class="text-sm text-gray-500">Drag cards to reorder them in your deck</p>
		</div>
		<div class="reorder-modal-body">
			{#if isReorderDialogOpen}
				<SortDeck
					cards={selectedCards as co.loaded<typeof CardSchema>[]}
					onOrderChange={handleOrderChange}
					getViewTransitionName={getReorderCardTransitionName}
					minWidth={gridMinWidth}
					class="pointer-events-auto z-100 h-full w-full"
				/>
			{/if}
		</div>
		<div class="reorder-modal-footer">
			<button
				type="button"
				class="z-10 rounded bg-gray-900 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800"
				onclick={closeReorderDialog}
			>
				Done
			</button>
		</div>
	</div>
</dialog>

<style>
	.deck-preview-area {
		container-type: size;
	}

	.deck-preview {
		container-type: size;
	}

	.deck-preview-item {
		container-type: size;
	}

	.deck-preview-item :global(.deck-preview-deck) {
		position: absolute;
		inset: unset;
		margin: unset;
		top: 50%;
		left: 50%;
		width: 360px;
		aspect-ratio: 2 / 3;
		translate: -50% -50%;
		/* Use same scale as grid cards for smooth view transitions */
		scale: calc(100cqh / 540px);
	}

	.card-grid-item {
		container-type: size;
	}

	.card-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.card-wrapper :global(.card-grid-card),
	.card-grid-item :global(.card-grid-card) {
		inset: unset;
		margin: unset;
		top: 50%;
		left: 50%;
		width: 360px;
		aspect-ratio: 2 / 3;
		translate: -50% -50%;
		/* Scale based on the smaller of width or height to ensure card fits */
		scale: min(calc(100cqh / 540px), calc(100cqw / 360px));
	}

	.card-placeholder {
		/* Scale placeholder to match card size */
		width: 100%;
		height: 100%;
	}

	/* View transition animations for cards */
	:global(::view-transition-old(card-*)),
	:global(::view-transition-new(card-*)) {
		animation-duration: 0.3s;
		animation-timing-function: ease-in-out;
	}

	/* Reorder modal styles */
	.reorder-modal {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		max-width: 100vw;
		max-height: 100vh;
		margin: 0;
		padding: 0;
		background: transparent;
		overflow: hidden;
	}

	.reorder-modal[open] {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.reorder-modal::backdrop {
		background: rgba(0, 0, 0, 0.85);
		backdrop-filter: blur(4px);
	}

	.reorder-modal-content {
		display: flex;
		flex-direction: column;
		width: min(90vw, 1200px);
		height: min(90vh, 800px);
		overflow: hidden;
	}

	.reorder-modal-header {
		padding: 1rem 1.5rem;
		flex-shrink: 0;
	}

	.reorder-modal-body {
		flex: 1;
		overflow: auto;
		padding: 1rem;
	}

	.reorder-modal-footer {
		padding: 1rem 1.5rem;
		border-top: 1px solid #e5e7eb;
		display: flex;
		justify-content: flex-end;
		flex-shrink: 0;
	}

	.grid-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		background-image:
			repeating-linear-gradient(
				oklch(from #0047ff 0.9 calc(c * 0.2) h) 0 1px,
				transparent 1px 100%
			),
			repeating-linear-gradient(
				90deg,
				oklch(from #0047ff 0.9 calc(c * 0.2) h) 0 1px,
				transparent 1px 100%
			);
		background-size: round(nearest, var(--grid-x), 1px) round(nearest, var(--grid-y), 1px);
	}
</style>
