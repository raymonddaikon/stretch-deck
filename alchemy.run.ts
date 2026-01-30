import alchemy from 'alchemy'
import {
	D1Database,
	// Ai,
	// AiGateway,
	// DurableObjectNamespace,
	// KVNamespace,
	// R2Bucket,
	SvelteKit
} from 'alchemy/cloudflare'

const app = await alchemy('stretch-deck', {
	stage: 'dev'
})
const database = await D1Database('stretch-deck-db', {
	name: 'auth-db',
	migrationsDir: './migrations'
})

export const worker = await SvelteKit('stretch-deck-beta', {
	compatibility: 'node',
	adopt: true,
	assets: { run_worker_first: true },
	url: true,
	bindings: {
		DB: database
	}
})

await app.finalize()
