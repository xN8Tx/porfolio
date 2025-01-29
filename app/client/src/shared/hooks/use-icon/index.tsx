"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const useIcon = (icon: string | null) => {
  const { theme } = useTheme();
  const [selectedIcon, setSelectedIcon] = useState<JSON | null>(null);

  useEffect(() => {
    if (!icon) return;

    const getIcon = async () => {
      const importIcon = await import(
        `../../assets/lottie/${theme}/${icon}.json`
      );

      setSelectedIcon(importIcon);
    };

    getIcon();
  }, [theme, icon]);

  if (!selectedIcon) return null;
  return selectedIcon;
};

export { useIcon };
