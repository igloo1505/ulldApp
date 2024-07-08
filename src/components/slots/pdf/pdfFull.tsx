// Slot: pdf/FullPdf type:component propsExtends:FullPdfProps
import React from 'react'



interface FullPdfProps {
 file: {
    rootRelativePath: string
    absolutePath: string
    }
}

const FullPdf = (props: FullPdfProps) => {
return (
    <div></div>
)
}


FullPdf.displayName = "FullPdf"


export default FullPdf;
