// ULLD: protected-path
import AddTaskModal from "#/components/slots/taskManager/addTask";
import { serverClient } from "#/trpc/mainServer";
import React from "react";

const AddTaskPageTemplate = async () => {
    const uniqueTaggables =
        await serverClient.search.getUniqueTagTopicAndSubjects();
    return <AddTaskModal isModal={false} existingTaggables={uniqueTaggables} />;
};

AddTaskPageTemplate.displayName = "AddTaskPageTemplate";

export default AddTaskPageTemplate;
