// ULLD: protected-path pageFor:editor/LatexEditorPage
import LatexEditor, { PageProps } from "#/corePages/editor/latexEditor";
import React from "react";


const LatexEditorPageTemplate = (props: PageProps) => {
    return <LatexEditor {...props} />;
};

LatexEditorPageTemplate.displayName = "LatexEditorPageTemplate";

export default LatexEditorPageTemplate;
