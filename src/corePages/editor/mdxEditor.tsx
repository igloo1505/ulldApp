// Slot: editor/MdxEditorPage type:page propsExtends:EditorPageContentProps
import React from 'react'
import { EditorPageContentProps } from '@ulld/utilities/corePageProps'
import REPLACEME from '#/components/REPLACEMEcomponent'

export interface PageProps extends EditorPageContentProps {
}

const MdxEditorPage = (props: PageProps) => {
return (
    <REPLACEME {...props} />
)
}


MdxEditorPage.displayName = "MdxEditorPage"


export default MdxEditorPage;
