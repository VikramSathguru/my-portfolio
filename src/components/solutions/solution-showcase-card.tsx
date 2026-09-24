"use client";

import { Link } from "@/i18n/navigation";
import { m } from "@/components/motion";
import { SolutionMedia } from "@/components/solutions/solution-media";
import { localeText, type Solution } from "@/data/solutions";
import { solutionVisuals } from "@/data/solution-visuals";

type Props = {
  solution: Solution;
  locale: string;
  index: number;
  openLabel: string;
};

export function SolutionShowcaseCard({
  solution,
  locale,
  index,
  openLabel,
}: Props) {
  const name = localeText(solution.name, locale);
  const visual = solutionVisuals[solution.slug];
  const reversed = index % 2 === 1;

  return (
    <m.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: Math.min(index, 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`solution-showcase${reversed ? " is-reversed" : ""}`}
      style={{ ["--solution-accent" as string]: visual.accent }}
    >
      <Link
        href={`/solutions/${solution.slug}`}
        className="solution-showcase-media"
        aria-label={name}
      >
        <SolutionMedia
          slug={solution.slug}
          label={name}
          priority={index === 0}
          sizes="(min-width: 1024px) 52vw, 100vw"
        />
      </Link>

      <div className="solution-showcase-copy">
        <div className="solution-chip">
          <span aria-hidden>{visual.emoji}</span>
          <span>{name}</span>
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
          {localeText(solution.tagline, locale)}
        </h2>
        <p className="solution-promise mt-5 line-clamp-5">
          {localeText(solution.promise, locale)}
        </p>
        <ul className="solution-pill-row mt-6">
          {solution.outcomes.slice(0, 2).map((item) => (
            <li key={item.en} className="solution-pill">
              <span aria-hidden>✓</span>
              <span>{localeText(item, locale)}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/solutions/${solution.slug}`}
          className="solution-cta mt-8"
        >
          {openLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </m.article>
  );
}
