// ULLD: protected-path
import EditorPage, { PageProps } from "#/corePages/editor/editor";
import React from "react";

interface EditorPageTemplateProps extends PageProps { }

const EditorPageTemplate = (props: EditorPageTemplateProps) => {
    return <EditorPage {...props} />;
};

EditorPageTemplate.displayName = "EditorPageTemplate";

export default EditorPageTemplate;
