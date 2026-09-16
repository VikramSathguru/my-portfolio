import { routing, type AppLocale } from "@/i18n/routing";
import type {
  CmsProject,
  ProjectCategory,
  ProjectGalleryItem,
  ProjectLocaleContent,
  ProjectMetric,
} from "./types";

export type SupabaseProjectRow = {
  id: string;
  slug: string;
  featured: boolean;
  sort_order: number;
  categories: string[] | null;
  cover_path: string;
  tech: string[] | null;
  published: boolean;
  project_locales: Array<{
    locale: string;
    title: string;
    summary: string;
    role: string;
    challenge: string;
    solution: string;
    results: string;
    highlights: string[] | null;
  }> | null;
  project_metrics: Array<{
    id: string;
    value: string;
    sort_order: number;
    project_metric_locales: Array<{ locale: string; label: string }> | null;
  }> | null;
  project_gallery: Array<{
    id: string;
    src: string;
    sort_order: number;
    project_gallery_locales: Array<{
      locale: string;
      alt: string;
      label: string;
    }> | null;
  }> | null;
};

function emptyLocaleMap(): Record<AppLocale, string> {
  return { en: "", pt: "", es: "", ja: "", zh: "" };
}

function fillLocales(map: Record<AppLocale, string>) {
  for (const locale of routing.locales) {
    if (!map[locale]) map[locale] = map.en;
  }
  return map;
}

function contentFromLocales(
  rows: SupabaseProjectRow["project_locales"],
): Record<AppLocale, ProjectLocaleContent> {
  const content = {} as Record<AppLocale, ProjectLocaleContent>;
  const byLocale = new Map((rows ?? []).map((row) => [row.locale, row]));

  for (const locale of routing.locales) {
    const row = byLocale.get(locale) ?? byLocale.get("en");
    content[locale] = {
      title: row?.title ?? "",
      summary: row?.summary ?? "",
      role: row?.role ?? "",
      challenge: row?.challenge ?? "",
      solution: row?.solution ?? "",
      results: row?.results ?? "",
      highlights: row?.highlights ?? [],
    };
  }
  return content;
}

export function mapSupabaseProject(row: SupabaseProjectRow): CmsProject {
  const metrics: ProjectMetric[] = [...(row.project_metrics ?? [])]
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((metric) => {
      const label = emptyLocaleMap();
      for (const loc of metric.project_metric_locales ?? []) {
        if (routing.locales.includes(loc.locale as AppLocale)) {
          label[loc.locale as AppLocale] = loc.label;
        }
      }
      return { value: metric.value, label: fillLocales(label) };
    });

  const gallery: ProjectGalleryItem[] = [...(row.project_gallery ?? [])]
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((item) => {
      const alt = emptyLocaleMap();
      const label = emptyLocaleMap();
      for (const loc of item.project_gallery_locales ?? []) {
        if (routing.locales.includes(loc.locale as AppLocale)) {
          alt[loc.locale as AppLocale] = loc.alt;
          label[loc.locale as AppLocale] = loc.label;
        }
      }
      return {
        src: item.src,
        alt: fillLocales(alt),
        label: fillLocales(label),
      };
    });

  return {
    id: row.slug,
    slug: row.slug,
    featured: row.featured,
    order: row.sort_order,
    categories: (row.categories ?? []) as ProjectCategory[],
    cover: row.cover_path,
    tech: row.tech ?? [],
    metrics,
    gallery,
    content: contentFromLocales(row.project_locales),
  };
}
