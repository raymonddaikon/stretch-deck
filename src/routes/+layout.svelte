<script lang="ts">
	import './layout.css';
	import { pwaInfo } from 'virtual:pwa-info';
	import { type SyncConfig } from 'jazz-tools';
	import AuthProvider from 'jazz-tools/better-auth/auth/svelte';
	import { JazzSvelteProvider } from 'jazz-tools/svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { onNavigate } from '$app/navigation';
	import { PUBLIC_JAZZ_API_KEY } from '$env/static/public';
	import favicon from '$lib/assets/favicon.svg';
	import { authClient } from '$lib/auth/auth.client';
	import LanguageSwitcher from '$lib/components/ui/language-switcher/language-switcher.svelte';
	import ProfileButton from '$lib/components/ui/profile-button.svelte';
	import * as m from '$lib/paraglide/messages';
	import {
		locales as availableLocales,
		getLocale,
		isLocale,
		type Locale,
		setLocale
	} from '$lib/paraglide/runtime';
	import { onAnonymousAccountDiscarded, StretchDeckAccount } from '$lib/schema';
	import AppHeader from './app-header.svelte';
	import LayoutProvider from './layout-provider.svelte';

	// Enable cross-document view transitions for smooth page navigation
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	// import 'jazz-tools/inspector/register-custom-element';

	const sync: SyncConfig = {
		peer: `wss://cloud.jazz.tools/?key=${PUBLIC_JAZZ_API_KEY}`,
		// peer: 'ws://localhost:4200',
		when: 'always'
	};

	const webManifestLink = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');

	type NavItem = {
		href: string;
		text: string;
	};

	const navItems: NavItem[] = [
		{ href: '/create-deck', text: m.create_deck() },
		{ href: '/create-card', text: m.create_card() },
		{ href: '/decks', text: m.all_decks() },
		{ href: '/cards', text: m.all_cards() },
		{ href: '/add', text: m.add() }
	];

	let { children } = $props();

	let currentLang = $derived(getLocale());

	const languageLabels: Partial<Record<Locale, string>> = {
		en: m.english(),
		jp: m.japanese()
		// Add labels for all your configured locales in project.inlang/settings.json
	};

	const languages = availableLocales.map((code) => ({
		code,
		label: languageLabels[code] ?? code.toUpperCase()
	}));
</script>

{#snippet navItem({ href, text }: NavItem)}
	<a
		{href}
		class="focused:text-black pointer-events-auto z-50 flex-none bg-primary px-1 text-base text-primary-foreground uppercase select-none hover:bg-foreground hover:text-black focus:bg-foreground"
	>
		{text}
	</a>
{/snippet}

<svelte:head><link rel="icon" href={favicon} />{@html webManifestLink}</svelte:head>
<ModeWatcher />
<!-- <jazz-inspector /> -->
<JazzSvelteProvider
	{sync}
	{onAnonymousAccountDiscarded}
	enableSSR
	guestMode={false}
	AccountSchema={StretchDeckAccount}
>
	<AuthProvider betterAuthClient={authClient as any}>
		<LayoutProvider>
			<div class="grid-bg h-svh w-svw"></div>

			<div
				class="relative grid h-svh w-svw grid-cols-1 grid-rows-1 overflow-x-clip overflow-y-hidden overscroll-contain"
			>
				<div class="deck pointer-events-none grid">
					<AppHeader />
					<nav
						class="pointer-events-auto fixed inset-x-0 bottom-0 z-110 flex scrollbar-none flex-row items-end justify-start gap-x-2.5 gap-y-4.5 overflow-x-auto px-2.5 pb-2.5 [grid-area:footer] *:leading-snug md:fixed md:inset-x-auto md:top-0 md:bottom-0 md:left-0 md:h-full md:flex-col md:items-start md:justify-start md:pt-80 md:pb-0"
					>
						<ProfileButton />
						{#each navItems as item}
							{@render navItem(item)}
						{/each}
						<LanguageSwitcher
							{languages}
							bind:value={currentLang}
							onChange={(code: string) => {
								if (isLocale(code)) setLocale(code);
							}}
						/>
					</nav>
				</div>

				<div
					class="deck-wrapper pointer-events-none grid grid-cols-subgrid grid-rows-subgrid overflow-x-hidden md:overflow-x-visible!"
				>
					{@render children()}
				</div>
			</div>
		</LayoutProvider>
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
		grid-template-columns: auto 1fr 90px;
		grid-template-rows: auto 1fr auto;
	}

	@media (min-width: 768px) {
		.deck {
			grid-area: 1/1;
			grid-template-areas:
				'header header header'
				'sidebar deck aside'
				'sidebar footer footer';
			/*grid-template-columns: 1fr min(360px, 90%) 1fr;*/
			grid-template-columns: auto 1fr 15ch;
			grid-template-rows: 1fr min(360px * 1.5, 90svw * 1.5) 1fr;
		}
	}

	.deck-wrapper {
		grid-area: 1/1;
		/*grid-template-columns: 150px 1fr 150px;*/
		grid-template-columns: auto 1fr auto;
		grid-template-rows: 90px 1fr 36px;
		/*grid-template-rows: auto 1fr auto;*/
		width: 100svw;
		height: 100svh;
	}

	@media (min-width: 768px) {
		.deck-wrapper {
			grid-area: 1/1;
			/*grid-template-columns: 150px 1fr 150px;
			grid-template-rows: auto 1fr auto;*/
			grid-template-columns: 140px 1fr 15ch;
			grid-template-rows: 1fr min(360px * 1.5, 90svw * 1.5) 1fr;
			width: 100%;
			height: 100%;
		}
	}
</style>
