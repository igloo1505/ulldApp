import React from "react";
import { SearchAllParams } from "@ulld/utilities/types";
import SearchResultsPage from "#/components/slots/search/searchResults";
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import PaginationGroup from "#/components/slots/ui/pagination";
import { paginateTemplateString } from "@ulld/utilities/paginationUtils"
import { getSearchType, getTaggablesFromSearchAllParams, searchAllParamsToSearchParamsClass } from "@ulld/utilities/searchUtils"
import NotesSearchResultsListComponent from "#/components/slots/search/lists/noteSearchResultsList";
import NoteSummaryItem from "#/components/slots/search/items/noteSummary";
import TaskListSearchResultComponent from "#/components/slots/search/lists/taskListSearchResults";
import TaskListSearchResult from "#/components/slots/search/items/taskListSearchResult";
import { serverClient } from "#/trpc/mainServer";


interface SearchAllPageTemplateProps {
    searchParams: SearchAllParams;
}


/* TODO: Handle the tasks and equations return here as well based on tags or other search methods */
const SearchAllPageTemplate = async ({
    searchParams,
}: SearchAllPageTemplateProps) => {
    const filter = new NoteFilter("all", searchParams);
    const config = getInternalConfig();
    await filter.getResults(config);
    let sp = searchAllParamsToSearchParamsClass(searchParams)
    sp.set("page", paginateTemplateString)
    const searchType = getSearchType(searchParams)
    const taskLists = await serverClient.toDo.findListsByTaggables(getTaggablesFromSearchAllParams(searchParams))

    return (
        <div className={"w-full relative"}>
            <SearchResultsPage 
                notes={<NotesSearchResultsListComponent>
                    {filter.notes.map((item, i) => <NoteSummaryItem
                        key={`note-${item.id}`}
                        item={item}
                        index={i}
                        searchType={searchType}
                    />)}
                </NotesSearchResultsListComponent>}
                taskLists={<TaskListSearchResultComponent>
                {taskLists.map((t, i) => <TaskListSearchResult
                        item={t}
                        index={i}
                        totalFound={taskLists.length}
                        key={`task-list-result-${i}`}
                    />)}
                </TaskListSearchResultComponent>}
                /* equations={[]} */
            />
            <PaginationGroup 
                currentPage={searchParams?.page ? parseInt(searchParams.page) : 1}
                totalItems={filter.totalFound}
                itemsPerPage={filter.perPage}
                hrefTemplate={`/searchAll?${sp.toString()}`}
            />
        </div>
    );
};

SearchAllPageTemplate.displayName = "SearchAllPageTemplate";

export default SearchAllPageTemplate;
