import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const progressTrack = tv({
    base: 'w-full overflow-hidden rounded-full bg-gray-200',
    variants: {
        size: {
            small: 'h-1',
            medium: 'h-2',
            large: 'h-4',
        },
        variant: {
            primary: 'bg-gray-200',
            secondary: 'bg-gray-100',
            ghost: 'bg-gray-50 border border-gray-200',
            dangerous: 'bg-red-100',
            gold: 'bg-amber-100',
        },
    },
    defaultVariants: {
        size: 'medium',
        variant: 'primary',
    },
})

const progressBar = tv({
    base: 'h-full rounded-full transition-[width] duration-300 ease-out',
    variants: {
        variant: {
            primary: 'bg-primary',
            secondary: 'bg-secondary-dark',
            ghost: 'bg-ghost-dark',
            dangerous: 'bg-dangerous',
            gold: 'bg-gold',
        },

        striped: {
            true: 'bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]',
        },
    },
    compoundVariants: [
        {
            striped: true,
            class: 'animate-[stripe_1s_linear_infinite]',
        },
    ],
    defaultVariants: {
        variant: 'primary',
        striped: false,
    },
})

export type ProgressProps = {
    value?: number
    max?: number
    barClassName?: string
} & VariantProps<typeof progressTrack> &
    VariantProps<typeof progressBar> &
    Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>

export function Progress({
    value = 0,
    max = 100,
    size,
    variant,
    striped,
    className,
    barClassName,
    ...props
}: ProgressProps) {
    const clampedValue = Math.min(Math.max(0, value), max)
    const percentage = (clampedValue / max) * 100

    return (
        <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={max}
            className={progressTrack({ size, variant, className })}
            {...props}>
            <div
                className={progressBar({
                    variant,
                    striped,
                    className: barClassName,
                })}
                style={{ width: `${percentage}%` }}
            />
        </div>
    )
}
