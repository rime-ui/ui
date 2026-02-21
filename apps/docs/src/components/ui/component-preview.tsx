import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from '@/components/ui/codeblock'

interface ComponentPreviewProps {
    preview: React.ReactNode
    code: string
}

export function ComponentPreview({ preview, code }: ComponentPreviewProps) {
    return (
        <Tabs defaultValue="preview" className="w-full mt-6">
            <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="p-6 border rounded-xl mt-4 flex justify-center">
                {preview}
            </TabsContent>

            <TabsContent value="code" className="mt-4">
                <CodeBlock code={code} language="tsx" />
            </TabsContent>
        </Tabs>
    )
}
