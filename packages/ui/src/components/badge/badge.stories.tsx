import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './badge'

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'dangerous', 'gold'],
        },
    },
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Test',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Test',
    },
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Test',
    },
}

export const Dangerous: Story = {
    args: {
        variant: 'dangerous',
        children: 'Test',
    },
}

export const Gold: Story = {
    args: {
        variant: 'gold',
        children: 'Test',
    },
}

export default meta
