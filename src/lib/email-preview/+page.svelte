<script lang="ts">
	import type { PreviewData } from 'svelte-email-tailwind/preview';
	import PreviewInterface from 'svelte-email-tailwind/preview/PreviewInterface.svelte';

	let { data }: { data: PreviewData } = $props();
</script>

<PreviewInterface {data} email="name@example.com" />
