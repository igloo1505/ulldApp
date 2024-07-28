// ULLD: protected-path pageFor:taskManager/AddTaskList
import AddTaskList, { PageProps } from "#/components/slots/taskManager/addList";
import { serverClient } from "#/trpc/mainServer";
import { PickPageParams } from "@ulld/utilities/types";
import React from "react";

const AddTaskListPageTemplate = async (props: PickPageParams<PageProps>) => {
  let editing: undefined | PageProps["editing"] = undefined;
  if (props.searchParams?.editing) {
    editing = await serverClient.toDo.getToDoListById(
      parseInt(props.searchParams.editing),
    );
  }
  return <AddTaskList {...props} isModal={false} editing={editing} />;
};

AddTaskListPageTemplate.displayName = "AddTaskListPageTemplate";

export default AddTaskListPageTemplate;
