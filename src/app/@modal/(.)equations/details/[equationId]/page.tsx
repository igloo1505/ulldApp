import EquationDetailsModalPage from '#/corePages/modal/equationDetails';
import React from 'react'

interface PageProps {

}

const EquationDetailModalTemplate = async (props: PageProps) => {
    return (
        <EquationDetailsModalPage {...props}/>
    )
}


EquationDetailModalTemplate.displayName = "EquationDetailModalTemplate"


export default EquationDetailModalTemplate;
