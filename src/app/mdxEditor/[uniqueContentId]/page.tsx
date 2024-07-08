// ULLD: protected-path
import MdxEditorPage, { PageProps } from "#/corePages/editor/mdxEditor";
import React from "react";

interface MdxEditorPageTemplateProps extends PageProps { }

const MdxEditorPageTemplate = (props: MdxEditorPageTemplateProps) => {
    return <MdxEditorPage {...props} />;
};

MdxEditorPageTemplate.displayName = "MdxEditorPageTemplate";

export default MdxEditorPageTemplate;
