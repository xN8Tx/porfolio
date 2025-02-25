import { mockStrapiImage } from "@/shared/mocks";

export const mockStrapiHero = {
  id: 1,
  documentId: "1",
  title: "Evgeniy Shteyn",
  subtitle: "Frontend dev.",
  __component: "dynamic-zone.hero",
  locale: "en",
  componentId: "hero",
};

export const mockStrapiSkills = {
  skills: [
    { id: 1, locale: "en", documentId: "1", title: "HTML" },
    { id: 2, locale: "en", documentId: "2", title: "JavaScript" },
    { id: 3, locale: "en", documentId: "3", title: "TypeScript" },
    { id: 4, locale: "en", documentId: "4", title: "NextJS" },
    { id: 5, locale: "en", documentId: "5", title: "TailwindCSS" },
    { id: 6, locale: "en", documentId: "6", title: "Zustand" },
    { id: 7, locale: "en", documentId: "7", title: "Redux, RTK" },
    { id: 8, locale: "en", documentId: "8", title: "React Query" },
    { id: 9, locale: "en", documentId: "9", title: "React Hook Form" },
    { id: 10, locale: "en", documentId: "10", title: "Zod" },
  ],
  id: 1,
  locale: "en",
  documentId: "1",
  title: "Projects",
  componentId: "section-skills",
  __component: "dynamic-zone.section-skills",
  button: {
    id: 1,
    documentId: "1",
    title: "See more",
    subtitle: "Projects",
    isExternal: false,
    href: "#",
  },
};

export const mockStrapiText = {
  id: 1,
  locale: "en",
  documentId: "1",
  title: "Projects",
  componentId: "section-text",
  __component: "dynamic-zone.section-text",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dictum iaculis. Proin suscipit lorem porttitor odio gravida rhoncus. Praesent a sollicitudin massa. Curabitur convallis volutpat efficitur. Donec auctor rhoncus magna non consequat. Aenean sodales lacinia lorem, sit amet porttitor nibh laoreet ut. Vivamus eleifend sit amet turpis eu cursus. Nulla consequat purus lorem, quis faucibus ipsum lobortis nec. Vivamus vel mauris eget libero consectetur tincidunt. Nulla nibh libero, condimentum quis eros in, dictum suscipit quam.",
  button: {
    id: 1,
    documentId: "1",
    title: "See more",
    subtitle: "Projects",
    isExternal: false,
    href: "#",
  },
};

export const mockStrapiProjects = {
  id: 1,
  locale: "en",
  documentId: "1",
  title: "Projects",
  componentId: "section-projects",
  __component: "dynamic-zone.section-projects",
  button: {
    id: 1,
    documentId: "1",
    title: "See more",
    subtitle: "Projects",
    isExternal: false,
    href: "#",
  },
  projects: [
    {
      id: 1,
      documentId: "1",
      title: "TODO App",
      stack: "NextJS, TailwindCSS, TypeScript",
      githubURL: null,
      projectURL: "https://shteyn-web.ru",
      preview: mockStrapiImage,
    },
    {
      id: 2,
      documentId: "2",
      title: "Landing",
      stack: "NextJS, TailwindCSS, TypeScript",
      githubURL: "https://github.com/xN8Tx/portfolio",
      projectURL: null,
      preview: mockStrapiImage,
    },
    {
      id: 3,
      documentId: "3",
      title: "E-Commerce",
      stack: "NextJS, TailwindCSS, TypeScript",
      githubURL: "https://github.com/xN8Tx/portfolio",
      projectURL: "https://shteyn-web.ru",
      preview: mockStrapiImage,
    },
    {
      id: 4,
      documentId: "4",
      title: "E-Commerce",
      stack: "NextJS, TailwindCSS, TypeScript",
      githubURL: null,
      projectURL: null,
      preview: mockStrapiImage,
    },
  ],
};

export const strapiMockPageData = {
  data: [
    {
      dynamicZone: [
        mockStrapiHero,
        mockStrapiText,
        mockStrapiSkills,
        mockStrapiProjects,
      ],
    },
  ],
};
