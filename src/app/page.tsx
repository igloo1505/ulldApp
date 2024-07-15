import React from "react";
import LandingPageComponent from "#/components/slots/landingPage/main";
import { readAppConfig } from "@ulld/developer/readAppConfig";

interface LandingPageProps { }

const LandingPage = async (props: LandingPageProps) => {
    const config = await readAppConfig();
    return <LandingPageComponent
        {...props}
        config={config}
    />;
};

LandingPage.displayName = "LandingPage";

export default LandingPage;
