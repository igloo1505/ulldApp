// ULLD: protected-path
import AddTaskModal from "#/components/slots/taskManager/addTask";
import { serverClient } from "#/trpc/mainServer";
import React from "react";

interface AddTaskModalPageTemplateProps { }

const AddTaskModalPageTemplate = async (
    props: AddTaskModalPageTemplateProps,
) => {
    const uniqueTaggables =
        await serverClient.search.getUniqueTagTopicAndSubjects();
    return <AddTaskModal isModal existingTaggables={uniqueTaggables} />;
};

AddTaskModalPageTemplate.displayName = "AddTaskModalPageTemplate";

export default AddTaskModalPageTemplate;
