"use client";
import { lazy } from "react";

export default lazy(() =>
  import("@/features/error").then((module) => ({ default: module.ErrorPage })),
);
