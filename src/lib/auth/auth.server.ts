import { betterAuth } from 'better-auth'
import { jazzPlugin } from 'jazz-tools/better-auth/auth/server'
import { JazzBetterAuthDatabaseAdapter } from 'jazz-tools/better-auth/database-adapter'
import { JAZZ_WORKER_ACCOUNT, JAZZ_WORKER_SECRET } from '$env/static/private'
import { PUBLIC_JAZZ_API_KEY } from '$env/static/public'

// Your Better Auth server configuration
export const auth = betterAuth({
	// Add the Jazz plugin
	plugins: [
		jazzPlugin()
		// other server plugins
	],
	database: JazzBetterAuthDatabaseAdapter({
		syncServer: `wss://cloud.jazz.tools/?key=${PUBLIC_JAZZ_API_KEY}`,
		accountID: JAZZ_WORKER_ACCOUNT,
		accountSecret: JAZZ_WORKER_SECRET
	})

	// rest of the Better Auth configuration
	// like database, email/password authentication, social providers, etc.
})

export const authWithHooks = betterAuth({
	appName: 'Stretch Deck',
	plugins: [jazzPlugin()],
	baseURL: 'http://localhost:5173',
	basePath: '/api/auth',
	advanced: {
		cookiePrefix: 'stretch'
		// ipAddressHeaders: ["cf-connecting-ip", "x-real-ip"],
	},
	databaseHooks: {
		user: {
			create: {
				async after(user) {
					// Here we can send a welcome email to the user
					console.log('User created with Jazz Account ID:', user.accountID)
				}
			}
		}
	}
})
