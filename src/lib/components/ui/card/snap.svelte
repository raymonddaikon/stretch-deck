<script lang="ts">
	import { transform } from 'motion';
	import type { Snippet } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import { blossom } from './blossom-action';

	interface Props {
		progress: { value: number };
		length: number;
		renderCard: Snippet<[number]>;
	}

	let { progress = $bindable(), length, renderCard }: Props = $props();

	const touchSupport = new MediaQuery('(pointer: coarse) and (hover: none)');

	// Handle progress updates from blossom action
	function handleProgress(newProgress: number) {
		progress.value = newProgress;
	}

	// Blossom options - reactive to prop changes
	const blossomOptions = $derived({
		length,
		onProgress: handleProgress,
		axis: 'auto' as const
	});

	// Fallback scroll handler for touch devices
	function handleScroll(
		e: UIEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) {
		const scrollProgress = touchSupport.current
			? e.currentTarget.scrollLeft / (e.currentTarget.scrollWidth - e.currentTarget.clientWidth)
			: e.currentTarget.scrollTop / (e.currentTarget.scrollHeight - e.currentTarget.clientHeight);

		const newProgress = transform(scrollProgress, [0, 1], [0, length - 1]);
		if (isFinite(newProgress)) {
			progress.value = newProgress;
		}
	}
</script>

<div use:blossom={blossomOptions} onscroll={handleScroll} class="snap">
	{#each { length }, index (index)}
		<div class="snap-item" style="--index: {index}">
			{@render renderCard(index)}
		</div>
	{/each}
</div>

<style>
	.snap {
		width: 100%;
		height: 100dvh;
		scroll-snap-type: y mandatory;
		scrollbar-width: none;
		overflow: auto;
	}

	.snap::-webkit-scrollbar {
		display: none;
	}

	.snap-item {
		height: 100%;
		scroll-snap-stop: normal;
		scroll-snap-align: center;
	}

	@media (pointer: coarse) and (hover: none) {
		.snap {
			display: flex;
			scroll-snap-type: x mandatory;
			scroll-snap-stop: always;
		}
		.snap-item {
			flex-shrink: 0;
			scroll-snap-stop: normal;
			scroll-snap-align: center;
			width: 100%;
		}
	}
</style>
