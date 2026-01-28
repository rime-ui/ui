import { Button } from '@rime-ui/ui'
import { defineStory } from '@/lib/story'

export const story = defineStory(import.meta.url, {
    Component: Button,
    args: [
        {
            variant: 'Default',
            initial: {
                children: 'Continue',
                variant: 'primary',
            },
        },
        {
            variant: 'Secondary',
            initial: {
                children: 'Skip',
                variant: 'secondary',
            },
        },
        {
            variant: 'Ghost',
            initial: {
                children: 'Cancel',
                variant: 'ghost',
            },
        },
        {
            variant: 'Dangerous',
            initial: {
                children: 'Delete',
                variant: 'dangerous',
            },
        },
    ],
})
