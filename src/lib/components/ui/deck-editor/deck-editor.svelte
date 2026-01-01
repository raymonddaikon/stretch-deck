<script lang="ts">
	import { co, deleteCoValues } from 'jazz-tools';
	import { watch } from 'runed';
	import { flushSync } from 'svelte';
	import { MediaQuery, SvelteMap, SvelteSet } from 'svelte/reactivity';
	import type { ZodError } from 'zod';
	import { goto } from '$app/navigation';
	import { ExitIcon } from '$lib/components/icons';
	import { Card } from '$lib/components/ui/card';
	import Deck from '$lib/components/ui/deck/deck.svelte';
	import * as Field from '$lib/components/ui/field';
	import ItemGrid from '$lib/components/ui/grids/item-grid.svelte';
	import { Input } from '$lib/components/ui/input';
	import SortDeck from '$lib/components/ui/sortable/sort-deck.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { ActivityFeed, Card as CardSchema, Deck as DeckSchema } from '$lib/schema';
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

	const buttonLabel = $derived(mode === 'create' ? m.create_deck() : m.save_deck());

	// Track selected cards for the deck (using array to preserve order)
	// Initialize from initialDeck if provided
	let selectedCardIds = $state<string[]>(
		initialDeck?.cards.$isLoaded
			? initialDeck.cards.filter((c) => c.$jazz.loadingState !== 'deleted').map((c) => c.$jazz.id)
			: []
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

	// 'select' for choosing cards, 'sort' for reordering
	let editorMode = $state<'select' | 'sort'>('select');
	const layoutContext = getLayoutContext();

	watch(
		() => editorMode,
		() => {
			if (editorMode === 'select') {
				layoutContext.title = initialDeck ? m.edit_deck() : m.create_deck();
				// layout.subtitle = initialDeck ? (initialDeck.name ?? '') : '';
			} else {
				layoutContext.title = m.sort();
			}
		}
	);

	function switchToSortMode() {
		if (selectedCards.length === 0) return;

		if (document.startViewTransition) {
			// Inject dynamic styles to ensure transitioning cards are on top
			const style = document.createElement('style');
			const zIndexRules = selectedCardIds
				.map((id) => `::view-transition-group(sort-card-${id}) { z-index: 1000; }`)
				.join('\n');
			style.textContent = zIndexRules;
			document.head.appendChild(style);

			// Update transition names synchronously BEFORE starting the transition
			// This ensures the old state captures the sort-card-* names
			flushSync(() => {
				isSwitchingMode = true;
			});

			const transition = document.startViewTransition(async () => {
				flushSync(() => {
					editorMode = 'sort';
				});
			});

			transition.finished.then(() => {
				style.remove();
				isSwitchingMode = false;
			});
		} else {
			editorMode = 'sort';
		}
	}

	function switchToSelectMode() {
		if (document.startViewTransition) {
			// Inject dynamic styles to ensure transitioning cards are on top
			const style = document.createElement('style');
			const zIndexRules = selectedCardIds
				.map((id) => `::view-transition-group(sort-card-${id}) { z-index: 1000; }`)
				.join('\n');
			style.textContent = zIndexRules;
			document.head.appendChild(style);

			// Keep switching mode true so deck preview keeps sort-card-* names during transition
			flushSync(() => {
				isSwitchingMode = true;
			});

			const transition = document.startViewTransition(async () => {
				flushSync(() => {
					editorMode = 'select';
				});
			});

			transition.finished
				.then(() => {
					style.remove();
					isSwitchingMode = false;
				})
				.catch(() => {
					style.remove();
					isSwitchingMode = false;
				});
		} else {
			editorMode = 'select';
		}
	}

	// View transition name for cards in the SortDeck
	function getSortCardTransitionName(cardId: string): string | undefined {
		// Only use sort-card-* when SortDeck should be the source/target of transitions
		// When switching FROM sort mode, SortDeck is the "old" state (before editorMode changes)
		// When in sort mode normally, use sort-card-*
		// When switching TO sort mode (editorMode still 'select'), SortDeck shouldn't have names
		if (isSwitchingMode && editorMode === 'select') {
			// Switching to sort mode - deck preview has the names, SortDeck shouldn't
			return undefined;
		}
		return `sort-card-${cardId}`;
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

			// Inject a dynamic style to ensure the transitioning card is on top during view transition
			const style = document.createElement('style');
			style.textContent = `::view-transition-group(card-${cardId}) { z-index: 100; }`;
			document.head.appendChild(style);

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
				// Clean up the dynamic style
				style.remove();
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
			errors = result.error;
			console.log(errors);
			return;
		}

		errors = undefined;
		if (!layoutContext.me.current.$isLoaded) {
			return;
		}
		const cardsInOrder = selectedCardIds
			.map((id) => cards.find((card) => card.$jazz.id === id))
			.filter((card) => !!card?.$isLoaded);
		if (mode === 'create') {
			const newDeckOwnerGroup = co.group().create({ owner: layoutContext.me.current }).makePublic();
			// Map selectedCardIds to cards in the same order to ensure indices align

			const newDeck = DeckSchema.create(
				{
					name: result.data.name,
					description: result.data.description,
					cards: cardsInOrder,
					activity: ActivityFeed.create([]),
					shareSecret: newDeckOwnerGroup.$jazz.createInvite('reader'),
					creator: layoutContext.me.current.profile
				},
				{ owner: newDeckOwnerGroup }
			);
			layoutContext.me.current.profile.decks.$jazz.push(newDeck);

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

	// Track if we're in the middle of a mode switch transition
	let isSwitchingMode = $state(false);

	function getDeckCardTransitionName(card: co.loaded<typeof CardSchema>): string | undefined {
		// When switching TO sort mode, deck preview uses sort-card-* (before editorMode changes)
		// When in select mode normally, use card-* to match the card grid
		// When switching FROM sort mode, deck preview should NOT have transition names
		// to avoid conflicts with SortDeck cards
		if (isSwitchingMode && editorMode === 'select') {
			// Switching to sort mode - deck preview captures "old" state with sort-card-*
			return `sort-card-${card.$jazz.id}`;
		}
		if (editorMode === 'sort') {
			// In sort mode or switching from sort - deck is hidden, no transition name needed
			return undefined;
		}
		// Normal select mode - use simple card-* names to match card-grid for cross-page transitions
		return `card-${card.$jazz.id}`;
	}

	// Derived map of deck card transition names - this creates a reactive dependency
	const deckCardTransitionNames = $derived(
		new Map(
			selectedCards.map((card) => [
				card.$jazz.id,
				card.$isLoaded ? getDeckCardTransitionName(card) : undefined
			])
		)
	);

	// TODO: Look into why we need to recreate the maps instead of using SvelteMap
	// const deckCardTransitionNames = new SvelteMap<string, string>();
	// const sortCardTransitionNames = new SvelteMap<string, string>();
	// watch(
	// 	() => selectedCards,
	// 	() => {
	// 		selectedCards.forEach((card) => {
	// 			if (card.$isLoaded) {
	// 				deckCardTransitionNames.set(card.$jazz.id, getDeckCardTransitionName(card));
	// 				sortCardTransitionNames.set(card.$jazz.id, getSortCardTransitionName(card.$jazz.id));
	// 			}
	// 		});
	// 	}
	// );

	// Function that reads from the reactive map (index param for Deck component compatibility)
	function getDeckCardTransitionNameFromMap(
		card: co.loaded<typeof CardSchema>,
		_index?: number
	): string | undefined {
		return deckCardTransitionNames.get(card.$jazz.id);
	}

	// Derived map of sort card transition names - this creates a reactive dependency
	const sortCardTransitionNames = $derived(
		new Map(selectedCards.map((card) => [card.$jazz.id, getSortCardTransitionName(card.$jazz.id)]))
	);

	// Function that reads from the reactive map
	function getSortCardTransitionNameFromMap(cardId: string): string | undefined {
		return sortCardTransitionNames.get(cardId);
	}

	// Deck name is required and at least one card must be selected
	const isFormValid = $derived(deckName.trim().length > 0 && selectedCardIds.length > 0);

	// Track if the confirm delete overlay is showing
	let showConfirmDelete = $state(false);

	async function handleDelete() {
		if (!initialDeck || !layoutContext.me.current.$isLoaded) return;

		const profile = await layoutContext.me.current.profile.$jazz.ensureLoaded({
			resolve: {
				cards: true,
				decks: true
			}
		});

		// Remove card from user's cards list
		profile.decks.$jazz.remove((item) => item.$jazz.id === initialDeck.$jazz.id);

		await deleteCoValues(DeckSchema, initialDeck.$jazz.id, {
			resolve: {
				activity: {
					$each: true
				}
			}
		});

		goto('/decks');
	}
</script>

<div
	class="deck-editor-container scrollbar-thin pointer-events-auto col-span-3 row-span-3 grid grid-cols-1 grid-rows-[220px_1fr] overflow-visible md:grid-cols-[150px_1fr_300px]"
>
	<!-- Deck preview area - top right on small screens (row 1), right column on md+ -->
	<div
		class="deck-preview-area pointer-events-none col-span-1 row-span-1 row-start-1 flex max-w-full flex-row-reverse items-end justify-end gap-x-0 overflow-visible px-3 pt-5 pb-0 md:col-start-3 md:row-span-3 md:flex-col md:items-center md:justify-start md:py-5 md:pr-2.5 md:pl-0"
	>
		<div
			class="deck-preview-wrapper pointer-events-none relative flex aspect-2/3 h-full flex-col items-center justify-center overflow-visible md:h-auto md:w-full"
		>
			<!-- Match grid item size: 200px min-width with 2:3 aspect ratio = 200x300 container -->
			<div
				class="deck-preview pointer-events-none relative flex h-full w-full items-center justify-center overflow-visible rounded-lg border-2 border-dashed"
			>
				{#if editorMode === 'sort'}
					<!-- Sort mode: show Done Sorting button overlay -->
					<button
						class="pointer-events-auto absolute inset-0 z-10 h-full w-full cursor-pointer border-border text-black hover:border-2"
						onclick={switchToSelectMode}
					>
						{m.done_sorting()}
					</button>
				{/if}
				{#if selectedCards.length > 0}
					<!-- Keep Deck in DOM during sort mode for view transitions, but hide it visually -->
					<div
						class="deck-preview-item pointer-events-auto relative h-full w-full overflow-visible"
						class:invisible={editorMode === 'sort'}
					>
						<Deck
							aligned
							tiltRange={8}
							cards={selectedCards as any as co.loaded<co.List<typeof CardSchema>>}
							getViewTransitionName={getDeckCardTransitionNameFromMap}
							transitionKey={deckCardTransitionNames}
							onCardClick={switchToSortMode}
							class="deck-preview-deck pointer-events-auto z-100"
						/>
					</div>
				{:else if editorMode === 'select'}
					<div class="flex h-full w-full flex-col items-center justify-center text-center">
						<span class="text-sm text-gray-500">{m.select_cards()}</span>
					</div>
				{/if}
			</div>
		</div>
		<!-- Form area - hidden on small screens, shown on md+ -->
		{#if !showConfirmDelete}
			<form
				class="pointer-events-auto relative z-100 flex h-[calc(100%-3.375rem)] w-full flex-1 flex-col items-start justify-start pr-1 md:h-full md:gap-4 md:pt-4 md:pr-0"
				onsubmit={handleSubmit}
			>
				<Field.Group class="flex max-h-full w-full flex-1 flex-col gap-1 md:gap-2">
					<Field.Field class="flex min-w-0 gap-1" data-invalid={!!errors}>
						<Field.Label
							class="bg-foreground px-0.5 text-sm leading-snug font-normal text-black uppercase"
							>{m.name()}</Field.Label
						>
						<Input
							id="deck-name"
							name="name"
							type="text"
							placeholder={m.deck_name_placeholder()}
							bind:value={deckName}
							class="text-base text-black md:text-lg"
						/>
						{#if errors}
							<Field.Error>{errors.name}</Field.Error>
						{/if}
					</Field.Field>
					<Field.Field class="relative flex min-w-0 flex-1 gap-1" data-invalid={!!errors?.message}>
						<Field.Label
							class="bg-foreground px-0.5 text-sm leading-snug font-normal text-black uppercase"
							>{m.description()}</Field.Label
						>
						<Textarea
							id="deck-description"
							name="description"
							placeholder={m.deck_description_placeholder()}
							bind:value={deckDescription}
							class="max-h-full max-w-full flex-1 resize-none overflow-y-auto pt-1 text-sm text-black md:min-h-20 md:text-base"
						/>
						{#if errors}
							<Field.Error>{errors?.message}</Field.Error>
						{/if}
					</Field.Field>
				</Field.Group>
				<div class="flex w-full gap-2 md:flex-col">
					{#if mode === 'edit'}
						<button
							type="button"
							class="button-destructive flex-1"
							onclick={(e) => {
								e.preventDefault();
								showConfirmDelete = true;
							}}
						>
							{m.delete()}
						</button>
					{/if}
					<button type="submit" class="button flex-1" disabled={!isFormValid}>
						{`${buttonLabel} [${selectedCards.length}]`}
					</button>
				</div>
			</form>
		{:else}
			<div
				class="pointer-events-auto relative z-100 flex h-[calc(100%-3.375rem)] w-full flex-1 flex-col items-start justify-start gap-2 pr-1 md:h-full md:gap-4 md:pt-4 md:pr-0"
			>
				<p class="text-base font-medium text-black">
					{m.delete_confirm()}
				</p>
				<p class="flex-1 text-sm font-medium text-black">
					{m.delete_disclosure()}
				</p>
				<div class="flex w-full gap-2">
					<button
						class="button flex-1 rounded-md transition-colors"
						onclick={(e) => {
							e.preventDefault();
							showConfirmDelete = false;
						}}
					>
						{m.cancel()}
					</button>
					<button class="button-destructive flex-1 transition-colors" onclick={handleDelete}>
						{m.delete()}
					</button>
				</div>
			</div>
		{/if}
	</div>

	<!-- Grid area - full width row 2 on small screens, columns 1-2 rows 1-3 on md+ -->
	<!-- Shows either card selection grid or sort grid based on editor mode -->
	<div
		class="relative z-0 col-span-1 row-span-1 row-start-2 overflow-visible md:col-span-2 md:row-span-3 md:row-start-1"
		data-mode={editorMode}
	>
		{#if editorMode === 'select'}
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
				class="h-full w-full md:overflow-x-hidden! md:pl-35"
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
								<!-- Empty placeholder for selected cards -->
								<div
									class="card-placeholder absolute inset-0 flex items-center justify-center rounded-lg border-2 border-dashed"
								>
									<ExitIcon class="size-15 text-border" />
								</div>
							{:else}
								<!-- Show the actual card - has transition name for cross-document transitions -->
								<div class="card-wrapper h-full w-full">
									<Card
										totalCards={0}
										index={0}
										progress={0}
										direction={1}
										tiltRange={8}
										tiltX={tilt.tiltX}
										tiltY={tilt.tiltY}
										isFlipped={flippedCards.has(cardId)}
										shadow={true}
										class="card-grid-card"
										card={item}
										viewTransitionName={`card-${cardId}`}
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
		{/if}
		{#if editorMode === 'sort' || isSwitchingMode}
			<!-- Keep SortDeck in DOM during transitions for smooth view transitions -->
			<div
				class="sort-grid-container h-full w-full md:overflow-x-visible"
				class:invisible={editorMode !== 'sort'}
			>
				<SortDeck
					cards={selectedCards as co.loaded<typeof CardSchema>[]}
					onOrderChange={handleOrderChange}
					getViewTransitionName={getSortCardTransitionNameFromMap}
					minWidth={gridMinWidth}
					class="pointer-events-auto z-100 h-full w-full md:overflow-x-visible"
				/>
			</div>
		{/if}
	</div>
</div>

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
		height: 100%;
		/*aspect-ratio: 2 / 3;*/
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
	}

	/* Apply transforms to .card element which has view-transition-name */
	.card-wrapper :global(.card-grid-card .card),
	.card-grid-item :global(.card-grid-card .card) {
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

	/* View transition animations for sort mode cards (deck preview <-> sort grid) */
	:global(::view-transition-old(sort-card-*)),
	:global(::view-transition-new(sort-card-*)) {
		animation-duration: 0.35s;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Note: z-index for sort-card-* is set dynamically in switchToSortMode/switchToSelectMode
	   because CSS wildcard selectors don't work with view transition pseudo-elements */

	/* Sort grid container */
	.sort-grid-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
	}
</style>
