// Slot: equations/EquationsPage type:page propsExtends:EquationsPageProps
import EquationsPageTemplate from "#/app/equations/page";
import React from "react";

interface EquationsPageProps { }

const EquationsPage = (props: EquationsPageProps) => {
    return <EquationsPageTemplate />;
};

EquationsPage.displayName = "EquationsPage";

export default EquationsPage;
