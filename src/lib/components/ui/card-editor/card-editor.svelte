<script lang="ts">
	import { co, ImageDefinition } from 'jazz-tools';
	import { createImage } from 'jazz-tools/media';
	import { AccountCoState } from 'jazz-tools/svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import type { ZodError } from 'zod';
	import { goto } from '$app/navigation';
	import * as Field from '$lib/components/ui/field';
	import { Input } from '$lib/components/ui/input';
	import TagsInput from '$lib/components/ui/tags-input/tags-input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import * as m from '$lib/paraglide/messages';
	import { ActivityFeed, Card as CardSchema, StretchCard, StretchDeckAccount } from '$lib/schema';
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

	const me = new AccountCoState(StretchDeckAccount, {
		resolve: {
			root: true,
			profile: { cards: true }
		}
	});

	// Form state - initialize from initialCard if provided
	let name = $state(initialCard?.name ?? '');
	let tags = $state<string[]>(initialCard?.areas ?? []);
	let reps = $state(initialCard?.reps ?? 0);
	// let units = $state<Units>(initialCard?.units ?? 'reps');
	let sets = $state(initialCard?.sets ?? 0);
	let description = $state(initialCard?.description ?? '');
	let changedImageIndices = new SvelteSet<number>();
	let headerImages = $state<(string | null)[]>([null, null, null]);

	// Function reference to get final images (with dithering applied if enabled)
	let getFinalImages: (() => Promise<(string | null)[]>) | null = $state(null);

	let errors = $state<
		| ZodError<{
				name: string;
				description: string;
		  }>
		| undefined
	>();

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

		if (!me.current.$isLoaded) {
			return;
		}

		const newCardOwnerGroup = co.group().create({ owner: me.current });

		if (mode === 'create') {
			// Get final images (with dithering applied if enabled)
			const finalImages = getFinalImages ? await getFinalImages() : headerImages;
			const validImages = finalImages.filter((img): img is string => img !== null);
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
			const newCard = StretchCard.create(
				{
					type: 'stretch',
					name: result.data.name,
					areas: result.data.tagsinput,
					reps: result.data.reps,
					units: result.data.units,
					sets: result.data.sets,
					description: result.data.description,
					thumbnails: co.list(co.image()).create(convertedImages),
					shareSecret: newCardOwnerGroup.$jazz.createInvite('reader'),
					activity: ActivityFeed.create([]),
					creator: me.current.profile
				},
				{ owner: newCardOwnerGroup }
			);
			me.current.profile.cards.$jazz.push(newCard);

			goto('/cards');
		} else if (initialCard) {
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
							owner: newCardOwnerGroup,
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
</script>

{#snippet selectInner()}
	<button aria-label="select units">
		<div>
			<selectedcontent></selectedcontent>
		</div>
	</button>
	<div class="scrollable gap-1 border-2 border-border bg-background *:text-sm *:text-black!">
		{#each UNITS_OPTIONS as option (option)}
			{#if option === initialCard?.units}
				<option selected value={option}>{option}</option>
			{:else}
				<option value={option}>{option}</option>
			{/if}
		{/each}
	</div>
{/snippet}

{#snippet cardFront()}
	<div class="card-front border-[0.5px] bg-background p-2">
		<Field.Group
			class="relative z-1 box-border grid h-full w-full grid-cols-6 grid-rows-[auto_auto_auto_auto_auto_1fr] gap-1 border-4 border-double p-2"
		>
			<Field.Field
				orientation="horizontal"
				class="relative col-span-6 row-span-1 flex items-center justify-start divide-x border text-base"
			>
				<div class="size-9 flex-none"></div>
				<Input
					type="text"
					id="name"
					name="name"
					bind:value={name}
					class="card-title h-full flex-1 px-2 text-black uppercase select-none"
					placeholder={m.card_title_placeholder()}
				/>
			</Field.Field>
			<section class="col-span-6 row-span-5 grid grid-cols-subgrid grid-rows-subgrid gap-1">
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
						class="col-span-6 row-span-1 flex h-full w-full items-start justify-between gap-1"
					>
						<Field.Label
							class="flex flex-none items-center px-2 py-2.5 text-sm font-normal text-black uppercase"
						>
							<span class="inline pt-px text-box-trim"> {`${m.areas()}:`} </span>
						</Field.Label>
						<TagsInput
							class="bg-transparent text-right text-sm"
							placeholder={tags.length < 1 ? m.card_areas_placeholder() : ''}
							bind:value={tags}
						/>
						<input type="hidden" name="tagsinput" value={JSON.stringify(tags)} />
					</Field.Field>
					<Field.Field
						orientation="horizontal"
						class="col-span-6 row-span-1 flex h-full w-full justify-between pl-2"
					>
						<Field.Label class="flex flex-none text-sm font-normal text-black uppercase"
							>{`${m.reps()}:`}</Field.Label
						>
						<div class="relative flex items-center">
							<Input
								type="number"
								id="reps"
								name="reps"
								bind:value={reps}
								class="flex w-16 flex-none p-2 text-right text-sm font-normal text-black uppercase tabular-nums"
								placeholder="10"
							/>

							<select
								id="units"
								name="units"
								class="h-full flex-none border-l bg-transparent px-2 py-2 text-sm font-normal text-black uppercase"
							>
								{@render selectInner()}
							</select>
						</div>
					</Field.Field>
					<Field.Field
						orientation="horizontal"
						class="col-span-6 row-span-1 flex h-full w-full justify-between pl-2"
					>
						<Field.Label class="flex flex-none text-sm font-normal text-black uppercase"
							>{`${m.sets()}:`}</Field.Label
						>
						<Input
							type="number"
							id="sets"
							name="sets"
							bind:value={sets}
							class="flex flex-none p-2 text-right text-sm font-normal text-black uppercase tabular-nums"
							placeholder="3"
						/>
					</Field.Field>
					<Field.Field
						orientation="horizontal"
						class="col-span-6 row-span-1 flex h-full w-full flex-col items-start gap-1 px-2 pt-2 pb-1"
					>
						<Field.Label class="flex-none text-sm font-normal text-black uppercase"
							>{`${m.description()}:`}</Field.Label
						>
						<div class="relative w-full flex-1">
							<Textarea
								name="description"
								bind:value={description}
								placeholder={m.card_description_placeholder()}
								class="scrollbar-thin field-sizing-fixed h-full w-full resize-none text-sm text-black"
							/>
						</div>
					</Field.Field>
				</div>
			</section>
		</Field.Group>
	</div>
{/snippet}

<div
	class="card-wrapper pointer-events-auto"
	style:view-transition-name={initialCard ? `card-${initialCard.$jazz.id}` : undefined}
>
	<article class="card card-shadow">
		<form id="new-card" class="card-content p-1" onsubmit={handleSubmit}>
			{@render cardFront()}
		</form>
	</article>
	<button
		form="new-card"
		class="absolute -bottom-14 left-0 w-full bg-primary text-primary-foreground hover:bg-primary/90"
		disabled={!isFormValid}
		type="submit"
	>
		{buttonLabel}
	</button>
</div>

<style>
	.card-wrapper {
		margin: auto;
		inset: 0;
		position: absolute;
		aspect-ratio: 2 / 3;
		width: min(360px, 90%);
		transform-style: preserve-3d;
	}

	.card {
		position: relative;
		width: 100%;
		height: 100%;
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

	select {
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
