import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import { render as renderRTL } from "@testing-library/react";

import defaultMessages from "../../../messages/en.json";
import { Suspense } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<></>}>
    <NextIntlClientProvider messages={defaultMessages} locale="en">
      <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    </NextIntlClientProvider>
  </Suspense>
);

export const render = (ui: React.ReactElement, options = {}) =>
  renderRTL(ui, { wrapper: Providers, ...options });
