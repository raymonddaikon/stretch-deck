// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type {
	CfProperties,
	DurableObjectNamespace,
	ExecutionContext,
	KVNamespace,
	R2Bucket
} from '@cloudflare/workers-types'
import type { Session, User } from 'better-auth'
import type { CloudflarePlatform } from './env.d.ts'

/// <reference types="@sveltejs/adapter-cloudflare" />

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {
		// 	session: Session
		// 	user: User
		// }
		// interface PageData {}
		// interface PageState {}
		interface Platform extends CloudflarePlatform {
			cf: IncomingRequestCfProperties
		}
	}
}
