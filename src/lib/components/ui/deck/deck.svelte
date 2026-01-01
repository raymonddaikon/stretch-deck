<script lang="ts">
	import { co } from 'jazz-tools';
	import { watch } from 'runed';
	import { MediaQuery, SvelteMap, SvelteSet } from 'svelte/reactivity';
	import { Button } from '$lib/components/ui/button';
	import { Card, Snap } from '$lib/components/ui/card';
	import { Card as CardSchema, Deck as DeckSchema } from '$lib/schema';
	import { cn } from '$lib/utils';

	type Props = {
		cards?: co.loaded<co.List<typeof CardSchema>> | co.loaded<typeof CardSchema>[];
		deck?: co.loaded<typeof DeckSchema>;
		completedCards?: string[];
		aligned?: boolean;
		class?: string;
		/** Optional function to get view-transition-name for a card */
		getViewTransitionName?: (card: co.loaded<typeof CardSchema>) => string;
		/** Optional callback when a card is clicked. If provided, prevents default flip behavior. */
		onCardClick?: (card: co.loaded<typeof CardSchema>, index: number) => void;
		/** Optional callback when a card is scrolled through (completed). Receives the card ID. */
		onCardComplete?: (cardId: string) => void;
		/** Optional callback when the deck is completed and the complete button is pressed. */
		onDeckComplete?: () => void;
	};

	let {
		cards,
		deck,
		completedCards,
		aligned = false,
		class: className,
		getViewTransitionName,
		onCardClick,
		onCardComplete,
		onDeckComplete
	}: Props = $props();

	const length = $derived(
		cards
			? '$isLoaded' in cards
				? cards.$isLoaded
					? cards.length
					: 0
				: cards.length
			: deck?.$isLoaded && deck?.cards.$isLoaded
				? deck.cards?.length
				: 0
	);

	// Check if all cards have been completed
	const allCardsCompleted = $derived(length > 0 && (completedCards?.length ?? 0) >= length);

	// Use an object to allow passing by reference for reactive updates
	let progress = $state({ value: 0 });

	// Track direction based on progress changes
	let previousProgressStep = $state(0);
	let direction = $state(1);

	let progressStep = $derived(Math.floor(progress.value));

	// Update direction when progress step changes and notify on card completion
	watch(
		() => progressStep,
		() => {
			const current = progressStep;
			if (previousProgressStep !== current) {
				direction = previousProgressStep > current ? -1 : 1;
				previousProgressStep = current;
			}
			// Notify parent when a card is scrolled to (mark current card as complete)
			if (onCardComplete) {
				const currentCard = cards
					? cards[current]
					: deck?.cards.$isLoaded
						? deck.cards[current]
						: null;
				if (currentCard?.$isLoaded && !completedCards?.includes(currentCard.$jazz.id)) {
					onCardComplete(currentCard.$jazz.id);
				}
			}
		}
	);

	// Reset direction to 1 when progress is exactly on a step
	watch(
		() => progress.value,
		() => {
			if (progress.value % 1 === 0) {
				direction = 1;
			}
		}
	);

	// Mouse tracking for tilt effect - only on desktop
	const isMobile = new MediaQuery('(pointer: coarse) and (hover: none)');
	let pointerX = $state(0);
	let pointerY = $state(0);
	let containerElement: HTMLElement | undefined = $state();
	let mouseClientX = $state(0);
	let mouseClientY = $state(0);

	// Device orientation for tilt effect on mobile
	let deviceTiltX = $state(0);
	let deviceTiltY = $state(0);
	let orientationPermissionGranted = $state(false);

	// Request permission and set up device orientation listener
	async function requestOrientationPermission() {
		// Check if DeviceOrientationEvent exists and requires permission (iOS 13+)
		if (
			typeof DeviceOrientationEvent !== 'undefined' &&
			typeof (DeviceOrientationEvent as any).requestPermission === 'function'
		) {
			try {
				const permission = await (DeviceOrientationEvent as any).requestPermission();
				if (permission === 'granted') {
					orientationPermissionGranted = true;
				}
			} catch (e) {
				console.error('Device orientation permission denied:', e);
			}
		} else {
			// Non-iOS devices don't require permission
			orientationPermissionGranted = true;
		}
	}

	function handleDeviceOrientation(event: DeviceOrientationEvent) {
		if (!isMobile.current) return;

		const beta = event.beta; // Front-to-back tilt (-180 to 180)
		const gamma = event.gamma; // Left-to-right tilt (-90 to 90)

		if (beta === null || gamma === null) return;

		// Normalize values to -1 to 1 range
		// Beta: typical holding angle is around 45 degrees, so we center around that
		// and use a range of about ±30 degrees for full tilt
		const normalizedBeta = Math.max(-1, Math.min(1, (beta - 45) / 30));
		// Gamma: use ±30 degrees for full tilt
		const normalizedGamma = Math.max(-1, Math.min(1, gamma / 30));

		deviceTiltX = normalizedBeta;
		deviceTiltY = normalizedGamma;
	}

	// Request permission on first interaction for iOS
	const handleFirstInteraction = () => {
		if (!orientationPermissionGranted) {
			requestOrientationPermission();
		}
		window.removeEventListener('touchstart', handleFirstInteraction);
	};

	// Set up device orientation listener
	$effect(() => {
		if (!isMobile.current) return;

		window.addEventListener('touchstart', handleFirstInteraction, { once: true });
		window.addEventListener('deviceorientation', handleDeviceOrientation);

		return () => {
			window.removeEventListener('touchstart', handleFirstInteraction);
			window.removeEventListener('deviceorientation', handleDeviceOrientation);
		};
	});

	// Store card element references
	let cardElements = new SvelteMap<number, HTMLElement>();

	// Track flipped state per card
	let flippedCards = new SvelteSet<number>();

	function handlePointerMove(event: PointerEvent) {
		if (isMobile.current || !containerElement) return;

		mouseClientX = event.clientX;
		mouseClientY = event.clientY;

		const bounds = containerElement.getBoundingClientRect();
		const posX = event.clientX - bounds.x;
		const posY = event.clientY - bounds.y;
		const ratioX = posX / bounds.width - 0.5;
		const ratioY = posY / bounds.height - 0.5;

		// Clamp to -1 to 1 range
		pointerX = Math.max(-1, Math.min(1, ratioX * 2));
		pointerY = Math.max(-1, Math.min(1, ratioY * 2));
	}

	function handlePointerLeave() {
		pointerX = 0;
		pointerY = 0;
	}

	// Handle click to flip cards
	function handleClick(event: MouseEvent) {
		// Check if click is on the front card
		if (isClickOverCard(frontCardIndex, event.clientX, event.clientY)) {
			// If onCardClick callback is provided, use it instead of default flip behavior
			// Support both Jazz CoLists ($isLoaded) and plain arrays

			// Check if data is loaded - for plain arrays, always consider loaded
			const isCardsLoaded = cards
				? '$isLoaded' in cards
					? cards.$isLoaded
					: true // plain array is always "loaded"
				: false;
			const isDeckLoaded = deck?.$isLoaded && deck?.cards.$isLoaded;

			if (!isCardsLoaded && !isDeckLoaded) {
				return;
			}

			const frontCard = cards
				? cards[frontCardIndex]
				: deck!.cards.$isLoaded
					? deck!.cards[frontCardIndex]
					: null;

			if (onCardClick && frontCard?.$isLoaded) {
				onCardClick(frontCard, frontCardIndex);
				return;
			}
			// Toggle flipped state - SvelteSet is reactive automatically
			if (flippedCards.has(frontCardIndex)) {
				flippedCards.delete(frontCardIndex);
			} else {
				flippedCards.add(frontCardIndex);
			}
		}
	}

	// Handle keyboard events for accessibility
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			// Toggle flip on the front card
			if (flippedCards.has(frontCardIndex)) {
				flippedCards.delete(frontCardIndex);
			} else {
				flippedCards.add(frontCardIndex);
			}
		}
	}

	// Check if a point is within a specific card's bounds
	function isClickOverCard(index: number, clientX: number, clientY: number): boolean {
		const cardElement = cardElements.get(index);
		if (!cardElement) return false;

		const bounds = cardElement.getBoundingClientRect();
		return (
			clientX >= bounds.left &&
			clientX <= bounds.right &&
			clientY >= bounds.top &&
			clientY <= bounds.bottom
		);
	}

	// Calculate which card is the front card
	const frontCardIndex = $derived(Math.round(progress.value));

	// Check if pointer is within a specific card's bounds
	function isPointerOverCard(index: number): boolean {
		const cardElement = cardElements.get(index);
		if (!cardElement) return false;

		const bounds = cardElement.getBoundingClientRect();
		return (
			mouseClientX >= bounds.left &&
			mouseClientX <= bounds.right &&
			mouseClientY >= bounds.top &&
			mouseClientY <= bounds.bottom
		);
	}

	// Calculate tilt for a given card index
	function getTiltForCard(index: number) {
		// Only apply tilt to the front card
		if (index !== frontCardIndex) {
			return { tiltX: 0, tiltY: 0 };
		}

		// Use device orientation on mobile, pointer position on desktop
		if (isMobile.current) {
			const tiltX = deviceTiltX * -15;
			const tiltY = deviceTiltY * 15;
			return { tiltX, tiltY };
		}

		// Desktop: only tilt if pointer is over the card
		if (!isPointerOverCard(index)) {
			return { tiltX: 0, tiltY: 0 };
		}

		const tiltX = pointerY * -15; // Tilt around X axis based on Y position
		const tiltY = pointerX * 15; // Tilt around Y axis based on X position

		return { tiltX, tiltY };
	}

	// Callback to receive card element refs
	function setCardElement(index: number, element: HTMLElement | undefined) {
		if (element) {
			cardElements.set(index, element);
		} else {
			cardElements.delete(index);
		}
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex a11y_no_noninteractive_element_interactions -->
<div
	bind:this={containerElement}
	class={cn('deck-container pointer-events-auto', className)}
	role="application"
	tabindex="0"
	onpointermove={handlePointerMove}
	onpointerleave={handlePointerLeave}
	onclick={handleClick}
	onkeydown={handleKeydown}
>
	<Snap bind:progress {length}>
		{#snippet renderCard(index)}
			{@const { tiltX, tiltY } = getTiltForCard(index)}
			{@const card = cards ? cards[index] : deck?.cards.$isLoaded ? deck.cards?.[index] : undefined}
			{#if card?.$isLoaded}
				<Card
					totalCards={length}
					{index}
					progress={progress.value}
					{direction}
					{tiltX}
					{tiltY}
					isFlipped={flippedCards.has(index)}
					onElementMount={(el) => setCardElement(index, el)}
					{card}
					{aligned}
					viewTransitionName={card && getViewTransitionName
						? getViewTransitionName(card)
						: undefined}
				/>
			{/if}
		{/snippet}
	</Snap>

	{#if deck}
		<div class="complete-button-wrapper">
			<Button
				class="complete-button"
				disabled={!allCardsCompleted}
				onclick={() => onDeckComplete?.()}
			>
				Complete
			</Button>
		</div>
	{/if}
</div>

<style>
	.deck-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* Single drop-shadow - multiple layers tank scroll performance */
		filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.12));
	}

	.complete-button-wrapper {
		position: absolute;
		/* Card is 360px wide with 2:3 aspect ratio = 540px tall, centered */
		/* Position button 12px below the card bottom edge */
		bottom: 44px;
		left: 50%;
		transform: translateX(-50%);
		width: min(360px, 90%);
	}

	:global(.complete-button) {
		width: 100%;
	}
</style>
