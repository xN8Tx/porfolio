import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Suspense } from "react";

import { routing } from "@/i18n/routing";

import { LayoutGenerator } from "@/features/layout-generator";
import { Loader, SuspenceFallback } from "@/widgets";
import { Provider } from "./provider";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "@/styles/index.scss";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const generateMetadata = async () => {};

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Provider messages={messages}>
          <Loader />
          <Suspense fallback={<SuspenceFallback />}></Suspense>
          <LayoutGenerator locale={locale}>{children}</LayoutGenerator>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
