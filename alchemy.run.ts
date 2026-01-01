import alchemy from 'alchemy'
import {
	// Ai,
	// AiGateway,
	// DurableObjectNamespace,
	// KVNamespace,
	// R2Bucket,
	SvelteKit
	// Worker
} from 'alchemy/cloudflare'

const app = await alchemy('stretch-deck', {
	stage: 'dev'
})

export const worker = await SvelteKit('stretch-deck-beta', {
	// cwd: './apps/web',
	compatibility: 'node'
	// bindings: {
	//   // USERS: usersWorker,
	//   STRIPE_API_KEY: alchemy.secret("pk_live_51MzQhTEzSGEIcSlML03E31Th7YA0zNahfVa5WXLpmV5rG0Y1vZcsM9kNfBp2kvpO6QVTldvy5kNonPnClh7e4r9u00Od8F1ggN")
	// }
})

await app.finalize()
