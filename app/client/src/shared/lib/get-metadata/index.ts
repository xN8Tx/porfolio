import type {
  StrapiAttribute,
  StrapiSeo,
  StrapiMedia,
  StrapiPages,
} from "@/shared/types";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { publicHTTP } from "@/shared/api";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const createMetaImage = (image: StrapiMedia) => ({
  url: `${STRAPI_URL}${image.url}`,
  alt: "Evgeniy Shteyn",
});

const createAttributes = (attributes: StrapiAttribute[]) => {
  const other: any = {};
  attributes.forEach((attribute) => {
    other[attribute.name] = attribute.content;
  });
  return other;
};

const createMetadata = (seo: StrapiSeo): Metadata => {
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: createMetaImage(seo.image),
    },
    robots: seo.preventIndexing ? "noindex" : "index",
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: createMetaImage(seo.image),
    },
    ...(seo.keywords && { keywords: seo.keywords }),
    ...(seo.attributes && { other: createAttributes(seo.attributes) }),
  };
};

export const getMetadata = async (
  slug: string,
  locale: string,
): Promise<Metadata> => {
  const pageData = await publicHTTP.get<StrapiPages[]>({
    uri: `/pages`,
    query: {
      locale,
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["seo.image", "seo.attributes"],
    },
  });

  if (!pageData || pageData.data.length === 0) {
    notFound();
  }

  const seo = pageData.data[0].seo;
  return createMetadata(seo);
};
