import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { svelteKitHandler } from 'better-auth/svelte-kit'
import { building } from '$app/environment'
import { createAuth } from '$lib/auth/auth.server'
import { paraglideMiddleware } from '$lib/paraglide/server'

const handleParaglide: Handle = async ({ event, resolve }) => {
	// Skip paraglide middleware for API routes to avoid interfering with auth callbacks
	if (event.url.pathname.includes('/api/')) {
		return resolve(event)
	}

	return paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		})
	})
}

const authHandle: Handle = async ({ event, resolve }) => {
	// Create auth instance with request context to access D1 binding
	const auth = createAuth(event)
	return svelteKitHandler({ event, resolve, auth, building })
}

export const handle = sequence(authHandle, handleParaglide)
