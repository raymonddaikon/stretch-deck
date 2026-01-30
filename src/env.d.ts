import { worker } from '../alchemy.run.ts'

export interface CloudflarePlatform {
	env: typeof worker.Env
	context: ExecutionContext
	caches: CacheStorage & { default: Cache }
}

declare global {
	export type CloudflareEnv = typeof worker.Env
}

declare module 'cloudflare:workers' {
	namespace Cloudflare {
		export interface Env extends CloudflareEnv {}
	}
}
