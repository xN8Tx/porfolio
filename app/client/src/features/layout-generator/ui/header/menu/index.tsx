import { Link } from "@/shared/ui";

import { StrapiLink } from "@/shared/types";
import { Language } from "./language";
import { Theme } from "./theme";

interface MenuProps {
  isOpen: boolean;
  links: StrapiLink[];
  menuLinks: StrapiLink[];
}

const Menu = ({ isOpen, links, menuLinks }: MenuProps) => {
  return (
    <div className="header__burger-menu" data-isopen={isOpen.toString()}>
      <div className="header__burger-menu__wrapper">
        <div className="header__burger-menu__navigation">
          {links.map((link) => (
            <Link
              size="large"
              href={link.href}
              key={link.id}
              isExternal={link.isExternal}
              data-anchor
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="header__burger-menu__links">
          <div className="header__burger-menu__links_contact">
            {menuLinks.map((link) => (
              <Link
                size="small"
                href={link.href}
                key={link.id}
                isExternal={link.isExternal}
                icon={link.icon}
                data-anchor
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="header__burger-menu__links_example">
            <Theme />
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Menu };
