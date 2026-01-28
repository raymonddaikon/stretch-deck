<script lang="ts">
	import type { InviteSecret } from 'jazz-tools';
	import { CoState } from 'jazz-tools/svelte';
	import { watch } from 'runed';
	import { MediaQuery } from 'svelte/reactivity';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { deviceOrientation } from '$lib/actions/device-orientation.svelte';
	import { Card as CardComponent } from '$lib/components/ui/card';
	import DeckComponent from '$lib/components/ui/deck/deck.svelte';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import Scan from '$lib/qr-code/scan.svelte';
	import { Card, Deck } from '$lib/schema';

	const layoutContext = getLayoutContext();

	// Derive invite params from URL - reactive to URL changes
	const urlInvite = $derived.by(() => {
		const type = page.url.searchParams.get('type');
		const id = page.url.searchParams.get('id');

		if (type && id && (type === 'card' || type === 'deck')) {
			return { type, id } as const;
		}
		return null;
	});

	// The active invite (from URL params)
	const inviteType = $derived(urlInvite?.type ?? null);
	const inviteId = $derived(urlInvite?.id ?? null);

	// Load the card or deck for preview
	const previewCard = new CoState(Card, () => (inviteType === 'card' ? inviteId : undefined), {
		resolve: {
			thumbnails: true,
			activity: true
		}
	});

	const previewDeck = new CoState(Deck, () => (inviteType === 'deck' ? inviteId : undefined), {
		resolve: {
			cards: {
				$each: {
					thumbnails: true,
					activity: true
				}
			},
			activity: true
		}
	});

	// Check if currently accepting an invite
	let isAccepting = $state(false);
	let acceptError = $state<string | null>(null);

	async function acceptInvite() {
		if (!layoutContext.me.current?.$isLoaded || !inviteType || !inviteId) return;

		isAccepting = true;
		acceptError = null;

		try {
			const jazzValue = inviteType === 'card' ? previewCard.current : previewDeck.current;

			if (jazzValue?.$isLoaded) {
				layoutContext.me.current.acceptInvite(
					jazzValue.$jazz.owner.$jazz.id,
					jazzValue.shareSecret as InviteSecret
				);

				// Add to user's collection
				if (inviteType === 'card' && previewCard.current?.$isLoaded) {
					layoutContext.me.current.profile.cards.$jazz.push(previewCard.current);
					// Navigate to the card
					goto(`/deck/${previewCard.current.$jazz.id}`);
				} else if (inviteType === 'deck' && previewDeck.current?.$isLoaded) {
					layoutContext.me.current.profile.decks.$jazz.push(previewDeck.current);
					// Navigate to the deck
					goto(`/deck/${previewDeck.current.$jazz.id}`);
				}
			}
		} catch (e) {
			acceptError = e instanceof Error ? e.message : 'Failed to accept invite';
		} finally {
			isAccepting = false;
		}
	}

	function cancelPreview() {
		acceptError = null;
		// Clear URL params - this will clear the derived invite
		goto('/add', { replaceState: true });
	}

	function parseInviteUrl(
		url: string
	): { success: true; type: 'card' | 'deck'; id: string } | { success: false; error: string } {
		let parsed: URL;
		try {
			parsed = new URL(url);
		} catch {
			return { success: false, error: 'Invalid URL format' };
		}

		const type = parsed.searchParams.get('type');
		const id = parsed.searchParams.get('id');

		if (!type) {
			return { success: false, error: 'Missing type parameter' };
		}

		if (type !== 'card' && type !== 'deck') {
			return { success: false, error: 'Type must be "card" or "deck"' };
		}

		if (!id) {
			return { success: false, error: 'Missing id parameter' };
		}

		return { success: true, type, id };
	}

	// Card tilt and flip state
	const tiltRange = 8;
	const isMobile = new MediaQuery('(pointer: coarse) and (hover: none)');
	let cardContainerElement: HTMLElement | undefined = $state();
	let isCardFlipped = $state(false);
	let tiltX = $state(0);
	let tiltY = $state(0);

	// Subscribe to device orientation events on mobile
	$effect(() => {
		if (!isMobile.current) return;
		return deviceOrientation.subscribe();
	});

	// Request permission on first interaction for iOS
	function handleFirstInteraction() {
		if (deviceOrientation.permissionRequired && !deviceOrientation.permissionGranted) {
			deviceOrientation.requestPermission();
		}
	}

	// Update tilt values based on device or pointer
	const currentTiltX = $derived(
		isMobile.current ? deviceOrientation.getTilt(tiltRange).tiltX : tiltX
	);
	const currentTiltY = $derived(
		isMobile.current ? deviceOrientation.getTilt(tiltRange).tiltY : tiltY
	);

	function handlePointerMove(event: PointerEvent) {
		if (isMobile.current || !cardContainerElement) return;

		const bounds = cardContainerElement.getBoundingClientRect();
		const posX = event.clientX - bounds.x;
		const posY = event.clientY - bounds.y;
		const ratioX = posX / bounds.width - 0.5;
		const ratioY = posY / bounds.height - 0.5;

		const pointerX = Math.max(-1, Math.min(1, ratioX * 2));
		const pointerY = Math.max(-1, Math.min(1, ratioY * 2));

		tiltX = pointerY * -1 * tiltRange;
		tiltY = pointerX * tiltRange;
	}

	function handlePointerLeave() {
		tiltX = 0;
		tiltY = 0;
	}

	function handleCardClick() {
		isCardFlipped = !isCardFlipped;
	}

	// Scan error state
	let scanError = $state<string | null>(null);

	function handleScan(result: string) {
		scanError = null;
		const invite = parseInviteUrl(result);
		if (invite.success) {
			// Update URL to reflect the scanned invite - this will trigger the derived state
			goto(`/add?type=${invite.type}&id=${invite.id}`, { replaceState: true });
		} else {
			scanError = invite.error;
		}
	}

	// Manual link input state
	let manualLinkInput = $state('');
	let manualLinkError = $state<string | null>(null);

	function handleManualLinkSubmit() {
		manualLinkError = null;
		const trimmed = manualLinkInput.trim();
		if (!trimmed) return;

		const invite = parseInviteUrl(trimmed);
		if (invite.success) {
			manualLinkInput = '';
			goto(`/add?type=${invite.type}&id=${invite.id}`, { replaceState: true });
		} else {
			manualLinkError = invite.error;
		}
	}

	// Derive preview state
	const isPreviewMode = $derived(inviteType !== null && inviteId !== null);
	const isLoading = $derived(
		isPreviewMode &&
			((inviteType === 'card' && !previewCard.current?.$isLoaded) ||
				(inviteType === 'deck' && !previewDeck.current?.$isLoaded))
	);

	watch(
		() => [isPreviewMode, previewDeck.current],
		() => {
			if (isPreviewMode) {
				layoutContext.title = `${inviteType === 'card' ? (previewCard.current.$isLoaded ? previewCard.current.name : '') : previewDeck.current.$isLoaded ? previewDeck.current.name : ''}`;
				layoutContext.subtitle =
					inviteType === 'card'
						? ''
						: previewDeck.current.$isLoaded
							? (previewDeck.current.description ?? '')
							: '';
			} else {
				layoutContext.title = m.add();
				layoutContext.subtitle = '';
			}
		}
	);
</script>

<div
	class="pointer-events-auto col-start-2 row-span-1 row-start-2 flex scrollbar-none flex-col items-center justify-center gap-4 overflow-x-visible overflow-y-auto px-3 md:row-span-2 md:row-start-2 md:justify-start md:py-4"
>
	{#if isPreviewMode}
		<!-- Preview Mode -->
		<div class="flex w-full max-w-md flex-col items-center gap-4 overflow-visible">
			{#if isLoading}
				<div class="flex h-64 w-full items-center justify-center">
					<span class="text-muted-foreground">Loading preview...</span>
				</div>
			{:else if inviteType === 'card' && previewCard.current?.$isLoaded}
				<!-- Card Preview -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					bind:this={cardContainerElement}
					class="preview-container relative aspect-2/3 w-full max-w-90 flex-1 cursor-pointer"
					onpointermove={handlePointerMove}
					onpointerleave={handlePointerLeave}
					onclick={handleCardClick}
					ontouchstart={handleFirstInteraction}
				>
					<CardComponent
						card={previewCard.current}
						index={0}
						progress={0}
						direction={1}
						totalCards={1}
						tiltX={currentTiltX}
						tiltY={currentTiltY}
						{tiltRange}
						isFlipped={isCardFlipped}
					/>
				</div>
			{:else if inviteType === 'deck' && previewDeck.current?.$isLoaded}
				<!-- Deck Preview -->
				<div
					class="preview-container relative aspect-2/3 w-full max-w-90 flex-1 overflow-visible px-3"
				>
					<DeckComponent
						{tiltRange}
						deck={previewDeck.current}
						aligned
						showCompleteButton={false}
					/>
				</div>
			{:else}
				<div class="flex h-64 w-full items-center justify-center">
					<span class="text-destructive">Could not load preview</span>
				</div>
			{/if}

			{#if acceptError}
				<p class="text-center text-sm text-destructive">{acceptError}</p>
			{/if}

			<!-- Action buttons -->
			<div class="flex w-full gap-2">
				<button class="button-destructive flex-1" onclick={cancelPreview} disabled={isAccepting}>
					{m.cancel()}
				</button>
				<button class="button flex-1" onclick={acceptInvite} disabled={isAccepting || isLoading}>
					{isAccepting ? 'Adding...' : 'Add to Collection'}
				</button>
			</div>
		</div>
	{:else}
		<!-- Scan Mode -->
		<div class="w-full max-w-md">
			<Scan onScan={handleScan} />

			{#if scanError}
				<p class="mt-2 text-center text-sm text-destructive">{scanError}</p>
			{/if}

			<!-- Manual link input -->
			<div class="mt-4 flex flex-col gap-2">
				<div class="flex items-center gap-2">
					<div class="h-px flex-1 bg-border"></div>
					<span class="text-xs text-muted-foreground">{m.paste_upload_link()}</span>
					<div class="h-px flex-1 bg-border"></div>
				</div>
				<form
					class="flex gap-2"
					onsubmit={(e) => {
						e.preventDefault();
						handleManualLinkSubmit();
					}}
				>
					<input
						type="text"
						bind:value={manualLinkInput}
						placeholder="https://..."
						class="flex-1 rounded border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
					/>
					<button type="submit" class="button h-full w-auto" disabled={!manualLinkInput.trim()}
						>{m.add()}</button
					>
				</form>
				{#if manualLinkError}
					<p class="text-center text-sm text-destructive">{manualLinkError}</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.preview-container {
		container-type: size;
	}

	.preview-container :global(.card-wrapper),
	.preview-container :global(.deck-container) {
		position: absolute;
		inset: unset;
		top: 50%;
		left: 50%;
		width: 360px;
		aspect-ratio: 2 / 3;
		translate: -50% -50%;
		scale: min(calc(100cqh / 540px), calc(100cqw / 360px));
	}
</style>
