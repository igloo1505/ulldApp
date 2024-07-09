// Slot: UI/SearchResultsPage type:page propsExtends:SearchResultsPageProps
import React, { ReactNode } from 'react'

/* TODO: Extend properly */
interface SearchResultsPageProps {
    notes: ReactNode
    taskLists: ReactNode
}


const SearchResultsPage = (props: SearchResultsPageProps) => {
return (
    <div></div>
)
}


SearchResultsPage.displayName = "SearchResultsPage"


export default SearchResultsPage;
