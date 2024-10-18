import type { ReactNode } from "react";

export type ChildrenProps = Readonly<{
  children: ReactNode;
}>;

export type UICommonProps = ChildrenProps &
  Readonly<{
    size?: "small" | "regular" | "large";
    color?: "light" | "default" | "background";
  }>;
