"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const useIcon = (icon: string | null) => {
  const { theme } = useTheme();
  const [selectedIcon, setSelectedIcon] = useState<JSON | null>(null);

  useEffect(() => {
    if (!icon) return;

    const getIcon = async () => {
      const response = await fetch(`/lottie/${theme}/${icon}.json`);
      const json: JSON = await response.json();
      if (!json) return;

      setSelectedIcon(json);
    };

    getIcon();
  }, [theme, icon]);

  if (!selectedIcon) return null;
  return selectedIcon;
};

export { useIcon };
