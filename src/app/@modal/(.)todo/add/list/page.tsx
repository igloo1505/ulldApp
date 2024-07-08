// ULLD: protected-path
import AddTaskList from "#/components/slots/taskManager/addList";
import { serverClient } from "#/trpc/mainServer";
import React from "react";

interface AddTaskListPageTemplateProps { }

const AddTaskListPageTemplate = async (props: AddTaskListPageTemplateProps) => {
    const uniqueTaggables = await serverClient.search.getUniqueTagTopicAndSubjects()
    return <AddTaskList existingTaggables={uniqueTaggables} isModal />;
};

AddTaskListPageTemplate.displayName = "AddTaskListPageTemplate";

export default AddTaskListPageTemplate;
