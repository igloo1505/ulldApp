// Slot: UI/logo type:component propsExtends:HTMLProps<HTMLOrSVGElement>
import REPLACEME from "#/components/REPLACEMEcomponent";
import React, { HTMLProps } from "react";

interface LogoProps extends HTMLProps<HTMLOrSVGElement> { }

const Logo = (props: LogoProps) => {
    return <REPLACEME {...props}/>
};

Logo.displayName = "Logo";

export default Logo;
