"use client";
import type { MutableRefObject } from "react";

import { createContext } from "react";
import LocomotiveScroll from "locomotive-scroll";

type Context = {
  locomotive: LocomotiveScroll | null;
  locomotiveContainerRef: MutableRefObject<HTMLDivElement | null>;
};

const Context = createContext({} as Context);

export { Context };
