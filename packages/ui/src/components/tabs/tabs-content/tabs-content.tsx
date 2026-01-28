import type React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { useTabsContext } from '../tabs-context'

const content = tv({
  base: 'py-4',
})

type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof content> & { value: string }

export function TabsContent(props: TabsContentProps) {
  const { activeTab } = useTabsContext()

  if (activeTab !== props.value) return null

  return <div className={content({ className: props.className })}>{props.children}</div>
}
