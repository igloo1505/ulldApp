// Slot: editor/EditorModalPage type:page propsExtends:MonacoPageParams clientOnly
import { EditorLayout, MonacoPageParams } from "@ulld/editor/editorTypes";
import { ModalPageContainer } from "@ulld/ui/modalPage";
import dynamic from "next/dynamic";
import React from "react";
const Editor = dynamic(
    () => import("@ulld/editor/ide").then((a) => a.CodeEditor),
    { ssr: false },
);

interface EditorModalPageProps extends MonacoPageParams { }

const EditorModalPage = ({
    params: { uniqueContentId },
    searchParams: { useExistingValue, language },
}: EditorModalPageProps) => {
    return (
        <ModalPageContainer closeEvent="ulld-editor-close">
            <Editor
                uniqueContentId={uniqueContentId}
                layout={EditorLayout.modal}
                useExisting={useExistingValue === "true"}
                asModalChild
                forceLanguage
                language={language}
                width="min(1024px,85vw)"
                height="min(640px,85vh)"
            />
        </ModalPageContainer>
    );
};

EditorModalPage.displayName = "EditorModalPage";

export default EditorModalPage;
