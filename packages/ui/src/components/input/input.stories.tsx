import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input, InputComposition } from './index'
import React, { useState } from 'react'

const WorldIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-globe-icon lucide-globe">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
    </svg>
)
const MessageIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-mail-icon lucide-mail">
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
)
const EyeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
)
const EyeOffIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7c.44 0 .87-.03 1.28-.09" />
        <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
)
const UserIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
)
const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
)
const CopyIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
)

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#131F24' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        dir: {
            control: 'radio',
            options: ['ltr', 'rtl'],
            description: 'Direction of the input layout',
        },
        variant: {
            control: 'select',
            options: ['default', 'error', 'success'],
        },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        disabled: { control: 'boolean' },
        isClearable: { control: 'boolean' },
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Username',
        placeholder: 'Type your username...',
        isClearable: true,
        dir: 'ltr',
    },
}

export const ArabicRTL: Story = {
    args: {
        label: 'اسم المستخدم',
        placeholder: 'أدخل اسم المستخدم...',
        isClearable: true,
        dir: 'rtl',
        helperText: 'يرجى كتابة الاسم باللغة العربية',
        startContent: <UserIcon />,
    },
}

export const PasswordField: Story = {
    render: (args) => {
        const [show, setShow] = useState(false)
        return (
            <Input
                {...args}
                type={show ? 'text' : 'password'}
                endContent={
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="focus:outline-none text-gray-400 hover:text-sky-500 transition-colors flex items-center justify-center h-full">
                        {show ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                }
            />
        )
    },
    args: {
        label: 'Password',
        placeholder: '••••••••',
        isClearable: true,
    },
}

export const FullIconsLTR: Story = {
    args: {
        label: 'Website',
        placeholder: 'example.com',
        startContent: (
            <span>
                <WorldIcon />
            </span>
        ),
        endContent: <span>.com</span>,
        isClearable: true,
    },
}

export const SearchComposition: Story = {
    render: () => (
        <InputComposition.Root className="w-[300px]" isClearable>
            <InputComposition.Label>Search</InputComposition.Label>
            <InputComposition.Group>
                <InputComposition.Slot side="start">
                    <SearchIcon />
                </InputComposition.Slot>

                <InputComposition.Field placeholder="Search documentation..." />

                <InputComposition.Slot side="end">
                    <div className="flex items-center gap-1">
                        <kbd className="hidden sm:inline-block rounded border bg-gray-100 px-1.5 text-[10px] font-bold text-gray-500 dark:bg-gray-800 dark:border-gray-700">
                            ⌘K
                        </kbd>
                    </div>
                </InputComposition.Slot>
            </InputComposition.Group>
            <InputComposition.Helper>Press Cmd+K to quick search</InputComposition.Helper>
        </InputComposition.Root>
    ),
}

export const NewsletterComposition: Story = {
    render: () => (
        <InputComposition.Root size="large" className="w-[350px]" isClearable>
            <InputComposition.Label>Newsletter</InputComposition.Label>
            <InputComposition.Group>
                <InputComposition.Slot side="start">
                    <MessageIcon />
                </InputComposition.Slot>

                <InputComposition.Field className="pe-28!" placeholder="Enter your email" type="email" />

                <InputComposition.Slot side="end">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold px-3 py-1.5 rounded-lg transition-colors mr-1">
                        Subscribe
                    </button>
                </InputComposition.Slot>
            </InputComposition.Group>
        </InputComposition.Root>
    ),
}

export const CopyableField: Story = {
    render: () => {
        const apiKey = 'sk_live_51Hz...'
        return (
            <InputComposition.Root isClearable={false}>
                <InputComposition.Label>API Key</InputComposition.Label>
                <InputComposition.Group>
                    <InputComposition.Field
                        defaultValue={apiKey}
                        readOnly
                        className="font-mono text-sm text-gray-500"
                    />
                    <InputComposition.Slot side="end">
                        <button
                            title="Copy"
                            className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-500"
                            onClick={() => navigator.clipboard.writeText(apiKey)}>
                            <CopyIcon />
                        </button>
                    </InputComposition.Slot>
                </InputComposition.Group>
            </InputComposition.Root>
        )
    },
}
