import clsx from 'clsx'
import { ReactNode } from 'react'
import { text } from './Text.css'
import { TextSizes } from './Types'

type TextProps = {
	/** Text size */
	size?: TextSizes

	/** What tag to render the text node as */
	as?: keyof JSX.IntrinsicElements

	/** The content of the text node */
	children?: ReactNode
} & React.HTMLAttributes<any>

function Text({
	size = 'base',
	children,
	as: Tag = 'p',
	className,
	...props
}: TextProps) {
	return (
		<Tag className={clsx(className, text({ size: size }))} {...props}>
			{children}
		</Tag>
	)
}

export default Text
