// ULLD: protected-path pageFor:math/EquationsPage
import EquationsPage, { PageProps } from "#/corePages/equations/list";
import React from "react";


const EquationsPageTemplate = (props: PageProps) => {
    return <EquationsPage {...props} />;
};

EquationsPageTemplate.displayName = "EquationsPageTemplate";

export default EquationsPageTemplate;
