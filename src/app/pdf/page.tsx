// ULLD: protected-path pageFor:pdf/FullPdf
import FullPdf, {PageProps} from "#/components/slots/pdf/pdfFull";
import React from "react";
import { getFilePathProp } from "@ulld/utilities/filePathUtils";
import buildData from "buildData"
import appConfig from "appConfig"
import { notFound } from "next/navigation";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";

const PdfPageTemplate = (props: PageProps) => {
    if(!props.searchParams.file){
        return notFound()
    }
    return <FullPdf
        {...props}
        appConfig={appConfig as AppConfigSchemaOutput}
        file={getFilePathProp(props.searchParams.file, buildData.fsRoot)}
    />;
};

PdfPageTemplate.displayName = "PdfPageTemplate";

export default PdfPageTemplate;
