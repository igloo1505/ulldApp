// ULLD: protected-path pageFor:pdf/FullPdf
import FullPdf, {PageProps} from "#/components/slots/pdf/pdfFull";
import React from "react";
import { getFilePathProp } from "@ulld/utilities/filePathUtils";
import buildData from "buildData"
import { notFound } from "next/navigation";

const PdfPageTemplate = (props: PageProps) => {
    if(!props.searchParams.file){
        return notFound()
    }
    return <FullPdf
        {...props}
        file={getFilePathProp(props.searchParams.file, buildData.fsRoot)}
    />;
};

PdfPageTemplate.displayName = "PdfPageTemplate";

export default PdfPageTemplate;
