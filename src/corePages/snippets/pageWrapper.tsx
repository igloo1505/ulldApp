// Slot: snippets/SnippetListPage type:page propsExtends:SnippetsPageProps
import REPLACEME from '#/components/REPLACEMEcomponent';
import { SnippetsPageProps } from '@ulld/snippets/types';
import React from 'react'

export interface PageProps extends SnippetsPageProps {}

const SnippetPageWrapper = (props: PageProps) => {
return (
        <REPLACEME {...props}/>
)
}


SnippetPageWrapper.displayName = "SnippetPageWrapper"


export default SnippetPageWrapper;
