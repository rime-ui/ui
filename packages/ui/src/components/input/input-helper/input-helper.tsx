import React from 'react'
import { useInputContext } from '../context/input-context'

export type InputHelperProps = React.HTMLAttributes<HTMLParagraphElement>

export const InputHelper = React.forwardRef<HTMLParagraphElement, InputHelperProps>(
    ({ className, children, ...props }, ref) => {
        const { slots, isError, helperText } = useInputContext()

        if (!children && !helperText && !isError) return null

        const content = children || helperText

        if (!content) return null

        return (
            <div className={slots.helperWrapper()}>
                <p ref={ref} className={slots.helperText({ className })} {...props}>
                    {content}
                </p>
            </div>
        )
    },
)
InputHelper.displayName = 'InputHelper'
