import 'jazz-tools/load-edge-wasm'
import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { svelteKitHandler } from 'better-auth/svelte-kit'
import { building } from '$app/environment'
import { auth } from '$lib/auth/auth.server'
import { paraglideMiddleware } from '$lib/paraglide/server'

// const handleCors: Handle = async ({ event, resolve }) => {
// 	// Handle CORS preflight requests for Jazz auth header
// 	if (event.request.method === 'OPTIONS') {
// 		return new Response(null, {
// 			status: 204,
// 			headers: {
// 				'Access-Control-Allow-Origin':
// 					event.request.headers.get('origin') ?? '*',
// 				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
// 				'Access-Control-Allow-Headers': 'Content-Type, x-jazz-auth',
// 				'Access-Control-Expose-Headers': 'x-jazz-auth',
// 				'Access-Control-Allow-Credentials': 'true',
// 				'Access-Control-Max-Age': '86400'
// 			}
// 		})
// 	}

// 	const response = await resolve(event)

// 	// Add CORS headers to all responses
// 	const origin = event.request.headers.get('origin')
// 	if (origin) {
// 		response.headers.set('Access-Control-Allow-Origin', origin)
// 		response.headers.set('Access-Control-Allow-Credentials', 'true')
// 		response.headers.set(
// 			'Access-Control-Allow-Headers',
// 			'Content-Type, x-jazz-auth'
// 		)
// 		response.headers.set('Access-Control-Expose-Headers', 'x-jazz-auth')
// 	}

// 	return response
// }

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
	// Dynamically import auth to avoid env variable issues during build
	// const { auth } = await import('$lib/auth/auth')
	return svelteKitHandler({ event, resolve, auth, building })
}

export const handle = sequence(handleParaglide, authHandle)
