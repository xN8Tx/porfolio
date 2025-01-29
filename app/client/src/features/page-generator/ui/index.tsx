import dynamic from "next/dynamic";
import { getPageData } from "../api";
import { notFound } from "next/navigation";

export const componentMapping = {
  "dynamic-zone.hero": dynamic(() =>
    import("@/widgets/hero").then((mod) => mod.Hero),
  ),
  "dynamic-zone.section-text": dynamic(() =>
    import("@/widgets/section-text").then((mod) => mod.SectionText),
  ),
  "dynamic-zone.section-projects": dynamic(() =>
    import("@/widgets/section-projects").then((mod) => mod.SectionProjects),
  ),
  "dynamic-zone.section-skills": dynamic(() =>
    import("@/widgets/section-skills").then((mod) => mod.SectionSkills),
  ),
};

export const PageManager = async ({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) => {
  const { data } = await getPageData(slug, locale);
  if (data.length === 0) return notFound();

  return (
    <>
      {data[0].dynamicZone.map((componentData) => {
        const Component =
          componentMapping[
            componentData.__component as keyof typeof componentMapping
          ];
        if (!Component) {
          console.warn(`No component found for: ${componentData.__component}`);
          return null;
        }
        return <Component key={componentData.id} {...(componentData as any)} />;
      })}
    </>
  );
};
