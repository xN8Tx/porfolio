import type { AbstractIntlMessages } from "next-intl";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import { LocomotiveProvider } from "@/shared/context";

interface ProviderProps {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}

export const Provider = ({ children, messages, locale }: ProviderProps) => {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider>
        <LocomotiveProvider>{children}</LocomotiveProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};
