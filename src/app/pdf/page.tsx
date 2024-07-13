import FullPdf from "#/components/slots/pdf/pdfFull";
import React from "react";
import { getFilePathProp } from "@ulld/utilities/filePathUtils";
import buildData from "buildData"

interface PdfPageTemplateProps {
    searchParams: {
        file: string;
    };
}

const PdfPageTemplate = ({ searchParams }: PdfPageTemplateProps) => {
    return <FullPdf
        file={getFilePathProp(searchParams.file, buildData.fsRoot)}
        searchParams={searchParams}
    />;
};

PdfPageTemplate.displayName = "PdfPageTemplate";

export default PdfPageTemplate;
