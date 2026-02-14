import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// In local dev we need to use the alchemy adapter to inject the local DB env. In prod we need to use the svelte adapter so we can bundle wasm
import alchemy from 'alchemy/cloudflare/sveltekit'

// Need to use the default adapter because the alchemy adapter doesn't work with wasm

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: { adapter: adapter() }
}

export default config
