"use client";
import { createContext } from "react";
import LocomotiveScroll from "locomotive-scroll";

import type { Loading } from "@/types";
import type { MutableRefObject } from "react";

type Context = {
  locomotive: LocomotiveScroll | null;
  locomotiveLoading: Loading;
  locomotiveContainerRef: MutableRefObject<HTMLDivElement | null>;
};

const Context = createContext({} as Context);

export { Context };
