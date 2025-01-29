// =========================================================
// Base
// =========================================================

interface StrapiData {
  id: number;
  documentId: string;
  locale?: string | null;
}

// =========================================================
// Media
// =========================================================

interface StrapiFormat extends StrapiData {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface StrapiFormats extends StrapiData {
  thumbnail: StrapiFormat;
  large: StrapiFormat;
  small: StrapiFormat;
  medium: StrapiFormat;
}

export interface StrapiMedia extends StrapiData {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: StrapiFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  folderPath: string;
  blurHash: string | null;
}

// =========================================================
// UI
// =========================================================

export interface StrapiLink extends StrapiData {
  title: string;
  href: string;
  isExternal: boolean;
  icon: StrapiIcons | null;
}

export interface StrapiButton extends StrapiData {
  title: string;
  subtitle: string;
  href: string;
  isExternal: boolean;
}

// =========================================================
// Page Properties
// ========================================================

export interface StrapiAttribute extends StrapiData {
  name: string;
  content: string;
}

export interface StrapiSeo extends StrapiData {
  title: string;
  description: string;
  image: StrapiMedia;
  keywords: string | null;
  preventIndexing: boolean;
  attributes: StrapiAttribute[] | null;
}

// =========================================================
// Components
// =========================================================

export interface StrapiHeader extends StrapiData {
  logo: StrapiMedia;
  links: StrapiLink[];
  menuLinks: StrapiLink[];
}

export interface StrapiFooter extends StrapiData {
  links: StrapiLink[];
}

// =========================================================
// Misc
// =========================================================

export interface StrapiSkillItem extends StrapiData {
  title: string;
}

// =========================================================
// Dynamic Zone
// =========================================================

export interface StrapiDynamicZone extends StrapiData {
  __component: string;
}

export interface StrapiHero extends StrapiDynamicZone {
  title: string;
  subtitle: string;
  componentId: string | null;
}

export interface StrapiSectionText extends StrapiDynamicZone {
  title: string;
  content: string;
  button: StrapiButton;
  componentId: string | null;
}

export interface StrapiSectionSkills extends StrapiDynamicZone {
  title: string;
  skills: StrapiSkillItem[];
  button: StrapiButton;
  componentId: string | null;
}

export interface StrapiSectionProjects extends StrapiDynamicZone {
  title: string;
  projects: StrapiProject[];
  button: StrapiButton;
  componentId: string | null;
}

// =========================================================
// Single Types
// =========================================================

export interface StrapiGlobalInformation extends StrapiData {
  header: StrapiHeader;
  footer: StrapiFooter;
}

// =========================================================
// Collection Types
// =========================================================

export interface StrapiIcons extends StrapiData {
  title: string;
  slug: string;
}

export interface StrapiProject extends StrapiData {
  title: string;
  preview: StrapiMedia;
  stack: string;
  githubURL: string | null;
  projectURL: string | null;
}

export interface StrapiPages extends StrapiData {
  title: string;
  slug: string;
  seo: StrapiSeo;
  dynamicZone: StrapiDynamicZone[];
}
