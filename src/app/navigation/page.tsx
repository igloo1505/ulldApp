// ULLD: protected-path
import FullScreenNavigationMenu from '#/components/slots/navigation/fullScreenNavigationMenu';
import React from 'react'



interface FullScreenNavigationPageTemplateProps {

}

const FullScreenNavigationPageTemplate = (props: FullScreenNavigationPageTemplateProps) => {
return (
    <FullScreenNavigationMenu 
            isModal={false}
        />
)
}


FullScreenNavigationPageTemplate.displayName = "FullScreenNavigationPageTemplate"


export default FullScreenNavigationPageTemplate;
