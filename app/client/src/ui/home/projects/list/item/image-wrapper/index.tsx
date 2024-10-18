import Link from "next/link";
import { forwardRef } from "react";

import type { LegacyRef, ReactNode } from "react";

type ImageWrapperProps = {
  link: string;
  children: ReactNode;
};

const ImageWrapper = forwardRef<HTMLAnchorElement, ImageWrapperProps>(
  function ImageWrapper(props, ref) {
    if (!props.link || props.link.length <= 0) {
      return (
        <a
          ref={ref as LegacyRef<HTMLAnchorElement>}
          className="projects-item__image"
          data-scroll
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link
        ref={ref as LegacyRef<HTMLAnchorElement>}
        aria-disabled={true}
        className="projects-item__image"
        href={props.link}
        data-scroll
      >
        {props.children}
      </Link>
    );
  },
);

export { ImageWrapper };
