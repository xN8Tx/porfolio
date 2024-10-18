"use client";
import { createContext } from "react";

type ThemeKeys = "dark" | "light";

type Context = {
  theme: ThemeKeys;
  toggleTheme: () => void;
};

const Context = createContext({} as Context);

export type { ThemeKeys };
export { Context };
