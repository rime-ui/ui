import React from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { useTabsContext } from '../tabs-context';

const tab = tv({
  base: 'relative flex grow whitespace-nowrap items-center justify-center px-6 py-3 text-sm select-none appearance-none cursor-pointer font-medium border-b-2',
  variants: {
    active: {
      true: 'text-cyan-400 border-b-cyan-400',
      false:
        'text-gray-600 dark:text-gray-400 border-b-gray-400 dark:border-b-gray-600',
    },
  },
});

type TabsTabProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof tab> & { value: string };

export function TabsTab(props: TabsTabProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === props.value;

  return (
    <button
      onClick={() => setActiveTab(props.value)}
      className={tab({ active: isActive, className: props.className })}
    >
      {props.children}
    </button>
  );
}
