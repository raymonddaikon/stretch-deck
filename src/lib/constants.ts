// Rarity configuration - easily customizable thresholds, colors, and shapes
// Shape types: 'circle' | 'triangle' | 'square' | 'pentagon' | 'hexagon' | 'octagon'

export const rarityTiers = [
	{ minDays: 0, color: 'hsl(0, 0%, 60%)', shape: 'circle' }, // Gray circle
	{ minDays: 5, color: 'hsl(142, 71%, 45%)', shape: 'triangle' }, // Green triangle
	{ minDays: 15, color: 'hsl(217, 91%, 60%)', shape: 'square' }, // Blue square
	{ minDays: 35, color: 'hsl(271, 81%, 56%)', shape: 'pentagon' }, // Purple pentagon
	{ minDays: 65, color: 'hsl(25, 95%, 53%)', shape: 'hexagon' }, // Orange hexagon
	{ minDays: 100, color: 'hsl(48, 96%, 53%)', shape: 'octagon' } // Yellow octagon
] as const

export type RarityTier = (typeof rarityTiers)[number]
