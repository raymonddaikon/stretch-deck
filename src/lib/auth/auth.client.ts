import { createAuthClient } from 'better-auth/client'
import { magicLinkClient } from 'better-auth/client/plugins'
import { cloudflareClient } from 'better-auth-cloudflare/client'
import { jazzPluginClient } from 'jazz-tools/better-auth/auth/client'

export const authClient = createAuthClient({
	plugins: [
		jazzPluginClient(),
		magicLinkClient(),
		cloudflareClient()
		// other client plugins
	]
})
