import { MediaQuery } from 'svelte/reactivity'

/**
 * Reactive device orientation state with permission handling.
 * Provides normalized tilt values (-1 to 1) based on device orientation.
 */
class DeviceOrientation {
	// Normalized tilt values (-1 to 1 range)
	tiltX = $state(0)
	tiltY = $state(0)

	// Permission state
	permissionGranted = $state(false)
	permissionDenied = $state(false)
	permissionPending = $state(false)

	// Whether permission is required (iOS 13+)
	#permissionRequired = $state(false)

	// Whether orientation is supported
	#supported = $state(false)

	// Reference count for listeners
	#listenerCount = 0

	// Media query for mobile detection
	#isMobile = new MediaQuery('(pointer: coarse) and (hover: none)')

	constructor() {
		// Check if device orientation is supported
		if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
			this.#supported = true
			// Check if permission is required (iOS 13+)
			this.#permissionRequired =
				typeof (DeviceOrientationEvent as any).requestPermission === 'function'

			// On non-iOS devices, permission is implicitly granted
			if (!this.#permissionRequired) {
				this.permissionGranted = true
			}
		}
	}

	get supported() {
		return this.#supported
	}

	get permissionRequired() {
		return this.#permissionRequired
	}

	get isMobile() {
		return this.#isMobile.current
	}

	/**
	 * Request permission to access device orientation.
	 * On iOS 13+, this must be called from a user gesture (click/touch).
	 * Returns true if permission was granted.
	 */
	async requestPermission(): Promise<boolean> {
		if (!this.#supported) {
			return false
		}

		if (this.permissionGranted) {
			return true
		}

		if (this.permissionDenied) {
			return false
		}

		if (!this.#permissionRequired) {
			this.permissionGranted = true
			return true
		}

		this.permissionPending = true

		try {
			const permission = await (
				DeviceOrientationEvent as any
			).requestPermission()
			this.permissionPending = false

			if (permission === 'granted') {
				this.permissionGranted = true
				return true
			} else {
				this.permissionDenied = true
				return false
			}
		} catch (e) {
			console.error('Device orientation permission error:', e)
			this.permissionPending = false
			this.permissionDenied = true
			return false
		}
	}

	#handleOrientation = (event: DeviceOrientationEvent) => {
		// Only process if permission is granted
		if (!this.permissionGranted) return

		const beta = event.beta // Front-to-back tilt (-180 to 180)
		const gamma = event.gamma // Left-to-right tilt (-90 to 90)

		if (beta === null || gamma === null) return

		// Normalize values to -1 to 1 range
		// Beta: typical holding angle is around 45 degrees, so we center around that
		// and use a range of about ±30 degrees for full tilt
		const normalizedBeta = Math.max(-1, Math.min(1, (beta - 45) / 30))
		// Gamma: use ±30 degrees for full tilt
		const normalizedGamma = Math.max(-1, Math.min(1, gamma / 30))

		this.tiltX = normalizedBeta
		this.tiltY = normalizedGamma
	}

	/**
	 * Start listening to device orientation events.
	 * Call this when a component mounts that needs orientation data.
	 * Returns a cleanup function to call on unmount.
	 */
	subscribe(): () => void {
		if (!this.#supported) {
			return () => {}
		}

		this.#listenerCount++

		if (this.#listenerCount === 1) {
			window.addEventListener('deviceorientation', this.#handleOrientation)
		}

		return () => {
			this.#listenerCount--
			if (this.#listenerCount === 0) {
				window.removeEventListener('deviceorientation', this.#handleOrientation)
			}
		}
	}

	/**
	 * Get tilt values scaled by a range factor.
	 * @param range The maximum tilt angle in degrees (default 12)
	 */
	getTilt(range: number = 12): { tiltX: number; tiltY: number } {
		return {
			tiltX: this.tiltX * -1 * range,
			tiltY: this.tiltY * range
		}
	}
}

// Singleton instance
export const deviceOrientation = new DeviceOrientation()
