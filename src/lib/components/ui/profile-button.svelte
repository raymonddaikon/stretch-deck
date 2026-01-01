<script lang="ts">
	import { ProfileIcon } from '$lib/components/icons';
	import * as Avatar from '$lib/components/ui/avatar';
	import { getLayoutContext } from '$lib/context/layout.svelte';

	const layoutContext = getLayoutContext();
</script>

<a href="/profile" class="sticky left-0 z-100">
	<Avatar.Root class="size-5.5 rounded-none md:size-10">
		{#if layoutContext.me.current.$isLoaded && layoutContext.me.current.profile.$isLoaded && layoutContext.me.current.profile.imageUrl}
			<Avatar.Image
				src={layoutContext.me.current.profile.imageUrl}
				alt={layoutContext.me.current?.profile?.displayName ??
					layoutContext.me.current.profile.username ??
					layoutContext.me.current.profile.name}
				referrerpolicy="no-referrer"
			/>
		{/if}
		<Avatar.Fallback class="rounded-none"><ProfileIcon /></Avatar.Fallback>
	</Avatar.Root>
</a>
