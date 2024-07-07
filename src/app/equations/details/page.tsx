import EquationDetailsPage from '#/corePages/equations/details';
import { EquationDetailsPageTemplateProps } from '#/types/corePageProps';
import React from 'react'


const EquationDetailsPageTemplate = (props: EquationDetailsPageTemplateProps) => {
return (
    <EquationDetailsPage {...props} />
)
}


EquationDetailsPageTemplate.displayName = "EquationDetailsPageTemplate"


export default EquationDetailsPageTemplate;
