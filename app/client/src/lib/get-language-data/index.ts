import { LOCAL_URL } from "@/config";

import type { LanguageContent, LanuageType } from "@/types";

export const getLanguageData = async (lang: LanuageType) => {
  const response = await fetch(`${LOCAL_URL}/language/home/${lang}.json`);
  const json = await response.json();

  return json as LanguageContent;
};
