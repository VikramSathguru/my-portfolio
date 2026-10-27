import { localeText, solutions } from "@/data/solutions";
import { getProjects } from "@/lib/cms/projects";
import type { SearchDoc } from "@/lib/search-docs";
import type { AppLocale } from "@/i18n/routing";

export async function catalogFor(locale: AppLocale): Promise<SearchDoc[]> {
  const projects = await getProjects();
  const projectDocs: SearchDoc[] = projects.map((project) => {
    const content = project.content[locale] ?? project.content.en;
    return {
      id: `project:${project.slug}`,
      title: content.title,
      href: `/work/${project.slug}`,
      excerpt: content.summary,
      text: [
        content.summary,
        content.role,
        content.challenge,
        content.solution,
        content.results,
        content.highlights.join(" "),
        project.tech.join(" "),
      ].join("\n"),
    };
  });

  const solutionDocs: SearchDoc[] = solutions.map((solution) => ({
    id: `solution:${solution.slug}`,
    title: localeText(solution.name, locale),
    href: `/solutions/${solution.slug}`,
    excerpt: localeText(solution.tagline, locale),
    text: [
      localeText(solution.overview, locale),
      localeText(solution.promise, locale),
      localeText(solution.standard, locale),
      ...solution.outcomes.map((outcome) => localeText(outcome, locale)),
      ...solution.parts.flatMap((part) => [
        localeText(part.title, locale),
        localeText(part.necessity, locale),
        localeText(part.importance, locale),
      ]),
    ].join("\n"),
  }));

  return [...projectDocs, ...solutionDocs];
}
