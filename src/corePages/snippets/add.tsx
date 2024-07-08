// Slot: snippets/AddSnippetPage type:page propsExtends:AddSnippetPageProps
import type { serverClient } from '#/trpc/mainServer'
import React from 'react'


/* TODO: Extend properly */
interface AddSnippetProps {
    editing?: ReturnType<typeof serverClient.snippets.getSpecificSnippet>
    existingTaggables: any
}

const AddSnippet = (props: AddSnippetProps) => {
return (
    <div></div>
)
}


AddSnippet.displayName = "AddSnippet"


export default AddSnippet;
