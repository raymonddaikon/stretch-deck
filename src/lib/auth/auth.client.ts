import { createAuthClient } from 'better-auth/client'
import { jazzPluginClient } from 'jazz-tools/better-auth/auth/client'

export const authClient = createAuthClient({
	plugins: [
		jazzPluginClient()
		// other client plugins
	]
})
