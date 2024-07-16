// ULLD: protected-path pageFor:navigation/FullScreenNavigationMenu
import FullScreenNavigationMenu, {
} from "#/components/slots/navigation/fullScreenNavigationMenu";
import { AnyPageParams } from "@ulld/types";
import appConfig from "appConfig"
import buildData from "buildData"
import React from "react";

const FullScreenNavigationPageTemplate = async (props: AnyPageParams) => {
    return (
        <FullScreenNavigationMenu
            {...props}
            isModal={false}
            noteTypes={appConfig.noteTypes}
            navConfig={appConfig.navigation}
            items={buildData.navigationLinks}
        />
    );
};

FullScreenNavigationPageTemplate.displayName =
    "FullScreenNavigationPageTemplate";

export default FullScreenNavigationPageTemplate;
