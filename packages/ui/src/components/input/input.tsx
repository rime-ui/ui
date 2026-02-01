import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const inputStyles = tv({
    slots: {
        base: 'flex flex-col gap-0.5',
        label: 'text-base font-medium text-gray-900 dark:text-gray-300 mx-1 text-start',
        inputWrapper: 'relative flex items-center w-full',
        input: [
            'peer block w-full appearance-none',
            'bg-[#f7f7f7] dark:bg-[#202f36]',
            'text-gray-900 dark:text-white',
            'placeholder:text-gray-400 dark:placeholder:text-gray-500',
            'border-2 border-gray-200 dark:border-[#37464F] rounded-[16px]',
            'transition-all duration-200 ease-in-out',
            'focus:outline-none focus:border-sky-500 dark:focus:border-[#1CB0F6]',
            'disabled:bg-[#f0f0f0] dark:disabled:bg-[#18242A]',
            'disabled:text-gray-400 dark:disabled:text-gray-500',
            'disabled:border-gray-200 dark:disabled:border-[#37464F]/50',
            'disabled:cursor-not-allowed',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'px-3',
        ],
        iconWrapper: 'absolute flex items-center justify-center text-gray-500',
        helperText: 'text-xs font-bold mt-1 mx-1 text-start',
    },
    variants: {
        variant: {
            default: {},
            error: {
                input: 'border-red-500 dark:border-[#EA2B2B] focus:border-red-600 dark:focus:border-[#EA2B2B] text-red-600 dark:text-[#EA2B2B] placeholder:text-red-300',
                label: 'text-red-600 dark:text-[#EA2B2B]',
                helperText: 'text-red-600 dark:text-[#EA2B2B]',
            },
            success: {
                input: 'border-green-500 dark:border-[#58CC02] focus:border-green-600 dark:focus:border-[#58CC02]',
                label: 'text-green-600 dark:text-[#58CC02]',
            },
        },
        size: {
            small: {
                input: 'h-8 text-sm rounded-[12px]',
                label: 'text-sm',
            },
            medium: {
                input: 'h-10 text-base rounded-[12px]',
            },
            large: {
                input: 'h-12 text-lg rounded-[16px]',
                label: 'text-lg',
            },
        },
        hasLeftIcon: {
            true: { input: 'ps-11' },
        },
        hasRightIcon: {
            true: { input: 'pe-11' },
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'medium',
    },
})

export type InputVariants = VariantProps<typeof inputStyles>

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
    InputVariants & {
        label?: string
        helperText?: string
        error?: string
        leftIcon?: React.ReactNode
        rightIcon?: React.ReactNode
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            variant,
            size,
            leftIcon,
            rightIcon,
            className,
            dir,
            id,
            ...props
        },
        ref,
    ) => {
        const inputId = React.useId()
        const finalId = id || inputId
        const isError = !!error
        const finalHelperText = error || helperText
        const finalVariant = isError ? 'error' : variant

        const styles = inputStyles({
            variant: finalVariant,
            size,
            hasLeftIcon: !!leftIcon,
            hasRightIcon: !!rightIcon,
        })

        return (
            <div dir={dir} className={styles.base({ className })}>
                {label && (
                    <label htmlFor={finalId} className={styles.label()}>
                        {label}
                    </label>
                )}

                <div className={styles.inputWrapper()}>
                    {leftIcon && (
                        <span className={`${styles.iconWrapper()} start-3 pointer-events-none`}>
                            {leftIcon}
                        </span>
                    )}

                    <input
                        ref={ref}
                        id={finalId}
                        aria-invalid={isError}
                        className={styles.input()}
                        {...props}
                    />

                    {rightIcon && (
                        <span className={`${styles.iconWrapper()} end-3`}>{rightIcon}</span>
                    )}
                </div>

                {finalHelperText && <p className={styles.helperText()}>{finalHelperText}</p>}
            </div>
        )
    },
)

Input.displayName = 'Input'

export default Input
