import React from 'react'
import { InputProvider } from '../context/input-context'

import { tv, type VariantProps } from 'tailwind-variants'

export const inputStyles = tv({
    slots: {
        base: 'group flex flex-col gap-0.5',
        label: 'text-base font-medium text-gray-900 dark:text-gray-300 mx-1 text-start',
        inputContainer: 'group/input relative flex items-center w-full',
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
            'group-has-[[data-slot=start]]/input:ps-11',
            'group-has-[[data-slot=end]]/input:pe-11',
            'group-has-[[data-slot=clear]]/input:pe-10',
            'group-has-[[data-slot=end]]/input:group-has-[[data-slot=clear]]/input:pe-20',
        ],

        clearButton: [
            'absolute flex items-center justify-center cursor-pointer',
            'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300',
            'transition-opacity duration-200',
            'z-20 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800',

            'opacity-0 invisible pointer-events-none',
            'peer-focus:peer-[:not(:placeholder-shown)]:opacity-100',
            'peer-focus:peer-[:not(:placeholder-shown)]:visible',
            'peer-focus:peer-[:not(:placeholder-shown)]:pointer-events-auto',
            'end-3',
            'group-has-[[data-slot=end]]/input:end-10',
        ],

        startContentWrapper: 'absolute start-3 text-gray-500 flex items-center pointer-events-none z-10',

        endContentWrapper: 'absolute end-3 text-gray-500 flex items-center z-10',
        helperWrapper: 'mt-1 mx-1 text-start',
        helperText: 'text-xs font-bold',
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

        hasStartContent: {
            true: { input: 'ps-11' },
        },

        paddingState: {
            none: { input: 'pe-4' },
            withIcon: { input: 'pe-11' },
            withClear: { input: 'pe-10' },
            both: { input: 'pe-20' },
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'medium',
        paddingState: 'none',
    },
})

export type InputVariants = VariantProps<typeof inputStyles>

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
