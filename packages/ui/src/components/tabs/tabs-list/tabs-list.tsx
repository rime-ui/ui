import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const list = tv({
    base: "flex flex-wrap items-center justify-center flex-row",
})

type TabsListProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof list>;


export function TabsList(props: TabsListProps) {
    return (
        <div className={list({ className: props.className })}>
            {props.children}
        </div>
    );
}
