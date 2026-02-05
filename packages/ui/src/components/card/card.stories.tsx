import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../button'
import { Card } from './card'

const meta = {
    title: 'Components/Card',
    component: Card.Root,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="max-w-md">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Card.Root>

type Story = StoryObj<typeof meta>

export const TextCardEnglish: Story = {
    render: (args) => <DefaultCard {...EnglishArgs} {...args} />,
}

export const TextCardArabic: Story = {
    render: (args) => <DefaultCard {...ArabicArgs} {...args} />,
}

export const ImageCardEnglish: Story = {
    render: (args) => <Image {...EnglishArgs} {...args} />,
}

export const ImageCardArabic: Story = {
    render: (args) => <Image {...ArabicArgs} {...args} />,
}

type Args = {
    title: string
    description: string
    body: React.ReactNode
    footer: React.ReactNode
    dir: 'ltr' | 'rtl' | (string & {})
}

const EnglishArgs: Args = {
    title: 'Lorem Ipsum',
    description: 'incididunt aute sint nulla aute anim ut consequat in irure.',
    body: 'Ea deserunt in amet proident irure eu in labore cupidatat\npariatur lorem voluptate pariatur eiusmod ut irure.',
    footer: (
        <Button className="w-full font-semibold" variant="ghost">
            Occaecat
        </Button>
    ),
    dir: 'ltr',
}

const ArabicArgs: Args = {
    title: 'أبجد هوز حطي كلمن',
    description: 'سعفص قرشت ثخذ ضظغ',
    body: 'أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ، أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ. أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ، كلمن سعفص قرشت.',
    footer: (
        <Button className="w-full font-semibold" variant="ghost">
            كلمن
        </Button>
    ),
    dir: 'rtl',
}

function DefaultCard(props: Args & React.ComponentProps<typeof Card.Root>) {
    return (
        <Card.Root {...props}>
            <Card.Header>
                <Card.Title>{props.title}</Card.Title>
                <span className="text-gray-500 text-sm">{props.description}</span>
            </Card.Header>
            <Card.Body>{props.body}</Card.Body>
            <Card.Footer>{props.footer}</Card.Footer>
        </Card.Root>
    )
}

function Image(props: Omit<Args, 'footer'> & React.ComponentProps<typeof Card.Root>) {
    return (
        <Card.Root {...props}>
            <img
                className="aspect-video w-full object-cover grayscale"
                src="https://images.unsplash.com/photo-1715423977656-3299718e8eaf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Header>
                <Card.Title>{props.title}</Card.Title>
                <span className="text-gray-500 text-sm">{props.description}</span>
            </Card.Header>
            <Card.Body>{props.body}</Card.Body>
        </Card.Root>
    )
}

export default meta
