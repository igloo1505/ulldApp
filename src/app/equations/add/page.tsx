import AddEquationPage from '#/corePages/equations/add';
import { AddEquationPageTemplateProps } from '#/types/corePageProps';
import React from 'react'

/* TODO: Extend with AddEquationsPageProps */
type PageProps = {}

const AddEquationPageTemplate = (props: AddEquationPageTemplateProps) => {
return (
    <AddEquationPage {...props} />
)
}


AddEquationPageTemplate.displayName = "AddEquationPageTemplate"


export default AddEquationPageTemplate;
