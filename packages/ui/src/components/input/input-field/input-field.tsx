import React from 'react'
import { useInputContext } from '../context/input-context'
import { mergeRefs } from '../../utils/merge-refs'

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement>

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    ({ className, placeholder, ...props }, ref) => {
        const { slots, inputId, inputRef, isError } = useInputContext()

        const mergedRef = mergeRefs(inputRef, ref)

        const effectivePlaceholder = placeholder || ' '

        return (
            <input
                ref={mergedRef}
                id={inputId}
                aria-invalid={!!isError}
                placeholder={effectivePlaceholder}
                className={slots.input({ className })}
                {...props}
            />
        )
    },
)
InputField.displayName = 'InputField'
