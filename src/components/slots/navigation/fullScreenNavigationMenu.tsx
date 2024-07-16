// Slot: navigation/FullScreenNavigationMenu type:component propsExtends:FullScreenNavProps
import REPLACEME from "#/components/REPLACEMEcomponent";
import { FullScreenNavProps } from "@ulld/navigation/types";
import React from "react";

export interface PageProps extends FullScreenNavProps {}

const FullScreenNavigationMenu = (props: PageProps) => {
    return <REPLACEME {...props} />;
};

FullScreenNavigationMenu.displayName = "FullScreenNavigationMenu";

export default FullScreenNavigationMenu;
