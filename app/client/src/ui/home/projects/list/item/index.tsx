import { useContext, useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import Image from "next/image";

import { LanguageContext } from "@/models";
import { Paragraph } from "@/ui/kit";
import { useIcon } from "@/hooks";

import type { Project } from "@/types";
import { IKImage } from "imagekitio-next";
import Link from "next/link";
import { ImageWrapper } from "./image-wrapper";
import { Mock } from "node:test";

type ItemProps = {
  isSecond: boolean;
  index: number;
  data: Project;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Item = ({ data, isSecond, index }: ItemProps) => {
  const { image, name, skills, github, link } = data;
  const {
    languageData: { demo, see, inProgress },
  } = useContext(LanguageContext);

  const imageWrapperRef = useRef<HTMLAnchorElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef(null);

  const [isHover, setIsHover] = useState<boolean>(false);

  const icon = useIcon("git");

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      // @ts-ignore
      lottieRef.current.goToAndStop(0, 0);
    }
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    // @ts-ignore
    if (lottieRef.current) lottieRef.current.goToAndStop(0, 0);
  }, [lottieRef]);

  useEffect(() => {
    if (!imageWrapperRef.current) return;
    if (window.innerWidth <= 1124) return;

    const image = imageWrapperRef.current;

    const mouseMoveHandler = (event: MouseEvent) => {
      imageWrapperRef.current!.style.cssText = `cursor: none`;
      linkRef.current!.style.cssText = `
        opacity: 0.8; 
        left:${event.offsetX - 65}px; 
        top:${event.offsetY - 65}px`;
    };
    const mouseOutHandler = () => {
      linkRef.current!.style.opacity = "0";
    };

    image.addEventListener("mousemove", mouseMoveHandler);
    image.addEventListener("mouseout", mouseOutHandler);

    return () => {
      image.removeEventListener("mousemove", mouseMoveHandler);
      image.removeEventListener("mouseout", mouseOutHandler);
    };
  }, []);

  return (
    <div className="projects-item" data-scroll>
      <ImageWrapper link={link} ref={imageWrapperRef}>
        <div className="projects-item__image_wrapper" data-scroll>
          <IKImage urlEndpoint={urlEndpoint} path={image} alt={name} />
        </div>
        <div className="projects-item__image_link" ref={linkRef}>
          {link ? `${see} ${demo}` : inProgress}
        </div>
      </ImageWrapper>
      <div className="projects-item__information">
        <div className="projects-item__information_text">
          <Paragraph size="regular">{name}</Paragraph>
          <Paragraph size="regular">{skills.join(", ")}</Paragraph>
        </div>
        <div className="projects-item__information_link">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer"
              onMouseOver={handleMouseEnter}
              onMouseOut={handleMouseLeave}
            >
              <Lottie
                ref={lottieRef}
                play={isHover}
                animationData={icon as JSON}
                style={{ width: "48px", height: "48px" }}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { Item };
