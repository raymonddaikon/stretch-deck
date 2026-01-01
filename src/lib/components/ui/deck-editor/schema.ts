import { z } from 'zod'

export const schema = z.object({
	name: z.string().min(1, 'Please enter a deck name.'),
	description: z.string()
})
