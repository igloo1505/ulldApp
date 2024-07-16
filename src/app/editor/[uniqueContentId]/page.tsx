// ULLD: protected-path pageFor:editor/EditorPage
import React from "react";
import EditorPage, { PageProps } from "#/corePages/editor/editor";
interface EditorPageTemplateProps extends PageProps { }

const EditorPageTemplate = (props: EditorPageTemplateProps) => {
    return <EditorPage {...props} />;
};

EditorPageTemplate.displayName = "EditorPageTemplate";

export default EditorPageTemplate;
