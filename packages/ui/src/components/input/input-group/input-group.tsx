import React from 'react'
import { useInputContext } from '../context/input-context'

export const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        const { slots } = useInputContext()
        return (
            <div ref={ref} className={slots.inputContainer({ className })} {...props}>
                {children}
            </div>
        )
    },
)
InputGroup.displayName = 'InputGroup'
