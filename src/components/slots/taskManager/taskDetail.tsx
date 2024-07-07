// Slot: task-manager/TaskDetails type:component propsExtends:TaskDetailsPageProps
import { todoTaskSchema } from '@ulld/parsers/plugins/todos'
import React from 'react'
import {z} from 'zod'


/* TODO: Extend this properly. */
interface TaskManagerTaskDetailsProps {
   isModal: boolean
    task: z.output<typeof todoTaskSchema>
}

const TaskManagerTaskDetails = (props: TaskManagerTaskDetailsProps) => {
return (
    <div></div>
)
}


TaskManagerTaskDetails.displayName = "TaskManagerTaskDetails"


export default TaskManagerTaskDetails;

