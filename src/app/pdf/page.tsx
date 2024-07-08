import FullPdf from "#/components/slots/pdf/pdfFull";
import React from "react";
import { getFilePathProp } from "@ulld/utilities/filePathUtils";
import buildData from "buildData"

interface PdfPageTemplateProps {
    searchParams: {
        file: string;
    };
}

const PdfPageTemplate = ({ searchParams: { file } }: PdfPageTemplateProps) => {
    return <FullPdf file={getFilePathProp(file, buildData.fsRoot)} />;
};

PdfPageTemplate.displayName = "PdfPageTemplate";

export default PdfPageTemplate;
