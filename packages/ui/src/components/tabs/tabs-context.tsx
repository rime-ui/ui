import { createSafeContext } from '../../hooks'

export interface TabsContextValue {
    activeTab: string
    setActiveTab: (value: string) => void
}

export const { Provider: TabsProvider, useSafeContext: useTabsContext } = createSafeContext<TabsContextValue>(
    'Tabs components must be wrapped in <Tabs.Root>',
)
