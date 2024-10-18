import type { UICommonProps } from "@/types";
import { forwardRef } from "react";

type ParagraphProps = UICommonProps & {
  [x: string]: any;
};

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  function MyParagraph(
    { size = "regular", color = "default", children, ...props },
    ref,
  ) {
    const className = `ui-paragraph ${size} ${color}`;

    return (
      <p className={className} ref={ref} {...props}>
        {children}
      </p>
    );
  },
);

export { Paragraph };
