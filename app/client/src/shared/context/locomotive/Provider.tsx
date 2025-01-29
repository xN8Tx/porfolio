"use client";
import type { Loading } from "@/shared/types";

import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

import { Context } from "./Context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const locomotiveContainerRef = useRef<HTMLDivElement | null>(null);
  const locomotiveScroll = useRef<LocomotiveScroll | null>(null);

  const [_, setLocomotiveLoading] = useState<Loading>("idle");
  const isInitialized = useRef(false);

  // Setup locomotiveScroll
  // Код работающий фиг его знает как,
  // именно с таким миллионом проверок
  // у меня работают функции stop и start корректно
  useEffect(() => {
    if (!locomotiveContainerRef.current) return;
    if (locomotiveScroll.current?.init) return;
    if (isInitialized.current) return;
    isInitialized.current = true;

    const setupLocomotiveScroll = async () => {
      if (!locomotiveContainerRef.current) return;

      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        // НЕ УДАЛЯТЬ ЭТУ СТРОКУ, НА НЕЙ НЕ ПОНЯТНЫМ МНЕ ОБРАЗОМ
        // ДЕРЖИТСЯ ПРАВИЛЬНОЕ СОЗДАНИЕ LOCOMOTIVE, ПРИ ПОМОЩИ ЧЕГО
        // РАБОТАЮТ ФУНКЦИИ locomotive.current.start() и locomotive.current.stop()
        setLocomotiveLoading("loading");
        locomotiveScroll.current = new LocomotiveScroll({
          el: locomotiveContainerRef.current,
          smooth: true,
          multiplier: 1,
          class: "on-screen",
          smartphone: {
            smooth: true,
          },
        });
      } catch (error) {
        console.log("Error while initializing locomotive scroll: ", error);
      }
    };
    setupLocomotiveScroll();

    return () => {
      locomotiveScroll.current?.update();
    };
  }, []);

  return (
    <Context.Provider
      value={{
        locomotiveContainerRef,
        locomotive: locomotiveScroll.current,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Provider };
