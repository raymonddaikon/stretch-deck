<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import ChevronLeftIcon from '$lib/components/icons/chevron-left.svelte';
	import { type ButtonVariant, buttonVariants } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		variant = 'ghost',
		...restProps
	}: CalendarPrimitive.PrevButtonProps & {
		variant?: ButtonVariant;
	} = $props();
</script>

<CalendarPrimitive.PrevButton
	bind:ref
	class={cn(
		buttonVariants({ variant }),
		'size-2.5 bg-transparent p-0 select-none disabled:opacity-50 rtl:rotate-180',
		className
	)}
	onclick={(e) => e.stopPropagation()}
	{...restProps}
>
	{#if children}
		{@render children()}
	{:else}
		<ChevronLeftIcon class="size-2.5" />
	{/if}
</CalendarPrimitive.PrevButton>
