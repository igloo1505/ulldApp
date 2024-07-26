import { prisma } from "#/db";
import { cleanDatabase } from "@ulld/api/trpcInternalMethods/maintenance/cleanDatabase";
import { getAutoSettingsWithRegex } from "@ulld/api/trpcInternalMethods/settings/autoSettings/getAutosettingWithRegex";
import { syncAutoSettings } from "@ulld/api/trpcInternalMethods/settings/autoSettings/syncAutoSettings";
import { syncConfig } from "@ulld/api/trpcInternalMethods/syncing/config/syncConfig";
import {
    syncDirRecursively,
    UniversalMdxProps,
} from "@ulld/api/trpcInternalMethods/syncing/mdx/syncDirRecursively";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { readBuildData } from "@ulld/developer/readBuildData";
import { syncOptionsSchema } from "@ulld/api/schemas/syncing/syncOptions";
import { UlldGlob } from "@ulld/utilities/glob";
import onSyncMethods from "#/methods/events/methodLists/syncMethods";
import { NextResponse } from "next/server";
import { unifiedMdxParser } from "#/methods/parsers/mdxParser";

export async function POST(req: Request) {
    let data = await req.json();
    try {
        let opts = syncOptionsSchema.parse(data);
        let config = await readAppConfig();
        let buildData = await readBuildData();
        if (opts?.cleanBeforeSync) {
            await cleanDatabase(prisma);
        }
        const _autoSettings = await getAutoSettingsWithRegex(prisma);
        let universalMdxProps: UniversalMdxProps = {
            autoSettings: _autoSettings,
            opts: opts,
            appConfig: config,
            buildData: buildData,
            unifiedMdxParser: unifiedMdxParser,
            prisma: prisma,
        };
        await syncAutoSettings(prisma, config);
        let glob = new UlldGlob(config.fsRoot);
        for await (const f of onSyncMethods) {
            await f.func(opts, config, buildData, glob, _autoSettings, prisma);
        }
        // await syncBib()
        await syncDirRecursively(universalMdxProps);
        await syncConfig();
        return new NextResponse(
            JSON.stringify({
                success: true,
            }),
            {
                status: 200,
            },
        );
    } catch (err) {
        console.error(err);
        return new NextResponse(
            JSON.stringify({
                success: false,
            }),
            {
                status: 500,
            },
        );
    }
}
