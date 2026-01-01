import { z } from 'zod'

export const UNITS_OPTIONS = ['seconds', 'minutes', 'reps'] as const
export type Units = (typeof UNITS_OPTIONS)[number]

export const schema = z.object({
	name: z.string().min(1, 'Please enter a card name.'),
	tagsinput: z.array(z.string()).min(1, 'Please add at least one tag.'),
	reps: z.number().int(),
	units: z.enum(UNITS_OPTIONS, { message: 'Please select a unit.' }),
	sets: z.number().int(),
	description: z.string()
})
