import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './avatar'

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
            description: 'Size of the avatar',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        src: {
            control: { type: 'text' },
        },
        alt: {
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof Avatar>

type Story = StoryObj<typeof meta>

const images = [
    'https://images.unsplash.com/photo-1750535135696-4421c9a90746?q=80&w=580&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=580&auto=format&fit=crop',
    'https://plus.unsplash.com/premium_photo-1738590017220-5820f49608cc?q=80&w=967&auto=format&fit=crop',
]

export const Default: Story = {
    args: {
        size: 'md',
        src: images[0],
        alt: 'John Doe',
    },
    render: (args) => <Avatar {...args} />,
}

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Avatar size="sm" alt="John Doe" src={images[2]} />
            <Avatar size="md" alt="John Doe" src={images[1]} />
            <Avatar size="lg" alt="John Doe" src={images[0]} />
        </div>
    ),
}

export const WithoutImage: Story = {
    args: {
        size: 'md',
        alt: 'Jane Doe',
    },
    render: (args) => <Avatar {...args} />,
}

export const BrokenImage: Story = {
    args: {
        size: 'md',
        alt: 'Broken User',
        src: 'https://example.com/missing-avatar-image.png',
    },
    render: (args) => <Avatar {...args} />,
}

export const SingleName: Story = {
    args: {
        size: 'md',
        alt: 'Jane',
    },
    render: (args) => <Avatar {...args} />,
}

export default meta
