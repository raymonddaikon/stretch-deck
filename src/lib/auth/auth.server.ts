import 'jazz-tools/load-edge-wasm'
import { betterAuth } from 'better-auth'
import { magicLink } from 'better-auth/plugins'
import { sveltekitCookies } from 'better-auth/svelte-kit'
import { jazzPlugin } from 'jazz-tools/better-auth/auth/server'
import { JazzBetterAuthDatabaseAdapter } from 'jazz-tools/better-auth/database-adapter'
import { Resend } from 'resend'
import { render } from 'svelte/server'
import { getRequestEvent } from '$app/server'
import {
	BASE_URL,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	JAZZ_WORKER_ACCOUNT,
	//  BETTER_AUTH_SECRET,
	// GOOGLE_CLIENT_ID,
	//  GOOGLE_CLIENT_SECRET,
	JAZZ_WORKER_SECRET,
	RESEND_API_KEY
} from '$env/static/private'
import { PUBLIC_JAZZ_API_KEY } from '$env/static/public'
import MagicLink from '$lib/emails/magic-link.svelte'

const resend = new Resend(RESEND_API_KEY)

// Your Better Auth server configuration
export const auth = betterAuth({
	appName: 'Stretch Deck',
	baseURL: BASE_URL,
	basePath: '/api/auth',
	advanced: {
		cookiePrefix: 'stretch'
		// ipAddressHeaders: ["cf-connecting-ip", "x-real-ip"],
	},
	// Add the Jazz plugin
	plugins: [
		jazzPlugin(),
		magicLink({
			// 10 minutes
			expiresIn: 600,
			sendMagicLink: async ({ email, token, url }, ctx) => {
				const acceptLanguage = ctx?.request?.headers.get('accept-language')
				const language = acceptLanguage?.split(',')[0]?.split('-')[0] as
					| 'en'
					| 'jp'
					| undefined
				const { html } = render(MagicLink, {
					props: {
						url: `${BASE_URL}/magic-link/verify?token=${token}`,
						language
					}
				})
				resend.emails.send({
					from: 'login@stretch-deck.com',
					to: email,
					subject: 'Stretch Deck Magic Link Login',
					html: html
				})
			}
		}),
		// other server plugins
		sveltekitCookies(getRequestEvent)
	],
	database: JazzBetterAuthDatabaseAdapter({
		syncServer: `wss://cloud.jazz.tools/?key=${PUBLIC_JAZZ_API_KEY}`,
		// syncServer: 'ws://localhost:4200',
		accountID: JAZZ_WORKER_ACCOUNT,
		accountSecret: JAZZ_WORKER_SECRET
	}),
	databaseHooks: {
		user: {
			create: {
				async after(user) {
					// Here we can send a welcome email to the user
					console.log('User created with Jazz Account ID:', user.accountID)
				}
			}
		}
	},
	socialProviders: {
		google: {
			accessType: 'offline',
			prompt: 'select_account consent',
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			scope: [
				'https://www.googleapis.com/auth/userinfo.email',
				'https://www.googleapis.com/auth/userinfo.profile'
			]
		}
	}

	// rest of the Better Auth configuration
	// like database, email/password authentication, social providers, etc.
})
