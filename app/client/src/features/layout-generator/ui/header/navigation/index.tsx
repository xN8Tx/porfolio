"use client";
import type { StrapiLink } from "@/shared/types";
import { useContext, useEffect } from "react";

import { LocomotiveContext } from "@/shared/context";
import { Link } from "@/shared/ui";

interface NavigationProps {
  links: StrapiLink[];
}

const Navigation = ({ links }: NavigationProps) => {
  const { locomotive } = useContext(LocomotiveContext);

  useEffect(() => {
    locomotive?.on("scroll", (args) => {
      const scrollY = args.scroll.y;
      const innerElement = document.getElementById("navigation");

      if (!innerElement) return;

      if (scrollY > 30) {
        innerElement.classList.add("visible");
      } else {
        innerElement.classList.remove("visible");
      }
    });
  }, [locomotive]);

  return (
    <nav className="header__nav" id="navigation">
      <div>
        {links.map((link) => (
          <Link
            data-anchor
            key={link.id}
            type="link"
            size="small"
            uppercase={true}
            href={link.href}
            isExternal={link.isExternal}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { Navigation };
