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
    buttonProps?: React.ComponentProps<"button">;
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
  buttonProps,
  ...props
}: LinkProps) => {
  return (
    <button
      className={cn(
        "ui-link__button hover",
        size,
        color,
        uppercase && "uppercase",
        className,
      )}
      data-testid="ui-button_button"
      {...buttonProps}
    >
      <LocaleLink
        target={isExternal ? "_blank" : "_self"}
        href={href ?? "#"}
        data-testid="ui-button_link"
        {...props}
      >
        <p data-testid="ui-button_paragraph">{children}</p>
        <p data-testid="ui-button_subtitle">{subtitle}</p>
      </LocaleLink>
    </button>
  );
};

export { Button };
