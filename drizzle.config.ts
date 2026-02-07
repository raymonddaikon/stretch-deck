import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'drizzle-kit'

// Not necessary as alchemy handles applying migrations, we simply need to generate them. This is only useful in local dev scenarios.
function getLocalD1DB() {
	try {
		// Alchemy stores local D1 databases in .alchemy/miniflare/v3/d1/miniflare-D1DatabaseObject/
		const basePath = path.resolve('.alchemy', 'miniflare', 'v3', 'd1')
		const dbFile = fs
			.readdirSync(basePath, { encoding: 'utf-8', recursive: true })
			.find((f) => f.endsWith('.sqlite'))

		if (!dbFile) {
			throw new Error(`.sqlite file not found in ${basePath}`)
		}

		const url = path.resolve(basePath, dbFile)
		return url
	} catch (err) {
		console.log(`Error  ${err}`)
	}
}

export default defineConfig({
	dialect: 'sqlite',
	schema: './src/db/index.ts',
	out: './migrations',
	...(process.env.NODE_ENV === 'production'
		? {
				driver: 'd1-http',
				dbCredentials: {
					accountId: process.env.CLOUDFLARE_D1_ACCOUNT_ID,
					databaseId: process.env.CLOUDFLARE_DATABASE_ID,
					token: process.env.CLOUDFLARE_D1_API_TOKEN
				}
			}
		: {
				dbCredentials: {
					url: getLocalD1DB()
				}
			})
})
