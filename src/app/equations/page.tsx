import EquationsPage from "#/corePages/equations/list";
import React from "react";

/* TODO: Extend type with EquationsPageProps */
interface EquationsPageTemplateProps { }

const EquationsPageTemplate = (props: EquationsPageTemplateProps) => {
    return <EquationsPage {...props} />;
};

EquationsPageTemplate.displayName = "EquationsPageTemplate";

export default EquationsPageTemplate;
