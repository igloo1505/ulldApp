// Slot: task-manager/TaskDetails type:component propsExtends:TaskDetailsPageProps
import { TodoTaskOutput } from "@ulld/parsers/plugins/todos";
import React from "react";


/* TODO: Extend this properly. */
interface TaskManagerTaskDetailsProps {
    isModal: boolean;
    task: TodoTaskOutput;
}

const TaskManagerTaskDetails = (props: TaskManagerTaskDetailsProps) => {
    return <div></div>;
};

TaskManagerTaskDetails.displayName = "TaskManagerTaskDetails";

export default TaskManagerTaskDetails;
