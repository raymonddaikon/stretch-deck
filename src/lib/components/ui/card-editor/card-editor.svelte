<script lang="ts">
	import {
		CoMap,
		co,
		deleteCoValues,
		ImageDefinition,
		type MaybeLoaded,
		type SingleCoFeedEntry
	} from 'jazz-tools';
	import { createImage } from 'jazz-tools/media';
	import { flushSync } from 'svelte';
	import { MediaQuery, SvelteSet } from 'svelte/reactivity';
	import type { ZodError } from 'zod';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { Card } from '$lib/components/ui/card';
	import * as Field from '$lib/components/ui/field';
	import { Input } from '$lib/components/ui/input';
	import BlockLoader from '$lib/components/ui/loader/block-loader.svelte';
	import TagsInput from '$lib/components/ui/tags-input/tags-input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { type RarityTier, rarityTiers } from '$lib/constants';
	import { getLayoutContext } from '$lib/context/layout.svelte';
	import * as m from '$lib/paraglide/messages';
	import { ActivityFeed, Card as CardSchema, StretchCard, StretchDeckAccount } from '$lib/schema';
	import { cn } from '$lib/utils';
	import CardEditorHeader from './card-editor-header.svelte';
	import { schema, UNITS_OPTIONS, type Units } from './schema';

	type CardEditorProps = {
		mode: 'create' | 'edit';
		/** Initial card data (used in edit mode) */
		initialCard?: co.loaded<typeof CardSchema>;
		/** Callback when saving the card */
		onSave?: (card: co.loaded<typeof CardSchema>) => void;
	};

	let { mode, initialCard }: CardEditorProps = $props();

	const layoutContext = getLayoutContext();

	// Form state - initialize from initialCard if provided
	let name = $state(initialCard?.name ?? '');
	let tags = $state<string[]>(initialCard?.areas ?? []);
	let reps = $state(initialCard?.reps);
	// let units = $state<Units>(initialCard?.units ?? 'reps');
	let sets = $state(initialCard?.sets);
	let description = $state(initialCard?.description ?? '');
	let changedImageIndices = new SvelteSet<number>();
	let headerImages = $state<(string | null)[]>([null, null, null]);
	let showDeleteConfirm = $state(false);
	// Track newly created card ID for view transition
	let newCardId = $state<string | null>(null);
	// Track the current stage: editing or preview
	let stage = $state<'editing' | 'preview'>('editing');
	// Track loading state when creating card
	let isCreatingCard = $state(false);
	// Track flip animation state: 'none' | 'flip-in' | 'flip-out'
	let flipAnimation = $state<'none' | 'flip-in' | 'flip-out'>('none');
	// Store preview data for the Card component (raw data, no Jazz schema)
	let previewData = $state<{
		name: string;
		areas: string[];
		reps: number;
		units: string;
		sets: number;
		description: string;
		thumbnailUrls?: (string | null)[];
	} | null>(null);

	// Tilt state for preview card
	const previewTiltRange = 15;
	const isMobile = new MediaQuery('(pointer: coarse) and (hover: none)');
	let pointerTilt = $state({ tiltX: 0, tiltY: 0 });

	// Use device orientation on mobile, pointer on desktop
	const previewTilt = $derived(
		isMobile.current ? layoutContext.getTilt(previewTiltRange) : pointerTilt
	);

	// Subscribe to device orientation events on mobile
	$effect(() => {
		if (!isMobile.current || stage !== 'preview') return;
		return layoutContext.subscribeOrientation();
	});

	function handlePreviewPointerMove(event: PointerEvent) {
		if (isMobile.current) return;

		const target = event.currentTarget as HTMLElement;
		const bounds = target.getBoundingClientRect();
		const posX = event.clientX - bounds.x;
		const posY = event.clientY - bounds.y;
		const ratioX = posX / bounds.width - 0.5;
		const ratioY = posY / bounds.height - 0.5;

		// Clamp to -1 to 1 range and convert to tilt degrees
		const normalizedX = Math.max(-1, Math.min(1, ratioX * 2));
		const normalizedY = Math.max(-1, Math.min(1, ratioY * 2));

		pointerTilt = {
			tiltX: normalizedY * -previewTiltRange,
			tiltY: normalizedX * previewTiltRange
		};
	}

	function handlePreviewPointerLeave() {
		if (isMobile.current) return;
		pointerTilt = { tiltX: 0, tiltY: 0 };
	}

	// Function reference to get final images (with dithering applied if enabled)
	let getFinalImages: (() => Promise<(string | null)[]>) | null = $state(null);

	let errors = $state<
		| ZodError<{
				name: string;
				description: string;
		  }>
		| undefined
	>();

	// Check if browser supports customizable select (appearance: base-select)
	const supportsCustomSelect = browser && CSS.supports?.('appearance', 'base-select');

	/** Translate unit option to localized string */
	function translateUnit(unit: Units): string {
		switch (unit) {
			case 'seconds':
				return m.unit_seconds();
			case 'minutes':
				return m.unit_minutes();
			case 'reps':
				return m.unit_reps();
		}
	}

	function handleImagesChange(images: (string | null)[], index: number) {
		headerImages = images;
		changedImageIndices.add(index);
	}

	const buttonLabel = $derived(mode === 'create' ? m.create_card() : m.save_card());

	// Check if form is valid for enabling submit button
	const isFormValid = $derived(name.trim().length > 0 && tags.length > 0);

	/** Convert a data URL to a Blob */
	async function dataUrlToBlob(dataUrl: string): Promise<Blob> {
		const response = await fetch(dataUrl);
		return response.blob();
	}

	async function handleDelete() {
		if (!initialCard || !layoutContext.me.current.$isLoaded) return;

		const profile = await layoutContext.me.current.profile.$jazz.ensureLoaded({
			resolve: {
				cards: true,
				decks: { $each: { cards: true } }
			}
		});

		// Remove card from user's cards list
		profile.cards.$jazz.remove((item) => item.$jazz.id === initialCard.$jazz.id);

		await deleteCoValues(CardSchema, initialCard.$jazz.id, {
			resolve: {
				thumbnails: {
					$each: true
					// $each: {
					// 	original: true,
					// 	file: true
					// }
				},
				activity: {
					$each: true
				}
			}
		});

		goto('/cards');
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const data = {
			name: formData.get('name') as string,
			tagsinput: tags,
			reps: Number(formData.get('reps')),
			units: formData.get('units') as Units,
			sets: Number(formData.get('sets')),
			description: formData.get('description') as string
		};

		const result = schema.safeParse(data);

		if (!result.success) {
			errors = result.error;
			return;
		}

		errors = undefined;

		if (!layoutContext.me.current.$isLoaded) {
			return;
		}

		if (mode === 'create') {
			// Get final images (with dithering applied if enabled) for preview
			const finalImages = getFinalImages ? await getFinalImages() : headerImages;

			// Store preview data (no Jazz card created yet)
			previewData = {
				name: result.data.name,
				areas: result.data.tagsinput,
				reps: result.data.reps,
				units: result.data.units,
				sets: result.data.sets,
				description: result.data.description,
				thumbnailUrls: finalImages
			};

			// Switch to preview and trigger flip-in animation
			stage = 'preview';
			flipAnimation = 'flip-in';
		} else if (initialCard) {
			const ownerGroup = co.group().create({ owner: layoutContext.me.current }).makePublic();

			initialCard.$jazz.applyDiff({
				name: result.data.name,
				description: result.data.description
			});

			// Only convert and update images that were changed
			if (changedImageIndices.size > 0 && initialCard.thumbnails.$isLoaded) {
				// Get final images (with dithering applied if enabled)
				const finalImages = getFinalImages ? await getFinalImages() : headerImages;

				for (const index of changedImageIndices) {
					const changedImage = finalImages[index];
					if (changedImage) {
						const imageBlob = await dataUrlToBlob(changedImage);
						const convertedImage = await createImage(imageBlob, {
							owner: ownerGroup,
							maxSize: 1024,
							placeholder: 'blur',
							progressive: true
						});
						initialCard.thumbnails.$jazz.set(index, convertedImage);
					} else {
						initialCard.thumbnails.$jazz.remove(index);
					}
				}
			}

			goto('/cards');
		}
	}

	/** Go back to editing from preview */
	function handleBackToEdit() {
		// Trigger flip-out animation, then switch to edit mode
		flipAnimation = 'flip-out';
	}

	/** Handle flip animation end */
	function handleFlipAnimationEnd() {
		if (flipAnimation === 'flip-out') {
			stage = 'editing';
		}
		flipAnimation = 'none';
	}

	/** Complete card creation after preview */
	async function handleComplete() {
		if (!previewData || !layoutContext.me.current.$isLoaded || isCreatingCard) return;

		// Set loading state to prevent duplicate submissions
		isCreatingCard = true;

		try {
			const newCardOwnerGroup = co.group().create({ owner: layoutContext.me.current }).makePublic();

			// Convert thumbnail URLs to Jazz images
			const validImages = (previewData.thumbnailUrls ?? []).filter(
				(img): img is string => img !== null
			);
			const imageBlobs = await Promise.all(validImages.map((img) => dataUrlToBlob(img)));
			const convertedImages: ImageDefinition[] = await Promise.all(
				imageBlobs.map((blob) =>
					createImage(blob, {
						owner: newCardOwnerGroup,
						maxSize: 1024,
						placeholder: 'blur',
						progressive: true
					})
				)
			);

			// Create the actual Jazz card
			const newCard = StretchCard.create(
				{
					type: 'stretch',
					name: previewData.name,
					areas: previewData.areas,
					reps: previewData.reps,
					units: previewData.units as Units,
					sets: previewData.sets,
					description: previewData.description,
					thumbnails: co.list(co.image()).create(convertedImages),
					shareSecret: newCardOwnerGroup.$jazz.createInvite('reader'),
					activity: ActivityFeed.create([]),
					creator: layoutContext.me.current.profile
				},
				{ owner: newCardOwnerGroup }
			);

			// Add to user's cards list
			layoutContext.me.current.profile.cards.$jazz.push(newCard);

			const cardId = newCard.$jazz.id;

			// Set the new card ID to trigger the view transition
			flushSync(() => {
				newCardId = cardId;
			});

			// Navigate to cards page - the view transition will animate the card into place
			goto('/cards');
		} catch (error) {
			// Reset loading state on error
			isCreatingCard = false;
			console.error('Error creating card:', error);
			// Optionally, you could show an error message to the user here
		}
	}

	const allActivity = $derived.by(() => {
		const byUser = new Map<
			string,
			SingleCoFeedEntry<
				MaybeLoaded<
					{
						readonly completed: Date;
					} & CoMap
				>
			>[]
		>();
		if (initialCard?.activity?.$isLoaded) {
			for (const entry of Object.values(initialCard.activity.perAccount)) {
				if (entry.value.$isLoaded) {
					for (const ac of entry.all) {
						const userId = ac.by?.$jazz?.id;
						if (userId) {
							const existing = byUser.get(userId) ?? [];
							existing.push(ac);
							byUser.set(userId, existing);
						}
					}
				}
			}
		}
		return byUser;
	});

	const totalActivityDays = $derived.by(() => {
		let totalUniqueDays = 0;
		for (const activities of allActivity.values()) {
			const userDays = new Set<string>();
			for (const activity of activities) {
				if (activity.madeAt) {
					const day = new Date(activity.madeAt).toDateString();
					userDays.add(day);
				}
			}
			totalUniqueDays += userDays.size;
		}
		return totalUniqueDays;
	});

	const currentRarity = $derived.by((): RarityTier => {
		//	Find the highest tier the user qualifies for
		let tier: RarityTier = rarityTiers[0];
		for (const t of rarityTiers) {
			if (totalActivityDays >= t.minDays) {
				tier = t;
			}
		}
		return tier;
	});
</script>

{#snippet selectCustom()}
	<button aria-label="select units">
		<div>
			<selectedcontent></selectedcontent>
		</div>
	</button>
	<div class="scrollable gap-1 border-2 border-border bg-background *:text-sm *:text-black!">
		{#each UNITS_OPTIONS as option (option)}
			{#if option === initialCard?.units}
				<option selected value={option}>{translateUnit(option)}</option>
			{:else}
				<option value={option}>{translateUnit(option)}</option>
			{/if}
		{/each}
	</div>
{/snippet}

{#snippet selectFallback()}
	{#each UNITS_OPTIONS as option (option)}
		{#if option === initialCard?.units}
			<option selected value={option}>{translateUnit(option)}</option>
		{:else}
			<option value={option}>{translateUnit(option)}</option>
		{/if}
	{/each}
{/snippet}

{#snippet cardFront()}
	<div class="card-front border-[0.5px] bg-background p-2">
		<Field.Group
			class="relative z-1 box-border grid h-full w-full grid-cols-6 grid-rows-[auto_auto_auto_auto_auto_1fr] gap-0 border-4 border-double p-2.5"
		>
			<Field.Field
				orientation="horizontal"
				class="relative col-span-6 row-span-1 flex items-center justify-start divide-x border text-base"
			>
				<div class="flex size-10 flex-none items-center justify-center">
					<div
						class="rarity-badge rarity-{currentRarity.shape}"
						style:--rarity-color={currentRarity.color}
					>
						<span
							class={cn(
								'rarity-value',
								(currentRarity.shape === 'triangle' || currentRarity.shape === 'pentagon') && 'pt-1'
							)}>{totalActivityDays}</span
						>
					</div>
				</div>
				<Input
					type="text"
					id="name"
					name="name"
					bind:value={name}
					class="h-full flex-1 px-2.5 text-[18px] text-black uppercase select-none"
					placeholder={m.card_title_placeholder()}
				/>
			</Field.Field>
			<section class="col-span-6 row-span-5 grid grid-cols-subgrid grid-rows-subgrid">
				<div
					class="card-header-container relative col-span-6 row-span-1 aspect-3/2 w-full overflow-hidden"
				>
					<CardEditorHeader
						initialThumbnails={initialCard?.thumbnails.$isLoaded
							? initialCard.thumbnails
							: undefined}
						onImagesChange={handleImagesChange}
						getImagesRef={(fn) => (getFinalImages = fn)}
					/>
				</div>
				<div
					class="col-span-6 row-span-4 grid grid-cols-subgrid grid-rows-subgrid gap-0 divide-y border"
				>
					<Field.Field
						orientation="horizontal"
						class="col-span-6 row-span-1 flex h-full w-full items-start justify-between gap-1 pt-2.5 pb-1.5"
					>
						<Field.Label
							class="flex flex-none items-center px-2 pt-1 text-[12px] font-normal text-black uppercase"
						>
							<span class="inline text-box-trim"> {`${m.areas()}:`} </span>
						</Field.Label>
						<TagsInput
							class="-mb-1 origin-top-right scale-80 bg-transparent py-0 text-right text-base"
							placeholder={tags.length < 1 ? m.card_areas_placeholder() : ''}
							bind:value={tags}
						/>
						<input type="hidden" name="tagsinput" value={JSON.stringify(tags)} />
					</Field.Field>
					<Field.Field
						orientation="horizontal"
						class="col-span-6 row-span-1 flex h-full w-full justify-between py-0.5 pl-2"
					>
						<Field.Label class="flex flex-none text-[12px] font-normal text-black uppercase"
							>{`${m.reps()}:`}</Field.Label
						>
						<div class="relative flex h-8 origin-top-right translate-y-1 scale-80 items-center">
							<Input
								type="number"
								id="reps"
								name="reps"
								bind:value={reps}
								class="flex w-16 flex-none px-2 text-right text-base font-normal text-black uppercase tabular-nums"
								placeholder="5"
							/>

							{#if supportsCustomSelect}
								<select
									id="units"
									name="units"
									class="custom-select h-[125%] flex-none border-l bg-transparent p-2.25 text-base font-normal text-black uppercase"
								>
									{@render selectCustom()}
								</select>
							{:else}
								<select
									id="units"
									name="units"
									class="h-[125%] flex-none border-l bg-transparent p-2.25 text-base font-normal text-black uppercase"
								>
									{@render selectFallback()}
								</select>
							{/if}
						</div>
					</Field.Field>
					<Field.Field
						orientation="horizontal"
						class="col-span-6 row-span-1 flex h-full w-full justify-between py-0.5 pl-2"
					>
						<Field.Label class="flex flex-none text-[12px] font-normal text-black uppercase"
							>{`${m.sets()}:`}</Field.Label
						>
						<Input
							type="number"
							id="sets"
							name="sets"
							bind:value={sets}
							class="flex h-8 flex-none origin-top-right translate-y-1 scale-80 px-2 text-right text-base font-normal text-black uppercase tabular-nums"
							placeholder="3"
						/>
					</Field.Field>
					<Field.Field
						orientation="horizontal"
						class="col-span-6 row-span-1 flex h-full w-full flex-col items-start gap-1 px-2 pt-2 pb-1"
					>
						<Field.Label class="flex-none text-[12px] font-normal text-black uppercase"
							>{`${m.description()}:`}</Field.Label
						>
						<div class="relative w-full flex-1">
							<Textarea
								name="description"
								bind:value={description}
								placeholder={m.card_description_placeholder()}
								class="scrollbar-thin field-sizing-fixed h-[133.33%] w-[133.33%] origin-top-left scale-80 resize-none text-base text-black"
							/>
						</div>
					</Field.Field>
				</div>
			</section>
		</Field.Group>
	</div>
{/snippet}

<div class="card-editor-container col-span-3 row-span-2 row-start-2 px-2">
	<div class="card-wrapper pointer-events-auto flex flex-col gap-4">
		<!-- Preview mode: show the actual Card component with tilt effects -->
		{#if previewData}
			<div
				class="preview-card-container"
				class:hidden={stage !== 'preview'}
				class:flip-in={flipAnimation === 'flip-in'}
				class:flip-out={flipAnimation === 'flip-out'}
				onpointermove={handlePreviewPointerMove}
				onpointerleave={handlePreviewPointerLeave}
				onanimationend={handleFlipAnimationEnd}
			>
				<Card
					{previewData}
					index={0}
					progress={0}
					direction={1}
					totalCards={1}
					tiltX={previewTilt.tiltX}
					tiltY={previewTilt.tiltY}
					tiltRange={previewTiltRange}
					shadow={true}
					glareIntensity={0.5}
					class="card-preview-item"
				/>
			</div>
		{/if}

		<!-- Editing mode: show the form (hidden but preserved when in preview) -->
		<article
			class="card card-shadow"
			class:hidden={stage === 'preview'}
			style:view-transition-name={initialCard ? `card-${initialCard.$jazz.id}` : undefined}
		>
			<form id="new-card" class="card-content p-1" onsubmit={handleSubmit}>
				{@render cardFront()}
			</form>

			{#if showDeleteConfirm}
				<div
					class="absolute inset-0 z-10 flex items-center justify-center rounded-[6px] bg-background/80 backdrop-blur-sm"
				>
					<div class="flex max-w-4/5 flex-col gap-4 p-6">
						<p class="text-base font-medium text-black">
							{m.delete_confirm()}
						</p>
						<p class="text-sm font-medium text-black">
							{m.delete_disclosure()}
						</p>
						<div class="flex gap-2">
							<button
								class="button flex-1 rounded-md transition-colors"
								onclick={() => (showDeleteConfirm = false)}
							>
								{m.cancel()}
							</button>
							<button class="button-destructive flex-1 transition-colors" onclick={handleDelete}>
								{m.delete()}
							</button>
						</div>
					</div>
				</div>
			{/if}
		</article>

		<div class="flex flex-none flex-col gap-2">
			{#if stage === 'editing'}
				<button form="new-card" class="button" disabled={!isFormValid} type="submit">
					{buttonLabel}
				</button>
				{#if mode === 'edit'}
					<button
						class="button-destructive"
						onclick={(e) => {
							e.preventDefault();
							showDeleteConfirm = true;
						}}
					>
						{m.delete()}
					</button>
				{/if}
			{:else if stage === 'preview'}
				<button class="button" onclick={handleComplete} disabled={isCreatingCard}>
					{#if isCreatingCard}
						<span class="inline-flex items-center gap-2">
							<BlockLoader />
							{m.complete()}
						</span>
					{:else}
						{m.complete()}
					{/if}
				</button>
				<button
					class="transition-color w-full border border-border px-4 py-2 text-sm duration-300 hover:bg-border hover:text-black"
					onclick={handleBackToEdit}
					disabled={isCreatingCard}
				>
					{m.edit()}
				</button>
			{/if}
		</div>
	</div>
</div>

<style>
	.card-editor-container {
		container-type: size;
		width: 100%;
		height: 100%;
	}

	.rarity-badge {
		--rarity-color: hsl(0, 0%, 60%);
		--badge-size: 32px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--badge-size);
		height: var(--badge-size);
		background-color: var(--rarity-color);
	}

	.rarity-value {
		position: relative;
		z-index: 1;
		font-size: 12px;
		font-weight: 600;
		color: white;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
		line-height: 1;
	}

	/* Circle - uses border-radius */
	.rarity-circle {
		clip-path: circle(50%);
	}

	/* Triangle (3 sides) - equilateral pointing up */
	.rarity-triangle {
		clip-path: shape(from 50% 0%, line to 100% 87%, line to 0% 87%, close);
	}

	/* Square (4 sides) - rotated 45deg to appear as diamond */
	.rarity-square {
		clip-path: shape(from 50% 0%, line to 100% 50%, line to 50% 100%, line to 0% 50%, close);
	}

	/* Pentagon (5 sides) - pointing up */
	.rarity-pentagon {
		clip-path: shape(
			from 50% 0%,
			line to 100% 38%,
			line to 81% 100%,
			line to 19% 100%,
			line to 0% 38%,
			close
		);
	}

	/* Hexagon (6 sides) - flat top */
	.rarity-hexagon {
		clip-path: shape(
			from 25% 0%,
			line to 75% 0%,
			line to 100% 50%,
			line to 75% 100%,
			line to 25% 100%,
			line to 0% 50%,
			close
		);
	}

	/* Octagon (8 sides) */
	.rarity-octagon {
		clip-path: shape(
			from 30% 0%,
			line to 70% 0%,
			line to 100% 30%,
			line to 100% 70%,
			line to 70% 100%,
			line to 30% 100%,
			line to 0% 70%,
			line to 0% 30%,
			close
		);
	}

	.card-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		/* Card is 360px wide with 2:3 aspect ratio = 540px tall, buttons add ~96px (48px each, 2 in edit mode) */
		/* Total height in edit mode: 540 + 16 (gap) + 48 + 16 + 48 = ~668px */
		/* Total height in create mode: 540 + 16 (gap) + 48 = ~604px */
		/* Use a middle ground that works for both modes */
		width: 360px;
		height: 620px;
		translate: -50% -50%;
		scale: min(calc(100cqh / 620px), calc(100cqw / 360px));
		transform-style: preserve-3d;
	}

	.card {
		position: relative;
		width: 100%;
		aspect-ratio: 2 / 3;
		flex-shrink: 0;
	}

	/* Preview card container - matches the card editor's visual size */
	.preview-card-container {
		position: relative;
		/* The card editor uses scale(0.875) with 1/0.875 expanded dimensions */
		/* Expand to match, use negative margins to occupy same space */
		--scale-factor: 0.875;
		--overflow-x: calc((100% / var(--scale-factor)) - 100%);
		/* Height overflow: width * 1.5 (aspect ratio) * overflow percentage */
		--overflow-y: calc(var(--overflow-x) * 1.5);
		width: calc(100% / var(--scale-factor));
		margin-left: calc(var(--overflow-x) / -2);
		margin-right: calc(var(--overflow-x) / -2);
		margin-top: calc(var(--overflow-y) / -2);
		margin-bottom: calc(var(--overflow-y) / -2);
		aspect-ratio: 2 / 3;
		flex-shrink: 0;
	}

	/* Hidden state for toggling between edit and preview */
	.hidden {
		display: none !important;
	}

	/* Full 360° flip animations */
	@keyframes flip-in {
		0% {
			transform: perspective(1200px) rotateY(0deg);
		}
		100% {
			transform: perspective(1200px) rotateY(360deg);
		}
	}

	@keyframes flip-out {
		0% {
			transform: perspective(1200px) rotateY(0deg);
		}
		100% {
			transform: perspective(1200px) rotateY(-360deg);
		}
	}

	.preview-card-container.flip-in {
		animation: flip-in 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.preview-card-container.flip-out {
		animation: flip-out 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.card-content {
		position: absolute;
		inset: 0;
	}

	.card-front {
		position: absolute;
		inset: 0;
		corner-shape: superellipse(1.5);
		border-radius: 6px;
		font-weight: bold;
		font-size: 1.5rem;
		overflow: hidden;
		height: 100%;
		width: 100%;

		/*
		 * Scale up the card and its contents by 1/0.875 = 1.142857
		 * Then inputs use text-base (16px) which scales to 16 * 0.875 = 14px visually
		 * This prevents iOS zoom on input focus while maintaining text-sm appearance
		 */
		--input-scale: 0.875;
		transform: scale(var(--input-scale));
		transform-origin: top left;
		width: calc(100% / var(--input-scale));
		height: calc(100% / var(--input-scale));
	}

	.card-header-container {
		position: relative;
	}

	/* Static shadow for card at rest */
	.card-shadow .card-content::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 6px;
		pointer-events: none;
		z-index: -1;
		opacity: 0.5;
		box-shadow:
			/* Largest, most diffused shadow - ambient occlusion */
			0 78px 51px 0 rgba(0, 0, 0, 0.1),
			/* Medium-large shadow */ 0 50px 30px 0 rgba(0, 0, 0, 0.07),
			/* Medium shadow */ 0 30px 16px 0 rgba(0, 0, 0, 0.06),
			/* Small-medium shadow */ 0 16px 8px rgba(0, 0, 0, 0.04),
			/* Small shadow - contact shadow */ 0 6px 4px rgba(0, 0, 0, 0.04),
			/* Smallest shadow - tight contact */ 0 2px 2px rgba(0, 0, 0, 0.02);
	}

	/* Custom select styles - only applied when browser supports appearance: base-select */
	select.custom-select {
		/* opt into customizing select */
		&,
		&::picker(select) {
			appearance: base-select;
		}

		/* removing open props normalize styles */
		background: none;

		/* enable transitions in the drop down */
		/*&::picker(select) {
			transition:
				opacity 0.2s ease,
				transform 0.2s var(--ease-out-3),
				display 0.2s allow-discrete,
				overlay 0.2s allow-discrete;
		}*/

		&::picker-icon {
			display: none;
		}

		/* set the off stage styles */
		&:not(:open)::picker(select) {
			opacity: 0;
			transform: scale(0.95);
		}

		/* set the on stage styles */
		&:open::picker(select) {
			opacity: 1;
			transform: scale(1);
		}

		/* customize the invoking button */
		> button {
			&:focus-visible {
				outline-offset: -3px;
			}

			&:has(selectedcontent) {
				align-items: center;
				min-inline-size: 20ch;
				flex-direction: column;
			}

			> div {
				inline-size: 100%;
				display: flex;
				justify-content: space-between;
				gap: var(--size-3);
			}

			& svg {
				inline-size: 2ch;
				transition: transform 0.3s var(--ease-elastic-out-2);
			}
		}

		&:open > button svg {
			transform: rotate(0.5turn);
		}

		/* reset some picker styles */
		&::picker(select) {
			background: light-dark(white, var(--surface-2));
			border-radius: var(--radius-2);
			padding: 0;
			margin-block: 5px;
			box-shadow: var(--shadow-5);

			@media (forced-colors: none) {
				border: none;
			}
		}

		/* customize the picker contents */
		> div {
			min-inline-size: calc(anchor-size(self-inline) + 20px);
			scroll-behavior: smooth;

			&.scrollable {
				max-block-size: 20lh;
				scrollbar-width: thin;
			}

			& hr {
				margin-block: var(--spacing);
			}

			& label {
				display: block;
				position: sticky;
				top: 0;
				z-index: 1;
				background: var(--surface-3);
				font-size: var(--font-size-0);
				color: var(--text-2);
				font-weight: var(--font-weight-7);
				padding-block: var(--size-1);
				padding-inline: var(--size-3);
			}

			& option {
				display: flex;
				align-items: center;
				gap: var(--spacing);
				padding-block: var(--spacing);
				padding-inline: var(--spacing);
				/*font-size: var(--font-size-1);*/

				cursor: pointer;
				outline-offset: -1px;

				&::checkmark {
					/*font-weight: var(--font-weight-8);*/
				}

				&:focus-visible {
					outline-offset: -1px;
				}

				&:is(:focus, :hover) {
					background: oklch(from var(--link) l c h / 25%);
					color: inherit;
				}

				&:is(:checked) {
					background: var(--link);
					color: var(--surface-1);
					font-weight: var(--font-weight-8);
				}
			}
		}
	}
</style>
