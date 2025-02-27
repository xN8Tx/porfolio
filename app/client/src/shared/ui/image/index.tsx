"use client";
import type { StrapiMedia } from "@/shared/types";

import NextImage from "next/image";

interface ImageProps extends StrapiMedia {
  className?: string;
}

const PUBLIC_URL =
  process.env.NODE_MODE === "test"
    ? "https://cms.shteyn-web.ru"
    : process.env.NEXT_PUBLIC_STRAPI_URL;

export const Image = (props: ImageProps) => {
  if (!props.mime.startsWith("image")) {
    return <></>;
  }

  return (
    <NextImage
      src={PUBLIC_URL + props.url}
      width={props.width}
      height={props.height}
      className={props.className}
      unoptimized={true}
      alt={props.alternativeText ?? "Изображение"}
      {...(props.blurHash && {
        blurDataURL: props.blurHash,
        placeholder: "blur",
      })}
    />
  );
};
