import React from 'react'

/**
 * Creates a type-safe React context with runtime safety checks.
 *
 * @template ContextValue - The type of value stored in the context
 * @param errorMessage - Error message thrown when context is used outside Provider
 * @returns Object containing Provider component and useSafeContext hook
 */
export function createSafeContext<ContextValue>(errorMessage: string) {
  const Context = React.createContext<ContextValue | null>(null)

  function useSafeContext() {
    const ctx = React.useContext(Context)

    if (ctx === null) {
      throw new Error(errorMessage)
    }

    return ctx
  }

  function Provider(props: { value: ContextValue; children: React.ReactNode }) {
    return <Context.Provider value={props.value}>{props.children}</Context.Provider>
  }

  return { Provider, useSafeContext } as const
}
