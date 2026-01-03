<script lang="ts">
	import { co, ImageDefinition } from 'jazz-tools';
	import { createImage } from 'jazz-tools/media';
	import { AccountCoState } from 'jazz-tools/svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import type { ZodError } from 'zod';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as Field from '$lib/components/ui/field';
	import { Input } from '$lib/components/ui/input';
	import TagsInput from '$lib/components/ui/tags-input/tags-input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { ActivityFeed, Card as CardSchema, StretchCard, StretchDeckAccount } from '$lib/schema';
	import CardEditorHeader from './card-editor-header.svelte';
	import { schema, UNITS_OPTIONS, type Units } from './schema';

	type CardEditorProps = {
		/** Mode: 'create' for new card, 'edit' for existing card */
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
	let units = $state<Units>(initialCard?.units ?? 'reps');
	let sets = $state(initialCard?.sets ?? 0);
	let description = $state(initialCard?.description ?? '');
	let changedImageIndices = new SvelteSet<number>();
	let headerImages = $state<(string | null)[]>([null, null, null]);

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

	const buttonLabel = $derived(mode === 'create' ? 'Create' : 'Save');

	// Check if form is valid for enabling submit button
	const isFormValid = $derived(name.trim().length > 0 && tags.length > 0);

	/** Convert a data URL to a Blob */
	async function dataUrlToBlob(dataUrl: string): Promise<Blob> {
		const response = await fetch(dataUrl);
		return response.blob();
	}

	$inspect(changedImageIndices);

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
			const newErrors: Record<string, string> = {};

			errors = result.error;
			console.log('Validation errors:', errors);
			return;
		}

		errors = undefined;

		if (!me.current.$isLoaded) {
			return;
		}

		const newCardOwnerGroup = co.group().create({ owner: me.current });

		if (mode === 'create') {
			// Convert all headerImages (data URLs) to ImageDefinitions
			const validImages = headerImages.filter((img): img is string => img !== null);
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
				for (const index of changedImageIndices) {
					const changedImage = headerImages[index];
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
					placeholder="Big Stretch"
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
							<span class="inline pt-px text-box-trim"> Area: </span>
						</Field.Label>
						<TagsInput
							class="bg-transparent text-right text-sm"
							placeholder="Neck, etc."
							bind:value={tags}
						/>
						<input type="hidden" name="tagsinput" value={JSON.stringify(tags)} />
					</Field.Field>
					<Field.Field
						orientation="horizontal"
						class="col-span-6 row-span-1 flex h-full w-full justify-between pl-2"
					>
						<Field.Label class="flex flex-none text-sm font-normal text-black uppercase"
							>Reps</Field.Label
						>
						<div class="flex items-center">
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
								bind:value={units}
								class="h-full border-l bg-transparent px-2 py-2 text-sm font-normal text-black uppercase"
							>
								{#each UNITS_OPTIONS as option (option)}
									<option value={option}>{option}</option>
								{/each}
							</select>
						</div>
					</Field.Field>
					<Field.Field
						orientation="horizontal"
						class="col-span-6 row-span-1 flex h-full w-full justify-between pl-2"
					>
						<Field.Label class="flex flex-none text-sm font-normal text-black uppercase"
							>Sets</Field.Label
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
							>Description</Field.Label
						>
						<div class="relative w-full flex-1">
							<Textarea
								name="description"
								bind:value={description}
								placeholder="Additional notes on how the stretch is done"
								class="field-sizing-fixed h-full w-full resize-none text-sm text-black scrollbar-thin"
							/>
						</div>
					</Field.Field>
				</div>
			</section>
		</Field.Group>
	</div>
{/snippet}

<div class="card-wrapper pointer-events-auto">
	<article class="card card-shadow">
		<form class="card-content p-1" onsubmit={handleSubmit}>
			{@render cardFront()}
		</form>
	</article>
	<Button
		type="button"
		class="absolute -bottom-14 left-0 w-full"
		disabled={!isFormValid}
		onclick={() => {
			const form = document.querySelector('.card-wrapper form') as HTMLFormElement;
			if (form) form.requestSubmit();
		}}
	>
		{buttonLabel}
	</Button>
</div>

<style>
	.card-title {
		flex-shrink: 0;
		padding: 0 1ch 0 1ch;
		font-weight: 400;
	}

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
</style>
