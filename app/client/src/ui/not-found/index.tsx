"use client";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";

import { Link, Paragraph } from "@/ui/kit";
import { LanguageContext } from "@/models";

import "./index.scss";

const Wrapper = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const { languageData } = useContext(LanguageContext);
  const { notFound, move, homePage, contact, contactData } = languageData;

  const telegramData = contactData.find((i) => i.icon === "tg");

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
          <Paragraph size="large">{notFound.subtitle}</Paragraph>
          <Paragraph>{notFound.text}</Paragraph>
        </div>
        <div className="notfound__text_buttons">
          <Link href="/" type="button" hoverText={move}>
            {homePage}
          </Link>
          <Link href={telegramData!.href} type="button" hoverText={contact}>
            {telegramData!.name}
          </Link>
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

export { Wrapper };
