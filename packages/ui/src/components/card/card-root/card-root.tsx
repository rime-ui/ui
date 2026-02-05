import { cn } from 'tailwind-variants'

export function CardRoot({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'flex flex-col gap-6 rounded-lg py-6',
                'border-2 border-gray-300 dark:border-gray-600',
                'bg-white dark:bg-gray-900',
                'text-black dark:text-white',
                '[&:has(>img:first-child)]:overflow-hidden [&:has(>img:first-child)]:pt-0',
                '[&:has(>img:last-child)]:overflow-hidden [&:has(>img:last-child)]:pb-0',
                className,
            )}
            {...props}
        />
    )
}
