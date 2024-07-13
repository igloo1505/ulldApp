// Slot: pdf/EmbeddablePdf type:embeddable propsExtends:EmbeddablePdfProps
import React from "react";
import REPLACEME from "../REPLACEMEcomponent";


/* begin-ulld-cut */
import { BaseAppEmbeddableConfig } from "@ulld/configschema/developerComponentSchema";
export const embeddableData: BaseAppEmbeddableConfig = {
    package: "pdf",
    slot: "EmbeddablePdf",
    data: {
        regexToInclude: "<Pdf",
        label: "Pdf",
    },
};
/* end-ulld-cut */


interface EmbeddablePdfComponentTemplateProps { }

const EmbeddablePdfComponentTemplate = (
    props: EmbeddablePdfComponentTemplateProps,
) => {
    return <REPLACEME {...props} />;
};

EmbeddablePdfComponentTemplate.displayName = "EmbeddablePdfComponentTemplate";

export default EmbeddablePdfComponentTemplate;
