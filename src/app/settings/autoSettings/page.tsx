import { serverClient } from "#/trpc/mainServer";
import React from "react";
import { AutoSettingType } from "@ulld/api/types";
import AutoSettingsTable from "#/components/slots/ui/autoSettingTable";

interface AutoSettingsPageTemplateProps {
    searchParams: {
        edit?: number;
    };
}

const AutoSettingsPageTemplate = async ({
    searchParams: { edit },
}: AutoSettingsPageTemplateProps) => {

    const autoSettings: AutoSettingType[] =
        (await serverClient.autoSettings.getAutoSettings({
            withRegex: false,
        })) as AutoSettingType[];

    let editing: AutoSettingType | undefined = undefined;

    if (edit) {
        editing = autoSettings.find((a) => a.id === edit);
    }

    return <AutoSettingsTable editing={editing} settings={autoSettings} />;
};

AutoSettingsPageTemplate.displayName = "AutoSettingsPageTemplate";

export default AutoSettingsPageTemplate;
