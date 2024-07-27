import React from 'react'
import { IndividualNoteSwitch } from "@ulld/ui/individualNoteSwitch";
import { unifiedMdxParser } from '#/methods/parsers/mdxParser';
import { SpecificNoteQueryManager } from '@ulld/api/classes/specificNoteQuery/specificNoteQueryManager';
import { WithFSSearchParams } from '@ulld/types';
import { notFound } from 'next/navigation';
import appConfig from "appConfig"
import buildData from "buildData"
import { MdxNoteParseParams } from '@ulld/api/classes/prismaMdxRelations/mdxNote';
import { BuildStaticDataOutput } from '@ulld/configschema/buildTypes';
import { AppConfigSchemaOutput } from '@ulld/configschema/types';
import { generatedComponentMap } from "#/internal/componentMap";


interface NoteSwitchInternalWrapperProps extends WithFSSearchParams {
   categoryId: string
   params: {
       slug: string
    }
}

const NoteSwitchInternalWrapper = async ({ params, searchParams, categoryId }: NoteSwitchInternalWrapperProps) => {

    const docTypeData = (appConfig as AppConfigSchemaOutput).noteTypes.find((n) => n.id === categoryId)

    if (!docTypeData) {
        return notFound();
    }

    const props = await SpecificNoteQueryManager.formatNoteProps(
        docTypeData.id,
        params,
        searchParams,
        appConfig as AppConfigSchemaOutput,
        buildData as unknown as BuildStaticDataOutput
    );

    let mdxParserParams: MdxNoteParseParams = {
        appConfig: appConfig as AppConfigSchemaOutput,
        docTypeData,
        parser: unifiedMdxParser
    }

    return <IndividualNoteSwitch
        {...props}
        embeddableComponents={generatedComponentMap}
        parsers={{
            mdx: mdxParserParams
        }}
    />;
}


NoteSwitchInternalWrapper.displayName = "NoteSwitchInternalWrapper"


export default NoteSwitchInternalWrapper;
