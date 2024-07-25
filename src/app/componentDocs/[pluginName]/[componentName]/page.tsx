import ComponentDocPageWrapperTemplate from "#/components/slots/ui/componentDocumentationPageWrapper";
import React from "react";
import { MdxContentSERVER } from "@ulld/render/mdx/server";
import { getContentHeadings } from "@ulld/utilities/getMarkdownHeadings";
import buildData from "buildData";
import { getPluginDocContentByIds } from "@ulld/utilities/componentDocsPathUtils";
import { notFound } from "next/navigation";
import MdxNoteTocTemplate from "#/components/slots/navigation/mdxNoteToc";

interface ComponentDocumentationPageProps {
    params: {
        pluginName: string;
        componentName: string;
    };
    searchParams: {
full?: string
    }
}

const ComponentDocumentationPage = async ({
    params,
    searchParams,
    ...props
}: ComponentDocumentationPageProps) => {
    const { pluginName, componentName } = params
    let isFull = searchParams.full === "false" ? false : true
    let data = await getPluginDocContentByIds(
        buildData,
        pluginName,
        componentName,
        isFull,
    );
    if (!data || !data.content) {
        return notFound();
    }
    return (
        <ComponentDocPageWrapperTemplate
            {...params}
            toc={MdxNoteTocTemplate}
            item={data.item}
            headings={getContentHeadings(data.content)}
        >
            <MdxContentSERVER content={data.content} />
        </ComponentDocPageWrapperTemplate>
    );
};

ComponentDocumentationPage.displayName = "ComponentDocumentationPage";

export default ComponentDocumentationPage;
