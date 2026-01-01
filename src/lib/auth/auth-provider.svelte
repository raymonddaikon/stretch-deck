<script lang="ts">
	import { getAuthSecretStorage, getJazzContext } from 'jazz-tools/svelte';
	import type { Snippet } from 'svelte';
	import { LayoutContext, setLayoutContext } from '$lib/context/layout.svelte';

	import { authClient } from './auth.client';

	const jazzContext = getJazzContext();
	const authSecretStorage = getAuthSecretStorage();

	authClient.jazz.setJazzContext(jazzContext.current);
	authClient.jazz.setAuthSecretStorage(authSecretStorage);

	const layoutContext = new LayoutContext();
	setLayoutContext(layoutContext);

	let { children }: { children: Snippet } = $props();
</script>

{@render children()}
