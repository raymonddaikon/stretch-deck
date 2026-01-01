import { AccountCoState } from 'jazz-tools/svelte'
import { createContext } from 'svelte'
import { StretchDeckAccount } from '$lib/schema'

export class LayoutContext {
	title = $state('')
	subtitle = $state('')

	me = new AccountCoState(StretchDeckAccount, {
		resolve: {
			root: true,
			profile: {
				cards: { $each: { thumbnails: { $each: true } } },
				decks: { $each: true }
			}
		}
	})
	constructor() {}
}

export const [getLayoutContext, setLayoutContext] =
	createContext<LayoutContext>()
