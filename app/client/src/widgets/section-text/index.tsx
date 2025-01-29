"use client";
import type { TargetElement } from "split-type";
import type { StrapiSectionText } from "@/shared/types";

import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

import { Paragraph, Heading, Button } from "@/shared/ui";
import { useOnScreen } from "@/shared/hooks";

import "./index.scss";

const SectionText = (props: StrapiSectionText) => {
  const [isAnimationShown, setIsAnimationShown] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement>(null);

  const onScreen = useOnScreen(ref);

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
  }, [ref, onScreen, isAnimationShown]);

  return (
    <section
      className="about"
      data-scroll-section
      {...(props.componentId && { id: props.componentId })}
    >
      <Heading size="small" color="light">
        {props.title}
      </Heading>
      <Paragraph size="large" ref={ref} data-scroll>
        {props.content}
      </Paragraph>
      <Button
        isExternal={props.button.isExternal}
        href={props.button.href}
        subtitle={props.button.subtitle}
      >
        {props.button.title}
      </Button>
    </section>
  );
};

export { SectionText };
