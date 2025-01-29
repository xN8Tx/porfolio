"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

import { Button, Paragraph } from "@/shared/ui";

const NotFound = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("NotFound");

  useEffect(() => {
    if (!backgroundRef) return () => {};

    gsap.fromTo(
      backgroundRef.current,
      { y: 100, opacity: 0 },
      {
        duration: 2,
        opacity: 1,
        y: 0,
      },
    );
  }, [backgroundRef]);

  return (
    <section className="notfound" data-scroll-section>
      <div className="notfound__text">
        <div className="notfound__text_text">
          <Paragraph size="large">{t("subtitle")}</Paragraph>
          <Paragraph>{t("text")}</Paragraph>
        </div>
        <div className="notfound__text_buttons">
          <Button href="/" isExternal={false} subtitle={t("move")}>
            {t("homePage")}
          </Button>
        </div>
      </div>
      <div className="notfound__background" ref={backgroundRef}>
        <h1 className="notfound__background_title">
          <strong className="stroke">404</strong> ERROR
        </h1>
      </div>
    </section>
  );
};

export default NotFound;
