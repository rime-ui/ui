import React from 'react'
import { useInputContext } from '../context/input-context'

type InputClearButtonProps = {
    onClear?: () => void
    icon?: React.ReactNode
}

export const InputClearButton = ({
    onClear,
    icon = <span className="text-xl leading-none pb-0.5">×</span>,
}: InputClearButtonProps) => {
    const { slots, inputRef } = useInputContext()

    const handleClear = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        const inputElement = inputRef.current
        if (inputElement) {
            inputElement.value = ''
            inputElement.focus()

            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                'value',
            )?.set

            nativeInputValueSetter?.call(inputElement, '')

            const event = new Event('input', { bubbles: true })
            inputElement.dispatchEvent(event)
        }

        onClear?.()
    }

    return (
        <div data-slot="clear" className={`${slots.clearButton()}`}>
            <button
                type="button"
                tabIndex={-1}
                onClick={handleClear}
                onMouseDown={(e) => e.preventDefault()}
                aria-label="Clear input"
                className="flex items-center justify-center w-6 h-6">
                {icon}
            </button>
        </div>
    )
}
