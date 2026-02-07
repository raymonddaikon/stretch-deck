import type { D1Database } from '@cloudflare/workers-types'
import type { RequestEvent } from '@sveltejs/kit'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { magicLink } from 'better-auth/plugins'
import { sveltekitCookies } from 'better-auth/svelte-kit'
import { withCloudflare } from 'better-auth-cloudflare'
import { drizzle } from 'drizzle-orm/d1'
import { jazzPlugin } from 'jazz-tools/better-auth/auth/server'
// import { JazzBetterAuthDatabaseAdapter } from 'jazz-tools/better-auth/database-adapter'
import { Resend } from 'resend'
import { render } from 'svelte/server'
import { getRequestEvent } from '$app/server'
import {
	BASE_URL,
	BETTER_AUTH_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	// JAZZ_WORKER_ACCOUNT,
	// JAZZ_WORKER_SECRET,
	RESEND_API_KEY
} from '$env/static/private'
// import { PUBLIC_JAZZ_API_KEY } from '$env/static/public'
import MagicLink from '$lib/emails/magic-link.svelte'

import { schema } from '../../db'

// Your Better Auth server configuration
// export const auth = betterAuth({
// 	appName: 'Stretch Deck',
// 	baseURL: BASE_URL,
// 	secret: BETTER_AUTH_SECRET,
// 	// basePath: '/api/auth',
// 	advanced: {
// 		defaultCookieAttributes:
// 			process.env.NODE_ENV === 'production'
// 				? {
// 						sameSite: 'lax',
// 						secure: true
// 						// partitioned: true
// 					}
// 				: undefined
// 		// cookiePrefix: 'stretch'
// 		// ipAddressHeaders: ['cf-connecting-ip', 'x-real-ip']
// 	},
// 	// Add the Jazz plugin
// 	plugins: [
// 		jazzPlugin(),
// 		// magicLink({
// 		// 	// 10 minutes
// 		// 	expiresIn: 600,
// 		// 	sendMagicLink: async ({ email, token, url }, ctx) => {
// 		// 		const acceptLanguage = ctx?.request?.headers.get('accept-language')
// 		// 		const language = acceptLanguage?.split(',')[0]?.split('-')[0] as
// 		// 			| 'en'
// 		// 			| 'jp'
// 		// 			| undefined
// 		// 		const { html } = render(MagicLink, {
// 		// 			props: {
// 		// 				url: `${BASE_URL}/magic-link/verify?token=${token}`,
// 		// 				language
// 		// 			}
// 		// 		})
// 		// 		resend.emails.send({
// 		// 			from: 'login@stretch-deck.com',
// 		// 			to: email,
// 		// 			subject: 'Stretch Deck Magic Link Login',
// 		// 			html: html
// 		// 		})
// 		// 	}
// 		// }),
// 		// other server plugins
// 		sveltekitCookies(getRequestEvent)
// 	],
// 	database: drizzleAdapter({} as D1Database, {
// 		provider: 'sqlite',
// 		usePlural: true,
// 		debugLogs: true
// 	}),
// 	// database: JazzBetterAuthDatabaseAdapter({
// 	// 	syncServer: `wss://cloud.jazz.tools/?key=${PUBLIC_JAZZ_API_KEY}`,
// 	// 	// syncServer: 'ws://localhost:4200',
// 	// 	accountID: JAZZ_WORKER_ACCOUNT,
// 	// 	accountSecret: JAZZ_WORKER_SECRET
// 	// }),
// 	// databaseHooks: {
// 	// 	user: {
// 	// 		create: {
// 	// 			async after(user) {
// 	// 				// Here we can send a welcome email to the user
// 	// 				// console.log('User created with Jazz Account ID:', user.accountID)
// 	// 			}
// 	// 		}
// 	// 	}
// 	// },
// 	socialProviders: {
// 		google: {
// 			accessType: 'offline',
// 			prompt: 'select_account consent',
// 			clientId: GOOGLE_CLIENT_ID,
// 			clientSecret: GOOGLE_CLIENT_SECRET,
// 			scope: [
// 				'https://www.googleapis.com/auth/userinfo.email',
// 				'https://www.googleapis.com/auth/userinfo.profile'
// 			]
// 		}
// 	}

// 	// rest of the Better Auth configuration
// 	// like database, email/password authentication, social providers, etc.
// })

function createAuth(event?: RequestEvent) {
	// Use actual DB for runtime, empty object for CLI
	const resend = new Resend(RESEND_API_KEY)
	const db = event?.platform?.env
		? drizzle(event?.platform?.env.DB, { schema, logger: true })
		: ({} as any)

	return betterAuth({
		...withCloudflare(
			{
				autoDetectIpAddress: true, // Auto-detect IP from Cloudflare headers
				geolocationTracking: true, // Track geolocation in sessions
				cf: event?.platform?.cf || {},
				d1: event?.platform?.env
					? {
							db,
							options: {
								usePlural: true,
								debugLogs: true
							}
						}
					: undefined
				// kv: env?.KV
			},
			{
				appName: 'Stretch Deck',
				baseURL: BASE_URL,
				secret: BETTER_AUTH_SECRET,
				// basePath: '/api/auth',
				advanced: {
					defaultCookieAttributes: {
						sameSite: 'lax',
						secure: true
						// partitioned: true
					}
					// process.env.NODE_ENV === 'production'
					// 	? {
					// 			sameSite: 'lax',
					// 			secure: true
					// 			// partitioned: true
					// 		}
					// 	: undefined
					// cookiePrefix: 'stretch'
					// ipAddressHeaders: ['cf-connecting-ip', 'x-real-ip']
				},
				experimental: { joins: true },
				plugins: [
					jazzPlugin(),
					magicLink({
						// 10 minutes
						expiresIn: 600,
						sendMagicLink: async ({ email, token, url }, ctx) => {
							const acceptLanguage =
								ctx?.request?.headers.get('accept-language')
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
				database: drizzleAdapter(db as D1Database, {
					provider: 'sqlite',
					usePlural: true,
					debugLogs: true
				}),
				// database: JazzBetterAuthDatabaseAdapter({
				// 	syncServer: `wss://cloud.jazz.tools/?key=${PUBLIC_JAZZ_API_KEY}`,
				// 	// syncServer: 'ws://localhost:4200',
				// 	accountID: JAZZ_WORKER_ACCOUNT,
				// 	accountSecret: JAZZ_WORKER_SECRET
				// }),
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
				},
				rateLimit: {
					enabled: true,
					window: 60, // Minimum KV TTL is 60s
					max: 100, // reqs/window
					customRules: {
						// https://github.com/better-auth/better-auth/issues/5452
						'/sign-in/email': {
							window: 60,
							max: 100
						},
						'/sign-in/social': {
							window: 60,
							max: 100
						}
					}
				}
			}
		)
		//Only add database adapter for CLI schema generation
		// ...(event?.platform?.env
		// 	? {}
		// 	: {
		// 			database: drizzleAdapter({} as D1Database, {
		// 				provider: 'sqlite',
		// 				usePlural: true,
		// 				debugLogs: true
		// 			})
		// 		})
	})
}

export const auth = createAuth()

export { createAuth }
