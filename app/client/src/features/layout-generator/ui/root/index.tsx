"use client";
import type { StrapiFooter, StrapiHeader } from "@/shared/types";
import { useContext } from "react";

import { LocomotiveContext } from "@/shared/context";

import { Header } from "../header";
import { Footer } from "../footer";

interface LayoutProps {
  children: React.ReactNode;
  footer: StrapiFooter;
  header: StrapiHeader;
}

const Root = ({ children, footer, header }: LayoutProps) => {
  const { locomotiveContainerRef } = useContext(LocomotiveContext);

  return (
    <main
      id="main-container"
      data-scroll-container
      ref={locomotiveContainerRef}
    >
      <Header {...header} />
      {children}
      <Footer {...footer} />
    </main>
  );
};

export { Root };
