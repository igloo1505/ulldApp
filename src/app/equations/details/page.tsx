// ULLD: protected-path pageFor:math/EquationDetailsPage
import EquationDetailsPage, { PageProps } from '#/corePages/equations/details';
import React from 'react'

/* TODO: Extend type properly with EquationDetailModalPageProps. Abort additional type file approach and do this all here. */

const EquationDetailsPageTemplate = (props: PageProps) => {
return (
    <EquationDetailsPage
            {...props} 
            isModal={false} />
)
}


EquationDetailsPageTemplate.displayName = "EquationDetailsPageTemplate"


export default EquationDetailsPageTemplate;
