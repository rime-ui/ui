import React from 'react'
import { useInputContext } from '../context/input-context'

type InputSlotProps = {
    children: React.ReactNode
    side: 'start' | 'end'
    className?: string
}

export const InputSlot = ({ children, side, className }: InputSlotProps) => {
    const { slots } = useInputContext()
    const slotClass = side === 'start' ? slots.startContentWrapper() : slots.endContentWrapper()

    return (
        <div data-slot={side} className={`${slotClass} ${className || ''}`}>
            {children}
        </div>
    )
}
