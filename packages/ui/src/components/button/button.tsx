'use client'

import type React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
    base: "w-60 text-center p-2 rounded-[12px] relative before:content-[''] before:absolute before:inset-0 before:z-[-1] active:translate-y-[4px] active:before:shadow-none",
    variants: {
        variant: {
            primary:
                'bg-primary text-white before:rounded-[12px] before:shadow-primary hover:brightness-[1.1] focus-visible:outline-none',
            secondary:
                'bg-secondary text-gray-800 before:rounded-[12px] before:shadow-secondary hover:brightness-[0.95] focus-visible:outline-none',
            ghost: 'bg-ghost text-sky-400 before:rounded-[12px] before:shadow-ghost hover:brightness-[0.9] focus-visible:outline-none border-[2px] border-ghost-dark',
            dangerous:
                'bg-dangerous text-white before:rounded-[12px] before:shadow-dangerous hover:brightness-[1.1] focus-visible:outline-none',
            gold: "bg-gold-gradient text-white before:content-[''] before:rounded-[12px] before:shadow-gold hover:brightness-[1.1] focus-visible:outline-none",
        },
        size: {
            small: 'px-3 py-1 text-sm',
            medium: 'px-4 py-2 text-base',
            large: 'px-6 py-3 text-lg',
        },
        outline: {
            true: '',
        },
    },
    compoundVariants: [
        {
            variant: 'primary',
            outline: true,
            class: 'bg-white text-primary-dark before:rounded-[12px] before:shadow-primary hover:brightness-[1.1] border-[2px] border-primary-dark',
        },
        {
            variant: 'secondary',
            outline: true,
            class: 'bg-white text-secondary-dark before:rounded-[12px] before:shadow-secondary hover:brightness-[0.9] border-[2px] border-secondary-dark',
        },
        {
            variant: 'dangerous',
            outline: true,
            class: 'bg-white text-red-600 before:rounded-[12px] before:shadow-dangerous border-[2px] hover:brightness-[0.9] border-[2px] border-dangerous-dark',
        },
    ],
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>

export function Button({ className, children, variant, size, outline, ...props }: ButtonProps) {
    return (
        <button className={button({ variant, size, outline, className })} {...props}>
            {children}
        </button>
    )
}
