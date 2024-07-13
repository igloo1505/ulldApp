// Slot: editor/EditorPage type:page propsExtends:MonacoPageParams
import REPLACEME from "#/components/REPLACEMEcomponent";
import { MonacoPageParams } from "@ulld/editor/editorTypes";
import React from "react";

export interface PageProps extends MonacoPageParams {}

const EditorPage = (props: PageProps) => {
    return <REPLACEME {...props}/>
};

EditorPage.displayName = "EditorPage";

export default EditorPage;
