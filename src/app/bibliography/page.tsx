import BibliographyPage, {
    PageProps,
} from "#/corePages/bibliography/bibliography";
import React from "react";

interface BibliographyPageTemplateProps extends PageProps { }

const BibliographyPageTemplate = (props: BibliographyPageTemplateProps) => {
    return <BibliographyPage {...props} />;
};

BibliographyPageTemplate.displayName = "BibliographyPageTemplate";

export default BibliographyPageTemplate;
