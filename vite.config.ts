// import { readFileSync } from 'node:fs'
// import { dirname, resolve } from 'node:path'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { playwright } from '@vitest/browser-playwright'
import svelteEmailTailwind from 'svelte-email-tailwind/vite'
import type { TailwindConfig } from 'tw-to-css'
// import type { Plugin } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'
// import topLevelAwait from 'vite-plugin-top-level-await'
// import wasm from 'vite-plugin-wasm'
import { defineConfig } from 'vitest/config'

const emailTailwindConfig: TailwindConfig = {
	theme: {
		screens: {
			md: { max: '767px' },
			sm: { max: '475px' }
		},
		fontFamily: {
			// Departure Mono with email-safe fallbacks (web fonts only work in Apple Mail, iOS, Thunderbird)
			mono: [
				'Departure Mono',
				'monospace',
				'Consolas',
				'Monaco',
				'Courier New'
			],
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'Helvetica Neue',
				'Helvetica',
				'sans-serif'
			]
		},
		extend: {
			colors: {
				// Brand tint color
				tint: '#0047ff',
				// Theme colors derived from tint
				background: '#fafaff',
				foreground: '#1a1a2e',
				border: '#d4d4e8',
				muted: '#6b6b8a',
				// Card foreground (focused/accent)
				accent: '#0047ff',
				// Button colors (matching bg-primary text-primary-foreground)
				primary: '#1a1a2e',
				'primary-foreground': '#fafaff'
			}
		}
	}
}

export default defineConfig({
	optimizeDeps: {
		exclude: ['cojson-core-wasm']
	},
	envPrefix: 'PUBLIC_',
	plugins: [
		// topLevelAwait(),
		// wasm(),
		tailwindcss(),
		sveltekit(),
		devtoolsJson(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		SvelteKitPWA({
			base: '/',
			workbox: {
				maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MiB
				globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
			}
		}),
		svelteEmailTailwind({ tailwindConfig: emailTailwindConfig })
	],
	// ssr: {
	// 	// Ensure WASM-containing packages are bundled by Vite during SSR so our plugin handles them
	// 	noExternal: ['cojson', 'cojson-core-wasm', 'jazz-tools']
	// },
	// server: {
	// 	host: '0.0.0.0',
	// 	allowedHosts: ['c167e685251e.ngrok-free.app']
	// },
	test: {
		expect: { requireAssertions: true },

		projects: [
			{
				extends: './vite.config.ts',

				test: {
					name: 'client',

					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }]
					},

					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**']
				}
			},

			{
				extends: './vite.config.ts',

				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
})
