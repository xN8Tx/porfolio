"use client";
import type { ClassValue } from "clsx";

import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/shared/lib";

type SvgProps = {
  width: number;
  height: number;
  alt: string;
  src: string;
  mime: string;
  className?: ClassValue[] | ClassValue;
};

const PUBLIC_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

export const Svg = ({ src, mime, width, height, alt, className }: SvgProps) => {
  const [svg, setSvg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (!mime.includes("svg")) {
      setSvg(null);
      setLoading(false);
      return;
    }

    fetch(PUBLIC_URL + src)
      .then((res) => res.text())
      .then((text) => {
        setSvg(text);
        setLoading(false);
      });
  }, [src, mime]);

  if (loading) {
    return <div className="spinner" />;
  }

  if (!PUBLIC_URL || PUBLIC_URL === undefined) {
    return <></>;
  }

  if (!svg) {
    return (
      <Image
        src={PUBLIC_URL + src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={true}
      />
    );
  }

  return (
    <div className={cn(className)} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};
