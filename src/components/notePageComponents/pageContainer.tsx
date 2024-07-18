// Slot: UI/NoteTypePageContainer type:page propsExtends:NotePageWrapperProps
import React from 'react'
import REPLACEME from '../REPLACEMEcomponent';
import { NotePageWrapperProps } from '@ulld/ui/types';

export interface PageProps extends NotePageWrapperProps {}

const NotePageWrapperTemplate = ({children}: PageProps) => {
return (
    <REPLACEME>
            {children}
    </REPLACEME>
)
}


NotePageWrapperTemplate.displayName = "NotePageWrapperTemplate"


export default NotePageWrapperTemplate;
