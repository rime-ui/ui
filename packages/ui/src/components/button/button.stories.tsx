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
            options: ["primary"]
        }
    }
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: "primary",
        children: "Button"
    }
}

export default meta