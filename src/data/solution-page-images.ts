import type { SolutionSlug } from "@/data/solutions";

/** Full-frame visuals for each solution page section. */
export function solutionPageHero(slug: SolutionSlug): string {
  return `/images/solutions/pages/${slug}/hero.png`;
}

export function solutionPagePart(slug: SolutionSlug, partId: string): string {
  return `/images/solutions/pages/${slug}/${partId}.png`;
}
