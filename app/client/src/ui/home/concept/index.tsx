"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./index.scss";

const Concept = () => {
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
    <section className="concept" data-scroll-section>
      <div className="concept__text_container">
        <h1 className="concept__text fill" ref={firstText} data-scroll>
          Evgeniy Shteyn
        </h1>
      </div>
      <div className="concept__text_container">
        <h2 className="concept__text stroke" ref={secondText} data-scroll>
          Frontend Dev.
        </h2>
      </div>
    </section>
  );
};

export { Concept };
