import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { Tabs } from './tabs'

const meta = {
    title: 'Components/Tabs',
    component: Tabs.Root,
    parameters: {
        layout: 'centered',
        // backgrounds: {
        //     default: "dark",
        // },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs.Root>

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        defaultValue: 'follow',
        className: 'min-w-[300px]',
        children: null,
    },
    render: (args) => (
        <Tabs.Root {...args}>
            <Tabs.List>
                <Tabs.Tab value="follow">Following</Tabs.Tab>
                <Tabs.Tab value="followers">Followers</Tabs.Tab>
            </Tabs.List>
            <Tabs.Content value="follow" className="px-4">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-200 text-xl">
                                👳‍♂️
                            </div>
                            <div className="text-start">
                                <p className="font-medium text-black dark:text-white">John Doe</p>
                                <p className="text-sm text-gray-400">XP 6895</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 text-lg font-bold text-purple-800">
                                🧕
                            </div>
                            <div className="text-start">
                                <p className="font-medium text-black dark:text-white">Emily Smith</p>
                                <p className="text-sm text-gray-400">XP 1594</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value="followers" className="px-4 text-white">
                <p className="text-gray-400">No followers yet</p>
            </Tabs.Content>
        </Tabs.Root>
    ),
}

export const ThreeTabs: Story = {
    args: {
        defaultValue: 'gallery',
        className: 'min-w-[400px]',
        children: null,
    },
    render: (args) => (
        <Tabs.Root {...args}>
            <Tabs.List>
                <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
                <Tabs.Tab value="messages">Messages</Tabs.Tab>
                <Tabs.Tab value="settings">Settings</Tabs.Tab>
            </Tabs.List>
            <Tabs.Content value="gallery" className="px-4 text-white">
                <p>Gallery tab content - Your beautiful photos here!</p>
            </Tabs.Content>
            <Tabs.Content value="messages" className="px-4 text-white">
                <p>Messages tab content - Your conversations here!</p>
            </Tabs.Content>
            <Tabs.Content value="settings" className="px-4 text-white">
                <p>Settings tab content - Configure your preferences!</p>
            </Tabs.Content>
        </Tabs.Root>
    ),
}

export default meta
