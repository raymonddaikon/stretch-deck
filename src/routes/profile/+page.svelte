<script lang="ts">
	import { AccountCoState } from 'jazz-tools/svelte';
	import { watch } from 'runed';
	import { authClient } from '$lib/auth/auth.client';
	import { ProfileIcon } from '$lib/components/icons';
	import PersonalActivityCalendar from '$lib/components/ui/activity-calendar/personal-activity-calendar.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { onSignUp, StretchDeckAccount } from '$lib/schema';
	import { cn } from '$lib/utils';

	const layout = getLayoutContext();

	$effect(() => {
		layout.title = m.profile();
		layout.subtitle = '';
	});

	const me = new AccountCoState(StretchDeckAccount, {
		resolve: {
			root: true,
			profile: {
				friends: { $each: true },
				decks: { $each: true },
				cards: { $each: true }
			}
		}
	});

	watch(
		() => me.current.$isLoaded,
		() => {
			if (me.current.$isLoaded && me.current.profile.$isLoaded) {
				if (!me.current.profile.email) {
					onSignUp(me.current);
				}
				const imageUrl = authClient.useSession.get().data?.user.image;
				if (imageUrl && me.current.profile.imageUrl !== imageUrl) {
					me.current.profile.$jazz.set('imageUrl', imageUrl);
				}
			}
		}
	);

	// Counts
	const deckCount = $derived(
		me.current.$isLoaded && me.current.profile.$isLoaded && me.current.profile.decks.$isLoaded
			? me.current.profile.decks.length
			: 0
	);
	const cardCount = $derived(
		me.current.$isLoaded && me.current.profile.$isLoaded && me.current.profile.cards.$isLoaded
			? me.current.profile.cards.length
			: 0
	);
	const friendCount = $derived(
		me.current.$isLoaded && me.current.profile.$isLoaded && me.current.profile.friends.$isLoaded
			? me.current.profile.friends.length
			: 0
	);

	// Display name logic
	const displayName = $derived.by(() => {
		if (!me.current.$isLoaded || !me.current.profile.$isLoaded) return '';
		return me.current.profile.displayName || me.current.profile.name || '';
	});

	const username = $derived.by(() => {
		if (!me.current.$isLoaded || !me.current.profile.$isLoaded) return '';
		return me.current.profile.username || '';
	});

	async function signInWithGoogle() {
		await authClient.signIn.social({
			provider: 'google',
			scopes: [
				'https://www.googleapis.com/auth/userinfo.email',
				'https://www.googleapis.com/auth/userinfo.profile'
			],
			callbackURL: '/profile'
		});
	}

	async function signOut() {
		await authClient.signOut();
	}

	// Delete account handling
	let showDeleteConfirm = $state(false);
	let isDeleting = $state(false);

	async function deleteAccount() {
		isDeleting = true;
		try {
			await authClient.deleteUser();
		} catch (error) {
			console.error('Failed to delete account:', error);
			isDeleting = false;
			showDeleteConfirm = false;
		}
	}
</script>

{#if me.current.$isLoaded && me.current.profile.$isLoaded}
	{#if me.current.profile.anonymous}
		<!-- Anonymous user: show sign-in UI -->
		<div
			class="pointer-events-auto col-span-3 row-span-3 row-start-1 flex h-full flex-col items-center justify-center gap-6 p-4 pt-20 md:px-35 md:pt-4"
		>
			<div class="flex w-full max-w-sm flex-col gap-2 text-left">
				<h3 class="text-xl font-medium text-black">{m.create_account_title()}</h3>
				<p class="text-base text-black/70">{m.create_account_description()}</p>
			</div>

			<div class="flex w-full max-w-sm flex-col gap-3">
				<button onclick={signInWithGoogle} class="button h-9 cursor-pointer justify-start gap-3">
					<svg class="size-5" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
						/>
						<path
							fill="currentColor"
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
						/>
						<path
							fill="currentColor"
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
						/>
						<path
							fill="currentColor"
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
						/>
					</svg>
					{m.continue_with_google()}
				</button>
			</div>

			<!-- <div class="flex w-full max-w-sm items-center gap-3">
				<div class="h-px flex-1 bg-black/10"></div>
				<span class="text-sm text-black/50">{m.or_use_email()}</span>
				<div class="h-px flex-1 bg-black/10"></div>
			</div> -->
		</div>
	{:else}
		<!-- Authenticated user: show profile -->
		<div
			class="pointer-events-auto col-span-3 row-span-2 row-start-1 flex h-full flex-col items-start overflow-y-auto px-[1ch] pt-20 pb-[2ch] md:row-span-3 md:px-35 md:pt-30"
		>
			<!-- Profile Header -->
			<div class="flex flex-none flex-row flex-wrap items-center gap-3">
				<Avatar.Root class={cn('flex-none', username ? 'size-15' : 'size-10')}>
					{#if me.current.profile.imageUrl}
						<Avatar.Image
							referrerpolicy="no-referrer"
							src={me.current.profile.imageUrl}
							alt={displayName}
						/>
					{/if}
					<Avatar.Fallback class="bg-muted text-xl">
						{#if displayName}
							{displayName.charAt(0).toUpperCase()}
						{:else}
							<ProfileIcon class="size-6" />
						{/if}
					</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex h-full min-w-0 flex-1 flex-col items-start justify-start gap-0">
					<h2 class="h-5 w-full truncate text-base font-medium text-black">
						{displayName}
					</h2>
					{#if username}
						<p class="text-sm leading-5 text-black/60">@{username}</p>
					{/if}
					{#if me.current.profile.email}
						<p class="w-full truncate text-sm leading-5 text-black/60">
							{me.current.profile.email}
						</p>
					{/if}
				</div>
				<!-- Stats -->
				<div class="flex h-full flex-none flex-row items-start gap-4">
					<div class="flex h-full flex-col items-start gap-0">
						<span class="h-5 text-base font-semibold text-black">{deckCount}</span>
						<span class="text-sm leading-5 text-black/60">{m.decks()}</span>
					</div>
					<div class="flex h-full flex-col items-start gap-0">
						<span class="h-5 text-base font-semibold text-black"> {cardCount}</span>
						<span class="text-sm leading-5 text-black/60">{m.cards()}</span>
					</div>
					<!-- <div class="flex flex-col items-start gap-0">
					<span class="text-base font-semibold text-black"> {friendCount}</span>
					<span class="text-xs text-black/60">{m.friends()}</span>
				</div> -->
				</div>
			</div>

			<!-- Activity Calendar -->
			<div class="flex flex-none flex-col gap-1">
				<div class="overflow-hidden rounded">
					<PersonalActivityCalendar class="w-full max-w-105" />
				</div>
			</div>

			<!-- Friends -->
			<!-- <div class="flex flex-none flex-col gap-1">
				<h3 class="text-xs font-medium text-black">{m.friends()}</h3>
				{#if me.current.profile.friends.$isLoaded && me.current.profile.friends.length > 0}
					<div class="flex flex-wrap gap-1">
						{#each me.current.profile.friends as friend (friend?.$jazz.id)}
							{#if friend?.$isLoaded}
								<div
									class="flex items-center gap-1.5 rounded border border-border bg-white px-1.5 py-0.5"
								>
									<Avatar.Root class="size-5">
										{#if friend.imageUrl}
											<Avatar.Image src={friend.imageUrl} alt={friend.displayName || friend.name} />
										{/if}
										<Avatar.Fallback class="bg-muted text-xs">
											{(friend.displayName || friend.name || '?').charAt(0).toUpperCase()}
										</Avatar.Fallback>
									</Avatar.Root>
									<span class="text-xs text-black">{friend.displayName || friend.name}</span>
								</div>
							{/if}
						{/each}
					</div>
				{:else}
					<p class="text-xs text-black/50">{m.no_friends_yet()}</p>
				{/if}
			</div> -->

			<!-- Sign Out -->
			<div class="flex flex-none pt-2">
				<button onclick={signOut} class="button">
					{m.sign_out()}
				</button>
				<!-- Delete Account -->
				<!-- <div class="flex flex-none flex-col gap-2 pt-4">
					{#if showDeleteConfirm}
						<div class="flex flex-col gap-2 rounded border border-red-200 bg-red-50 p-3">
							<h3 class="text-sm font-medium text-red-800">{m.delete_account_confirm()}</h3>
							<p class="text-xs text-red-600">{m.delete_account_disclosure()}</p>
							<div class="flex gap-2">
								<button
									onclick={deleteAccount}
									disabled={isDeleting}
									class="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700 disabled:opacity-50"
								>
									{isDeleting ? m.deleting() : m.delete_account_button()}
								</button>
								<button
									onclick={() => (showDeleteConfirm = false)}
									disabled={isDeleting}
									class="button"
								>
									{m.cancel()}
								</button>
							</div>
						</div>
					{:else}
						<button
							onclick={() => (showDeleteConfirm = true)}
							class="w-fit text-xs text-red-600 hover:text-red-800 hover:underline"
						>
							{m.delete_account()}
						</button>
					{/if}
				</div> -->
			</div>
		</div>
	{/if}
{/if}
