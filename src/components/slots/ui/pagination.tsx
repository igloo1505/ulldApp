// Slot: UI/Pagination type:component propsExtends:PaginationProps
import React from "react";

/* TODO: Extend properly */
interface PaginationGroupProps { 
    totalItems: number
    itemsPerPage: number
    currentPage: number
    hrefTemplate: string
}

const PaginationGroup = (props: PaginationGroupProps) => {
    return <div></div>;
};

PaginationGroup.displayName = "PaginationGroup";

export default PaginationGroup;
