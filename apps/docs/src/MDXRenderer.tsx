import { getMDXComponents } from '@/mdx-components'
import type { MDXComponents, MDXContent } from 'mdx/types'

interface MDXRendererProps {
    mdx: MDXContent
    components?: MDXComponents
}

export function MDXRenderer({ mdx, components }: MDXRendererProps) {
    const MDX = mdx
    return <MDX components={getMDXComponents(components)} />
}
