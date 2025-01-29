"use client";
import type { StrapiHero } from "@/shared/types";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./index.scss";

const Hero = (props: StrapiHero) => {
  const firstText = useRef(null);
  const secondText = useRef(null);

  useEffect(() => {
    if (!firstText && !secondText) return () => {};

    const targets = gsap.utils.toArray([firstText.current, secondText.current]);

    gsap.to(targets, {
      delay: 2,
      duration: 2,
      y: 0,
    });
  }, [firstText, secondText]);

  return (
    <section
      className="concept"
      data-scroll-section
      {...(props.componentId && { id: props.componentId })}
    >
      <div className="concept__text_container">
        <h1 className="concept__text fill" ref={firstText} data-scroll>
          {props.title}
        </h1>
      </div>
      <div className="concept__text_container">
        <h2 className="concept__text stroke" ref={secondText} data-scroll>
          {props.subtitle}
        </h2>
      </div>
    </section>
  );
};

export { Hero };
