"use client";

import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
    base: "w-60 text-center p-2 rounded-[12px] relative before:content-[''] before:absolute before:inset-0 before:z-[-1] active:translate-y-[4px] active:before:shadow-none",
    variants: {
        variant: {
            primary: "bg-[#58CC02] text-white before:rounded-[12px] before:shadow-[0_4px_0_#58a700] hover:brightness-[1.1] focus-visible:outline-none",
            secondary: "bg-gray-200 text-gray-800 before:rounded-[12px] before:shadow-[0_4px_0_#b0b0b0] hover:brightness-[0.95] focus-visible:outline-none",
            ghost: "bg-white text-[#1cb0f6] before:rounded-[12px] before:shadow-[0_4px_0_#e5e5e5] hover:brightness-[0.9] focus-visible:outline-none border-[2px] border-[#e5e5e5]",
            dangerous: "bg-red-600 text-white before:rounded-[12px] before:shadow-[0_4px_0_#b30000] hover:brightness-[1.1] focus-visible:outline-none"
        },
        size: {
            small: "px-3 py-1 text-sm",
            medium: "px-4 py-2 text-base",
            large: "px-6 py-3 text-lg",
        },
        outline: {
            true: "",
        }
    },
    compoundVariants: [
        {
            variant: "primary",
            outline: true,
            class: "bg-white text-[#58a700] before:rounded-[12px] before:shadow-[0_4px_0_#58a700] hover:brightness-[1.1] border-[2px] border-[#58a700]",
        },
        {
            variant: "secondary",
            outline: true,
            class: "bg-white text-[#b0b0b0] before:rounded-[12px] before:shadow-[0_4px_0_#b0b0b0] hover:brightness-[0.9] border-[2px] border-[#b0b0b0]",
        },
        {
            variant: "dangerous",
            outline: true,
            class: "bg-white text-red-600 before:rounded-[12px] before:shadow-[0_4px_0_#b30000] border-[2px] hover:brightness-[0.9] border-[2px] border-[#b30000]",
        },
    ],
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

export function Button({ className, children, variant, size, outline, ...props }: ButtonProps) {
    return (
        <button
            className={button({ variant, size, outline, className })}
            {...props}
        >
            {children}
        </button>
    );
}
