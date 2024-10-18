"use client";
import { useEffect, useRef, useContext, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

import { Paragraph, Heading, Link } from "@/ui/kit";
import { LanguageContext } from "@/models";
import { useOnScreen } from "@/hooks";

import "./index.scss";

import type { TargetElement } from "split-type";

const About = () => {
  const [isAnimationShown, setIsAnimationShown] = useState<boolean>(false);
  const { languageData } = useContext(LanguageContext);
  const ref = useRef<HTMLParagraphElement>(null);

  const onScreen = useOnScreen(ref);

  const { about, aboutText, aboutButton, see } = languageData;

  useEffect(() => {
    if (isAnimationShown) return () => {};
    if (!ref) return () => {};
    if (!onScreen) return () => {};

    const splitText = new SplitType(ref.current as TargetElement);
    const lines = splitText.lines;

    gsap.to(lines, {
      y: 0,
      opacity: 1,
      duration: 1.3,
      ease: "power1",
      stagger: 0.1,
    });

    setIsAnimationShown(true);
  }, [ref, onScreen]);

  return (
    <section className="about" id="about" data-scroll-section>
      <Heading size="small" color="light">
        {about}
      </Heading>
      <Paragraph size="large" ref={ref} data-scroll>
        {aboutText}
      </Paragraph>
      <Link type="button" href="#projects" hoverText={see} data-anchor>
        {aboutButton}
      </Link>
    </section>
  );
};

export { About };
