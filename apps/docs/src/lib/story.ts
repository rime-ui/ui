import { createFileSystemCache, defineStoryFactory } from '@fumadocs/story';

export const { defineStory } = defineStoryFactory({
    // for Vercel, this is required: choose a directory for cache.
    cache:
        process.env.NODE_ENV === 'production'
            ? createFileSystemCache('.next/fumadocs-story')
            : undefined,

    tsc: {
        // we use tsc to generate controls from types
        // you can customise TypeScript options here
    },
});