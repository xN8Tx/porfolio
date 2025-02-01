"use client";
import type { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import type { StrapiIcons, UICommonProps } from "@/shared/types";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

import Lottie from "react-lottie-player";

import { useIcon } from "@/shared/hooks";
import { cn } from "@/shared/lib";

import { Link as LocaleLink } from "@/i18n/routing";

type LinkProps = UICommonProps &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    icon?: StrapiIcons | null;
    isExternal: boolean;
    uppercase?: boolean;
  };

const Link = ({
  size = "regular",
  color = "default",
  uppercase = false,
  isExternal,
  className,
  children,
  href,
  icon,
  ...props
}: LinkProps) => {
  const [isLinkHover, setIsLinkHover] = useState(false);

  const lottieRef = useRef(null);
  const animationData = useIcon(icon ? icon.slug : null);

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      // @ts-expect-error Incorrect typing
      lottieRef.current.goToAndStop(0, 0);
    }
    setIsLinkHover(true);
  };

  const handleMouseLeave = () => {
    setIsLinkHover(false);
  };

  useEffect(() => {
    // @ts-expect-error Incorrect typing
    if (lottieRef.current) lottieRef.current.goToAndStop(0, 0);
  }, [lottieRef]);

  return (
    <LocaleLink
      href={href ?? "#"}
      className={cn(
        "ui-link__link",
        size,
        color,
        uppercase && "uppercase",
        className,
      )}
      target={isExternal ? "_blank" : "_self"}
      {...(icon && { onMouseEnter: handleMouseEnter })}
      {...(icon && { onMouseLeave: handleMouseLeave })}
      {...props}
    >
      {animationData && (
        <Lottie
          ref={lottieRef}
          play={isLinkHover}
          animationData={animationData}
          style={{ width: "32px", height: "32px" }}
        />
      )}
      {children}
    </LocaleLink>
  );
};

export { Link };
