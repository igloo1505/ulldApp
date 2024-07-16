// ULLD: protected-path
import SnippetFilter from "#/components/slots/snippets/snippetFilter";
import SnippetList from "#/components/slots/snippets/snippetList";
import { serverClient } from "#/trpc/mainServer";
import { snippetSchema } from "@ulld/snippets/schemas";
import React from "react";

interface SnippetsPageTemplateProps {
    searchParams: any;
}

const SnippetsPageTemplate = async ({
    searchParams,
}: SnippetsPageTemplateProps) => {
    const _snippets = await serverClient.snippets.getSnippets(searchParams);

    const snippets = snippetSchema.array().parse(_snippets);

    return (
        <div className={"w-full inline-block space-y-6"}>
            <SnippetFilter searchParams={searchParams} />
            <SnippetList snippets={snippets} searchParams={searchParams} />
        </div>
    );
};

SnippetsPageTemplate.displayName = "SnippetsPageTemplate";

export default SnippetsPageTemplate;
