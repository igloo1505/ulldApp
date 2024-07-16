// ULLD: protected-path pageFor:editor/MdxEditorPage
import MdxEditorPage, { PageProps } from "#/corePages/editor/mdxEditor";
import React from "react";


const MdxEditorPageTemplate = (props: PageProps) => {
    return <MdxEditorPage {...props} />;
};

MdxEditorPageTemplate.displayName = "MdxEditorPageTemplate";

export default MdxEditorPageTemplate;
