import type { AppLocale } from "@/i18n/routing";

export type ProjectCategory = "web" | "mobile" | "uiux" | "ecommerce" | "ai";

export type ProjectLocaleContent = {
  title: string;
  summary: string;
  role: string;
  challenge: string;
  solution: string;
  results: string;
  highlights: string[];
};

export type ProjectMetric = {
  value: string;
  label: Record<AppLocale, string>;
};

export type ProjectGalleryItem = {
  src: string;
  alt: Record<AppLocale, string>;
  label: Record<AppLocale, string>;
};

export type CmsProject = {
  id: string;
  slug: string;
  featured: boolean;
  order: number;
  categories: ProjectCategory[];
  cover: string;
  tech: string[];
  metrics: ProjectMetric[];
  gallery: ProjectGalleryItem[];
  content: Record<AppLocale, ProjectLocaleContent>;
};
