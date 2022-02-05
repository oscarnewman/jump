import clsx from 'clsx'
import { ReactNode } from 'react'
import { Text } from '..'
import { useJump } from '../..'
import { formControl, errorLabel, labelSpacer } from './FormControl.css'

export type FormControlProps = {
	/** Title of the form control */
	label?: ReactNode

	/** An error message to display */
	error?: ReactNode

	/** The form control to display */
	children?: ReactNode

	/** class name for the label */
	labelClassName?: string

	/** class name for the error label */
	errorLabelClassName?: string
} & React.LabelHTMLAttributes<HTMLLabelElement>

/**
 * A wrapper for any form control that includes an optional label and
 * error message.
 */
function FormControl({
	label,
	children,
	error,
	className,
	labelClassName: customLabelClassName,
	errorLabelClassName: customErrorLabelClassName,
	...restProps
}: FormControlProps) {
	const { formErrorIcon } = useJump()
	return (
		<label className={clsx(formControl, className)} {...restProps}>
			{label && (
				<Text className={clsx(labelSpacer, customLabelClassName)}>{label}</Text>
			)}
			{children}
			{error && (
				<Text size="sm" className={clsx(errorLabel, customErrorLabelClassName)}>
					{formErrorIcon}
					<span>{error}</span>
				</Text>
			)}
		</label>
	)
}

export default FormControl
