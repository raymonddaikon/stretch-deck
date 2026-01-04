<script lang="ts">
	import { co } from 'jazz-tools';
	import { SvelteMap, SvelteSet } from 'svelte/reactivity';
	import { Card } from '$lib/components/ui/card';
	import { Card as CardSchema } from '$lib/schema';
	import ItemGrid from './item-grid.svelte';

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

	// Tilt state for each card in the grid
	let cardTilts = new SvelteMap<string, { tiltX: number; tiltY: number }>();

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
			tiltX: normalizedY * -10, // Tilt around X axis based on Y position
			tiltY: normalizedX * 10 // Tilt around Y axis based on X position
		});
	}

	function handleCardPointerLeave(cardId: string) {
		cardTilts.set(cardId, { tiltX: 0, tiltY: 0 });
	}

	function getCardTilt(cardId: string) {
		return cardTilts.get(cardId) ?? { tiltX: 0, tiltY: 0 };
	}
</script>

<ItemGrid
	items={cards}
	searchProperty="name"
	searchPlaceholder="Search cards..."
	emptyTitle="No cards found"
	onSelect={(selected) => {
		console.log(selected);
	}}
	emptyDescription="Try a different search term"
	bind:scrollIndex
	bind:totalItems
	bind:itemsShown
	class="pointer-events-auto col-span-3 row-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-span-3 md:overflow-x-visible"
>
	{#snippet children({ item, highlighted })}
		{@const tilt = getCardTilt(item.$jazz.id)}
		<div class="flex h-full w-full items-center justify-center py-1">
			<button
				class="card-grid-item relative h-full w-full overflow-visible rounded-md"
				class:ring-2={highlighted}
				class:ring-accent-500={highlighted}
				onpointermove={(e) => handleCardPointerMove(item.$jazz.id, e)}
				onpointerleave={() => handleCardPointerLeave(item.$jazz.id)}
				onclick={() => handleCardClick(item.$jazz.id)}
			>
				<Card
					totalCards={0}
					index={0}
					progress={0}
					direction={1}
					tiltX={tilt.tiltX}
					tiltY={tilt.tiltY}
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
		/* Use transform for both centering and scaling */
		inset: unset;
		margin: unset;
		top: 50%;
		left: 50%;
		width: 360px;
		aspect-ratio: 2 / 3;
		/* Scale based on the smaller of width or height to ensure card fits */
		/* Height-based: 100cqh / 540px, Width-based: 100cqw / 360px */
		/* Use translate for centering, scale for sizing */
		translate: -50% -50%;
		scale: min(calc(100cqh / 540px), calc(100cqw / 360px));
	}
</style>
