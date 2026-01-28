<script lang="ts">
	import { scramble } from '$lib/actions/scramble.svelte';
	import QrShareButton from '$lib/components/ui/qr-share-button.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import { cn } from '$lib/utils';

	const layoutContext = getLayoutContext();

	let heading: HTMLHeadingElement;
</script>

<header
	class="pointer-events-auto flex flex-col items-start gap-0 px-1.5 pt-[2ch] [grid-area:header] md:gap-[0.5ch] md:px-0 md:pt-[1ch]"
>
	<h2
		bind:this={heading}
		class={cn(
			'text-3xl leading-[1.3ch] text-black! select-none [word-spacing:-0.5ch] text-box-trim md:text-5xl md:leading-[1.44ch] md:-tracking-[0.15ch] md:text-box-normal',
			layoutContext.qrLink ? 'pr-17.5 md:pr-22.5' : 'pr-0'
		)}
		use:scramble={() => {
			return {
				text: layoutContext.title,
				duration: 0.5,
				speed: 50
			};
		}}
	></h2>
	{#if layoutContext.subtitle}
		<p
			class={cn(
				'px-1 text-base text-black tabular-nums opacity-50 md:px-2.5 md:text-xl',
				layoutContext.qrLink && heading.clientHeight > 40 ? 'pr-17.5 md:pr-0' : 'pr-0'
			)}
		>
			{layoutContext.subtitle}
		</p>
	{/if}
	{#if layoutContext.qrLink}
		<div class="absolute top-[2ch] right-[1ch]">
			<div class="relative size-[6ch] md:size-[8ch]">
				<QrShareButton shareUrl={layoutContext.qrLink} class="relative z-100" />
			</div>
		</div>
	{/if}
</header>
