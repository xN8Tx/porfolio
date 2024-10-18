import { useContext } from "react";

import { DarkTheme, LightTheme } from "@/assets/icons";
import { ThemeContext } from "@/models";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (theme === "dark") return <DarkTheme onClick={toggleTheme} />;
  return <LightTheme onClick={toggleTheme} />;
};

export { Theme };
