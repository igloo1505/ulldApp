// ULLD: protected-path pageFor:taskManager/AddTaskList
import AddTaskList, {PageProps} from "#/components/slots/taskManager/addList";
import { serverClient } from "#/trpc/mainServer";
import { UniqueTaggables } from "@ulld/utilities/types";
import React from "react";


const AddTaskListPageTemplate = async (props: PickPageParams<PageProps>) => {
    const uniqueTaggables = await serverClient.search.getUniqueTagTopicAndSubjects()
    return <AddTaskList existingTaggables={uniqueTaggables as UniqueTaggables} isModal />;
};

AddTaskListPageTemplate.displayName = "AddTaskListPageTemplate";

export default AddTaskListPageTemplate;
