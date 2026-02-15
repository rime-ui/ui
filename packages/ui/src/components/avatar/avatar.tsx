import { useState } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

import { getInitials } from '../utils/get-initials'

const styles = tv({
    slots: {
        base: 'relative overflow-hidden rounded-full',
        image: 'block size-full object-cover',
        fallback:
            'grid size-full select-none place-items-center font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300',
    },
    variants: {
        size: {
            sm: { base: 'size-6', fallback: 'text-xs' },
            md: { base: 'size-8', fallback: 'text-md' },
            lg: { base: 'size-14', fallback: 'text-lg' },
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

type AvatarProps = React.ComponentProps<'img'> & VariantProps<typeof styles>

export function Avatar({ size, className, src, alt, ...props }: AvatarProps) {
    const [hasImageError, setHasImageError] = useState(false)

    const showFallback = !src || hasImageError

    const classes = styles({ size })

    return (
        <div className={classes.base({ className })}>
            {showFallback && (
                <span className={classes.fallback()} role="img" aria-label={alt}>
                    {getInitials(alt)}
                </span>
            )}

            {!showFallback && (
                <img
                    src={src}
                    alt={alt}
                    className={classes.image()}
                    onError={() => setHasImageError(true)}
                    {...props}
                />
            )}
        </div>
    )
}
