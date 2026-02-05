import alchemy from 'alchemy'
import {
	D1Database,
	// Ai,
	// AiGateway,
	// DurableObjectNamespace,
	// KVNamespace,
	// R2Bucket,
	Secret,
	SvelteKit
} from 'alchemy/cloudflare'

const app = await alchemy('stretch-deck', {
	stage: 'dev',
	password: process.env.SECRET_PASSPHRASE
})
const database = await D1Database('stretch-deck-db', {
	name: 'auth-db',
	migrationsDir: './migrations'
})

export const worker = await SvelteKit('stretch-deck-beta', {
	compatibility: 'node',
	adopt: true,
	url: true,
	bindings: {
		DB: database
		// PUBLIC_JAZZ_API_KEY: process.env.PUBLIC_JAZZ_API_KEY as string,
		// JAZZ_WORKER_ACCOUNT: alchemy.secret(process.env.JAZZ_WORKER_ACCOUNT),
		// JAZZ_WORKER_SECRET: alchemy.secret(process.env.JAZZ_WORKER_SECRET),
		// BASE_URL: alchemy.secret(process.env.BASE_URL),
		// RESEND_API_KEY: alchemy.secret(process.env.RESEND_API_KEY),
		// BETTER_AUTH_SECRET: alchemy.secret(process.env.BETTER_AUTH_SECRET),
		// GOOGLE_CLIENT_ID: alchemy.secret(process.env.GOOGLE_CLIENT_ID),
		// GOOGLE_CLIENT_SECRET: alchemy.secret(process.env.GOOGLE_CLIENT_SECRET)
	}
})

await app.finalize()
