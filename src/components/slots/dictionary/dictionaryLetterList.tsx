// Slot: UI/DictionaryLetterList type:component propsExtends:DictionaryLetterList
import React from "react";
import { DictionaryLetterList } from "@ulld/ui/types";
import REPLACEME from "#/components/REPLACEMEcomponent";

const DictionaryLetterListComponent = ({ children, ...props }: DictionaryLetterList) => {
    return <REPLACEME {...props} >{children}</REPLACEME>;
};

DictionaryLetterListComponent.displayName = "DictionaryLetterListComponent";

export default DictionaryLetterListComponent;
