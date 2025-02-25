"use client";
import type { StrapiSkillItem } from "@/shared/types";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { useOnScreen } from "@/shared/hooks";
import { Item } from "../item";

const List = ({ skills }: { skills: StrapiSkillItem[] }) => {
  const [isAnimationShown, setIsAnimationShown] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (isAnimationShown) return () => {};
    if (!ref) return () => {};
    if (!onScreen) return () => {};

    const targets = document.querySelectorAll(".skills__item > p"); // In file Item.js

    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1",
      stagger: 0.1,
    });

    setIsAnimationShown(true);
  }, [ref, onScreen, isAnimationShown]);

  return (
    <div className="skills__wrapper" ref={ref} data-scroll>
      <ul className="skills__list">
        {skills.slice(0, skills.length / 2).map((skill, index) => {
          const skillIndex = ++index;
          return <Item key={skill.id} index={skillIndex} title={skill.title} />;
        })}
      </ul>
      <ul className="skills__list">
        {skills.slice(skills.length / 2).map((skill, index) => {
          const skillIndex = skills.length / 2 + ++index;
          return <Item key={skill.id} index={skillIndex} title={skill.title} />;
        })}
      </ul>
    </div>
  );
};

export { List };
