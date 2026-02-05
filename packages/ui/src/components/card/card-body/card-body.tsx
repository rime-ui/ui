import { cn } from 'tailwind-variants'

export function CardBody({ className, ...props }: React.ComponentProps<'div'>) {
    return <div className={cn('px-6', className)} {...props} />
}
