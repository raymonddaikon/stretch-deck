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
		itemsShown?: number;
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
		totalItems = $bindable(0),
		itemsShown = $bindable(0)
	}: GridProps<any> = $props();

	let gridWrapper: HTMLElement | undefined = $state();
	let outerContainer: HTMLElement | undefined = $state();

	// Update totalItems when filtered items change
	watch(
		() => filtered.length,
		() => {
			totalItems = filtered.length;
		}
	);

	// Recalculate on mount, when items change, or when containers become available
	$effect(() => {
		// Depend on filtered.length and containers to recalculate when items change or element mounts
		filtered.length;
		if (!gridWrapper || !outerContainer) return;

		// Use double requestAnimationFrame to ensure layout is complete
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				updateItemsShown();
			});
		});
	});

	// Attach scroll listener to the correct container based on screen size
	$effect(() => {
		if (!outerContainer) return;

		const handleScroll = () => updateItemsShown();
		outerContainer.addEventListener('scroll', handleScroll);

		return () => {
			outerContainer.removeEventListener('scroll', handleScroll);
		};
	});

	// Handle window resize
	$effect(() => {
		if (typeof window === 'undefined') return;

		const handleResize = () => {
			updateItemsShown();
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	// Calculate items shown based on scroll position and viewport
	function updateItemsShown() {
		if (!gridWrapper || !outerContainer) return;

		const gridElement = gridWrapper.querySelector('.item-grid') as HTMLElement;
		if (!gridElement) return;

		const gridItems = gridElement.children;
		if (gridItems.length === 0) {
			itemsShown = 0;
			scrollIndex = 0;
			return;
		}

		const isMobile = window.matchMedia('(max-width: 767px)').matches;

		if (isMobile) {
			// Mobile: horizontal scroll - use gridWrapper as scroll container
			const wrapperRect = gridWrapper.getBoundingClientRect();
			let count = 0;
			let closestIndex = 0;
			let closestDistance = Infinity;
			const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

			for (let i = 0; i < gridItems.length; i++) {
				const item = gridItems[i] as HTMLElement;
				const itemRect = item.getBoundingClientRect();

				// Count items whose right edge is within or before the wrapper's right edge
				if (itemRect.right <= wrapperRect.right + 1) {
					count++;
				}

				// Find center item for scrollIndex
				const itemCenter = itemRect.left + itemRect.width / 2;
				const distance = Math.abs(itemCenter - wrapperCenter);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = i;
				}
			}

			itemsShown = Math.max(count, 1); // At least 1 if there are items
			scrollIndex = closestIndex;
		} else {
			// Desktop: vertical scroll - use outerContainer as scroll container
			const containerRect = outerContainer.getBoundingClientRect();
			let count = 0;
			let closestIndex = 0;
			let closestDistance = Infinity;
			const containerCenter = containerRect.top + containerRect.height / 2;

			for (let i = 0; i < gridItems.length; i++) {
				const item = gridItems[i] as HTMLElement;
				const itemRect = item.getBoundingClientRect();

				// Count items whose bottom edge is within or before the container's bottom edge
				if (itemRect.bottom <= containerRect.bottom + 1) {
					count++;
				}

				// Find center item for scrollIndex
				const itemCenter = itemRect.top + itemRect.height / 2;
				const distance = Math.abs(itemCenter - containerCenter);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = i;
				}
			}

			itemsShown = Math.max(count, 1); // At least 1 if there are items
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
	bind:this={outerContainer}
	class={cn(
		'flex scrollbar-none! flex-col items-center gap-3 overflow-y-visible focus-visible:outline-0 md:overflow-x-visible md:overflow-y-auto',
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
			onscroll={updateItemsShown}
			class="grid-wrapper scrollbar-none! min-h-full w-full overflow-x-auto overflow-y-visible! md:min-h-0 md:overflow-x-visible! md:overflow-y-auto md:pt-34 md:pb-12"
		>
			<div
				class="item-grid relative grid w-fit items-center gap-4 px-2.5 pt-4 pb-14 md:w-auto md:px-2 md:pb-4"
				style:--grid-min-size={minWidth}
			>
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
		grid-template-rows: 1fr 1fr;
		/*Container height minus gap (1rem) minus padding (4.375rem) */
		grid-auto-columns: calc(((100cqh - 1rem - 4.375rem) / 2) * (2 / 3));
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
