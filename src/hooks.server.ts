import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { svelteKitHandler } from 'better-auth/svelte-kit'
import { building } from '$app/environment'
import { auth } from '$lib/auth/auth.server'
import { paraglideMiddleware } from '$lib/paraglide/server'

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		})
	})

const authHandle: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({
		headers: event.request.headers
	})

	// Make session and user available on server
	if (session) {
		event.locals.session = session.session
		event.locals.user = session.user
	}
	return svelteKitHandler({ event, resolve, auth, building })
}

export const handle = sequence(handleParaglide, authHandle)
