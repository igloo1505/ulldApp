// ULLD: protected-path pageFor:navigation/FullScreenNavigationMenu
import FullScreenNavigationMenu from "#/components/slots/navigation/fullScreenNavigationMenu";
import React from "react";
import appConfig from "appConfig"
import buildData from "buildData"
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";

const FullScreenNavigationModalPageTemplate = () => {
    return <FullScreenNavigationMenu
        noteTypes={(appConfig as AppConfigSchemaOutput).noteTypes}
        navConfig={(appConfig as AppConfigSchemaOutput).navigation}
        items={buildData.navigationLinks}
        isModal={true}
    />;
};

FullScreenNavigationModalPageTemplate.displayName =
    "FullScreenNavigationModalPageTemplate";

export default FullScreenNavigationModalPageTemplate;
