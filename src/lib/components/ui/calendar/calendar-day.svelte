<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CalendarPrimitive.DayProps = $props();
</script>

<CalendarPrimitive.Day
	bind:ref
	class={cn(
		'flex size-full flex-col items-center justify-center gap-1 p-0 leading-none font-normal whitespace-nowrap select-none',
		'[&[data-today]:not([data-selected])]:border-2 [&[data-today]:not([data-selected])]:border-border [&[data-today][data-disabled]]:text-muted-foreground',
		'data-selected:border-2 data-selected:border-black',
		// Outside months
		// '[&[data-outside-month]:not([data-selected])]:text-muted-foreground [&[data-outside-month]:not([data-selected])]:hover:text-accent-foreground',
		// Disabled
		'data-disabled:pointer-events-none data-disabled:text-muted-foreground data-disabled:opacity-50',
		// Unavailable
		'data-unavailable:text-muted-foreground data-unavailable:line-through',
		// hover
		// 'dark:hover:text-accent-foreground',
		// focus
		'focus:relative focus:border-ring focus:ring-ring/50',
		// inner spans
		'[&>span]:text-xs [&>span]:opacity-70',
		className
	)}
	onclick={(e) => e.stopPropagation()}
	{...restProps}
/>
