<script lang="ts" module>
	import {
		DitheringTypes,
		defaultObjectSizing,
		getShaderColorFromString,
		type ImageDitheringParams,
		type ImageDitheringUniforms,
		type ImageShaderPreset,
		imageDitheringFragmentShader,
		ShaderFitOptions
	} from '@paper-design/shaders';

	type ImageDitheringPreset = ImageShaderPreset<ImageDitheringParams>;

	export const defaultPreset: ImageDitheringPreset = {
		name: 'Default',
		params: {
			...defaultObjectSizing,
			fit: 'cover',
			speed: 0,
			frame: 0,
			colorFront: '#94ffaf',
			colorBack: '#000c38',
			colorHighlight: '#eaff94',
			type: '8x8',
			size: 2,
			colorSteps: 2,
			originalColors: false
		}
	} as const;

	export const retroPreset: ImageDitheringPreset = {
		name: 'Retro',
		params: {
			...defaultObjectSizing,
			fit: 'cover',
			speed: 0,
			frame: 0,
			colorFront: '#eeeeee',
			colorBack: '#5452ff',
			colorHighlight: '#eeeeee',
			type: '2x2',
			size: 3,
			colorSteps: 1,
			originalColors: true
		}
	} as const;

	export const noisePreset: ImageDitheringPreset = {
		name: 'Noise',
		params: {
			...defaultObjectSizing,
			fit: 'cover',
			speed: 0,
			frame: 0,
			colorFront: '#a2997c',
			colorBack: '#000000',
			colorHighlight: '#ededed',
			type: 'random',
			size: 1,
			colorSteps: 1,
			originalColors: false
		}
	} as const;

	export const naturalPreset: ImageDitheringPreset = {
		name: 'Natural',
		params: {
			...defaultObjectSizing,
			fit: 'cover',
			speed: 0,
			frame: 0,
			colorFront: '#ffffff',
			colorBack: '#000000',
			colorHighlight: '#ffffff',
			type: '8x8',
			size: 2,
			colorSteps: 5,
			originalColors: true
		}
	} as const;

	export const imageDitheringPresets: ImageDitheringPreset[] = [
		defaultPreset,
		noisePreset,
		retroPreset,
		naturalPreset
	];
</script>

<script lang="ts">
	import ShaderMount from './shader-mount.svelte';

	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, ImageDitheringParams {
		minPixelRatio?: number;
		maxPixelCount?: number;
		webGlContextAttributes?: WebGLContextAttributes;
		width?: string | number;
		height?: string | number;
		children?: Snippet;
	}

	let {
		// Own props
		speed = defaultPreset.params.speed,
		frame = defaultPreset.params.frame,
		colorFront = defaultPreset.params.colorFront,
		colorBack = defaultPreset.params.colorBack,
		colorHighlight = defaultPreset.params.colorHighlight,
		image = '',
		type = defaultPreset.params.type,
		colorSteps = defaultPreset.params.colorSteps,
		originalColors = defaultPreset.params.originalColors,
		size = defaultPreset.params.size,

		// Sizing props
		fit = defaultPreset.params.fit,
		scale = defaultPreset.params.scale,
		rotation = defaultPreset.params.rotation,
		originX = defaultPreset.params.originX,
		originY = defaultPreset.params.originY,
		offsetX = defaultPreset.params.offsetX,
		offsetY = defaultPreset.params.offsetY,
		worldWidth = defaultPreset.params.worldWidth,
		worldHeight = defaultPreset.params.worldHeight,

		// Pass-through props
		children,
		...restProps
	}: Props = $props();

	const uniforms = $derived({
		// Own uniforms
		u_image: image,
		u_colorFront: getShaderColorFromString(colorFront),
		u_colorBack: getShaderColorFromString(colorBack),
		u_colorHighlight: getShaderColorFromString(colorHighlight),
		u_type: DitheringTypes[type],
		u_pxSize: size,
		u_colorSteps: colorSteps,
		u_originalColors: originalColors,

		// Sizing uniforms
		u_fit: ShaderFitOptions[fit],
		u_rotation: rotation,
		u_scale: scale,
		u_offsetX: offsetX,
		u_offsetY: offsetY,
		u_originX: originX,
		u_originY: originY,
		u_worldWidth: worldWidth,
		u_worldHeight: worldHeight
	} satisfies ImageDitheringUniforms);
</script>

<ShaderMount
	{...restProps}
	{speed}
	{frame}
	fragmentShader={imageDitheringFragmentShader}
	{uniforms}
>
	{@render children?.()}
</ShaderMount>
