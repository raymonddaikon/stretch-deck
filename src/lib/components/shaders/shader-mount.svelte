<script lang="ts">
	import {
		getEmptyPixel,
		type ShaderMotionParams,
		type ShaderMountUniforms,
		ShaderMount as ShaderMountVanilla
	} from '@paper-design/shaders';
	import { watch } from 'runed';
	import type { Snippet } from 'svelte';
	import type { Attachment } from 'svelte/attachments';
	import type { HTMLAttributes } from 'svelte/elements';

	/**
	 * Svelte Shader Mount can also accept strings as uniform values, which will be assumed to be URLs and loaded as images
	 */
	interface ShaderMountUniformsSvelte {
		[key: string]: string | boolean | number | number[] | number[][] | HTMLImageElement | undefined;
	}

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, ShaderMotionParams {
		fragmentShader: string;
		uniforms: ShaderMountUniformsSvelte;
		mipmaps?: string[];
		minPixelRatio?: number;
		maxPixelCount?: number;
		webGlContextAttributes?: WebGLContextAttributes;
		/** Inline CSS width style */
		width?: string | number;
		/** Inline CSS height style */
		height?: string | number;
		children?: Snippet;
	}

	let {
		fragmentShader,
		uniforms: uniformsProp,
		webGlContextAttributes,
		speed = 0,
		frame = 0,
		width,
		height,
		minPixelRatio,
		maxPixelCount,
		mipmaps,
		style,
		children,
		...divProps
	}: Props = $props();

	// Using regular variables for imperative WebGL instance (not reactive state)
	let shaderMount: ShaderMountVanilla | null = null;
	let isInitialized = $state(false);

	/** Parse the provided uniforms, turning URL strings into loaded images */
	async function processUniforms(
		uniformsProp: ShaderMountUniformsSvelte
	): Promise<ShaderMountUniforms> {
		const processedUniforms = {} as ShaderMountUniforms;
		const imageLoadPromises: Promise<void>[] = [];

		const isValidUrl = (url: string): boolean => {
			try {
				if (url.startsWith('/')) return true;
				new URL(url);
				return true;
			} catch {
				return false;
			}
		};

		const isExternalUrl = (url: string): boolean => {
			try {
				if (url.startsWith('/')) return false;
				const urlObject = new URL(url, window.location.origin);
				return urlObject.origin !== window.location.origin;
			} catch {
				return false;
			}
		};

		Object.entries(uniformsProp).forEach(([key, value]) => {
			if (typeof value === 'string') {
				if (!value) {
					processedUniforms[key] = getEmptyPixel();
					return;
				}

				if (!isValidUrl(value)) {
					console.warn(`Uniform "${key}" has invalid URL "${value}". Skipping image loading.`);
					return;
				}

				const imagePromise = new Promise<void>((resolve, reject) => {
					const img = new Image();
					if (isExternalUrl(value)) {
						img.crossOrigin = 'anonymous';
					}
					img.onload = () => {
						processedUniforms[key] = img;
						resolve();
					};
					img.onerror = () => {
						console.error(`Could not set uniforms. Failed to load image at ${value}`);
						reject();
					};
					img.src = value;
				});
				imageLoadPromises.push(imagePromise);
			} else {
				processedUniforms[key] = value;
			}
		});

		await Promise.all(imageLoadPromises);
		return processedUniforms;
	}

	function computeStyle(): string | undefined {
		if (width === undefined && height === undefined) {
			return typeof style === 'string' ? style : undefined;
		}

		const widthValue =
			typeof width === 'string' && !Number.isNaN(+width)
				? `${+width}px`
				: typeof width === 'number'
					? `${width}px`
					: width;
		const heightValue =
			typeof height === 'string' && !Number.isNaN(+height)
				? `${+height}px`
				: typeof height === 'number'
					? `${height}px`
					: height;

		let computedStyle = '';
		if (widthValue) computedStyle += `width: ${widthValue};`;
		if (heightValue) computedStyle += `height: ${heightValue};`;
		if (typeof style === 'string') computedStyle += style;

		return computedStyle || undefined;
	}

	// Action to initialize and manage the shader mount
	const shaderAttachment: Attachment<HTMLDivElement> = (node) => {
		let disposed = false;

		const initShader = async () => {
			const uniforms = await processUniforms(uniformsProp);

			if (!disposed) {
				shaderMount = new ShaderMountVanilla(
					node,
					fragmentShader,
					uniforms,
					webGlContextAttributes,
					speed,
					frame,
					minPixelRatio,
					maxPixelCount,
					mipmaps
				);
				isInitialized = true;
			}
		};

		initShader();

		return () => {
			disposed = true;
			shaderMount?.dispose();
			shaderMount = null;
			isInitialized = false;
		};
	};

	// Update uniforms when they change
	watch(
		() => [uniformsProp, isInitialized],
		() => {
			if (!isInitialized || !shaderMount) return;

			const currentUniforms = uniformsProp;
			let isStale = false;

			const updateUniforms = async () => {
				const uniforms = await processUniforms(currentUniforms);
				if (!isStale && shaderMount) {
					shaderMount.setUniforms(uniforms);
				}
			};

			updateUniforms();

			return () => {
				isStale = true;
			};
		}
	);

	watch(
		() => [isInitialized, speed],
		() => {
			// Update speed
			if (shaderMount && isInitialized) shaderMount.setSpeed(speed);
		}
	);

	watch(
		() => [isInitialized, maxPixelCount],
		() => {
			// Update maxPixelCount
			if (shaderMount && isInitialized) shaderMount.setMaxPixelCount(maxPixelCount);
		}
	);

	watch(
		() => [isInitialized, minPixelRatio],
		() => {
			// Update minPixelRatio
			if (shaderMount && isInitialized) shaderMount.setMinPixelRatio(minPixelRatio);
		}
	);

	watch(
		() => [isInitialized, frame],
		() => {
			// Update frame
			if (shaderMount && isInitialized) shaderMount.setFrame(frame);
		}
	);
</script>

<div {@attach shaderAttachment} style={computeStyle()} {...divProps}>
	{@render children?.()}
</div>
