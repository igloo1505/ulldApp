// ULLD: protected-path
import BibEntryDetailSheetTemplate from "#/components/slots/bibliography/bibEntryDetailsSheet";
import LoadingIndicator from "#/components/slots/ui/loadingIndicator";
import BibliographyPage, {
    PageProps,
} from "#/corePages/bibliography/bibliography";
import { serverClient } from "@ulld/api/serverClient";
import { PickSearchParams } from "@ulld/utilities/types";
import React from "react";

interface BibliographyPageTemplateProps extends PickSearchParams<PageProps> { }

const BibliographyPageTemplate = async (props: BibliographyPageTemplateProps) => {
    const bib = await serverClient.bibliography.getPrismaBib()

    return <BibliographyPage
        {...props}
        prismaBib={bib as Awaited<ReturnType<typeof serverClient.bibliography.getPrismaBib>>}
        loadingIndicator={LoadingIndicator}
        bibEntryDetailsSheet={BibEntryDetailSheetTemplate}
    />;
};

BibliographyPageTemplate.displayName = "BibliographyPageTemplate";

export default BibliographyPageTemplate;
