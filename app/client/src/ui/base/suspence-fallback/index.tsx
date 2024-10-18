"use client";
import { useEffect } from "react";

export const SuspenceFallback = () => {
  useEffect(() => {
    if (!document) return;

    document.querySelector("#loader")?.setAttribute("data-isactive", "false");

    return () => {
      document.querySelector("#loader")?.setAttribute("data-isactive", "true");
    };
  }, []);

  return <></>;
};
