<script lang="ts">
	import { co } from 'jazz-tools';
	import { SpatialMenu } from 'melt/builders';
	import { watch } from 'runed';
	import type { Snippet } from 'svelte';
	import { Card as CardSchema, Deck as DeckSchema } from '$lib/schema';
	import { cn, fuzzysearch } from '$lib/utils';

	type GridProps<TItem = co.loaded<typeof CardSchema> | co.loaded<typeof DeckSchema>> = {
		items: co.loaded<co.List<typeof CardSchema>> | co.loaded<co.List<typeof DeckSchema>>;
		searchProperty: keyof TItem;
		searchPlaceholder?: string;
		emptyTitle?: string;
		emptyDescription?: string;
		onSelect?: (item: TItem) => void;
		onHighlightChange?: (item: TItem | null) => void;
		children: Snippet<
			[
				{
					item: TItem;
					highlighted: boolean;
					selected: boolean;
					disabled: boolean;
				}
			]
		>;
		minWidth?: string;
		footer?: Snippet<
			[
				{
					item: TItem;
					highlighted: boolean;
					selected: boolean;
					disabled: boolean;
				}
			]
		>;
		class?: string;
		scrollIndex?: number;
		totalItems?: number;
	};

	let {
		items,
		searchProperty,
		searchPlaceholder = 'Search...',
		emptyTitle = 'No items found',
		emptyDescription = 'Try adjusting your search terms',
		onSelect,
		onHighlightChange,
		footer,
		children,
		minWidth = '200px',
		class: className,
		scrollIndex = $bindable(0),
		totalItems = $bindable(0)
	}: GridProps<any> = $props();

	let gridWrapper: HTMLElement | undefined = $state();

	// Update totalItems when filtered items change

	watch(
		() => filtered.length,
		() => {
			totalItems = filtered.length;
		}
	);

	// Calculate scroll index based on scroll position
	function updateScrollIndex() {
		if (!gridWrapper) return;

		const gridElement = gridWrapper.querySelector('.item-grid') as HTMLElement;
		if (!gridElement) return;

		const gridItems = gridElement.children;
		if (gridItems.length === 0) return;

		// Check if we're in mobile (horizontal scroll) or desktop (vertical scroll) mode
		const isMobile = window.matchMedia('(max-width: 767px)').matches;

		if (isMobile) {
			// Horizontal scroll - find first visible item
			const containerLeft = gridWrapper.scrollLeft;
			const containerWidth = gridWrapper.clientWidth;
			const containerCenter = containerLeft + containerWidth / 2;

			let closestIndex = 0;
			let closestDistance = Infinity;

			for (let i = 0; i < gridItems.length; i++) {
				const item = gridItems[i] as HTMLElement;
				const itemCenter = item.offsetLeft + item.offsetWidth / 2;
				const distance = Math.abs(itemCenter - containerCenter);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = i;
				}
			}

			scrollIndex = closestIndex;
		} else {
			// Vertical scroll - find first visible item
			const containerTop = gridWrapper.scrollTop;
			const containerHeight = gridWrapper.clientHeight;
			const containerCenter = containerTop + containerHeight / 2;

			let closestIndex = 0;
			let closestDistance = Infinity;

			for (let i = 0; i < gridItems.length; i++) {
				const item = gridItems[i] as HTMLElement;
				const itemCenter = item.offsetTop + item.offsetHeight / 2;
				const distance = Math.abs(itemCenter - containerCenter);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = i;
				}
			}

			scrollIndex = closestIndex;
		}
	}

	const spatialMenu = new SpatialMenu({
		wrap: true,
		crossAxis: true,
		scrollBehavior: 'smooth',
		onHighlightChange: (highlighted) => {
			onHighlightChange?.(highlighted);
		},
		onSelect: (value) => {
			onSelect?.(value);
		}
	});

	let search = $state('');

	const filtered = $derived(
		// @ts-expect-error
		fuzzysearch({ needle: search, haystack: items, property: searchProperty })
	);
	const selected: string[] = $state([]);

	function toggle(arr: string[], value: string) {
		const index = arr.indexOf(value);
		if (index === -1) arr.push(value);
		else arr.splice(index, 1);
	}
</script>

<div
	class={cn(
		'flex flex-col items-center gap-3 focus-visible:outline-0 md:overflow-x-visible',
		className
	)}
	{...spatialMenu.root}
>
	<!-- <label class="focus-within:border-accent-500 w-64 border-b-2 border-gray-800 transition">
		<input
			class="w-full bg-transparent outline-none!"
			bind:value={search}
			placeholder={searchPlaceholder}
			{...spatialMenu.input}
		/>
	</label> -->

	{#if filtered.length}
		<div
			bind:this={gridWrapper}
			onscroll={updateScrollIndex}
			class="grid-wrapper scrollbar-none h-full w-full overflow-x-auto p-2 md:min-h-0 md:overflow-x-visible! md:overflow-y-auto md:pt-34 md:pb-12"
		>
			<div class="item-grid grid gap-4" style:--grid-min-size={minWidth}>
				{#each filtered as gridItem (gridItem.$jazz.id)}
					{@const item = spatialMenu.getItem(gridItem, {
						onSelect: () => toggle(selected, gridItem.$jazz.id)
					})}
					{@const isSelected = selected.includes(gridItem.$jazz.id)}
					<div
						class={[
							'group @container relative aspect-2/3 scroll-mt-14 scroll-mb-8 transition'
							// item.highlighted && 'scale-105'
						]}
						style="--grid-item-size: 100cqw;"
						{...item.attrs}
					>
						{@render children({
							item: gridItem,
							highlighted: item.highlighted,
							selected: isSelected,
							disabled: item.disabled
						})}
						{@render footer?.({
							item: gridItem,
							highlighted: item.highlighted,
							selected: isSelected,
							disabled: item.disabled
						})}
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<!-- empty state -->
		<div class="mt-4 flex flex-col items-center justify-center gap-1 p-2">
			<!-- <div class="text-center text-sm font-medium">{emptyTitle}</div>
			<div class="text-center text-xs text-gray-500">{emptyDescription}</div> -->
		</div>
	{/if}
</div>

<style>
	/* Enable container queries for the grid wrapper */
	.grid-wrapper {
		container-type: size;
	}

	/* Mobile: horizontal scroll with exactly 2 rows */
	.item-grid {
		height: 100%;
		grid-auto-flow: column;
		/* 2 rows that split the container height evenly */
		grid-template-rows: repeat(2, 1fr);
		/* Column width based on row height and 2:3 aspect ratio */
		/* Each row is 50% height, so column width = (50% height) * (2/3) */
		grid-auto-columns: calc((50cqh - 0.5rem) * (2 / 3));
	}

	/* md breakpoint (768px): standard responsive grid with vertical scroll */
	@media (min-width: 768px) {
		.item-grid {
			height: auto;
			grid-auto-flow: row;
			grid-auto-columns: auto;
			grid-template-rows: none;
			grid-template-columns: repeat(auto-fill, minmax(var(--grid-min-size), 1fr));
		}
	}
</style>
