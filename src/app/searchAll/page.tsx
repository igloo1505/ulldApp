import React from "react";
import { SearchAllParams } from "@ulld/utilities/types";
import SearchResultsPage from "#/components/slots/search/searchResults";
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import PaginationGroup from "#/components/slots/ui/pagination";
import { paginateTemplateString } from "@ulld/utilities/paginationUtils"
import { searchAllParamsToSearchParamsClass } from "@ulld/utilities/searchUtils"
import NotesSearchResultsListComponent from "#/components/slots/search/lists/noteSearchResultsList";
import NoteSummaryItem from "#/components/slots/search/items/noteSummary";
import TaskListSearchResultComponent from "#/components/slots/search/lists/taskListSearchResults";
import TaskListSearchResult from "#/components/slots/search/items/taskListSearchResult";


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
    const taskLists: any[] = [] // Get this based on search params obviously.
    return (
        <div className={"w-full relative"}>
            <SearchResultsPage 
                notes={<NotesSearchResultsListComponent>
                    {filter.notes.forEach((item, i) => <NoteSummaryItem key={`note-${item.id}`} item={item} index={i}/>)}
                </NotesSearchResultsListComponent>}
                taskLists={<TaskListSearchResultComponent>
                {taskLists.map((t, i) => <TaskListSearchResult data={t} index={i} key={`task-list-result-${i}`} />)}
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
