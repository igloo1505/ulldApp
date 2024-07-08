// Slot: UI/DictionaryLetterList type:component propsExtends:DictionaryLetterList
import React, { ReactNode } from "react";

/* TODO: Extend properly. */
interface DictionaryLetterListProps {
    children: ReactNode;
    letter: string;
    currentPage?: any

}

const DictionaryLetterList = ({ children }: DictionaryLetterListProps) => {
    return <div>{children}</div>;
};

DictionaryLetterList.displayName = "DictionaryLetterList";

export default DictionaryLetterList;
