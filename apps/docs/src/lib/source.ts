import { docs } from 'fumadocs-mdx:collections/server'
import { type InferPageType, loader } from 'fumadocs-core/source'
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons'
import React from 'react'

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
    baseUrl: '/docs',
    source: docs.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
    icon(icon) {
        if (!icon) {
            return
        }

        if (icon === 'duolingo') {
            return React.createElement('img', {
                src: '/icons/duolingo.svg',
                alt: 'Duolingo',
                width: 16,
                height: 16,
            })
        }
    },
})

export function getPageImage(page: InferPageType<typeof source>) {
    const segments = [...page.slugs, 'image.png']

    return {
        segments,
        url: `/og/docs/${segments.join('/')}`,
    }
}

export async function getLLMText(page: InferPageType<typeof source>) {
    const processed = await page.data.getText('processed')

    return `# ${page.data.title}

${processed}`
}
