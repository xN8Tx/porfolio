import { publicHTTP } from "@/shared/api";
import { StrapiDynamicZone } from "@/shared/types";

export const getPageData = async (slug: string, locale: string) => {
  return await publicHTTP.get<Record<"dynamicZone", StrapiDynamicZone[]>[]>({
    uri: `/pages`,
    query: {
      locale,
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["dynamicZone"],
    },
  });
};
