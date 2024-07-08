// ULLD: protected-path
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import type { SearchAllParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams";
import {NoteFilter} from "@ulld/api/classes/search/noteFilter"
import React from 'react'
import BookmarkResultsPage from '#/components/slots/search/bookmarksPage';


interface BookmarksPageProps {
    searchParams: SearchAllParams
}


const BookmarksPage = async ({ searchParams }: BookmarksPageProps) => {
    const filter = new NoteFilter("all")
    const config = getInternalConfig(undefined, searchParams)
    const notes = await filter.getBookmarked(config)

    return (
        <BookmarkResultsPage notes={notes} />
    )
}


BookmarksPage.displayName = "BookmarksPage"


export default BookmarksPage;
