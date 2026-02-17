'use client'
import { Card as CardLib, Tabs as TabsLib } from '@rime-ui/ui'

export const Card = (props: any) => <CardLib.Root {...props}>{props.children}</CardLib.Root>
Card.Body = CardLib.Body
Card.Header = CardLib.Header
Card.Footer = CardLib.Footer
Card.Title = CardLib.Title

export const Tabs = (props: any) => <TabsLib.Root {...props}>{props.children}</TabsLib.Root>
Tabs.List = TabsLib.List
Tabs.Tab = TabsLib.Tab
Tabs.Content = TabsLib.Content
