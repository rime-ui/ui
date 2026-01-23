import React from "react";
import { cnMerge, tv, VariantProps } from "tailwind-variants";

const button = tv({
    base: "inline-flex text-centered p-2",
    variants: {
        variant: {
            primary: "bg-[#61E002] text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        }
    },

    defaultVariants: {
        variant: "primary"
    }
})


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>

export function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button className={cnMerge(className, button({}))({ twMerge: true })} {...props}>
            {children}
        </button>
    )
}
