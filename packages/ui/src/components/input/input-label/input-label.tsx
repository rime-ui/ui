import React from 'react'
import { useInputContext } from '../context/input-context'

export type InputLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
    ({ className, children, ...props }, ref) => {
        const { slots, inputId } = useInputContext()

        return (
            <label ref={ref} htmlFor={inputId} className={slots.label({ className })} {...props}>
                {children}
            </label>
        )
    },
)
InputLabel.displayName = 'InputLabel'
