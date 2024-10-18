"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Context } from "./Context";

import type { LanguageContent, LanuageType } from "@/types";
import type { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode;
  data: LanguageContent;
  lang: LanuageType;
};

export const Provider = ({ children, data, lang }: ProviderProps) => {
  const router = useRouter();

  const [language] = useState<LanuageType>(lang);
  const [languageData] = useState<LanguageContent>(data);

  const changeLanguage = () => {
    if (language === "ru") {
      router.push("/en");
    } else {
      router.push("/ru");
    }
  };

  return (
    <Context.Provider value={{ language, languageData, changeLanguage }}>
      {children}
    </Context.Provider>
  );
};
