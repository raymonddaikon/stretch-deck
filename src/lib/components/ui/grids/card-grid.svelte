<script lang="ts">
	import { co } from 'jazz-tools';
	import { MediaQuery, SvelteSet } from 'svelte/reactivity';
	import { Card } from '$lib/components/ui/card';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import { Card as CardSchema } from '$lib/schema';
	import ItemGrid from './item-grid.svelte';

	const layoutContext = getLayoutContext();

	type CardGridProps = {
		cards: co.loaded<co.List<typeof CardSchema>>;
		scrollIndex?: number;
		totalItems?: number;
		itemsShown?: number;
	};

	let {
		cards,
		scrollIndex = $bindable(0),
		totalItems = $bindable(0),
		itemsShown = $bindable(0)
	}: CardGridProps = $props();

	const tiltRange = 10;
	const isMobile = new MediaQuery('(pointer: coarse) and (hover: none)');

	// Subscribe to device orientation events on mobile
	$effect(() => {
		if (!isMobile.current) return;
		return layoutContext.subscribeOrientation();
	});

	// Track the single hovered card and its tilt (only one card hovered at a time)
	let hoveredCardId = $state<string | null>(null);
	let hoveredTilt = $state({ tiltX: 0, tiltY: 0 });
	const zeroTilt = { tiltX: 0, tiltY: 0 };

	// Track flipped state per card
	let flippedCards = new SvelteSet<string>();

	function handleCardClick(cardId: string) {
		if (flippedCards.has(cardId)) {
			flippedCards.delete(cardId);
		} else {
			flippedCards.add(cardId);
		}
	}

	function handleCardPointerMove(cardId: string, event: PointerEvent) {
		if (isMobile.current) return;

		hoveredCardId = cardId;
		const target = event.currentTarget as HTMLElement;
		const bounds = target.getBoundingClientRect();
		const ratioX = (event.clientX - bounds.x) / bounds.width - 0.5;
		const ratioY = (event.clientY - bounds.y) / bounds.height - 0.5;

		const normalizedX = Math.max(-1, Math.min(1, ratioX * 2));
		const normalizedY = Math.max(-1, Math.min(1, ratioY * 2));

		hoveredTilt = {
			tiltX: normalizedY * -tiltRange,
			tiltY: normalizedX * tiltRange
		};
	}

	function handleCardPointerLeave() {
		if (isMobile.current) return;
		hoveredCardId = null;
		hoveredTilt = zeroTilt;
	}

	function getCardTilt(cardId: string) {
		if (isMobile.current) {
			return layoutContext.getTilt(tiltRange);
		}
		return cardId === hoveredCardId ? hoveredTilt : zeroTilt;
	}

	// Use SvelteSet for reactive mutations without replacing the object
	let visibleIds = new SvelteSet<string>();
</script>

<ItemGrid
	items={cards}
	searchProperty="name"
	searchPlaceholder="Search cards..."
	emptyTitle="No cards found"
	onSelect={(selected) => {
		// console.log(selected);
	}}
	emptyDescription="Try a different search term"
	bind:scrollIndex
	bind:totalItems
	bind:itemsShown
	{visibleIds}
	class="pointer-events-auto col-span-3 row-span-2 row-start-2 md:row-span-3 md:overflow-x-hidden! md:px-35"
>
	{#snippet children({ item, highlighted })}
		{@const tilt = getCardTilt(item.$jazz.id)}
		{@const isVisible = visibleIds.size === 0 ? true : visibleIds.has(item.$jazz.id)}
		<div class="flex h-full w-full items-center justify-center py-1">
			<button
				class="card-grid-item relative h-full w-full overflow-visible rounded-md"
				class:ring-2={highlighted}
				class:ring-accent-500={highlighted}
				onpointermove={(e) => handleCardPointerMove(item.$jazz.id, e)}
				onpointerleave={handleCardPointerLeave}
				onclick={() => handleCardClick(item.$jazz.id)}
			>
				<Card
					totalCards={0}
					index={0}
					progress={0}
					direction={1}
					tiltX={tilt.tiltX}
					tiltY={tilt.tiltY}
					{tiltRange}
					isNearFront={isVisible}
					isFlipped={flippedCards.has(item.$jazz.id)}
					shadow={true}
					class="card-grid-card"
					card={item}
					viewTransitionName={`card-${item.$jazz.id}`}
				/>
			</button>
		</div>
	{/snippet}
</ItemGrid>

<style>
	.card-grid-item {
		container-type: size;
	}

	.card-grid-item :global(.card-grid-card) {
		/* Override the default card-wrapper sizing */
		inset: unset;
		margin: unset;
		top: 50%;
		left: 50%;
		width: 360px;
		aspect-ratio: 2 / 3;
	}

	/* Apply transforms to the .card element which has the view-transition-name */
	.card-grid-item :global(.card-grid-card .card) {
		/* Scale based on the smaller of width or height to ensure card fits */
		/* Height-based: 100cqh / 540px, Width-based: 100cqw / 360px */
		/* Use translate for centering, scale for sizing */
		translate: -50% -50%;
		scale: min(calc(100cqh / 540px), calc(100cqw / 360px));
	}
</style>
