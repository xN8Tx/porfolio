"use client";
import { useContext } from "react";

import { LocomotiveContext } from "@/models";
import { Header } from "../header";
import { Footer } from "../footer";

import type { ChildrenProps } from "@/types";
import { Loader } from "../loader";

const Layout = ({ children }: ChildrenProps) => {
  const { locomotiveContainerRef } = useContext(LocomotiveContext);

  return (
    <>
      <Loader />
      <main
        id="main-container"
        data-scroll-container
        ref={locomotiveContainerRef}
      >
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export { Layout };
