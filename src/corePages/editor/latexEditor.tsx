// Slot: editor/LatexEditorPage type:page propsExtends:EditorPageContentProps
import React from "react";
import { EditorPageContentProps } from "@ulld/utilities/corePageProps";
import REPLACEME from "#/components/REPLACEMEcomponent";

export interface  PageProps extends EditorPageContentProps {}

const LatexEditor = (props: PageProps) => {
    return <REPLACEME {...props} />
};

LatexEditor.displayName = "LatexEditor";

export default LatexEditor;
