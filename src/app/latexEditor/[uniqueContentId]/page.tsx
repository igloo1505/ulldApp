// Slot: editor/LatexEditorPage type:page propsExtends:EditorPageContentProps
import LatexEditor, { PageProps } from "#/corePages/editor/latexEditor";
import React from "react";

interface LatexEditorPageTemplateProps extends PageProps { }

const LatexEditorPageTemplate = (props: LatexEditorPageTemplateProps) => {
    return <LatexEditor {...props} />;
};

LatexEditorPageTemplate.displayName = "LatexEditorPageTemplate";

export default LatexEditorPageTemplate;
