// Slot: task-manager/AddTask type:component propsExtends:AddTaskProps

import React from "react";

/* TODO: Extend this properly. */
interface AddTaskModalProps {
    isModal: boolean;
    existingTaggables: any;
}

const AddTaskModal = (props: AddTaskModalProps) => {
    return <div></div>;
};

AddTaskModal.displayName = "AddTaskModal";

export default AddTaskModal;
