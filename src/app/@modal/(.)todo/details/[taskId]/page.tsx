import TaskManagerTaskDetails from "#/components/slots/taskManager/taskDetail";
import { serverClient } from "@ulld/api/serverClient";
import React from "react";

interface TaskDetailsModalPageProps {
    params: {
        taskId: string;
    };
}

const TaskDetailsModalPage = async ({
    params: { taskId },
}: TaskDetailsModalPageProps) => {
    let task = await serverClient.toDo.getToDoDetails({
        toDoId: typeof taskId === "string" ? parseInt(taskId) : taskId,
    });

    return <TaskManagerTaskDetails
        isModal={true}
        task={task}
    />;
};

TaskDetailsModalPage.displayName = "TaskDetailsModalPage";

export default TaskDetailsModalPage;
