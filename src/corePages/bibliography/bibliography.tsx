// Slot: bibliography/BibliographyPage type:page propsExtends:BibliographyPageProps
import React from "react";
import { BibliographyPageProps } from "@ulld/bib-manager/types";
import REPLACEME from "#/components/REPLACEMEcomponent";

export interface PageProps extends BibliographyPageProps { }

const BibliographyPage = (props: PageProps) => {
    return <REPLACEME {...props} />;
};

BibliographyPage.displayName = "BibliographyPage";

export default BibliographyPage;
