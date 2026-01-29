import { AccountCoState } from 'jazz-tools/svelte'
import { createContext } from 'svelte'
import { MediaQuery } from 'svelte/reactivity'
import { StretchDeckAccount } from '$lib/schema'

export class LayoutContext {
	title = $state('')
	subtitle = $state('')
	qrLink: string | null = $state(null)

	me = new AccountCoState(StretchDeckAccount, {
		resolve: {
			root: true,
			profile: {
				cards: { $each: { thumbnails: { $each: true } } },
				decks: { $each: true }
			}
		}
	})

	// Device orientation state
	tiltX = $state(0)
	tiltY = $state(0)

	// Permission state
	orientationPermissionGranted = $state(false)
	orientationPermissionDenied = $state(false)
	orientationPermissionPending = $state(false)

	// Whether permission is required (iOS 13+)
	#orientationPermissionRequired = $state(false)

	// Whether orientation is supported
	#orientationSupported = $state(false)

	// Reference count for listeners
	#orientationListenerCount = 0

	// Media query for mobile detection
	#isMobile = new MediaQuery('(pointer: coarse) and (hover: none)')

	constructor() {
		$effect(() => {
			if ('DeviceOrientationEvent' in window) {
				this.#orientationSupported = true
				this.#orientationPermissionRequired =
					typeof (DeviceOrientationEvent as any).requestPermission ===
					'function'

				// On non-iOS devices, permission is implicitly granted
				if (!this.#orientationPermissionRequired) {
					this.orientationPermissionGranted = true
				} else {
					// Request permission on first user interaction (iOS requirement)
					window.addEventListener(
						'click',
						() => {
							this.requestOrientationPermission()
						},
						{ once: true }
					)
				}
			}
		})
	}

	get orientationSupported() {
		return this.#orientationSupported
	}

	get orientationPermissionRequired() {
		return this.#orientationPermissionRequired
	}

	get isMobile() {
		return this.#isMobile.current
	}

	/**
	 * Request permission to access device orientation.
	 * On iOS 13+, this must be called from a user gesture (click/touch).
	 */
	async requestOrientationPermission(): Promise<boolean> {
		if (!this.#orientationSupported) {
			return false
		}

		if (this.orientationPermissionGranted) {
			return true
		}

		if (this.orientationPermissionDenied) {
			return false
		}

		if (!this.#orientationPermissionRequired) {
			this.orientationPermissionGranted = true
			return true
		}

		this.orientationPermissionPending = true

		try {
			const permission = await (
				DeviceOrientationEvent as any
			).requestPermission()
			this.orientationPermissionPending = false

			if (permission === 'granted') {
				this.orientationPermissionGranted = true
				return true
			} else {
				this.orientationPermissionDenied = true
				return false
			}
		} catch (e) {
			console.error('Device orientation permission error:', e)
			this.orientationPermissionPending = false
			this.orientationPermissionDenied = true
			return false
		}
	}

	#handleOrientation = (event: DeviceOrientationEvent) => {
		if (!this.orientationPermissionGranted) return

		const beta = event.beta
		const gamma = event.gamma

		if (beta === null || gamma === null) return

		// Normalize to -1 to 1 range
		const normalizedBeta = Math.max(-1, Math.min(1, (beta - 45) / 30))
		const normalizedGamma = Math.max(-1, Math.min(1, gamma / 30))

		this.tiltX = normalizedBeta
		this.tiltY = normalizedGamma
	}

	/**
	 * Subscribe to device orientation events.
	 * Returns a cleanup function.
	 */
	subscribeOrientation(): () => void {
		if (!this.#orientationSupported) {
			return () => {}
		}

		this.#orientationListenerCount++

		if (this.#orientationListenerCount === 1) {
			window.addEventListener('deviceorientation', this.#handleOrientation)
		}

		return () => {
			this.#orientationListenerCount--
			if (this.#orientationListenerCount === 0) {
				window.removeEventListener('deviceorientation', this.#handleOrientation)
			}
		}
	}

	/**
	 * Get tilt values scaled by a range factor.
	 */
	getTilt(range: number = 12): { tiltX: number; tiltY: number } {
		return {
			tiltX: this.tiltX * -1 * range,
			tiltY: this.tiltY * range
		}
	}
}

export const [getLayoutContext, setLayoutContext] =
	createContext<LayoutContext>()
