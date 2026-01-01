<script lang="ts">
	import { scramble } from '$lib/actions/scramble.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';

	const layoutContext = getLayoutContext();
</script>

<header
	class="pointer-events-auto flex flex-col items-start gap-0 px-1.5 pt-[2ch] [grid-area:header] md:gap-[0.5ch] md:px-0 md:pt-[1ch]"
>
	<h2
		class="text-3xl leading-[1.3ch] text-black select-none text-box-trim md:text-5xl md:leading-[1.44ch] md:-tracking-[0.15ch] md:text-box-normal"
		use:scramble={() => {
			return {
				text: layoutContext.title,
				duration: 0.5,
				speed: 50
			};
		}}
	></h2>
	{#if layoutContext.subtitle}
		<p class="px-1 text-base text-black tabular-nums opacity-50 md:px-2.5 md:text-xl">
			{layoutContext.subtitle}
		</p>
	{/if}
</header>
