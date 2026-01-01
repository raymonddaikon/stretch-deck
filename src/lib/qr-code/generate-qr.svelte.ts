// @ts-expect-error
import seedrandom from 'seedrandom'

import { encode, QrCodeDataType, type QrCodeGenerateResult } from 'uqr'
import markerBoxIcon from './icons/marker-box.svg?raw'
import markerCircleIcon from './icons/marker-circle.svg?raw'
import markerInnerCircleIcon from './icons/marker-inner-circle.svg?raw'
import markerInnerDiamondIcon from './icons/marker-inner-diamond.svg?raw'
import markerInnerEyeIcon from './icons/marker-inner-eye.svg?raw'
import markerInnerPlusIcon from './icons/marker-inner-plus.svg?raw'
import markerInnerSquareIcon from './icons/marker-inner-square.svg?raw'
import markerOctagonIcon from './icons/marker-octagon.svg?raw'
import markerPlusIcon from './icons/marker-plus.svg?raw'
import markerRandomIcon from './icons/marker-random.svg?raw'
import markerSquareIcon from './icons/marker-square.svg?raw'
import markerTinyPlusIcon from './icons/marker-tiny-plus.svg?raw'
import pixelDotIcon from './icons/pixel_dot.svg?raw'
import pixelColumnIcon from './icons/pixel-column.svg?raw'
import pixelRoundedIcon from './icons/pixel-rounded.svg?raw'
import pixelRowIcon from './icons/pixel-row.svg?raw'
// Import SVG icons
import pixelSquareIcon from './icons/pixel-square.svg?raw'
import pixelSquircleIcon from './icons/pixel-squircle.svg?raw'

export const PixelStyles = [
	'square',
	'rounded',
	'dot',
	'squircle',
	'row',
	'column'
] as const

export const PixelStyleIcons: Record<PixelStyle, string> = {
	square: pixelSquareIcon,
	rounded: pixelRoundedIcon,
	dot: pixelDotIcon,
	squircle: pixelSquircleIcon,
	row: pixelRowIcon,
	column: pixelColumnIcon
}

export const MarkerShapes = [
	'square',
	'circle',
	'plus',
	'box',
	'octagon',
	'random',
	'tiny-plus'
] as const

export const MarkerSubShapes = [
	'square',
	'circle',
	'box',
	'random',
	'plus',
	'octagon',
	'tiny-plus'
] as const

export const MarkerInnerShapes = [
	'square',
	'circle',
	'plus',
	'diamond',
	'eye'
] as const

export const MarkerShapeIcons: Record<MarkerShape, string> = {
	square: markerSquareIcon,
	circle: markerCircleIcon,
	plus: markerPlusIcon,
	box: markerBoxIcon,
	octagon: markerOctagonIcon,
	random: markerRandomIcon,
	'tiny-plus': markerTinyPlusIcon
}

export const MarkerInnerShapeIcons: Record<MarkerInnerShape, string> = {
	square: markerInnerSquareIcon,
	circle: markerInnerCircleIcon,
	plus: markerInnerPlusIcon,
	diamond: markerInnerDiamondIcon,
	eye: markerInnerEyeIcon
}

export const MarkerSubShapeIcons: Record<MarkerSubShape, string> = {
	square: markerSquareIcon,
	circle: markerCircleIcon,
	box: markerBoxIcon,
	random: markerRandomIcon,
	plus: markerPlusIcon,
	octagon: markerOctagonIcon,
	'tiny-plus': markerTinyPlusIcon
}

export type PixelStyle = (typeof PixelStyles)[number]
export type MarkerShape = (typeof MarkerShapes)[number]
export type MarkerSubShape = (typeof MarkerSubShapes)[number]
export type MarkerInnerShape = (typeof MarkerInnerShapes)[number]

export interface GeneratedQRInfo {
	width: number
	height: number
}

export interface MarginObject {
	top: number
	right: number
	bottom: number
	left: number
}

export interface QrCodeGeneratorMarkerState {
	markerStyle: PixelStyle | 'auto'
	markerShape: MarkerShape
	markerInnerShape: MarkerInnerShape | 'auto'
}

export interface QRCodeGeneratorState extends QrCodeGeneratorMarkerState {
	text: string
	ecc: 'L' | 'M' | 'Q' | 'H'
	margin: number | MarginObject
	scale: number
	seed: number
	lightColor: string
	darkColor: string
	maskPattern: number
	boostECC: boolean
	minVersion: number
	maxVersion: number
	pixelStyle: PixelStyle
	markers: QrCodeGeneratorMarkerState[]
	markerSub: MarkerSubShape
	marginNoise: boolean
	marginNoiseRate: number
	marginNoiseSpace: 'none' | 'marker' | 'full' | 'minimal' | 'extreme'
	marginNoiseOpacity: number | [number, number]
	renderPointsType: 'all' | 'data' | 'function' | 'guide' | 'marker'
	invert: boolean
	rotate: 0 | 90 | 180 | 270
	backgroundImage?: string
}

export interface ComparionState {
	grayscale: boolean
	contrast: number
	brightness: number
	blur: number
	grid: boolean
	gridSize: number
	gridMarginSize: number | MarginObject
	gridOpacity: number
	gridColor: string
	overlay: boolean
	overlayBlendMode: string
	overlayOpacity: number
	pixelView: boolean
	diffThreshold: number

	downloadType: 'correction' | 'mask'
	downloadShowImage: boolean
	maskColor: string
	maskShape: 'square' | 'circle'
	correctionShape: 'square' | 'circle'
	correctionOpacity: number
	correctionBlur: number
	correctionBlendMode: GlobalCompositeOperation | 'none'
}

export interface UploadState {
	image?: string
	qrcode?: string
	qrcodeWidth?: number
	qrcodeHeight?: number
}

export interface ScannerState {
	resize: number
	contrast: number
	blur: number
	brightness: number
	grayscale: boolean
	locks: string[]
	cameraMirror: boolean
	cameraViewMode: 'original' | 'processed'
	cameraSampleDelay: number
}

export interface State {
	qrcode: QRCodeGeneratorState
	compare: ComparionState
	scanner: ScannerState
	uploaded: UploadState
}

export interface Segment {
	x: number
	y: number
	index: number
	data: ImageData
	hex: string
	color: [number, number, number, number]
	luminance: number
	value: number
	expected: number
	isMargin: boolean
}

export interface Diff {
	segments: Segment[]
	mainSegments: Segment[]
	mismatchDark: Segment[]
	mismatchLight: Segment[]
	mismatchCount: number
	avarageLuminance: number
	lightLuminance: number
	darkLuminance: number
}

interface MarkerInfo {
	x: number
	y: number
	position: 'top-left' | 'top-right' | 'bottom-left' | 'sub'
	isCenter: boolean
	isBorder: boolean
	isInner: boolean
	style: QrCodeGeneratorMarkerState
}

interface PixelInfo {
	x: number
	y: number
	isDark: boolean
	isBorder: boolean
	isIgnored: boolean
	marker?: MarkerInfo
}

/**
 * Default state for the QR code generator
 */
export const DEFAULT_QR_STATE: QRCodeGeneratorState = {
	text: '',
	ecc: 'Q',
	margin: 0,
	scale: 20,
	lightColor: '#ffffff',
	darkColor: '#000000',
	pixelStyle: 'square',
	markerStyle: 'square',
	markerShape: 'random',
	markerInnerShape: 'plus',
	markerSub: 'box',
	markers: [],
	maskPattern: -1,
	minVersion: 1,
	maxVersion: 40,
	boostECC: false,
	rotate: 0,
	invert: false,
	marginNoise: false,
	marginNoiseRate: 0.5,
	marginNoiseOpacity: 1,
	seed: Math.round(Math.random() * 1000000),
	marginNoiseSpace: 'marker',
	renderPointsType: 'all'
}

/**
 * Returns the default state for the QR code generator
 */
export function defaultGeneratorState(): QRCodeGeneratorState {
	return { ...DEFAULT_QR_STATE, seed: Math.round(Math.random() * 1000000) }
}

/**
 * QR Code Generator class for generating custom styled QR codes
 */
export class QRCodeGenerator {
	public state: QRCodeGeneratorState = $state({
		...DEFAULT_QR_STATE,
		seed: Math.round(Math.random() * 1000000)
	})
	private qr: QrCodeGenerateResult | null = $state(null)
	private canvas: HTMLCanvasElement | null = $state(null)
	private ctx: CanvasRenderingContext2D | null = $state(null)

	constructor(state?: Partial<QRCodeGeneratorState>) {
		if (state) {
			this.state = {
				...this.state,
				...state
			}
		}
	}

	/**
	 * Get the generated QR code info (dimensions)
	 */
	getInfo(): GeneratedQRInfo | null {
		if (!this.canvas) return null
		return {
			width: this.canvas.width,
			height: this.canvas.height
		}
	}

	/**
	 * Generate a QR code and render it to the provided canvas
	 */
	async generate(
		outCanvas: HTMLCanvasElement
	): Promise<GeneratedQRInfo | null> {
		if (!outCanvas) return null

		this.qr = this.createQrInstance()

		const {
			scale: cell,
			rotate,
			margin,
			marginNoise,
			seed,
			marginNoiseRate,
			marginNoiseSpace,
			pixelStyle,
			markerSub,
			invert,
			renderPointsType
		} = this.state

		const resolvedMargin = this.resolveMargin(margin)
		const marginTop = resolvedMargin.top
		const marginRight = resolvedMargin.right
		const marginBottom = resolvedMargin.bottom
		const marginLeft = resolvedMargin.left

		const halfcell = cell / 2
		const width: number = (this.qr.size + marginLeft + marginRight) * cell
		const height: number = (this.qr.size + marginTop + marginBottom) * cell

		this.canvas = document.createElement('canvas')
		this.canvas.width = width
		this.canvas.height = height
		this.canvas.style.imageRendering = 'pixelated'
		this.canvas.style.imageRendering = 'crisp-edges'
		this.ctx = this.canvas.getContext('2d', { willReadFrequently: true })!
		this.ctx.clearRect(0, 0, width, height)
		this.ctx.imageSmoothingEnabled = false

		const qr = this.qr
		const state = this.state
		const ctx = this.ctx

		const rand = (x: number, y: number, type: string) => {
			return seedrandom([seed, type, x, y].join('|'))()
		}

		const getBorderOpacity = (x: number, y: number) => {
			if (typeof state.marginNoiseOpacity === 'number')
				return state.marginNoiseOpacity
			const [min, max] = state.marginNoiseOpacity
			return rand(x, y, 'border-op') * (max - min) + min
		}

		const resolveMarkerStyle = (index: number): QrCodeGeneratorMarkerState => {
			const s = (index === 0 ? state : state.markers[index - 1]) || state

			const { markerStyle, markerShape } = s

			let markerInnerShape = s.markerInnerShape
			if (markerInnerShape === 'auto') {
				if (markerShape === 'circle') markerInnerShape = 'circle'
				else if (markerShape === 'tiny-plus') markerInnerShape = 'plus'
				else if (markerShape === 'octagon') markerInnerShape = 'diamond'
				else markerInnerShape = 'square'
			}

			return {
				markerStyle,
				markerShape,
				markerInnerShape
			}
		}

		const getModule = (x: number, y: number) => {
			if (x < 0 || y < 0 || x >= qr.size || y >= qr.size) return false
			return qr.data[y][x]
		}

		const getType = (x: number, y: number) => {
			if (x < 0 || y < 0 || x >= qr.size || y >= qr.size)
				return QrCodeDataType.Border
			return qr.types[y][x]
		}

		const getInfo = (x: number, y: number): PixelInfo => {
			let isBorder =
				marginNoiseSpace === 'full'
					? x < -1 || y < -1 || x > qr.size || y > qr.size
					: x < 0 || y < 0 || x >= qr.size || y >= qr.size
			let isIgnored = false

			let isDark = false
			if (isBorder && marginNoise) {
				isDark = rand(x, y, 'border-noise') < marginNoiseRate
			} else {
				isDark = getModule(x, y)
				if (
					renderPointsType === 'data' &&
					getType(x, y) !== QrCodeDataType.Data
				) {
					isDark = false
					isIgnored = true
				} else if (
					(renderPointsType === 'function' ||
						renderPointsType === 'guide' ||
						renderPointsType === 'marker') &&
					getType(x, y) < QrCodeDataType.Function
				) {
					isDark = false
					isIgnored = true
				}
			}

			if (renderPointsType !== 'data' && renderPointsType !== 'guide') {
				if (marginNoiseSpace === 'marker') {
					if (
						(x >= -1 && x <= 7 && y >= -1 && y <= 7) ||
						(x >= -1 && x <= 7 && y >= qr.size - 8 && y <= qr.size) ||
						(x >= qr.size - 8 && x <= qr.size && y >= -1 && y <= 7)
					) {
						isBorder = false
						isIgnored = false
					}
				} else if (
					marginNoiseSpace === 'minimal' ||
					marginNoiseSpace === 'extreme'
				) {
					if (
						(y >= 2 && y <= 4 && (x === -1 || x === qr.size)) ||
						(x >= 2 && x <= 4 && (y === -1 || y === qr.size)) ||
						(y >= qr.size - 5 && y <= qr.size - 3 && (x === -1 || x === 7)) ||
						(x >= qr.size - 5 && x <= qr.size - 3 && (y === -1 || y === 7))
					) {
						isBorder = false
						isIgnored = false
					}
				}
			}

			let marker: MarkerInfo | undefined

			const createMarker = (
				x: number,
				y: number,
				position: MarkerInfo['position'],
				_isSubMarker = false
			) => {
				const isInner =
					position === 'sub'
						? x === 2 && y === 2
						: x >= 2 && x <= 4 && y >= 2 && y <= 4
				const isBorder = !isInner
				const isCenter =
					position === 'sub' ? x === 2 && y === 2 : x === 3 && y === 3

				return {
					x,
					y,
					position,
					isInner,
					isBorder,
					isCenter,
					isIgnored,
					isSubMarker: _isSubMarker,
					style: resolveMarkerStyle(
						position === 'top-left'
							? 0
							: position === 'top-right'
								? 1
								: position === 'bottom-left'
									? 2
									: 3
					)
				}
			}

			if (x >= 0 && x < 7 && y >= 0 && y < 7) {
				marker = createMarker(x, y, 'top-left')
			} else if (x >= 0 && x < 7 && y >= qr.size - 7 && y < qr.size) {
				marker = createMarker(x, y - qr.size + 7, 'bottom-left')
			} else if (x >= qr.size - 7 && x < qr.size && y >= 0 && y < 7) {
				marker = createMarker(x - qr.size + 7, y, 'top-right')
			} else if (getType(x, y) === QrCodeDataType.Alignment) {
				let dx = x
				let dy = y
				while (getType(dx, dy) === QrCodeDataType.Alignment) dx -= 1
				dx += 1
				while (getType(dx, dy) === QrCodeDataType.Alignment) dy -= 1
				dy += 1
				marker = createMarker(x - dx, y - dy, 'sub')
			}

			if (marker) {
				if (marker.position !== 'sub') {
					if (marker.isBorder) {
						const { markerShape } = marker.style
						if (markerShape === 'circle' || markerShape === 'octagon')
							isDark = false

						if (markerShape === 'plus') {
							if (
								!(
									(marker.x >= 2 && marker.x <= 4) ||
									(marker.y >= 2 && marker.y <= 4)
								)
							)
								isDark = false
						} else if (markerShape === 'box') {
							if (
								!(
									(marker.x >= 1 && marker.x <= 5) ||
									(marker.y >= 1 && marker.y <= 5)
								)
							)
								isDark = false
						} else if (markerShape === 'random') {
							if (marker.x !== 3 && marker.y !== 3) {
								if (isDark) isDark = rand(x, y, 'marker') < 0.5
							}
						} else if (markerShape === 'tiny-plus') {
							if (marker.x !== 3 && marker.y !== 3) isDark = false
						}
					}

					if (marker?.isInner && marker.style.markerInnerShape === 'plus') {
						if (marker.x !== 3 && marker.y !== 3) isDark = false
					}
				} else if (marker?.position === 'sub') {
					if (marker.isBorder) {
						if (markerSub === 'circle' || markerSub === 'octagon')
							isDark = false
					}

					if (markerSub === 'plus' || markerSub === 'tiny-plus') {
						if (marker.x !== 2 && marker.y !== 2) isDark = false
					} else if (markerSub === 'box') {
						if (
							!(
								(marker.x >= 1 && marker.x <= 3) ||
								(marker.y >= 1 && marker.y <= 3)
							)
						)
							isDark = false
					} else if (markerSub === 'random') {
						if (marker.x !== 2 && marker.y !== 2) {
							if (isDark) isDark = rand(x, y, 'marker') < 0.5
						}
					}
				}
			}

			const cutOut = (ix: number, iy: number, w: number, h: number) => {
				if (x >= ix && x < ix + w && y >= iy && y < iy + h) {
					isDark = false
					isBorder = true
					isIgnored = true
				}
			}

			if (marginNoiseSpace === 'extreme') {
				cutOut(-1, -1, 3, 3)
				cutOut(-1, 5, 3, 3)
				cutOut(-1, qr.size - 2, 3, 3)
				cutOut(-1, qr.size - 8, 3, 3)
				cutOut(5, -1, 3, 3)
				cutOut(5, 5, 3, 3)
				cutOut(5, qr.size - 2, 3, 3)
				cutOut(5, qr.size - 8, 3, 3)
				cutOut(qr.size - 2, -1, 3, 3)
				cutOut(qr.size - 2, 5, 3, 3)
				cutOut(qr.size - 8, -1, 3, 3)
				cutOut(qr.size - 8, 5, 3, 3)
			}

			let targetX = x
			let targetY = y

			// Rotate the QR code
			if (x >= -1 && y >= -1 && x < qr.size + 1 && y < qr.size + 1) {
				targetX = x
				targetY = y
				if (rotate === 90) {
					targetX = qr.size - targetX - 1
					;[targetX, targetY] = [targetY, targetX]
				} else if (rotate === 180) {
					targetX = qr.size - targetX - 1
					targetY = qr.size - targetY - 1
				} else if (rotate === 270) {
					targetY = qr.size - targetY - 1
					;[targetX, targetY] = [targetY, targetX]
				}
			}

			targetX += marginLeft
			targetY += marginTop

			if (renderPointsType === 'guide' && marker) {
				isDark = false
				isIgnored = true
			}

			if (renderPointsType === 'marker' && !marker) {
				isDark = false
				isIgnored = true
			}

			return {
				isDark,
				isBorder,
				marker,
				isIgnored,
				x: targetX,
				y: targetY
			}
		}

		const pixels: PixelInfo[] = []

		for (let y = -marginTop; y < qr.size + marginBottom; y++) {
			for (let x = -marginLeft; x < qr.size + marginRight; x++)
				pixels.push(getInfo(x, y))
		}

		// Sort pixels so the markers are drawn in the correct order
		pixels.sort((a, b) => {
			const getOrder = (p: PixelInfo) => {
				if (p.marker?.isBorder) return 0
				if (p.marker?.isCenter) return 1
				if (p.marker?.isInner) return 2
				return 4
			}
			return getOrder(a) - getOrder(b)
		})

		const darkHex = invert ? state.lightColor : state.darkColor

		for (const { isDark, marker, x, y, isBorder, isIgnored } of pixels) {
			if (isIgnored) continue

			let _pixelStyle = pixelStyle

			const opacity = isBorder ? getBorderOpacity(x, y) : 1
			const _darkColor =
				opacity === 1
					? state.darkColor
					: darkHex +
						Math.round(opacity * 255)
							.toString(16)
							.padStart(2, '0')

			const lightColor = invert ? _darkColor : state.lightColor
			const darkColor = invert ? state.lightColor : _darkColor
			ctx.fillStyle = darkColor

			const cX = x * cell + halfcell
			const cY = y * cell + halfcell

			if (marker && marker.position !== 'sub') {
				const _markerStyle =
					marker.style.markerStyle === 'auto'
						? pixelStyle
						: marker.style.markerStyle

				const { markerShape } = marker.style

				_pixelStyle = _markerStyle

				if (renderPointsType === 'data') continue

				if (markerShape === 'circle') {
					if (marker.isBorder) continue

					if (marker.isCenter) {
						ctx.fillStyle = lightColor
						ctx.fillRect(cX - cell * 3.5, cY - cell * 3.5, cell * 7, cell * 7)

						ctx.beginPath()
						ctx.fillStyle = darkColor
						ctx.arc(cX, cY, cell * 3.5, 0, Math.PI * 2)
						ctx.fill()

						ctx.beginPath()
						ctx.fillStyle = lightColor
						ctx.arc(cX, cY, cell * 2.5, 0, Math.PI * 2)
						ctx.fill()

						ctx.fillStyle = darkColor
					}
				} else if (markerShape === 'octagon') {
					if (marker.isBorder) continue

					if (marker.isCenter) {
						ctx.fillStyle = lightColor
						ctx.fillRect(cX - cell * 3.5, cY - cell * 3.5, cell * 7, cell * 7)

						const octagonFor = (dx: number, dy: number) => {
							return [
								[dx, dy],
								[-dx, dy],
								[-dy, dx],
								[-dy, -dx],
								[-dx, -dy],
								[dx, -dy],
								[dy, -dx],
								[dy, dx]
							] as const
						}

						const drawOctagon = (size: number) => {
							ctx.beginPath()
							const points = octagonFor((1.5 / 3.5) * size, size)

							if (_pixelStyle === 'rounded') {
								const innerPoints = octagonFor(
									(1.5 / 3.5) * (size - 1),
									size - 1
								)
								const startPoint = [
									(points[0][0] + points[1][0]) / 2,
									(points[0][1] + points[1][1]) / 2
								]
								ctx.moveTo(cX + startPoint[0] * cell, cY + startPoint[1] * cell)
								;[...points, points[0]].forEach(([px, py], i) => {
									const previous = points.at(i - 1)!
									const next = points.at((i + 1) % points.length)!
									const inner = innerPoints.at(i % innerPoints.length)!
									const p1 = pointToLineProjection(
										...inner,
										...previous,
										px,
										py
									)
									const p2 = pointToLineProjection(...inner, ...next, px, py)
									ctx.lineTo(cX + p1[0] * cell, cY + p1[1] * cell)
									ctx.arcTo(
										cX + px * cell,
										cY + py * cell,
										cX + p2[0] * cell,
										cY + p2[1] * cell,
										cell
									)
									ctx.lineTo(cX + p2[0] * cell, cY + p2[1] * cell)
								})
							} else {
								points.forEach(([px, py], i) => {
									ctx[i === 0 ? 'moveTo' : 'lineTo'](
										cX + px * cell,
										cY + py * cell
									)
								})
							}
							ctx.closePath()
							ctx.fill()
						}

						ctx.fillStyle = darkColor
						drawOctagon(3.5)

						ctx.fillStyle = lightColor
						drawOctagon(2.5)

						ctx.fillStyle = darkColor
					}
				}

				if (marker.isInner) {
					const { markerInnerShape } = marker.style
					// inner markers
					if (markerInnerShape === 'circle') {
						if (marker.isCenter) {
							ctx.fillStyle = lightColor
							ctx.fillRect(cX - cell * 1.5, cY - cell * 1.5, cell * 3, cell * 3)
							ctx.beginPath()
							ctx.fillStyle = darkColor
							ctx.arc(cX, cY, cell * 1.5, 0, Math.PI * 2)
							ctx.fill()
						}
						continue
					} else if (markerInnerShape === 'eye') {
						if (marker.isCenter) {
							ctx.fillStyle = lightColor
							ctx.fillRect(cX - cell * 1.5, cY - cell * 1.5, cell * 3, cell * 3)
							ctx.beginPath()
							ctx.fillStyle = darkColor
							ctx.moveTo(cX, cY - cell * 1.5)
							ctx.arcTo(cX + cell * 1.5, cY, cX, cY + cell * 1.5, cell)
							ctx.lineTo(cX, cY + cell * 1.5)
							ctx.arcTo(cX - cell * 1.5, cY, cX, cY - cell * 1.5, cell)
							ctx.fill()
						}
						continue
					} else if (markerInnerShape === 'diamond') {
						if (marker.isCenter) {
							ctx.fillStyle = lightColor
							ctx.fillRect(cX - cell * 1.5, cY - cell * 1.5, cell * 3, cell * 3)
							ctx.beginPath()
							ctx.fillStyle = darkColor
							ctx.moveTo(cX, cY - cell * 1.5)
							ctx.lineTo(cX + cell * 1.5, cY)
							ctx.lineTo(cX, cY + cell * 1.5)
							ctx.lineTo(cX - cell * 1.5, cY)
							ctx.fill()
						}
						continue
					}
				}
			}

			if (marker?.position === 'sub') {
				if (renderPointsType === 'data') continue

				if (markerSub === 'circle') {
					if (marker.isBorder) continue

					if (marker.isCenter) {
						ctx.fillStyle = lightColor
						ctx.fillRect(cX - cell * 2.5, cY - cell * 2.5, cell * 5, cell * 5)

						ctx.beginPath()
						ctx.fillStyle = darkColor
						ctx.arc(cX, cY, cell * 2.5, 0, Math.PI * 2)
						ctx.fill()

						ctx.beginPath()
						ctx.fillStyle = lightColor
						ctx.arc(cX, cY, cell * 1.5, 0, Math.PI * 2)
						ctx.fill()

						ctx.fillStyle = darkColor
					}
				}
			}

			const square = (color = isDark ? darkColor : lightColor) => {
				ctx.fillStyle = color
				ctx.fillRect(x * cell, y * cell, cell, cell)
			}

			const dot = (color = isDark ? darkColor : lightColor) => {
				ctx.strokeStyle = 'none'
				ctx.fillStyle = color
				ctx.beginPath()
				ctx.arc(
					x * cell + halfcell,
					y * cell + halfcell,
					halfcell,
					0,
					Math.PI * 2
				)
				ctx.fill()
			}

			const corner = (index: number, color?: string) => {
				const pos = [
					[0, 0, 0, 1, 1, 0], // top left
					[0, 2, 0, 1, 1, 2], // bottom left
					[2, 0, 2, 1, 1, 0], // top right
					[2, 2, 2, 1, 1, 2] // bottom right
				][index]

				const points: [number, number][] = [
					[x * cell + halfcell * pos[0], y * cell + halfcell * pos[1]],
					[x * cell + halfcell * pos[2], y * cell + halfcell * pos[3]],
					[x * cell + halfcell * pos[4], y * cell + halfcell * pos[5]]
				]

				ctx.strokeStyle = 'none'
				if (color) ctx.fillStyle = color
				ctx.beginPath()
				ctx.moveTo(...points[0])
				ctx.lineTo(...points[1])
				ctx.arcTo(...points[0], ...points[2], halfcell + 2)
				ctx.lineTo(...points[0])
				ctx.fill()
			}

			// Skip white pixels when its not rounded
			if (!isDark && state.backgroundImage && isBorder) continue

			if (_pixelStyle === 'dot') {
				dot()
			} else if (_pixelStyle === 'squircle') {
				dot()
				for (let i = 0; i < 4; i++) {
					if (rand(x, y, `squircle-${i}`) < 0.5) corner(i)
				}
			} else if (
				_pixelStyle === 'rounded' ||
				_pixelStyle === 'row' ||
				_pixelStyle === 'column'
			) {
				const shouldConnect = (dx: number, dy: number) => {
					const pixel = pixels.find((p) => p.x === x + dx && p.y === y + dy)
					if (!pixel) return true
					if (pixel.isIgnored || (pixel.isBorder && !pixel.isDark)) return null
					return pixel.isDark
				}

				const top = shouldConnect(0, -1)
				const bottom = shouldConnect(0, 1)
				const left = shouldConnect(-1, 0)
				const right = shouldConnect(1, 0)
				const topLeft = shouldConnect(-1, -1)
				const topRight = shouldConnect(1, -1)
				const bottomLeft = shouldConnect(-1, 1)
				const bottomRight = shouldConnect(1, 1)

				if (isDark) {
					const colors: (null | boolean)[] = [null, null, null, null]
					if (_pixelStyle !== 'row') {
						colors[0] ||= top
						colors[2] ||= top
					}
					if (_pixelStyle !== 'row') {
						colors[1] ||= bottom
						colors[3] ||= bottom
					}
					if (_pixelStyle !== 'column') {
						colors[0] ||= left
						colors[1] ||= left
					}
					if (_pixelStyle !== 'column') {
						colors[2] ||= right
						colors[3] ||= right
					}

					if (_pixelStyle === 'rounded') {
						if ((top == null && left != null) || (left == null && top != null))
							colors[0] ||= true
						if (
							(top == null && right != null) ||
							(right == null && top != null)
						)
							colors[2] ||= true
						if (
							(bottom == null && left != null) ||
							(left == null && bottom != null)
						)
							colors[1] ||= true
						if (
							(bottom == null && right != null) ||
							(right == null && bottom != null)
						)
							colors[3] ||= true
					}

					colors.forEach((i, idx) => {
						if (i != null) corner(idx, i ? darkColor : lightColor)
					})
				} else {
					if (_pixelStyle === 'rounded') {
						if (top != null || left != null)
							corner(
								0,
								top && left && topLeft && !isBorder ? darkColor : lightColor
							)
						if (top != null || right != null)
							corner(
								2,
								top && right && topRight && !isBorder ? darkColor : lightColor
							)
						if (bottom != null || left != null)
							corner(
								1,
								bottom && left && bottomLeft && !isBorder
									? darkColor
									: lightColor
							)
						if (bottom != null || right != null)
							corner(
								3,
								bottom && right && bottomRight && !isBorder
									? darkColor
									: lightColor
							)
					} else if (_pixelStyle === 'row') {
						if (left != null) {
							corner(0, lightColor)
							corner(1, lightColor)
						}
						if (right != null) {
							corner(2, lightColor)
							corner(3, lightColor)
						}
					} else if (_pixelStyle === 'column') {
						if (top != null) {
							corner(0, lightColor)
							corner(2, lightColor)
						}
						if (bottom != null) {
							corner(1, lightColor)
							corner(3, lightColor)
						}
					}
				}
				dot()
			} else {
				square()
			}
		}

		// final, copy offscreen canvas to the real one
		outCanvas.width = width
		outCanvas.height = height
		const realCtx = outCanvas.getContext('2d')!
		realCtx.save()
		realCtx.fillStyle = invert ? state.darkColor : state.lightColor
		realCtx.fillRect(0, 0, width, height)
		realCtx.drawImage(this.canvas, 0, 0, width, height)
		realCtx.restore()

		return {
			width,
			height
		}
	}

	/**
	 * Resolve margin to an object with top, right, bottom, left values
	 */
	private resolveMargin(margin: number | MarginObject): MarginObject {
		if (typeof margin === 'number') {
			return { top: margin, right: margin, bottom: margin, left: margin }
		}
		return margin
	}

	/**
	 * Create a QR code instance using the uqr library
	 */
	private createQrInstance(): QrCodeGenerateResult {
		return encode(this.state.text || 'qrcode.antfu.me', {
			minVersion: this.state.minVersion,
			maxVersion: this.state.maxVersion,
			ecc: this.state.ecc,
			maskPattern: this.state.maskPattern,
			boostEcc: this.state.boostECC,
			border: 0
		})
	}
}

/**
 * Legacy function for backwards compatibility
 * @deprecated Use QRCodeGenerator class instead
 */
export async function generateQRCode(
	outCanvas: HTMLCanvasElement,
	state: QRCodeGeneratorState
): Promise<void> {
	const generator = new QRCodeGenerator(state)
	await generator.generate(outCanvas)
}

function pointToLineProjection(
	px: number,
	py: number,
	x1: number,
	y1: number,
	x2: number,
	y2: number
) {
	const dx = x2 - x1
	const dy = y2 - y1
	const d = dx * dx + dy * dy
	const u = ((px - x1) * dx + (py - y1) * dy) / d
	const x = x1 + u * dx
	const y = y1 + u * dy
	return [x, y] as const
}
