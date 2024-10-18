import { getLanguageData } from "@/lib";

import { LanguageProvider, ThemeProvider, LocomotiveProvider } from "@/models";
import { Layout } from "../layout";

import type { LanuageType } from "@/types";
import type { ReactNode } from "react";

type WrapperProps = {
  language: LanuageType;
  children: ReactNode;
};

const RootProvider = async ({ language, children }: WrapperProps) => {
  const data = await getLanguageData(language);

  return (
    <LanguageProvider data={data!} lang={language}>
      <ThemeProvider>
        <LocomotiveProvider>
          <Layout>{children}</Layout>
        </LocomotiveProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export { RootProvider };
