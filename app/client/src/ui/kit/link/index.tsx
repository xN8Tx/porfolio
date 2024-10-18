import { default as NextLink } from "next/link";
import type { UICommonProps } from "@/types";

type LinkProps = UICommonProps & {
  type?: "link" | "button";
  hoverText?: string;
  uppercase?: boolean;
  isHover?: boolean;
  href: string;
  [x: string]: any;
};

const Link = ({
  size = "regular",
  color = "default",
  type = "link",
  isHover = true,
  uppercase = false,
  hoverText = "",
  children,
  href,
  ...props
}: LinkProps) => {
  const className = `ui-link__${type} ${size} ${color} ${isHover && "hover"} ${uppercase && "uppercase"}`;

  if (type === "link") {
    return (
      <NextLink href={href} className={className} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <div className={className} typeof="button">
      <NextLink href={href} {...props}>
        <p>{children}</p>
        {hoverText.length > 0 && <p>{hoverText}</p>}
      </NextLink>
    </div>
  );
};

export { Link };
