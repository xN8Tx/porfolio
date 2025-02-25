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
      data-testid="page-text"
      {...(props.componentId && { id: props.componentId })}
    >
      <Heading size="small" color="light" data-testid="page-text_title">
        {props.title}
      </Heading>
      <Paragraph
        ref={ref}
        data-scroll
        size="large"
        data-testid="page-text_content"
      >
        {props.content}
      </Paragraph>
      <Button
        isExternal={props.button.isExternal}
        subtitle={props.button.subtitle}
        data-testid="page-text_button"
        href={props.button.href}
      >
        {props.button.title}
      </Button>
    </section>
  );
};

export { SectionText };
