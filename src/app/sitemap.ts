import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getProjectSlugs } from "@/lib/cms/projects";
import { solutionSlugs } from "@/data/solutions";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.getSiteUrl();
  const slugs = await getProjectSlugs();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${base}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    entries.push({
      url: `${base}/${locale}/solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });

    for (const slug of solutionSlugs) {
      entries.push({
        url: `${base}/${locale}/solutions/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const slug of slugs) {
      entries.push({
        url: `${base}/${locale}/work/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
