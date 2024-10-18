export type Icons = "tg" | "email" | "git";

type Anchor = {
  name: string;
  href: string;
};

export type MetadataContent = {
  title: string;
  description: string;
  keywords: string;
  author: string;
};

export type Project = {
  name: string;
  skills: string[];
  github: string;
  link: string;
  image: string;
};

type ContactData = {
  name: string;
  href: string;
  icon: Icons;
};

type NotFound = {
  title: string;
  subtitle: string;
  text: string;
};

export type LanguageContent = {
  homePage: string;
  move: string;
  notFound: NotFound;
  anchors: Anchor[];
  about: string;
  aboutText: string;
  aboutButton: string;
  skills: string;
  skillsText: string[];
  project: string;
  see: string;
  code: string;
  contact: string;
  projects: Project[];
  demo: string;
  contactData: ContactData[];
  inProgress: string;
};
