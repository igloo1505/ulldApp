// Slot: task-manager/AddTask type:component propsExtends:AddTaskProps
import REPLACEME from "#/components/REPLACEMEcomponent";
import { AddTaskProps } from "@ulld/task-manager/types";
import React from "react";

export interface PageProps extends AddTaskProps {}

const AddTaskModal = (props: PageProps) => {
    return <REPLACEME {...props} />
};

AddTaskModal.displayName = "AddTaskModal";

export default AddTaskModal;
