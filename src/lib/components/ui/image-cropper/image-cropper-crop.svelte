<script lang="ts">
	import CropIcon from '@lucide/svelte/icons/crop';
	import { Button, type ButtonElementProps } from '$lib/components/ui/button';
	import { useImageCropperCrop } from './image-cropper.svelte.js';

	let {
		ref = $bindable(null),
		variant = 'default',
		size = 'sm',
		onclick,
		...rest
	}: ButtonElementProps = $props();

	const cropState = useImageCropperCrop();
</script>

<Button
	{...rest}
	bind:ref
	{size}
	{variant}
	onclick={(
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) => {
		onclick?.(e);

		cropState.onclick();
	}}
>
	<CropIcon />
	<span>Crop</span>
</Button>
