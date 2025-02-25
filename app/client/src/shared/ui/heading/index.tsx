import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { UICommonProps } from "@/shared/types";

import { cn } from "@/shared/lib";

type HeadingProps = UICommonProps &
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const Heading = ({
  size = "regular",
  color = "default",
  className,
  children,
  ...props
}: HeadingProps) => {
  return (
    <h3
      data-testid="ui-heading"
      className={cn("ui-heading", size, color, className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export { Heading };
