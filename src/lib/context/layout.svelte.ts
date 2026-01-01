import { createContext } from 'svelte'

export type LayoutContext = {
	title: string
	subtitle: string
}

export const [getLayoutContext, setLayoutContext] =
	createContext<LayoutContext>()
