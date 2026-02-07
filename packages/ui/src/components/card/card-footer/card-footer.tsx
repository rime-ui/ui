import { cn } from 'tailwind-variants'

export function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return <div className={cn('flex items-center px-6', className)} {...props} />
}
