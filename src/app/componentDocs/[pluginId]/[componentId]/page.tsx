import ComponentDocPageWrapperTemplate from "#/components/slots/ui/componentDocumentationPageWrapper";
import React from "react";
import { MdxContentSERVER } from "@ulld/render/mdx/server";
import { getContentHeadings } from "@ulld/utilities/getMarkdownHeadings";
import buildData from "buildData";
import { getPluginDocContentByIds } from "@ulld/utilities/componentDocsPathUtils";
import { notFound } from "next/navigation";

interface ComponentDocumentationPageProps {
    params: {
        pluginId: string;
        componentId: string;
    };
}

const ComponentDocumentationPage = async ({
    params,
    ...props
}: ComponentDocumentationPageProps) => {
    const { pluginId, componentId } = params
    let data = await getPluginDocContentByIds(
        buildData,
        pluginId,
        componentId,
        true,
    );
    if (!data || !data.content) {
        return notFound();
    }
    return (
        <ComponentDocPageWrapperTemplate
            {...params}
            item={data.item}
            headings={getContentHeadings(data.content)}
        >
            <MdxContentSERVER content={data.content} />
        </ComponentDocPageWrapperTemplate>
    );
};

ComponentDocumentationPage.displayName = "ComponentDocumentationPage";

export default ComponentDocumentationPage;
