import { precomputeValues } from '@capsizecss/core'
import fontMetrics from '@capsizecss/metrics/appleSystem'
import { createGlobalTheme } from '@vanilla-extract/css'
import { ThemeVars } from '@vanilla-extract/css/dist/declarations/src/types'
import { mapValues } from 'lodash'

const textStyles = {
	xs: { fontSize: 0.71, leading: 1 },
	sm: { fontSize: 0.875, leading: 1.25 },
	base: { fontSize: 1, leading: 1.5 },
	lg: { fontSize: 1.125, leading: 1.75 },
	xl: { fontSize: 1.25, leading: 1.75 },
	'2xl': { fontSize: 1.5, leading: 2 },
	'3xl': { fontSize: 1.875, leading: 2.25 },
	'4xl': { fontSize: 2.25, leading: 2.5 },
	'5xl': { fontSize: 3, leading: 3 },
	'6xl': { fontSize: 3.75, leading: 3.75 },
	'7xl': { fontSize: 4.5, leading: 4.5 },
	'8xl': { fontSize: 6, leading: 6 },
	'9xl': { fontSize: 8, leading: 8 },
} as const

const baseFontSize = 16

type Theme = Parameters<typeof createGlobalTheme>[2]

/**
 * @type {Theme}
 */
const theme = {
	fontSizes: mapValues(textStyles, (styles) =>
		precomputeValues({
			fontSize: baseFontSize * styles.fontSize,
			leading: baseFontSize * styles.leading,
			fontMetrics,
		})
	),
}

export const vars: ThemeVars<typeof theme> = createGlobalTheme('html', theme)
