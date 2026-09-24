import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SolutionProjectAd } from "@/components/solutions/solution-project-ad";
import { SolutionSplit } from "@/components/solutions/solution-split";
import { getSolution, localeText, type Solution } from "@/data/solutions";
import { solutionPageHero, solutionPagePart } from "@/data/solution-page-images";
import { solutionVisuals } from "@/data/solution-visuals";
import { getProjectBySlug } from "@/lib/cms/projects";
import type { AppLocale } from "@/i18n/routing";

export async function SolutionView({
  solution,
  locale,
}: {
  solution: Solution;
  locale: string;
}) {
  const t = await getTranslations("Solutions");
  const name = localeText(solution.name, locale);
  const visual = solutionVisuals[solution.slug];
  const project = await getProjectBySlug(solution.projectSlug);
  const related = solution.related
    .map((slug) => getSolution(slug))
    .filter((item): item is Solution => Boolean(item));

  const adSide =
    solution.slug === "online-stores" ||
    solution.slug === "acquisition" ||
    solution.slug === "mobile" ||
    solution.slug === "seo"
      ? "left"
      : "right";

  return (
    <div className="site-container px-5 py-12 sm:px-8 sm:py-16">
      <Link href="/solutions" className="text-sm font-semibold text-[var(--accent)]">
        {t("back")}
      </Link>

      <div className="mt-8">
        <SolutionSplit
          art={solution.art}
          label={name}
          imageSlug={solution.slug}
          imageSrc={solutionPageHero(solution.slug)}
          priority
        >
          <p className="solution-chip mb-5 inline-flex">
            <span aria-hidden>{visual.emoji}</span>
            <span>{name}</span>
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl">
            {name}
          </h1>
          <p className="solution-promise mt-5">{localeText(solution.promise, locale)}</p>
          <p className="solution-muted mt-4">{localeText(solution.overview, locale)}</p>
        </SolutionSplit>
      </div>

      <section className="mt-16">
        <h2 className="solution-kicker">{t("outcomes")}</h2>
        <ul className="solution-points mt-6">
          {solution.outcomes.map((item) => (
            <li key={item.en} className="solution-point">
              {localeText(item, locale)}
            </li>
          ))}
        </ul>
      </section>

      <section className="solution-panel mt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          {t("standard")}
        </h2>
        <p className="solution-muted mt-4 max-w-3xl">{localeText(solution.standard, locale)}</p>
      </section>

      <div className="mt-16 flex flex-col gap-16 sm:gap-20">
        {solution.parts.map((part, index) => {
          const title = localeText(part.title, locale);
          return (
            <SolutionSplit
              key={part.id}
              art={part.art}
              label={title}
              imageSlug={solution.slug}
              imageSrc={solutionPagePart(solution.slug, part.id)}
              reversed={index % 2 === 1}
              deferred
              showEmoji={false}
            >
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                {title}
              </h2>
              <h3 className="solution-kicker mt-6">{t("necessity")}</h3>
              <p className="solution-muted mt-2">{localeText(part.necessity, locale)}</p>
              <h3 className="solution-kicker mt-6">{t("importance")}</h3>
              <p className="solution-muted mt-2">{localeText(part.importance, locale)}</p>
            </SolutionSplit>
          );
        })}
      </div>

      <div className="mt-16">
        <p className="solution-kicker">{t("related")}</p>
        <ul className="solution-related mt-5">
          {related.map((item) => (
            <li key={item.slug}>
              <Link href={`/solutions/${item.slug}`}>
                <span aria-hidden className="mr-1.5">
                  {solutionVisuals[item.slug].emoji}
                </span>
                {localeText(item.name, locale)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {project ? (
        <SolutionProjectAd
          project={project}
          locale={locale as AppLocale}
          eyebrow={t("similar")}
          cta={t("similarCta")}
          side={adSide}
        />
      ) : null}
    </div>
  );
}
