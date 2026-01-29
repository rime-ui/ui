import { tv, VariantProps } from 'tailwind-variants'

const badge = tv({
    base: "w-20 h-20 text-center p-2 rounded-[12px] before:rounded-[12px] relative before:content-[''] before:absolute before:inset-0 before:z-[-1] flex items-center justify-center",
    variants: {
        variant: {
            primary: 'bg-primary text-white before:shadow-primary focus-visible:outline-none',
            secondary: 'bg-secondary text-gray-800 before:shadow-secondary  focus-visible:outline-none',
            ghost: 'bg-ghost text-sky-400 before:shadow-ghost focus-visible:outline-none border-[2px] border-ghost-dark',
            dangerous: 'bg-dangerous text-white before:shadow-dangerous focus-visible:outline-none',
            gold: "bg-gold-gradient text-white before:content-[''] before:shadow-gold focus-visible:outline-none",
        },
    },

    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
})

export type BadgeProps = { className?: string; children?: string } & VariantProps<typeof badge>

export function Badge({ className, children, variant }: BadgeProps) {
    return <div className={badge({ variant, className })}>{children}</div>
}
