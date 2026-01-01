import type { Action } from 'svelte/action'

interface BlossomOptions {
	/** Total number of items */
	length: number
	/** Callback when progress changes */
	onProgress?: (progress: number) => void
	/** Whether to use horizontal (x) or vertical (y) axis - auto-detected based on media query */
	axis?: 'x' | 'y' | 'auto'
}

const FRICTION = 0.72
const DAMPING = 0.12

function lerp(x: number, y: number, t: number): number {
	return (1 - t) * x + t * y
}

function damp(x: number, y: number, t: number, delta: number): number {
	return lerp(x, y, 1 - Math.exp(Math.log(1 - t) * (delta / (1000 / 60))))
}

function clamp(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, value))
}

function round(value: number, precision: number = 0): number {
	const multiplier = 10 ** precision
	return Math.round(value * multiplier) / multiplier
}

export const blossom: Action<HTMLElement, BlossomOptions> = (node, options) => {
	let { length, onProgress, axis = 'auto' } = options

	// State
	let pointerStartX = 0
	let pointerStartY = 0
	let velocity = 0
	let targetProgress = 0
	let currentProgress = 0

	let isDragging = false
	let isTicking = false
	let raf: number | null = null
	let lastTick = 0
	let frameDelta = 0
	let distanceMoved = 0

	let clientSize = 0

	const isTouchDevice = () =>
		'ontouchstart' in window ||
		navigator.maxTouchPoints > 0 ||
		window.matchMedia('(pointer: coarse)').matches

	const getCurrentAxis = (): 'x' | 'y' => {
		if (axis !== 'auto') return axis
		return window.matchMedia('(pointer: coarse) and (hover: none)').matches
			? 'x'
			: 'y'
	}

	let currentAxis = getCurrentAxis()

	function updateMeasurements() {
		currentAxis = getCurrentAxis()
		clientSize = currentAxis === 'x' ? node.clientWidth : node.clientHeight
	}

	function init() {
		updateMeasurements()

		// Only add drag handling on non-touch devices
		if (!isTouchDevice()) {
			node.addEventListener('pointerdown', onPointerDown)
		}

		const resizeObserver = new ResizeObserver(updateMeasurements)
		resizeObserver.observe(node)

		return () => {
			resizeObserver.disconnect()
			node.removeEventListener('pointerdown', onPointerDown)
			if (raf) cancelAnimationFrame(raf)
		}
	}

	function onPointerDown(e: PointerEvent) {
		if (e.button !== 0) return

		pointerStartX = e.clientX
		pointerStartY = e.clientY
		velocity = 0
		distanceMoved = 0
		isDragging = true

		// Sync with current scroll position
		const scrollSize =
			currentAxis === 'x' ? node.scrollWidth : node.scrollHeight
		const scrollPos = currentAxis === 'x' ? node.scrollLeft : node.scrollTop
		const maxScroll = scrollSize - clientSize
		if (maxScroll > 0 && length > 1) {
			currentProgress = (scrollPos / maxScroll) * (length - 1)
			targetProgress = currentProgress
		}

		window.addEventListener('pointermove', onPointerMove)
		window.addEventListener('pointerup', onPointerUp)
	}

	function onPointerMove(e: PointerEvent) {
		e.preventDefault()

		const delta =
			currentAxis === 'x'
				? pointerStartX - e.clientX
				: pointerStartY - e.clientY

		// Convert pixel delta to progress delta
		const progressDelta = delta / clientSize

		targetProgress += progressDelta
		velocity += progressDelta

		if (currentAxis === 'x') {
			pointerStartX = e.clientX
		} else {
			pointerStartY = e.clientY
		}

		distanceMoved += Math.abs(delta)

		if (distanceMoved >= 10) {
			setIsTicking(true)
		}
	}

	function onPointerUp() {
		window.removeEventListener('pointermove', onPointerMove)
		window.removeEventListener('pointerup', onPointerUp)

		isDragging = false

		if (distanceMoved <= 10) return

		velocity *= 2
		dragSnap()
		preventGlobalClick()
	}

	function setIsTicking(bool: boolean) {
		if (bool && !isTicking) {
			lastTick = performance.now()
			if (!raf) {
				raf = requestAnimationFrame(tick)
			}
		} else if (!bool) {
			if (raf) cancelAnimationFrame(raf)
			raf = null
		}
		isTicking = bool
	}

	function tick(t: number) {
		raf = requestAnimationFrame(tick)
		frameDelta = t - lastTick

		velocity *= FRICTION

		if (!isDragging) {
			targetProgress += velocity
		}

		// Clamp target to valid range
		targetProgress = clamp(targetProgress, 0, length - 1)

		if (isDragging) {
			currentProgress = damp(
				currentProgress,
				targetProgress,
				FRICTION,
				frameDelta
			)
		} else {
			currentProgress = damp(
				currentProgress,
				targetProgress,
				DAMPING,
				frameDelta
			)
		}

		// Clamp current progress
		currentProgress = clamp(currentProgress, 0, length - 1)

		// Update scroll position to match progress
		const scrollSize =
			currentAxis === 'x' ? node.scrollWidth : node.scrollHeight
		const maxScroll = scrollSize - clientSize
		if (maxScroll > 0 && length > 1) {
			const scrollPos = (currentProgress / (length - 1)) * maxScroll

			node.scrollTo({
				left: currentAxis === 'x' ? scrollPos : 0,
				top: currentAxis === 'y' ? scrollPos : 0,
				behavior: 'instant' as ScrollBehavior
			})
		}

		// Output progress
		if (isFinite(currentProgress)) {
			onProgress?.(currentProgress)
		}

		// Stop when settled
		if (
			!isDragging &&
			round(velocity, 8) === 0 &&
			Math.abs(currentProgress - targetProgress) < 0.001
		) {
			setIsTicking(false)
		}

		lastTick = t
	}

	function dragSnap() {
		const restingProgress = targetProgress + velocity / (1 - FRICTION)

		let snapIndex = Math.round(restingProgress)
		snapIndex = clamp(snapIndex, 0, length - 1)

		const distance = snapIndex - targetProgress
		const force = distance * (1 - FRICTION) * (1 / FRICTION)
		velocity = force
	}

	function preventGlobalClick() {
		const handler = (e: MouseEvent) => {
			e.preventDefault()
			e.stopPropagation()
			window.removeEventListener('click', handler, true)
		}
		window.addEventListener('click', handler, true)
	}

	const cleanup = init()

	return {
		update(newOptions: BlossomOptions) {
			length = newOptions.length
			onProgress = newOptions.onProgress
			axis = newOptions.axis ?? 'auto'
			updateMeasurements()
		},
		destroy() {
			cleanup()
		}
	}
}

export type { BlossomOptions }
