<script lang="ts">
	// import { page } from '$app/state';
	// import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import { pwaInfo } from 'virtual:pwa-info';
	import { type SyncConfig } from 'jazz-tools';
	import { JazzSvelteProvider } from 'jazz-tools/svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { PUBLIC_JAZZ_API_KEY } from '$env/static/public';
	import { scramble } from '$lib/actions/scramble.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import AuthProvider from '$lib/auth/auth-provider.svelte';
	import { setLayoutContext } from '$lib/context/layout.svelte';
	import { StretchDeckAccount } from '$lib/schema';

	// import 'jazz-tools/inspector/register-custom-element';

	const sync: SyncConfig = {
		peer: `wss://cloud.jazz.tools/?key=${PUBLIC_JAZZ_API_KEY}`,
		// peer: 'ws://localhost:4200',
		when: 'always'
	};

	const webManifestLink = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');

	const layoutContext = $state({ title: '', subtitle: '' });
	setLayoutContext(layoutContext);

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} />{@html webManifestLink}</svelte:head>
<ModeWatcher />
<!-- <jazz-inspector /> -->
<JazzSvelteProvider {sync} enableSSR guestMode={false} AccountSchema={StretchDeckAccount}>
	<AuthProvider>
		<div class="grid-bg h-screen w-screen"></div>

		<div
			class="relative grid h-screen w-screen grid-cols-1 grid-rows-1 overflow-x-clip overflow-y-hidden overscroll-contain"
		>
			<div class="deck pointer-events-none grid gap-[1.5ch]">
				<header
					class="pointer-events-auto flex max-w-full flex-col items-start gap-[1ch] px-2.5 pt-4 [grid-area:header] md:px-1 md:pt-1.5 lg:max-w-1/2"
				>
					<h2
						class="text-3xl text-black select-none md:text-5xl"
						use:scramble={() => {
							return {
								text: layoutContext.title,
								duration: 0.5,
								speed: 50
							};
						}}
					></h2>
					{#if layoutContext.subtitle}
						<p class="px-1 text-lg text-black tabular-nums opacity-50 md:px-3">
							{layoutContext.subtitle}
						</p>
					{/if}
				</header>
				<nav
					class="flex flex-row items-center justify-start gap-[2ch] px-[1.3ch] pt-1 [grid-area:footer] *:bg-foreground *:leading-snug md:flex-col md:items-start md:pt-px md:[grid-area:sidebar]"
				>
					<a
						href="/create-deck"
						class="pointer-events-auto z-50 flex-none text-base text-black uppercase"
					>
						Create Deck
					</a>
					<a
						href="/create-card"
						class="pointer-events-auto z-50 flex-none text-base text-black uppercase"
					>
						Create Card
					</a>
					<a
						href="/decks"
						class="pointer-events-auto z-50 flex-none text-base text-black uppercase"
					>
						All Decks
					</a>
					<a
						href="/cards"
						class="pointer-events-auto z-50 flex-none text-base text-black uppercase"
					>
						All Cards
					</a>
				</nav>
			</div>

			<div
				class="deck-wrapper pointer-events-none grid grid-cols-subgrid grid-rows-subgrid overflow-x-hidden md:overflow-x-visible!"
			>
				{@render children()}
			</div>
		</div>

		<!-- <div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div> -->
	</AuthProvider>
</JazzSvelteProvider>

<style>
	.grid-bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: -100;
		margin: 0;
		background-image:
			repeating-linear-gradient(
				oklch(from #0047ff 0.9 calc(c * 0.2) h) 0 1px,
				transparent 1px 100%
			),
			repeating-linear-gradient(
				90deg,
				oklch(from #0047ff 0.9 calc(c * 0.2) h) 0 1px,
				transparent 1px 100%
			);
		background-size: round(nearest, var(--grid-x), 1px) round(nearest, var(--grid-y), 1px);
		pointer-events: none;
	}

	.deck {
		grid-area: 1/1;
		grid-template-areas:
			'header header header'
			'sidebar deck aside'
			'footer footer footer';
		/*grid-template-columns: 1fr min(360px, 90%) 1fr;*/
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
	}

	@media (min-width: 768px) {
		.deck {
			grid-area: 1/1;
			grid-template-areas:
				'header header header'
				'sidebar deck aside'
				'footer footer footer';
			/*grid-template-columns: 1fr min(360px, 90%) 1fr;*/
			grid-template-columns: auto 1fr auto;
			grid-template-rows: 1fr min(360px * 1.5, 90svw * 1.5) 1fr;
		}
	}

	.deck-wrapper {
		grid-area: 1/1;
		/*grid-template-columns: 150px 1fr 150px;*/
		grid-template-rows: 110px 1fr 30px;
		width: 100%;
		height: 100%;
	}

	@media (min-width: 768px) {
		.deck-wrapper {
			grid-area: 1/1;
			/*grid-template-columns: 150px 1fr 150px;
			grid-template-rows: auto 1fr auto;*/
			grid-template-columns: 140px 1fr 140px;
			grid-template-rows: 1fr min(360px * 1.5, 90svw * 1.5) 1fr;
			width: 100%;
			height: 100%;
		}
	}
</style>
