import AddSnippet from "#/corePages/snippets/add";
import { serverClient } from "#/trpc/mainServer";
import { UniqueTaggables } from "@ulld/utilities/types";
import React from "react";

interface AddSnippetPageTemplateProps {
    searchParams: {
        edit?: string;
    };
}

const AddSnippetPageTemplate = async ({
    searchParams: { edit },
}: AddSnippetPageTemplateProps) => {
    let existingTaggables = await serverClient.search.getUniqueTagTopicAndSubjects();

    let editItem: null | Awaited<
        ReturnType<typeof serverClient.snippets.getSpecificSnippet>
    > = null;
    if (edit) {
        editItem = await serverClient.snippets.getSpecificSnippet(parseInt(edit));
    }

    return <AddSnippet 
        editing={editItem}
        existingTaggables={existingTaggables as UniqueTaggables}
    />
};

AddSnippetPageTemplate.displayName = "AddSnippetPageTemplate";

export default AddSnippetPageTemplate;
