import { globalStyle, style } from '@vanilla-extract/css'

export const formControl = style({
	display: 'block',
})

export const labelSpacer = style({
	marginBottom: '8px',
})

export const errorLabel = style({
	color: 'red',
	display: 'flex',
	alignItems: 'center',
	marginTop: '4px',
})

globalStyle(`${errorLabel} > *:not(:last-child)`, {
	marginRight: '4px',
})
