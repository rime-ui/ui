import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './progress'

const meta = {
    title: 'Components/Progress',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: 'Current progress value (0-100)',
        },
        max: {
            control: { type: 'number', min: 1 },
            description: 'Maximum value for progress calculation',
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'dangerous', 'gold'],
            description: 'Visual style variant',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Size of the progress bar',
        },
        striped: {
            control: 'boolean',
            description: 'Show striped pattern',
        },
    
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Progress>

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        value: 50,
        variant: 'primary',
        size: 'medium',
    },
}

export const Primary: Story = {
    args: {
        value: 60,
        variant: 'primary',
        size: 'medium',
    },
}

export const Secondary: Story = {
    args: {
        value: 40,
        variant: 'secondary',
        size: 'medium',
    },
}

export const Ghost: Story = {
    args: {
        value: 70,
        variant: 'ghost',
        size: 'medium',
    },
}

export const Dangerous: Story = {
    args: {
        value: 25,
        variant: 'dangerous',
        size: 'medium',
    },
}

export const Gold: Story = {
    args: {
        value: 80,
        variant: 'gold',
        size: 'medium',
    },
}

export const Small: Story = {
    args: {
        value: 50,
        variant: 'primary',
        size: 'small',
    },
}

export const Medium: Story = {
    args: {
        value: 50,
        variant: 'primary',
        size: 'medium',
    },
}

export const Large: Story = {
    args: {
        value: 50,
        variant: 'primary',
        size: 'large',
    },
}

export const Striped: Story = {
    args: {
        value: 65,
        variant: 'primary',
        size: 'large',
        striped: true,
    },
}



export const Empty: Story = {
    args: {
        value: 0,
        variant: 'primary',
        size: 'medium',
    },
}

export const Full: Story = {
    args: {
        value: 100,
        variant: 'primary',
        size: 'medium',
    },
}

export const CustomMax: Story = {
    args: {
        value: 7,
        max: 10,
        variant: 'gold',
        size: 'medium',
    },
}

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
            <Progress value={60} variant="primary" size="medium" />
            <Progress value={60} variant="secondary" size="medium" />
            <Progress value={60} variant="ghost" size="medium" />
            <Progress value={60} variant="dangerous" size="medium" />
            <Progress value={60} variant="gold" size="medium" />
        </div>
    ),
}

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
            <Progress value={50} variant="primary" size="small" />
            <Progress value={50} variant="primary" size="medium" />
            <Progress value={50} variant="primary" size="large" />
        </div>
    ),
}

export const Responsive: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: '100%', maxWidth: '600px', padding: '1rem' }}>
                <Story />
            </div>
        ),
    ],
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                    Full width progress (responsive)
                </p>
                <Progress value={75} variant="primary" size="medium" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div>
                    <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                        Downloads
                    </p>
                    <Progress value={45} variant="primary" size="small" />
                </div>
                <div>
                    <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                        Uploads
                    </p>
                    <Progress value={80} variant="gold" size="small" />
                </div>
            </div>
        </div>
    ),
}

export default meta
