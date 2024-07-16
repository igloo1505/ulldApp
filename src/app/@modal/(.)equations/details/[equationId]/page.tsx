// ULLD: protected-path pageFor:math/EquationDetailsModalPage
import EquationDetailsModalPage, {PageProps} from '#/corePages/modal/equationDetails';
import { PickSearchParams } from '@ulld/utilities/types';
import React from 'react'


const EquationDetailModalTemplate = async (props: PickSearchParams<PageProps>) => {
    return (
        <EquationDetailsModalPage {...props}/>
    )
}


EquationDetailModalTemplate.displayName = "EquationDetailModalTemplate"


export default EquationDetailModalTemplate;
