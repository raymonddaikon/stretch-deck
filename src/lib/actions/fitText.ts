import type { Action } from 'svelte/action'

type FitTextOptions = {
	minSize?: number
	maxSize?: number
}

/**
 * Action that scales text to fit its container.
 * The font size scales down from maxSize until the text fits or minSize is reached.
 * If the text still doesn't fit at minSize, ellipsis overflow is applied.
 */
const fitText: Action<HTMLElement, FitTextOptions | undefined> = (
	node: HTMLElement,
	options: FitTextOptions | undefined
) => {
	const minSize = options?.minSize ?? 12
	const maxSize = options?.maxSize ?? 16

	// Store original styles
	const originalWhiteSpace = node.style.whiteSpace
	const originalOverflow = node.style.overflow
	const originalTextOverflow = node.style.textOverflow
	const originalFontSize = node.style.fontSize

	function updateFontSize() {
		const parent = node.parentElement
		if (!parent) return

		// Get the parent's width, accounting for padding
		const parentRect = parent.getBoundingClientRect()
		const parentStyles = window.getComputedStyle(parent)
		const parentPaddingLeft = parseFloat(parentStyles.paddingLeft)
		const parentPaddingRight = parseFloat(parentStyles.paddingRight)
		const availableWidth =
			parentRect.width - parentPaddingLeft - parentPaddingRight

		// Reset to max size first
		node.style.fontSize = `${maxSize}px`
		node.style.whiteSpace = 'nowrap'
		node.style.overflow = 'hidden'
		node.style.textOverflow = 'clip'

		// Get text width at max size
		const textWidth = node.scrollWidth

		if (textWidth > availableWidth) {
			// Calculate the ratio needed to fit
			const ratio = availableWidth / textWidth
			const calculatedSize = Math.max(minSize, maxSize * ratio)

			node.style.fontSize = `${calculatedSize}px`

			// Check if we still overflow at the calculated size
			// (need to recalculate since font-size change affects metrics)
			const newTextWidth = node.scrollWidth

			// If we're at minSize and still overflowing, apply ellipsis
			if (calculatedSize <= minSize && newTextWidth > availableWidth) {
				node.style.textOverflow = 'ellipsis'
			} else {
				node.style.textOverflow = 'clip'
			}
		}
	}

	// Initial calculation - delay slightly to ensure DOM is ready
	requestAnimationFrame(() => {
		updateFontSize()
	})

	// Use ResizeObserver to handle container size changes
	const resizeObserver = new ResizeObserver(() => {
		updateFontSize()
	})

	resizeObserver.observe(node)
	if (node.parentElement) {
		resizeObserver.observe(node.parentElement)
	}

	return {
		update(newOptions: FitTextOptions | undefined) {
			// Update options and recalculate
			const newMinSize = newOptions?.minSize ?? 12
			const newMaxSize = newOptions?.maxSize ?? 16
			// Re-assign to trigger recalculation with new bounds
			Object.assign(options ?? {}, { minSize: newMinSize, maxSize: newMaxSize })
			updateFontSize()
		},
		destroy() {
			resizeObserver.disconnect()
			// Restore original styles
			node.style.whiteSpace = originalWhiteSpace
			node.style.overflow = originalOverflow
			node.style.textOverflow = originalTextOverflow
			node.style.fontSize = originalFontSize
		}
	}
}

export { fitText }
export type { FitTextOptions }
