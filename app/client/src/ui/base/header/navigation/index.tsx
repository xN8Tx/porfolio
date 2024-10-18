import { useContext, useEffect } from "react";

import { LanguageContext, LocomotiveContext } from "@/models";
import { Link } from "@/ui/kit";

const Navigation = () => {
  const { languageData } = useContext(LanguageContext);
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
        {languageData?.anchors?.map((anchor, index) => (
          <Link
            data-anchor
            key={index}
            type="link"
            size="small"
            uppercase={true}
            href={anchor.href}
          >
            {anchor.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { Navigation };
