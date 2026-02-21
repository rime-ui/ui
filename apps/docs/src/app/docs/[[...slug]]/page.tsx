import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page'
import { createRelativeLink } from 'fumadocs-ui/mdx'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageActions } from '@/components/ai/page-actions-wrapper'
import { getPageImage, source } from '@/lib/source'
import { MDXRenderer } from '@/MDXRenderer'

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
    const params = await props.params
    const page = source.getPage(params.slug)
    if (!page) notFound()

    const RelativeLink = createRelativeLink(source, page)

    const MDX = page.data.body
    const gitConfig = {
        user: 'username',
        repo: 'repo',
        branch: 'main',
    }

    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
            <div className="flex flex-row items-center gap-2 border-b pb-6">
                <PageActions
                    markdownUrl={`${page.url}.mdx`}
                    githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/docs/content/docs/${page.path}`}
                />
            </div>
            <DocsBody>
                <MDXRenderer
                    mdx={page.data.body}
                    components={{
                        a: RelativeLink,
                    }}
                />
            </DocsBody>
        </DocsPage>
    )
}

export async function generateStaticParams() {
    return source.generateParams()
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
    const params = await props.params
    const page = source.getPage(params.slug)
    if (!page) notFound()

    return {
        title: page.data.title,
        description: page.data.description,
        openGraph: {
            images: getPageImage(page).url,
        },
    }
}
