// Slot: task-manager/AddTaskList type:component propsExtends:AddTaskListProps
import React from "react";

interface AddTaskListProps {
    isModal: boolean;
    existingTaggables: any;
}

const AddTaskList = (props: AddTaskListProps) => {
    return <div></div>;
};

AddTaskList.displayName = "AddTaskList";

export default AddTaskList;
