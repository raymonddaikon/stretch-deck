<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CalendarPrimitive.HeaderProps = $props();
</script>

<CalendarPrimitive.Header
	bind:ref
	class={cn(
		'flex w-full items-center justify-between gap-1.5 px-1 py-2 text-sm font-medium',
		className
	)}
	{...restProps}
/>
