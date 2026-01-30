import React from 'react'
import { inputStyles } from '../styles/input.styles'

type InputContextValue = {
    inputRef: React.RefObject<HTMLInputElement | null>
    slots: ReturnType<typeof inputStyles>
    inputId: string
    isError?: boolean
    helperText?: string
}

const InputContext = React.createContext<InputContextValue | null>(null)

export const useInputContext = () => {
    const context = React.useContext(InputContext)
    if (!context) {
        throw new Error('Input components must be used within Input.Root')
    }
    return context
}

export const InputProvider = InputContext.Provider
