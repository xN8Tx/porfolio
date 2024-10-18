"use client";
import { useLayoutEffect, useState } from "react";
import { Context, ThemeKeys } from "./Context";

import type { ChildrenProps } from "@/types";

const Provider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<ThemeKeys>("dark");

  useLayoutEffect(() => {
    if (!document) return;
    const currentTheme = document.cookie.includes("theme=dark")
      ? "dark"
      : "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    if (!document) return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/`;
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export { Provider };
