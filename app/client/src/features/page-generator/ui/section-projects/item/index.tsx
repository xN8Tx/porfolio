"use client";
import type { StrapiProject } from "@/shared/types";
import { useEffect, useRef, useState } from "react";

import Lottie from "react-lottie-player";
import Link from "next/link";

import { Image, Paragraph } from "@/shared/ui";
import { useIcon } from "@/shared/hooks";

import { ImageWrapper } from "./image-wrapper";
import { useTranslations } from "next-intl";

interface ItemProps {
  project: StrapiProject;
}

const Item = ({ project }: ItemProps) => {
  const imageWrapperRef = useRef<HTMLAnchorElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef(null);

  const [isHover, setIsHover] = useState<boolean>(false);
  const t = useTranslations("Projects");
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
    <div data-testid="page-projects_item" className="projects-item" data-scroll>
      <ImageWrapper link={project.projectURL} ref={imageWrapperRef}>
        <div className="projects-item__image_wrapper" data-scroll>
          <Image {...project.preview} />
        </div>
        <div className="projects-item__image_link" ref={linkRef}>
          {project.projectURL ? t("demo") : t("notAvailable")}
        </div>
      </ImageWrapper>
      <div className="projects-item__information">
        <div className="projects-item__information_text">
          <Paragraph size="regular">{project.title}</Paragraph>
          <Paragraph size="regular">{project.stack}</Paragraph>
        </div>
        <div className="projects-item__information_link">
          {project.githubURL && (
            <Link
              href={project.githubURL}
              target="_blank"
              rel="noreferrer"
              data-testid="page-projects_github_link"
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
