"use client";
import { useTheme } from "next-themes";

import { DarkTheme, LightTheme } from "@/shared/assets/icons";
import { useEffect, useState, useTransition } from "react";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const onChangeHandler = () => {
    startTransition(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "dark") {
    return (
      <button
        className="header__theme"
        onClick={onChangeHandler}
        disabled={isPending}
        suppressHydrationWarning
      >
        <DarkTheme />
      </button>
    );
  }

  return (
    <button
      className="header__theme"
      onClick={onChangeHandler}
      suppressHydrationWarning
      disabled={isPending}
    >
      <LightTheme />
    </button>
  );
};

export { Theme };
