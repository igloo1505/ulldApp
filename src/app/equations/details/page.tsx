// ULLD: protected-path
import EquationDetailsPage from '#/corePages/equations/details';
import { EquationDetailsPageTemplateProps } from '#/types/corePageProps';
import React from 'react'

/* TODO: Extend type properly with EquationDetailModalPageProps. Abort additional type file approach and do this all here. */
type PageProps = EquationDetailsPageTemplateProps

const EquationDetailsPageTemplate = (props: PageProps) => {
return (
    <EquationDetailsPage {...props} />
)
}


EquationDetailsPageTemplate.displayName = "EquationDetailsPageTemplate"


export default EquationDetailsPageTemplate;
