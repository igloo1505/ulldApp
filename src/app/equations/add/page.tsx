// ULLD: protected-path pageFor:math/AddEquationPage
import AddEquationPage, { PageProps } from "#/corePages/equations/add";
import React from "react";

const AddEquationPageTemplate = (props: PageProps) => {
    return <AddEquationPage {...props} />;
};

AddEquationPageTemplate.displayName = "AddEquationPageTemplate";

export default AddEquationPageTemplate;
