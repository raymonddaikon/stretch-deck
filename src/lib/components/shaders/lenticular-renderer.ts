/**
 * Shared Lenticular Renderer
 *
 * Uses a single hidden WebGL context to render lenticular shader effects.
 * Each card gets an inline 2D <canvas> that receives the rendered frame
 * via drawImage() — a fast GPU-to-GPU copy.
 *
 * Approach inspired by github.com/ArtBIT/lenticular-sticker:
 * All images are composited side-by-side into a single atlas texture.
 * The fragment shader uses the tilt-driven phase to pick which image's
 * column to sample from, creating the lenticular stripe effect.
 */

import * as THREE from 'three'

/**
 * Fragment shader: single-atlas lenticular stripe effect.
 *
 * The atlas texture contains N images placed side-by-side horizontally.
 * For each pixel, we compute which stripe it falls in (based on divisions + tilt phase),
 * then sample the corresponding image region from the atlas.
 */
const fragmentShader = /* glsl */ `
	precision mediump float;

	uniform sampler2D u_atlas;
	uniform float u_numImages;
	uniform float u_tilt;
	uniform float u_divisions;

	varying vec2 vUv;

	void main() {
		// Lenticular lens simulation:
		//
		// Each "lens" (division) spans a small horizontal region. Within that lens,
		// there are N image slices (one per image). The tilt angle determines which
		// slice is visible through each lens.
		//
		// At tilt = -1: image 0 fills every lens (fully visible)
		// At tilt =  0: middle image visible, with stripes of neighbors
		// At tilt = +1: last image fills every lens (fully visible)
		//
		// The key: tilt doesn't just phase-shift stripes — it controls a continuous
		// selector [0, numImages-1] that picks which image dominates. The lens
		// position adds a small per-stripe offset, creating the interlacing pattern
		// during transitions.

		// Continuous image selector based on tilt: maps [-1,1] → [0, numImages-1]
		float selector = (u_tilt * 0.5 + 0.5) * (u_numImages - 1.0);

		// Per-lens offset: each lens element adds a small fractional offset
		// This creates the stripe interlacing during transitions
		// Range of lensOffset: [-0.5, 0.5]
		float lensOffset = fract(vUv.x * u_divisions) - 0.5;

		// Combine: selector picks the base image, lensOffset creates stripe variation
		float rawIndex = selector + lensOffset;

		// Clamp to valid image range — this is what makes the extremes show
		// a single image: at tilt=-1, selector=0, so rawIndex ranges [-0.5, 0.5],
		// and after floor+clamp everything maps to image 0
		float imageIndex = clamp(floor(rawIndex + 0.5), 0.0, u_numImages - 1.0);

		// Sample from the atlas
		float atlasX = (imageIndex + vUv.x) / u_numImages;
		gl_FragColor = texture2D(u_atlas, vec2(atlasX, vUv.y));
	}
`

const vertexShader = /* glsl */ `
	varying vec2 vUv;
	void main() {
		vUv = uv;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`

export interface LenticularCard {
	/** Unique instance ID */
	id: string
	/** Inline 2D canvas to blit the rendered frame onto */
	canvas: HTMLCanvasElement
	/** 2D rendering context for the inline canvas */
	ctx: CanvasRenderingContext2D
	/** Current tilt value — normalized to [-1, 1] by the card component */
	tilt: number
	/** Number of stripe divisions */
	divisions: number
	/** Atlas texture uniform */
	atlasTexture: THREE.CanvasTexture
	/** Number of images in the atlas */
	numImages: number
}

// Singleton state
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.OrthographicCamera | null = null
let mesh: THREE.Mesh | null = null
let material: THREE.ShaderMaterial | null = null
let geometry: THREE.PlaneGeometry | null = null
const cards = new Map<string, LenticularCard>()
let animationId: number | null = null

// The render target size — we render at this resolution then blit to each card's canvas
const RENDER_SIZE = 512

function ensureRenderer() {
	if (renderer) return true
	if (typeof window === 'undefined') return false

	try {
		// Hidden canvas — never added to DOM
		const canvas = document.createElement('canvas')
		canvas.width = RENDER_SIZE
		canvas.height = RENDER_SIZE

		renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: false,
			alpha: true,
			powerPreference: 'low-power',
			preserveDrawingBuffer: true // Required for drawImage() to read pixels
		})
		renderer.setSize(RENDER_SIZE, RENDER_SIZE, false)
		renderer.autoClear = true

		scene = new THREE.Scene()
		camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10)
		camera.position.z = 1

		geometry = new THREE.PlaneGeometry(1, 1)

		// Shared material — uniforms are swapped per-card each frame
		material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				u_atlas: { value: new THREE.Texture() },
				u_numImages: { value: 1.0 },
				u_tilt: { value: 0.0 },
				u_divisions: { value: 60.0 }
			},
			transparent: true
		})

		mesh = new THREE.Mesh(geometry, material)
		scene.add(mesh)

		return true
	} catch (e) {
		console.error('Failed to initialize lenticular renderer:', e)
		return false
	}
}

/**
 * Combine multiple HTMLImageElements into a single side-by-side atlas canvas,
 * then create a THREE.CanvasTexture from it.
 */
function createAtlasTexture(images: HTMLImageElement[]): THREE.CanvasTexture {
	const maxW = Math.max(...images.map((img) => img.naturalWidth || img.width))
	const maxH = Math.max(...images.map((img) => img.naturalHeight || img.height))

	const atlasCanvas = document.createElement('canvas')
	atlasCanvas.width = maxW * images.length
	atlasCanvas.height = maxH
	const ctx = atlasCanvas.getContext('2d')!

	images.forEach((img, i) => {
		ctx.drawImage(
			img,
			0,
			0,
			img.naturalWidth || img.width,
			img.naturalHeight || img.height,
			i * maxW,
			0,
			maxW,
			maxH
		)
	})

	const tex = new THREE.CanvasTexture(atlasCanvas)
	tex.minFilter = THREE.LinearFilter
	tex.magFilter = THREE.LinearFilter
	tex.needsUpdate = true
	return tex
}

function startLoop() {
	if (animationId !== null) return

	function frame() {
		animationId = requestAnimationFrame(frame)
		if (!renderer || !scene || !camera || !material || !mesh) return

		cards.forEach((card) => {
			// Swap uniforms for this card
			material!.uniforms.u_atlas.value = card.atlasTexture
			material!.uniforms.u_numImages.value = card.numImages
			material!.uniforms.u_tilt.value = card.tilt
			material!.uniforms.u_divisions.value = card.divisions
			material!.uniformsNeedUpdate = true

			// Render to the hidden WebGL canvas
			renderer!.render(scene!, camera!)

			// Blit from WebGL canvas to the card's inline 2D canvas (fast GPU copy)
			const { width, height } = card.canvas
			if (width > 0 && height > 0) {
				card.ctx.clearRect(0, 0, width, height)
				card.ctx.drawImage(renderer!.domElement, 0, 0, width, height)
			}
		})
	}

	frame()
}

function stopLoop() {
	if (animationId !== null) {
		cancelAnimationFrame(animationId)
		animationId = null
	}
}

/**
 * Register a card with the shared renderer.
 * Returns the card entry for updating tilt values.
 */
export function registerCard(
	id: string,
	canvas: HTMLCanvasElement,
	images: HTMLImageElement[],
	divisions: number
): LenticularCard | null {
	if (!ensureRenderer()) return null

	// Remove existing if re-registering
	unregisterCard(id)

	const ctx = canvas.getContext('2d')
	if (!ctx) return null

	const atlasTexture = createAtlasTexture(images)

	const card: LenticularCard = {
		id,
		canvas,
		ctx,
		tilt: 0,
		divisions,
		atlasTexture,
		numImages: images.length
	}

	cards.set(id, card)

	if (cards.size === 1) startLoop()

	return card
}

/**
 * Update textures for an existing card.
 */
export function updateCardImages(
	id: string,
	images: HTMLImageElement[],
	divisions: number
) {
	const card = cards.get(id)
	if (!card) return

	// Dispose old atlas
	card.atlasTexture.dispose()

	card.atlasTexture = createAtlasTexture(images)
	card.numImages = images.length
	card.divisions = divisions
}

/**
 * Unregister a card and clean up its textures.
 */
export function unregisterCard(id: string) {
	const card = cards.get(id)
	if (!card) return

	card.atlasTexture.dispose()
	cards.delete(id)

	if (cards.size === 0) {
		stopLoop()
	}
}

/**
 * Full cleanup — dispose renderer and all resources.
 */
export function dispose() {
	stopLoop()
	cards.forEach((card) => {
		card.atlasTexture.dispose()
	})
	cards.clear()
	geometry?.dispose()
	material?.dispose()
	renderer?.dispose()
	renderer = null
	scene = null
	camera = null
	mesh = null
	material = null
	geometry = null
}
