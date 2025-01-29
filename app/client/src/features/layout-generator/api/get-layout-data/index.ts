import type { StrapiGlobalInformation } from "@/shared/types";
import { publicHTTP } from "@/shared/api";

export const getLayoutData = async (locale: string) => {
  return await publicHTTP.get<StrapiGlobalInformation>({
    uri: `/global-information`,
    query: {
      locale,
      populate: [
        "header.logo",
        "header.links",
        "header.menuLinks",
        "header.menuLinks.icon",
        "footer.links",
      ],
    },
  });
};
