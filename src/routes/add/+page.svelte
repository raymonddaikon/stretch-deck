<script lang="ts">
	import type { ID } from 'jazz-tools';
	import { CoState } from 'jazz-tools/svelte';
	import { page } from '$app/state';
	import { CardEditor } from '$lib/components/ui/card-editor';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { Card } from '$lib/schema';

	const layout = getLayoutContext();

	$effect(() => {
		layout.title = m.add();
		layout.subtitle = '';
	});
</script>
