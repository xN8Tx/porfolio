import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { useOnScreen } from "@/hooks";

import { Right } from "./right";
import { Left } from "./left";

const List = () => {
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
  }, [ref, onScreen]);

  return (
    <div className="skills__wrapper" ref={ref} data-scroll>
      <Left />
      <Right />
    </div>
  );
};

export { List };
