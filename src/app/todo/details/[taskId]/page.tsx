// ULLD: protected-path
import TaskManagerTaskDetails from "#/components/slots/taskManager/taskDetail";
import { serverClient } from "@ulld/api/serverClient";
import { todoTaskSchema } from "@ulld/parsers/plugins/todos";
import { redirect } from "next/navigation";
import React from "react";

interface TaskDetailsPageProps {
    params: {
        taskId: string;
    };
}


const TaskDetailsPage = async ({
    params: { taskId },
}: TaskDetailsPageProps) => {
    let t = await serverClient.toDo.getToDoDetails({
        toDoId: typeof taskId === "string" ? parseInt(taskId) : taskId,
    });

    if (!t) return redirect("/todo")
    const task = await todoTaskSchema.parseAsync(t)

    return <TaskManagerTaskDetails
        isModal={false}
        data={task}
    />;
};

TaskDetailsPage.displayName = "TaskDetailsPage";

export default TaskDetailsPage;
