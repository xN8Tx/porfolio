"use client";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { UICommonProps } from "@/shared/types";

import { forwardRef } from "react";

import { cn } from "@/shared/lib";

type ParagraphProps = UICommonProps &
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  function MyParagraph(
    { size = "regular", color = "default", children, className, ...props },
    ref,
  ) {
    return (
      <p
        className={cn("ui-paragraph", size, color, className)}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  },
);

export { Paragraph };
