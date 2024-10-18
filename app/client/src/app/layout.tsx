import { cookies } from "next/headers";

import { getMetadata } from "@/lib";

import { Loader } from "@/ui/base/loader";
import { Suspense } from "react";
import { SuspenceFallback } from "@/ui/base";

import type { ChildrenProps } from "@/types";

import "@/style/index.scss";

const getTheme = () => {
  const themeCookie = cookies().get("theme");
  return themeCookie?.value === "light" ? "light" : "dark";
};

export const generateMetadata = async () => {
  return await getMetadata("ru");
};

const RootLayout = ({ children }: ChildrenProps) => {
  const theme = getTheme();
  return (
    <html lang="ru" data-theme={theme}>
      <body>
        <Loader />
        <Suspense fallback={<SuspenceFallback />}></Suspense>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
