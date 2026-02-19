'use client'

import { LLMCopyButton, ViewOptions } from './page-actions'

type Props = {
    markdownUrl: string
    githubUrl: string
}

export function PageActions({ markdownUrl, githubUrl }: Props) {
    return (
        <>
            <LLMCopyButton markdownUrl={markdownUrl} />
            <ViewOptions markdownUrl={markdownUrl} githubUrl={githubUrl} />
        </>
    )
}
