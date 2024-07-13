// ULLD: protected-path
import AddTaskModal, {
    PageProps,
} from "#/components/slots/taskManager/addTask";
import { serverClient } from "#/trpc/mainServer";
import { UniqueTaggables } from "@ulld/utilities/types";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import React from "react";

const AddTaskPageTemplate = async (props: PageProps) => {
    const uniqueTaggables =
        await serverClient.search.getUniqueTagTopicAndSubjects();
    const lists = await serverClient.toDo.getToDoLists();

    return (
        <AddTaskModal
            {...props}
            isModal={false}
            lists={ArrayUtilities.beArray(lists)}
            existingTaggables={uniqueTaggables as UniqueTaggables}
        />
    );
};

AddTaskPageTemplate.displayName = "AddTaskPageTemplate";

export default AddTaskPageTemplate;
