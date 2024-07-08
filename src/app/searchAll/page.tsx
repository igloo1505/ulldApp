import React from "react";
import { SearchAllParams } from "@ulld/utilities/types";
import SearchResultsPage from "#/components/slots/search/searchResults";
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import PaginationGroup from "#/components/slots/ui/pagination";
import {paginateTemplateString} from "@ulld/utilities/paginationUtils"


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
    let sp = new URLSearchParams(searchParams)
    sp.delete("page")
    return (
        <div>
            <SearchResultsPage 
                notes={filter.notes}
                tasks={[]}
                equations={[]}
            />
            <PaginationGroup 
                currentPage={searchParams?.page || 1}
                totalItems={filter.totalFound}
                itemsPerPage={filter.perPage}
                hrefTemplate={`/searchAll?${sp.toString()}&page${paginateTemplateString}`}
            />
        </div>
    );
};

SearchAllPageTemplate.displayName = "SearchAllPageTemplate";

export default SearchAllPageTemplate;
