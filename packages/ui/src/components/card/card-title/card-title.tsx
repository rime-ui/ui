import { cn } from 'tailwind-variants'

export function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
    return <span className={cn('font-bold text-2xl text-gray-500 dark:text-white', className)} {...props} />
}
