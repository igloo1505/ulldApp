// ULLD: protected-path pageFor:taskManager/AddTask
import AddTaskModal, {PageProps} from "#/components/slots/taskManager/addTask";
import { serverClient } from "#/trpc/mainServer";
import { PickPageParams, UniqueTaggables } from "@ulld/utilities/types";
import React from "react";


const AddTaskModalPageTemplate = async (
    props: PickPageParams<PageProps>,
) => {
    const uniqueTaggables =
        await serverClient.search.getUniqueTagTopicAndSubjects();
    return <AddTaskModal
        {...props}
        isModal 
        existingTaggables={uniqueTaggables as UniqueTaggables}
    />;
};

AddTaskModalPageTemplate.displayName = "AddTaskModalPageTemplate";

export default AddTaskModalPageTemplate;
