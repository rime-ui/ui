import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { baseOptions } from '@/lib/layout.shared'
import { source } from '@/lib/source'

export const dynamic = 'force-dynamic'

export default function Layout({ children }: LayoutProps<'/docs'>) {
    return (
        <DocsLayout tree={source.getPageTree()} {...baseOptions()} sidebar={{ className: 'w-fit' }}>
            {children}
        </DocsLayout>
    )
}
