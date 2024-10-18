import {
  EXTERNAL_URL,
  GOOGLE_VERIFICATION,
  LOCAL_URL,
  YANDEX_VERIFICATION,
} from "@/config";

import type { LanuageType } from "@/types";
import type { MetadataContent } from "@/types";
import type { Metadata } from "next";
import type { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

type AlternateLocale = {
  ru: Languages<string>;
  en: Languages<string>;
};

const alternateLocale: AlternateLocale = {
  ru: {
    en: `${EXTERNAL_URL}/en`,
  },
  en: {
    ru: `${EXTERNAL_URL}/`,
  },
};

export const getMetadata = async (lang: LanuageType) => {
  const response = await fetch(`${LOCAL_URL}/language/seo/${lang}.json`);
  const json = await response.json();

  const { title, description, author, keywords } = json as MetadataContent;

  const metadata: Metadata = {
    title,
    description,
    authors: {
      name: author,
    },
    other: {
      "yandex-verification": YANDEX_VERIFICATION,
      "google-site-verification": GOOGLE_VERIFICATION,
    },
    keywords: keywords,
    robots: "index, follow",
    twitter: {
      title,
      description,
      creator: author,
      site: EXTERNAL_URL,
    },
    alternates: {
      canonical: `${EXTERNAL_URL}`,
      languages: {
        ...alternateLocale[lang],
      },
    },
    openGraph: {
      title,
      description,
      locale: lang,
      siteName: title,
      type: "website",
    },
  };

  return metadata;
};
