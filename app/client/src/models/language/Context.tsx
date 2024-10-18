"use client";
import { createContext } from "react";

import type { LanguageContent, LanuageType } from "@/types";

type Context = {
  language: LanuageType;
  languageData: LanguageContent;
  changeLanguage: () => void;
};

const Context = createContext({} as Context);

export { Context };
