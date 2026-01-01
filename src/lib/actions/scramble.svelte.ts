import { animate } from 'motion'
import { funnel } from 'remeda'
import { untrack } from 'svelte'
import type { Action } from 'svelte/action'

// Adapted from https://codepen.io/jh3y/pen/GRLKMPY

type ScrambleActionProps = {
	speed?: number
	characters?: string
	text: string
	loop?: boolean
	delay?: number
	deleteSpeed?: number
	scrambleIterations?: number
}

type AnimationPhase = 'idle' | 'deleting' | 'typing'

const scramble: Action<HTMLElement, () => ScrambleActionProps> = (
	node: HTMLElement,
	fn = () => {
		return {
			speed: 60,
			characters: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
			text: '',
			loop: false,
			delay: 0,
			deleteSpeed: 30,
			scrambleIterations: 5
		}
	}
) => {
	let localChars = $state('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')
	let currentAnimation: ReturnType<typeof animate> | undefined = $state()
	let currentDisplayedText = $state('')
	let currentPhase: AnimationPhase = $state('idle')
	let previousText = $state('')
	let isFirstRun = true

	const stopCurrentAnimation = () => {
		if (currentAnimation) {
			currentAnimation.stop()
			currentAnimation = undefined
		}
	}

	const getRandomChar = () => {
		return localChars[Math.floor(Math.random() * localChars.length)]
	}

	const getCommonPrefixLength = (str1: string, str2: string): number => {
		let i = 0
		while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
			i++
		}
		return i
	}

	const runDeleteAnimation = (
		fromText: string,
		speed: number,
		preserveLength: number,
		onComplete: () => void
	) => {
		currentPhase = 'deleting'
		const startLength = fromText.length
		const charsToDelete = startLength - preserveLength

		if (charsToDelete <= 0) {
			onComplete()
			return
		}

		const preservedPrefix = fromText.slice(0, preserveLength)

		const debouncedDelete = funnel(
			(latest: number) => {
				const remainingDeleteChars = Math.ceil(latest)
				currentDisplayedText =
					preservedPrefix +
					fromText.slice(preserveLength, preserveLength + remainingDeleteChars)
				node.innerText = currentDisplayedText
			},
			{
				minGapMs: speed,
				triggerAt: 'both',
				reducer: (_: number | undefined, s: number) => s
			}
		)

		currentAnimation = animate(charsToDelete, 0, {
			duration: charsToDelete * (speed / 1000),
			ease: 'linear',
			onUpdate: (latest) => {
				debouncedDelete.call(latest)
			},
			onComplete: () => {
				currentDisplayedText = preservedPrefix
				node.innerText = preservedPrefix
				onComplete()
			}
		})
	}

	const runTypewriterScrambleAnimation = (
		targetText: string,
		speed: number,
		delay: number,
		loop: boolean,
		scrambleIterations: number,
		prefixLength: number = 0
	) => {
		currentPhase = 'typing'
		const textLength = targetText.length
		const prefix = targetText.slice(0, prefixLength)
		const suffixToType = targetText.slice(prefixLength)
		const suffixLength = suffixToType.length

		if (suffixLength === 0) {
			currentDisplayedText = targetText
			node.innerText = targetText
			currentPhase = 'idle'
			return
		}

		let cancelled = false
		let mainTimeoutId: ReturnType<typeof setTimeout> | undefined
		const scrambleIntervalIds: ReturnType<typeof setInterval>[] = []

		// Track the state of each character in the suffix: how many scramble iterations remain
		// Once iterations reach 0, the character is resolved
		const charStates: number[] = new Array(suffixLength).fill(-1) // -1 means not yet started

		const scrambleSpeed = speed / (scrambleIterations + 1)

		const render = () => {
			let display = prefix
			for (let i = 0; i < suffixLength; i++) {
				if (charStates[i] === -1) {
					// Not started yet
					break
				} else if (charStates[i] === 0) {
					// Resolved
					display += suffixToType[i]
				} else {
					// Still scrambling
					display += getRandomChar()
				}
			}
			currentDisplayedText = display
			node.innerText = display
		}

		const startCharScramble = (charIndex: number) => {
			if (cancelled) return

			// Start this character with scrambleIterations
			charStates[charIndex] = scrambleIterations

			// Set up interval to decrement and re-render until resolved
			const intervalId = setInterval(() => {
				if (cancelled) {
					clearInterval(intervalId)
					return
				}

				charStates[charIndex]--
				render()

				if (charStates[charIndex] <= 0) {
					clearInterval(intervalId)

					// Check if all characters are resolved
					if (charIndex === suffixLength - 1 && charStates[charIndex] === 0) {
						currentDisplayedText = targetText
						node.innerText = targetText
						currentPhase = 'idle'

						// Loop mode - restart after completion
						if (loop) {
							mainTimeoutId = setTimeout(() => {
								if (!cancelled) {
									charStates.fill(-1)
									currentDisplayedText = ''
									node.innerText = ''
									startTyping()
								}
							}, 500)
						}
					}
				}
			}, scrambleSpeed)

			scrambleIntervalIds.push(intervalId)
			render()
		}

		const startTyping = () => {
			let charIndex = 0

			const typeNextChar = () => {
				if (cancelled || charIndex >= suffixLength) return

				startCharScramble(charIndex)
				charIndex++

				if (charIndex < suffixLength) {
					mainTimeoutId = setTimeout(typeNextChar, speed)
				}
			}

			typeNextChar()
		}

		// Store cancel function in currentAnimation
		currentAnimation = {
			stop: () => {
				cancelled = true
				if (mainTimeoutId) clearTimeout(mainTimeoutId)
				scrambleIntervalIds.forEach((id) => {
					clearInterval(id)
				})
			},
			cancel: () => {
				cancelled = true
				if (mainTimeoutId) clearTimeout(mainTimeoutId)
				scrambleIntervalIds.forEach((id) => {
					clearInterval(id)
				})
			}
		} as ReturnType<typeof animate>

		if (delay > 0) {
			mainTimeoutId = setTimeout(startTyping, delay)
		} else {
			startTyping()
		}
	}

	$effect(() => {
		const {
			speed,
			characters,
			text,
			loop,
			delay,
			deleteSpeed,
			scrambleIterations
		} = fn()

		untrack(() => {
			localChars = characters ?? '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
			const effectiveSpeed = speed ?? 60
			const effectiveDeleteSpeed = deleteSpeed ?? 30
			const effectiveScrambleIterations = scrambleIterations ?? 3

			// Always stop any current animation first
			stopCurrentAnimation()

			if (isFirstRun) {
				// First run: just type out the text
				isFirstRun = false
				previousText = text
				runTypewriterScrambleAnimation(
					text,
					effectiveSpeed,
					delay ?? 0,
					loop ?? false,
					effectiveScrambleIterations,
					0
				)
			} else if (text !== previousText) {
				// Text changed: find common prefix, delete only differing suffix, then type new suffix
				const textToDelete = currentDisplayedText || previousText
				const commonPrefixLen = getCommonPrefixLength(textToDelete, text)
				previousText = text

				if (textToDelete.length > commonPrefixLen) {
					// Need to delete characters after the common prefix
					runDeleteAnimation(
						textToDelete,
						effectiveDeleteSpeed,
						commonPrefixLen,
						() => {
							runTypewriterScrambleAnimation(
								text,
								effectiveSpeed,
								0,
								loop ?? false,
								effectiveScrambleIterations,
								commonPrefixLen
							)
						}
					)
				} else {
					// No deletion needed, just type new suffix
					runTypewriterScrambleAnimation(
						text,
						effectiveSpeed,
						delay ?? 0,
						loop ?? false,
						effectiveScrambleIterations,
						commonPrefixLen
					)
				}
			}
		})
	})
}

export { scramble }
