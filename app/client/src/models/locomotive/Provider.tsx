"use client";
import { useContext, useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

import { LanguageContext } from "../language";
import { Context } from "./Context";

import type { ChildrenProps, Loading } from "@/types";
import { useParams, useSearchParams } from "next/navigation";

const Provider = ({ children }: ChildrenProps) => {
  const searchParams = useSearchParams();
  const params = useParams();

  const { languageLoading } = useContext(LanguageContext);

  const locomotiveContainerRef = useRef<HTMLDivElement | null>(null);
  const locomotiveScroll = useRef<LocomotiveScroll | null>(null);

  const [locomotiveLoading, setLocomotiveLoading] = useState<Loading>("idle");

  const setupLocomotiveScroll = async () => {
    if (!locomotiveContainerRef.current) return;

    try {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      setLocomotiveLoading("loading");
      locomotiveScroll.current = new LocomotiveScroll({
        el: locomotiveContainerRef.current,
        smooth: true,
        multiplier: 1,
        class: "on-screen",
        smartphone: {
          smooth: true,
        },
        /*tablet: {
        smooth: true,
      },*/
      });
      setLocomotiveLoading("success");
    } catch (error) {
      setLocomotiveLoading("error");
    }
  };

  // Setup locomotiveScroll
  useEffect(() => {
    if (!locomotiveContainerRef.current) return;
    if (languageLoading !== "success") return;

    locomotiveScroll.current?.destroy();
    setupLocomotiveScroll();
  }, [languageLoading, searchParams, params]);

  return (
    <Context.Provider
      value={{
        locomotiveLoading,
        locomotiveContainerRef,
        locomotive: locomotiveScroll.current,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Provider };
