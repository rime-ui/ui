import React from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { TabsContextValue, TabsProvider } from '../tabs-context';

const root = tv({
  base: 'text-start rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-400 dark:border-gray-600 text-',
});

type TabsRootProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof root> & { defaultValue: string; dir?: 'rtl' | 'ltr' };

export function TabsRoot(props: TabsRootProps) {
  const [activeTab, setActiveTab] = React.useState(props.defaultValue);

  const contextValue = React.useMemo<TabsContextValue>(
    () => ({ activeTab, setActiveTab }),
    [activeTab],
  );

  return (
    <TabsProvider value={contextValue}>
      <div dir={props.dir} className={root({ className: props.className })}>
        {props.children}
      </div>
    </TabsProvider>
  );
}
