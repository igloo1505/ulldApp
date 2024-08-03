import clsx from "clsx";
import "@ulld/tailwind/defaultStyles.scss";
import "#/styles/index.scss";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";
import { StateWrappedUI } from "@ulld/state/wrappers/stateWrappedUI";
import { Toaster } from "@ulld/tailwind/toaster";
import { fontSans } from "@ulld/tailwind/defaultFont";
import axios from "axios";
import appConfig from "appConfig";
import { prisma } from "@ulld/database/db";
import { settingSchema } from "@ulld/parsers/settings/settingsParser";
import Navbar from "#/components/slots/navigation/navbar";
import SecondaryNav from "#/components/slots/navigation/secondaryNavigation";
import DefaultCommandPalette from "#/components/slots/commandPalette/main";
import DefaultConfirmationModal from "#/components/slots/ui/confirmationModal";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import Logo from "#/components/slots/ui/logo";
import BibEntryDetailSheetTemplate from "#/components/slots/bibliography/bibEntryDetailsSheet";
import MathjaxProvider from "#/internal/mathjaxProvider";
import { UlldColorTheme } from "@ulld/utilities/types";
import localFont from "next/font/local";

const appFont = localFont({
  variable: "--ulld-app-font",
  src: [
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: (appConfig as AppConfigSchemaOutput).meta.title,
  description: (appConfig as AppConfigSchemaOutput).meta.desc,
};

const RootLayout = async (props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  const cookieJar = cookies();
  const darkMode = cookieJar.has("darkMode");
  const _settings = await prisma.settings.findFirst({
    where: {
      id: 1,
    },
  });
  let colorThemeCookie: UlldColorTheme | undefined = cookieJar.get(
    "ulld-theme",
  ) as UlldColorTheme | undefined;
  if (!colorThemeCookie) {
    colorThemeCookie = "blue";
  }

  let settings = settingSchema.parse(_settings || {});
  let plotTheme = _settings?.plotTheme ? `-${_settings.plotTheme}` : "";

  let plotThemeCookie = cookieJar.get("ulld-plot-theme");
  if (plotThemeCookie !== settings.plotTheme) {
    await axios.post("/api/settings/handlePlotTheme", {
      theme: settings.plotTheme,
    });
  }

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
        "group/html overflow-x-hidden max-w-screen min-h-screen js-focus-visible border-border min-scrollbar bg-background",
        colorMode,
        `plot-theme${plotTheme}`,
        Boolean(settings && settings.tooltips === false) && "noTooltips",
        appFont.variable,
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
          "group/body @container/body bg-background min-scrollbar border-border max-w-full overflow-x-hidden",
          fontSans.variable,
          preferFs && "preferFs",
          darkMode && "dark",
        )}
        id={`Ulld-body-root`}
      >
        <Navbar
          noteTypes={appConfig.noteTypes as AppConfigSchemaOutput["noteTypes"]}
          navConfig={
            appConfig.navigation as AppConfigSchemaOutput["navigation"]
          }
          logo={<Logo />}
        />
        <SecondaryNav
          noteTypes={appConfig.noteTypes as AppConfigSchemaOutput["noteTypes"]}
          navConfig={
            appConfig.navigation as AppConfigSchemaOutput["navigation"]
          }
        />
        <StateWrappedUI settings={settings} config={appConfig as any}>
          <DefaultCommandPalette />
          <DefaultConfirmationModal appConfig={appConfig as any} />
          <BibEntryDetailSheetTemplate />
        </StateWrappedUI>
        <MathjaxProvider>{props.children}</MathjaxProvider>
        <Toaster />
        {props.modal && props.modal}
      </body>
    </html>
  );
};

export default RootLayout;
