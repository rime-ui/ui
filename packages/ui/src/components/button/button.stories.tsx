import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";


const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "ghost", "dangerous"]
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"]
        }
    }
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: "primary",
        size: "medium",
        children: "Button"
    }
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        size: "medium",
        children: "Button"
    }
}

export const Ghost: Story = {
    args: {
        variant: "ghost",
        size: "medium",
        children: "Button",
        outline: false
    }
}

export const Dangerous: Story = {
    args: {
        variant: "dangerous",
        size: "medium",
        children: "Button",
        outline: false
    }
}

export default meta