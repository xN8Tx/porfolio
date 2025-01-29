"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "next-intl";

import { routing } from "@/i18n/routing";

const getNextLocale = (
  locales: typeof routing.locales,
  currentLocale: string,
) => {
  const currentIndex = locales.indexOf(
    currentLocale as (typeof routing.locales)[number],
  );
  if (currentIndex === -1) return routing.defaultLocale;
  const nextIndex = (currentIndex + 1) % locales.length;
  return locales[nextIndex];
};

const Language = () => {
  const [isPending, startTransition] = useTransition();

  const locale = useLocale();
  const router = useRouter();

  const onLocaleChange = () => {
    startTransition(() => {
      router.replace(`/${getNextLocale(routing.locales, locale)}`);
    });
  };

  return (
    <button
      className="ui-paragraph small regular header__locale"
      disabled={isPending}
      onClick={onLocaleChange}
    >
      {locale}
    </button>
  );
};

export { Language };
