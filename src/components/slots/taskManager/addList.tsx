// Slot: taskManager/AddTaskList type:component propsExtends:AddTaskListProps
import React from "react";
import {AddTaskListProps} from "@ulld/task-manager/types"
import REPLACEME from "#/components/REPLACEMEcomponent";

export interface PageProps extends AddTaskListProps {}

const AddTaskList = (props: PageProps) => {
    return <REPLACEME {...props} />
};

AddTaskList.displayName = "AddTaskList";

export default AddTaskList;
