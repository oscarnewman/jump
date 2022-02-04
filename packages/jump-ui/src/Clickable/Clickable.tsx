import clsx from 'clsx'
import { forwardRef, HTMLProps, ReactNode, Ref, useCallback } from 'react'
import {
	clickableBase,
	innerContent,
	invisible,
	outerContent,
} from './Clickable.css'
import { useJump } from '../Context/JumpContext'

type ButtonOrLinkElement = HTMLAnchorElement | HTMLButtonElement

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type LinkProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type ClickableProps = {
	/** Icon to display at the start of the content. */
	leadingIcon?: ReactNode

	/** Icon to display at the end of the content. */
	trailingIcon?: ReactNode

	/** Routes using the `href` tag and browser behavior, instead of history */
	external?: boolean

	/** Whether the element is disabled. */
	disabled?: boolean

	/** Whether the element is loading. */
	loading?: boolean

	/** When a link, open the target in a new window. */
	openInNewWindow?: boolean

	/** Should send the browser history `back` */
	goBack?: boolean

	/** A react node to include outside of the button contents container */
	accessory?: ReactNode

	/** Whether to render the accessory */
	showAccessory?: boolean

	/** Whether to render the element as inline-flex */
	inline?: boolean

	/** Box props to apply to the wrapper around `children` to create custom layouts */
	contentProps?: HTMLProps<HTMLDivElement>

	/** Segment tracking event name on click */
	event?: string

	/** Payload to be included in a tracking event */
	meta?: Record<string, any>
}

function Clickable(
	{
		children,
		disabled,
		loading,
		onClick,
		leadingIcon,
		trailingIcon,
		accessory,
		external,
		openInNewWindow,
		href,
		goBack,
		inline,
		event: trackingEvent,
		meta,
		showAccessory = false,
		contentProps = {},
		className,
		...restProps
	}: ClickableProps & LinkProps & ButtonProps,
	ref: Ref<any>
) {
	const { history, trackEvent } = useJump()

	const handleClick = useCallback(
		(event: React.MouseEvent<any>) => {
			if (!external) {
				if (disabled || loading) {
					event.preventDefault()
				} else if (goBack) {
					history.goBack()
				} else if (href !== undefined) {
					history.push(href)
				}
			}

			// Always call the onClick handler if it's defined -- we may want actions
			// on top of the Link handling as well
			if (onClick) {
				onClick(event)
			}

			if (trackingEvent) {
				trackEvent?.(trackingEvent, meta)
			}
		},
		[
			disabled,
			external,
			goBack,
			history,
			href,
			loading,
			meta,
			onClick,
			trackEvent,
			trackingEvent,
		]
	)

	const props: LinkProps & ButtonProps = {
		onClick: handleClick,
		className: clsx(
			clickableBase({ display: inline ? 'inline' : 'default' }),
			{ disabled },
			className
		),
	}

	if (href) {
		props.href = href
		if (openInNewWindow) {
			props.target = '__BLANK'

			// Avoid tab hijacking or potential exposure of `window.opener`
			if (props.rel === undefined) {
				props.rel = 'noopener'
			}
		}
		if (!external) {
			props.onClick = (e: React.MouseEvent<ButtonOrLinkElement>) => {
				e.preventDefault()
				handleClick(e)
			}
		}
	}

	const Tag = href ? 'a' : 'button'

	const { className: contentClassName, ...restContentProps } = contentProps

	return (
		<Tag ref={ref} {...props} {...restProps} aria-busy={loading}>
			<div className={clsx(outerContent, { [invisible]: loading })}>
				{leadingIcon}
				<div
					className={clsx(innerContent, contentClassName)}
					{...restContentProps}
				>
					{children}
				</div>
				{trailingIcon}
			</div>
			{showAccessory && accessory}
		</Tag>
	)
}

export default forwardRef(Clickable)
