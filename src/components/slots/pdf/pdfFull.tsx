// Slot: pdf/FullPdf type:component propsExtends:FullPdfProps
import React from "react";
import { FullPdfProps } from "@ulld/pdf/types";
import REPLACEME from "#/components/REPLACEMEcomponent";

export interface PageProps extends FullPdfProps {

}

const FullPdf = (props: PageProps) => {
    return <REPLACEME {...props} />
};

FullPdf.displayName = "FullPdf";

export default FullPdf;
