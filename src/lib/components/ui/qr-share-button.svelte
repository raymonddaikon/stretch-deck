<script lang="ts">
	import { watch } from 'runed';
	import { encode } from 'uqr';
	import CheckIcon from '$lib/components/icons/check.svelte';
	import LinkIcon from '$lib/components/icons/link.svelte';
	import { QRCodeGenerator } from '$lib/qr-code/generate-qr.svelte';
	import { cn } from '$lib/utils';

	type Props = {
		shareUrl: string;
		class?: string;
		viewTransitionName?: string;
	};

	let { shareUrl, class: className, viewTransitionName }: Props = $props();

	let qrCanvas: HTMLCanvasElement;
	let containerElement: HTMLDivElement;
	let buttonElement: HTMLButtonElement;

	// QR codes need a quiet zone (margin) to be scannable
	const QR_MARGIN = 2;

	const qrGenerator = new QRCodeGenerator({
		// Use standard shapes for reliable scanning
		// markerShape: 'square',
		// markerInnerShape: 'square',
		// markerStyle: 'square',
		// markerSub: 'square',
		// pixelStyle: 'square',
		margin: QR_MARGIN
	});

	function getColorsFromElement(element: HTMLElement): {
		darkColor: string;
		lightColor: string;
	} {
		const styles = getComputedStyle(element);
		const backgroundColor = styles.backgroundColor;
		const borderColor = styles.borderColor;
		return {
			lightColor: backgroundColor || '#ffffff',
			darkColor: borderColor || '#000000'
		};
	}

	function generateQrCode() {
		if (!qrCanvas || !containerElement || !buttonElement) return;

		const { darkColor, lightColor } = getColorsFromElement(containerElement);

		// Get the actual rendered size of the button
		const rect = buttonElement.getBoundingClientRect();
		const containerSize = Math.min(rect.width, rect.height);

		// Skip if container has no size yet
		if (containerSize === 0) return;

		// Calculate QR code size to determine proper scale
		const qrResult = encode(shareUrl || 'placeholder', { ecc: 'Q', border: 0 });
		const qrModuleCount = qrResult.size;

		// Account for margin on both sides
		const totalModules = qrModuleCount + QR_MARGIN * 2;

		// Use device pixel ratio for sharp rendering on high-DPI displays
		const dpr = window.devicePixelRatio || 1;
		const scale = (containerSize * dpr) / totalModules;

		qrGenerator.state.text = shareUrl;
		qrGenerator.state.darkColor = darkColor;
		qrGenerator.state.lightColor = lightColor;
		qrGenerator.state.scale = scale;

		qrGenerator.generate(qrCanvas);
	}

	watch(
		() => [qrCanvas, containerElement, buttonElement, shareUrl],
		() => {
			generateQrCode();
		}
	);

	// Re-generate on resize to maintain proper scaling
	$effect(() => {
		if (!buttonElement) return;

		const resizeObserver = new ResizeObserver(() => {
			generateQrCode();
		});

		resizeObserver.observe(buttonElement);

		return () => resizeObserver.disconnect();
	});

	let showCopiedCheck = $state(false);
	let copiedTimeout: ReturnType<typeof setTimeout> | undefined;

	function copyShareLink(event: MouseEvent) {
		event.stopPropagation();
		navigator.clipboard.writeText(shareUrl);

		if (copiedTimeout) {
			clearTimeout(copiedTimeout);
		}

		showCopiedCheck = true;

		copiedTimeout = setTimeout(() => {
			showCopiedCheck = false;
		}, 3000);
	}
</script>

<div
	bind:this={containerElement}
	class={cn('border border-border bg-background', className)}
	style:view-transition-name={viewTransitionName}
>
	<button
		bind:this={buttonElement}
		class="qr-button pointer-events-auto relative z-100 flex aspect-square h-full w-full cursor-copy items-center justify-center"
		onclick={copyShareLink}
		aria-label="Copy share link"
	>
		<canvas bind:this={qrCanvas} class="qr-canvas"></canvas>
		<div
			class="qr-overlay absolute inset-0 flex items-center justify-center bg-foreground backdrop-blur-lg transition-opacity"
		>
			{#if showCopiedCheck}
				<CheckIcon class="size-6" />
			{:else}
				<LinkIcon class="size-6" />
			{/if}
		</div>
	</button>
</div>

<style>
	.qr-canvas {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.qr-overlay {
		opacity: 0;
	}

	.qr-button:hover .qr-overlay {
		opacity: 0.3;
	}
</style>
