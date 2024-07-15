import FullPdf from "#/components/slots/pdf/pdfFull";
import React from "react";
import { getFilePathProp } from "@ulld/utilities/filePathUtils";
import buildData from "buildData"
import { notFound } from "next/navigation";

interface PdfPageTemplateProps {
    searchParams: {
        file: string;
    };
}

const PdfPageTemplate = ({ searchParams }: PdfPageTemplateProps) => {
    if(!searchParams.file){
        return notFound()
    }
    return <FullPdf
        file={getFilePathProp(searchParams.file, buildData.fsRoot)}
        searchParams={searchParams}
    />;
};

PdfPageTemplate.displayName = "PdfPageTemplate";

export default PdfPageTemplate;
