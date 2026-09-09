import type { AppLocale } from "@/i18n/routing";
import type { CmsProject, ProjectLocaleContent } from "./types";

export function localizeProject(
  project: CmsProject,
  locale: AppLocale,
): ProjectLocaleContent {
  return project.content[locale] ?? project.content.en;
}

export type LocalizedProject = CmsProject & {
  localeContent: ProjectLocaleContent;
};

export function withLocale(
  project: CmsProject,
  locale: AppLocale,
): LocalizedProject {
  return {
    ...project,
    localeContent: localizeProject(project, locale),
  };
}
