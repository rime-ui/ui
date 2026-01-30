import React from 'react'
import { inputStyles, type InputVariants } from '../styles/input.styles'
import { InputProvider } from '../context/input-context'

export type InputRootProps = React.HTMLAttributes<HTMLDivElement> &
    InputVariants & {
        children: React.ReactNode
        isError?: boolean
        helperText?: string
        disabled?: boolean
        startContent?: React.ReactNode
        endContent?: React.ReactNode
        isClearable?: boolean
    }

export const InputRoot = React.forwardRef<HTMLDivElement, InputRootProps>(
    ({ children, className, variant, size, isError, helperText, dir = 'ltr', ...props }, ref) => {
        const inputRef = React.useRef<HTMLInputElement>(null)
        const uniqueId = React.useId()
        const inputId = props.id || uniqueId

        const slots = React.useMemo(
            () =>
                inputStyles({
                    variant: isError ? 'error' : variant,
                    size,
                }),
            [variant, isError, size],
        )

        const contextValue = React.useMemo(
            () => ({
                inputRef,
                slots,
                inputId,
                isError,
                helperText,
            }),
            [slots, inputId, isError, helperText],
        )

        return (
            <InputProvider value={contextValue}>
                <div ref={ref} dir={dir} className={slots.base({ className })} {...props}>
                    {children}
                </div>
            </InputProvider>
        )
    },
)

InputRoot.displayName = 'InputRoot'
