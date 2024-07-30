import clsx from "clsx";
import "@ulld/tailwind/defaultStyles.scss";
import "#/styles/index.scss"
import type { Metadata } from 'next'
import { cookies } from "next/headers";
import React from "react";
import { StateWrappedUI } from "@ulld/state/wrappers/stateWrappedUI";
import { Toaster } from "@ulld/tailwind/toaster";
import { fontSans } from "@ulld/tailwind/defaultFont";
import appConfig from "appConfig";
import { prisma } from "@ulld/database/db";
import { settingSchema } from "@ulld/parsers/settings/settingsParser";
import Navbar from "#/components/slots/navigation/navbar"
import SecondaryNav from "#/components/slots/navigation/secondaryNavigation";
import DefaultCommandPalette from "#/components/slots/commandPalette/main"
import DefaultConfirmationModal from "#/components/slots/ui/confirmationModal";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import Logo from "#/components/slots/ui/logo"
import BibEntryDetailSheetTemplate from "#/components/slots/bibliography/bibEntryDetailsSheet";
import MathjaxProvider from "@ulld/utilities/providers-mathjax"



export const metadata: Metadata = {
    title: (appConfig as AppConfigSchemaOutput).meta.title,
    description: (appConfig as AppConfigSchemaOutput).meta.desc,
}

const RootLayout = async (props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) => {


    const cookieJar = cookies();
    const darkMode = cookieJar.has("darkMode")
    const _settings = await prisma.settings.findFirst({
        where: {
            id: 1
        }
    })

    let settings = settingSchema.parse(_settings || {})

    const preferFs = cookieJar.has("preferFs");
    let colorMode = darkMode ? "dark" : "light";

    let p = {
        "data-theme": colorMode,
        "data-color-mode": colorMode,
    };


    return (
        <html
            lang="en"
            className={clsx(
                "group/html js-focus-visible",
                darkMode && "dark",
                Boolean(settings && settings.tooltips === false) && "noTooltips"
            )}
            data-js-focus-visible=""
            {...p}
        >
            <head>
                <link rel="icon" href="/icons/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
            </head>
            <body
                className={clsx(
                    "group/body",
                    fontSans.variable,
                    preferFs && "preferFs",
                )}
                id={`Ulld-body-root`}
            >
                <Navbar
                    noteTypes={appConfig.noteTypes as AppConfigSchemaOutput["noteTypes"]}
                    navConfig={appConfig.navigation as AppConfigSchemaOutput["navigation"]}
                    logo={<Logo />}
                />
                <SecondaryNav 
                    noteTypes={appConfig.noteTypes as AppConfigSchemaOutput["noteTypes"]}
                    navConfig={appConfig.navigation as AppConfigSchemaOutput["navigation"]}
                />
                <StateWrappedUI
                    settings={settings}
                    config={appConfig as any}
                >
                <DefaultCommandPalette />
                <DefaultConfirmationModal appConfig={appConfig as any} />
                <BibEntryDetailSheetTemplate />
                </StateWrappedUI>
                <MathjaxProvider>
                {props.children}
                </MathjaxProvider>
                <Toaster />
                {props.modal && props.modal}
            </body>
        </html>
    );
};

export default RootLayout;
