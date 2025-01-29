import type { AbstractIntlMessages } from "next-intl";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import { LocomotiveProvider } from "@/shared/context";

interface ProviderProps {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
}

export const Provider = ({ children, messages }: ProviderProps) => {
  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <LocomotiveProvider>{children}</LocomotiveProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};
