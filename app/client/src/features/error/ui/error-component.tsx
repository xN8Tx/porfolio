"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Button, Paragraph } from "@/shared/ui";

import "@/styles/notfound.scss";

const ErrorComponent = ({ statusCode }: { statusCode: number }) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("Error");

  useEffect(() => {
    if (!backgroundRef) return () => {};
    if (!textRef) return () => {};
    if (!buttonsRef) return () => {};

    gsap.fromTo(
      [textRef.current, buttonsRef.current, backgroundRef.current],
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
        <div className="notfound__text_text" ref={textRef}>
          <Paragraph size="large">{t(`${statusCode}.title`)}</Paragraph>
          <Paragraph>{t(`${statusCode}.subtitle`)}</Paragraph>
        </div>
        <div className="notfound__text_buttons" ref={buttonsRef}>
          <Button href="/" isExternal={false} subtitle={t("homePage")}>
            {t("move")}
          </Button>
        </div>
      </div>
      <div className="notfound__background" ref={backgroundRef}>
        <h1 className="notfound__background_title">
          <strong className="stroke">{statusCode}</strong> ERROR
        </h1>
      </div>
    </section>
  );
};

export { ErrorComponent };
