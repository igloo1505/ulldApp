// ULLD: protected-path pageFor:UI/BookmarksPage
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import {NoteFilter} from "@ulld/api/classes/search/noteFilter"
import React from 'react'
import BookmarkResultsPage from '#/components/slots/search/bookmarksPage';
import { SearchAllParams } from '@ulld/utilities/types';
import NoteSummaryItem from '#/components/slots/search/items/noteSummary';


interface BookmarksPageProps {
    searchParams: SearchAllParams
}


const BookmarksPage = async ({ searchParams }: BookmarksPageProps) => {
    const filter = new NoteFilter("all")
    const config = getInternalConfig(undefined, searchParams)
    const notes = await filter.getBookmarked(config)

    return (
        <BookmarkResultsPage
            notes={<>
            {notes.map((n, i) => {
                return (
                <NoteSummaryItem
                        index={i}
                        item={n}
                        searchType="bookmarked"
                    />
                )
            })}
            </>}
        >
        </BookmarkResultsPage>
    )
}


BookmarksPage.displayName = "BookmarksPage"


export default BookmarksPage;
