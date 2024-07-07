import AddEquationPage from '#/corePages/equations/add';
import { AddEquationPageTemplateProps } from '#/types/corePageProps';
import React from 'react'



const AddEquationPageTemplate = (props: AddEquationPageTemplateProps) => {
return (
    <AddEquationPage {...props} />
)
}


AddEquationPageTemplate.displayName = "AddEquationPageTemplate"


export default AddEquationPageTemplate;
