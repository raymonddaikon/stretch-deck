import { createAuthClient } from 'better-auth/client'
import { magicLinkClient } from 'better-auth/client/plugins'
import { jazzPluginClient } from 'jazz-tools/better-auth/auth/client'

export const authClient = createAuthClient({
	plugins: [
		jazzPluginClient(),
		magicLinkClient()
		// other client plugins
	]
})
