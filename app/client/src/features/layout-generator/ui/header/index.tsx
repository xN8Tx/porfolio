"use client";
import type { StrapiHeader } from "@/shared/types";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";

import { LocomotiveContext } from "@/shared/context";

import { Menu } from "./menu";
import { Logo } from "./logo";
import { Button } from "./button";
import { Navigation } from "./navigation";

import "./index.scss";

const Header = (props: StrapiHeader) => {
  const router = useRouter();

  const { locomotive } = useContext(LocomotiveContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Setup all anchors to right scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!locomotive) return;

    const anchors = document.querySelectorAll("[data-anchor]");

    const anchorScroll = (event: Event) => {
      event.preventDefault();
      setIsMenuOpen(false);

      if (window.location.origin !== window.location.href) {
        router.push("/");
      }

      const target = event.target as HTMLAnchorElement;
      const id = target.href
        ? target.href.split("#").pop()
        : (target.parentNode as HTMLAnchorElement).href.split("#").pop();

      locomotive.scrollTo(`#${id}`, { offset: 20 });
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", anchorScroll);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", anchorScroll);
      });
    };
  }, [locomotive, router]);

  useEffect(() => {
    if (isMenuOpen) {
      locomotive?.stop();
    } else {
      locomotive?.start();
    }
  }, [locomotive, isMenuOpen]);

  return (
    <header className="header" data-scroll-sticky>
      <Logo logo={props.logo} />
      <div className="header__wrapper">
        <Navigation links={props.links} />
        <Button isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <Menu
        isOpen={isMenuOpen}
        links={props.links}
        menuLinks={props.menuLinks}
      />
    </header>
  );
};

export { Header };
