<script lang="ts">
	import { type AnimationPlaybackControls, animate } from 'motion';
	import type { Snippet } from 'svelte';

	interface Props {
		/** Trigger a reveal transition. Incremented to fire. */
		trigger: number;
		/** Number of columns in the pixel grid */
		gridSize?: number;
		/** Total duration of the reveal animation (ms) */
		duration?: number;
		/** 'forward' = sweep bottom-to-top, 'reverse' = sweep top-to-bottom */
		direction?: 'forward' | 'reverse';
		/**
		 * Reference element whose bounds the mask should match.
		 * If provided, the wrapper is positioned to exactly cover that element
		 * rather than filling its own parent via inset:0.
		 */
		anchorElement?: HTMLElement | undefined;
		/** Called when the forward reveal starts (canvas ready) */
		onReady?: () => void;
		/** Called when the reverse animation fully covers (safe to swap content) */
		onCovered?: () => void;
		/** Called when the full animation completes */
		onComplete?: () => void;
		/** Content to mask with the pixel reveal effect */
		children?: Snippet;
	}

	let {
		trigger,
		gridSize = 40,
		duration = 1200,
		direction = 'forward',
		anchorElement,
		onReady,
		onCovered,
		onComplete,
		children
	}: Props = $props();

	let wrapper: HTMLDivElement | undefined = $state();
	let maskUrl = $state<string | null>(null);
	let isActive = $state(false);
	/** Whether the component has ever been triggered (stays true after first trigger) */
	let hasTriggered = $state(false);

	/**
	 * Bounding box of the wrapper relative to its offset parent.
	 * Set when anchorElement is provided so the overlay matches the anchor exactly.
	 */
	let anchorBounds = $state<{ top: number; left: number; width: number; height: number } | null>(
		null
	);

	$effect(() => {
		if (!anchorElement || !wrapper) return;

		function sync() {
			if (!anchorElement || !wrapper) return;
			const parent = wrapper.offsetParent as HTMLElement | null;
			if (!parent) return;
			const anchorRect = anchorElement.getBoundingClientRect();
			const parentRect = parent.getBoundingClientRect();
			anchorBounds = {
				top: anchorRect.top - parentRect.top,
				left: anchorRect.left - parentRect.left,
				width: anchorRect.width,
				height: anchorRect.height
			};
		}

		sync();
		const ro = new ResizeObserver(sync);
		ro.observe(anchorElement);
		return () => ro.disconnect();
	});

	interface Cell {
		col: number;
		row: number;
		/** Normalized position (0–1) controlling reveal order. 0 = reveals first. */
		threshold: number;
	}

	function buildCells(cols: number, rows: number, jitter: number): Cell[] {
		const cells: Cell[] = [];
		const maxRow = rows - 1 || 1;
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				// Bottom-to-top: bottom rows (high r) get low thresholds (reveal first)
				const threshold = 1 - r / maxRow;
				cells.push({ col: c, row: r, threshold });
			}
		}
		for (const cell of cells) {
			cell.threshold = Math.max(0, Math.min(1, cell.threshold + (Math.random() - 0.5) * jitter));
		}
		cells.sort((a, b) => a.threshold - b.threshold);
		return cells;
	}

	$effect(() => {
		if (trigger === 0) return;
		if (!wrapper) return;
		hasTriggered = true;

		let cancelled = false;
		let animation: AnimationPlaybackControls | undefined;

		const rect = wrapper.getBoundingClientRect();
		const dpr = window.devicePixelRatio || 1;

		const canvas = document.createElement('canvas');
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.scale(dpr, dpr);

		const cols = gridSize;
		const cellW = rect.width / cols;
		const rows = Math.ceil(rect.height / cellW);
		const cellH = rect.height / rows;

		/**
		 * The fraction of the sweep range each cell takes to transition from
		 * invisible→fully-visible. Keeping it small keeps the pixelated edge sharp.
		 */
		const cellWindow = 0.08;

		/**
		 * Map external [0,1] progress to an internal sweep value that gives every
		 * cell a full transition window at both ends:
		 *   progress=0  →  sweep = -cellWindow   (all cells hidden)
		 *   progress=1  →  sweep = 1 + cellWindow (all cells fully visible)
		 * This guarantees no cell is left partially filled when the animation ends.
		 */
		function toSweep(progress: number): number {
			return progress * (1 + 2 * cellWindow) - cellWindow;
		}

		const cells = buildCells(cols, rows, 0.15);

		/**
		 * Draw the mask at internal sweep value.
		 * White pixels = visible, transparent = hidden.
		 */
		function drawMask(sweep: number) {
			if (!ctx) return;
			ctx.clearRect(0, 0, rect.width, rect.height);

			if (sweep >= 1) {
				// Fully revealed — fill white
				ctx.fillStyle = '#fff';
				ctx.globalAlpha = 1;
				ctx.fillRect(0, 0, rect.width, rect.height);
				return;
			}
			if (sweep <= 0) return; // Fully hidden — leave transparent

			ctx.fillStyle = '#fff';
			for (const cell of cells) {
				if (cell.threshold >= sweep) break; // Sorted; remaining cells haven't started yet

				const cellProgress = Math.min(1, (sweep - cell.threshold) / cellWindow);
				if (cellProgress < 0.01) continue;

				ctx.globalAlpha = cellProgress;
				const w = cellW * cellProgress;
				const h = cellH * cellProgress;
				const x = cell.col * cellW + (cellW - w) / 2;
				const y = cell.row * cellH + (cellH - h) / 2;
				ctx.fillRect(x, y, Math.ceil(w) + 1, Math.ceil(h) + 1);
			}
			ctx.globalAlpha = 1;
		}

		function updateMask(progress: number) {
			drawMask(toSweep(progress));
			maskUrl = canvas.toDataURL();
		}

		if (direction === 'forward') {
			isActive = true;
			updateMask(0);
			onReady?.();

			const startDelay = requestAnimationFrame(() => {
				if (cancelled) return;
				animation = animate(0, 1, {
					duration: duration / 1000,
					ease: [0.16, 1, 0.3, 1],
					onUpdate(progress) {
						if (cancelled) return;
						updateMask(progress);
					},
					onComplete() {
						if (cancelled) return;
						maskUrl = null;
						isActive = false;
						onComplete?.();
					}
				});
			});

			return () => {
				cancelled = true;
				cancelAnimationFrame(startDelay);
				animation?.stop();
				maskUrl = null;
				isActive = false;
			};
		} else {
			isActive = true;
			updateMask(1);

			const startDelay = requestAnimationFrame(() => {
				if (cancelled) return;
				animation = animate(1, 0, {
					duration: duration / 1000,
					ease: [0.36, 0, 0.66, 1],
					onUpdate(progress) {
						if (cancelled) return;
						updateMask(progress);
					},
					onComplete() {
						if (cancelled) return;
						maskUrl = null;
						isActive = false;
						onCovered?.();
						onComplete?.();
					}
				});
			});

			return () => {
				cancelled = true;
				cancelAnimationFrame(startDelay);
				animation?.stop();
				maskUrl = null;
				isActive = false;
			};
		}
	});
</script>

<div
	bind:this={wrapper}
	class="pixel-reveal-wrapper"
	class:is-anchored={!!anchorBounds}
	class:is-hidden={!hasTriggered}
	class:is-masked={isActive && maskUrl}
	class:is-revealed={hasTriggered && !isActive && !maskUrl}
	style:--mask-url={maskUrl ? `url(${maskUrl})` : undefined}
	style:top={anchorBounds ? `${anchorBounds.top}px` : undefined}
	style:left={anchorBounds ? `${anchorBounds.left}px` : undefined}
	style:width={anchorBounds ? `${anchorBounds.width}px` : undefined}
	style:height={anchorBounds ? `${anchorBounds.height}px` : undefined}
>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.pixel-reveal-wrapper {
		position: absolute;
		/* Default: fill parent. Overridden by inline top/left/width/height when anchorElement is set. */
		inset: 0;
	}

	/* When anchored to a specific element, suppress the inset shorthand's right/bottom
	   so the inline width/height take full effect without conflicting. */
	.pixel-reveal-wrapper.is-anchored {
		right: auto;
		bottom: auto;
	}

	.pixel-reveal-wrapper.is-hidden {
		visibility: hidden;
	}

	.pixel-reveal-wrapper.is-masked {
		-webkit-mask-image: var(--mask-url);
		mask-image: var(--mask-url);
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
	}
</style>
