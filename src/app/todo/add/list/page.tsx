// ULLD: protected-path
import AddTaskList from "#/components/slots/taskManager/addList";
import { serverClient } from "#/trpc/mainServer";
import React from "react";


const AddTaskListPageTemplate = async () => {
    const uniqueTaggables = await serverClient.search.getUniqueTagTopicAndSubjects()
    return <AddTaskList existingTaggables={uniqueTaggables} isModal={false} />;
};

AddTaskListPageTemplate.displayName = "AddTaskListPageTemplate";

export default AddTaskListPageTemplate;
