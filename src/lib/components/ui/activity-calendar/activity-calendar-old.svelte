<script lang="ts">
	import { endOfInterval } from '@layerstack/utils';
	import { scaleThreshold } from 'd3-scale';
	// import { range } from 'd3-array';
	import { timeMonth, timeYear } from 'd3-time';
	import { Calendar, Chart, type ChartContextValue, Layer, Tooltip } from 'layerchart';
	import type { AnyScale } from 'layerchart/utils/scales.svelte';
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';

	type Data = {
		date: Date;
		value: number | null;
	};

	type ActivityCalendarProps = {
		data: Data[];
		class?: string;
	};

	let { data, class: className }: ActivityCalendarProps = $props();

	const now = new Date();

	const firstDayOfYear = timeYear.floor(now);
	const firstDayOfMonth = timeMonth.floor(now);
	const lastDayOfMonth = endOfInterval('month', now);
	const lastDayOfYear = endOfInterval('year', now);
	let chartContext: ChartContextValue<any, AnyScale, AnyScale> | undefined = $state();
</script>

<div class={cn('relative h-60 w-auto rounded-sm p-4', className)}>
	<Chart
		bind:context={chartContext}
		{data}
		x="date"
		c="value"
		position="relative"
		cScale={scaleThreshold()}
		cDomain={[25, 50, 75]}
		cRange={[
			'var(--color-blue-100)',
			'var(--color-blue-300)',
			'var(--color-blue-500)',
			'var(--color-blue-700)'
		]}
	>
		{#snippet children({ context })}
			<Layer type="svg">
				<Calendar
					start={firstDayOfYear}
					end={lastDayOfYear}
					tooltipContext={context.tooltip}
					monthLabel
					cellSize={30}
					monthPath={{ class: 'stroke-border!' }}
				>
					<!-- {#snippet children({ cells, cellSize })}
						{#each cells as cell}
							<div
								class="absolute border border-border/50 p-px"
								style:left="{cell.x}px"
								style:top="{cell.y}px"
								style:width="{cellSize[0]}px"
								style:height="{cellSize[1]}px"
								onpointermove={(e) => context.tooltip?.show(e, cell.data)}
								onpointerleave={(e) => context.tooltip?.hide()}
							>
								<div
									class="h-full w-full rounded"
									style:background-color={cell.color ?? 'var(--color-disabled)'}
								></div>
							</div>
						{/each}
					{/snippet} -->
				</Calendar>
			</Layer>

			<Tooltip.Root
				props={{
					container: {
						class:
							'rounded-sm bg-foreground/80! z-50! border-[1.4px] border-transparent bg-clip-padding bg-blend-luminosity backdrop-blur-2xl backdrop-saturate-200'
					}
				}}
			>
				{#snippet children({ data })}
					<Tooltip.Header value={data.date} class="font-mono text-black" format="day" />

					{#if data.value != null}1
						<Tooltip.List>
							<Tooltip.Item
								label="value"
								value={data.value}
								format="integer"
								valueAlign="right"
								class="text-black!"
								props={{
									root: { class: 'text-black!' },
									label: { class: 'text-black!' }
								}}
							/>
						</Tooltip.List>
					{/if}
				{/snippet}
			</Tooltip.Root>
		{/snippet}
	</Chart>
</div>
