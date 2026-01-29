<script lang="ts">
	import type { Snippet } from 'svelte';
	import { LayoutContext, setLayoutContext } from '$lib/context/layout.svelte';

	const layoutContext = new LayoutContext();
	setLayoutContext(layoutContext);

	let { children }: { children: Snippet } = $props();
</script>

{@render children()}
