// Slot: math/EquationDetailsModalPage clientOnly type:page propsExtends:EquationDetailModalPageProps
import REPLACEME from "#/components/REPLACEMEcomponent";
import { EquationDetailModalPageProps } from "@ulld/utilities/corePageProps";
import React from "react";


export interface PageProps extends EquationDetailModalPageProps {}

const EquationDetailsModalPage = (props: PageProps) => {
    return <REPLACEME {...props} isModal={true} />;
};

EquationDetailsModalPage.displayName = "EquationDetailsModalPage";

export default EquationDetailsModalPage;
