// ULLD: protected-path
import TaskManagerPage from '#/components/slots/taskManager/taskManagerPage';
import React from 'react'



interface TaskListMainPageTemplateProps {

}

const TaskListMainPageTemplate = (props: TaskListMainPageTemplateProps) => {
return (
    <TaskManagerPage />
)
}


TaskListMainPageTemplate.displayName = "TaskListMainPageTemplate"


export default TaskListMainPageTemplate;
