import { cn } from 'tailwind-variants'

export function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return <div className={cn('flex flex-col gap-2 px-6', className)} {...props} />
}
