import type { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import type { UICommonProps } from "@/shared/types";

import { Link as LocaleLink } from "@/i18n/routing";
import { cn } from "@/shared/lib";

type LinkProps = UICommonProps &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    subtitle: string;
    isExternal: boolean;
    uppercase?: boolean;
  };

const Button = ({
  size = "regular",
  color = "default",
  uppercase = false,
  isExternal,
  className,
  subtitle,
  children,
  href,
  ...props
}: LinkProps) => {
  return (
    <div
      className={cn(
        "ui-link__button hover",
        size,
        color,
        uppercase && uppercase,
        className,
      )}
      typeof="button"
    >
      <LocaleLink
        target={isExternal ? "_blank" : "_self"}
        href={href ?? "#"}
        {...props}
      >
        <p>{children}</p>
        <p>{subtitle}</p>
      </LocaleLink>
    </div>
  );
};

export { Button };
