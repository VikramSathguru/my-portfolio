"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import type { AppLocale } from "@/i18n/routing";
import type { CmsProject } from "@/lib/cms/types";
import { localizeProject } from "@/lib/cms/localize";

export function FeaturedWork({ projects }: { projects: CmsProject[] }) {
  const t = useTranslations("Featured");
  const tPortfolio = useTranslations("Portfolio");
  const locale = useLocale() as AppLocale;
  const featured = projects[0];

  if (!featured) return null;

  const content = localizeProject(featured, locale);
  const secondary = projects.slice(1, 3);

  return (
    <section className="scroll-mt-24 border-b border-[var(--border)] py-16 sm:py-24">
      <div className="site-container px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {t("description")}
          </p>
        </div>

        <article className="grid overflow-hidden rounded-[2rem] bg-[var(--surface)] ring-1 ring-[var(--border)] lg:grid-cols-[1.15fr_0.85fr]">
          <Link
            href={`/work/${featured.slug}`}
            transitionTypes={["nav-forward"]}
            className="relative min-h-[18rem] overflow-hidden sm:min-h-[24rem]"
          >
            <Image
              src={featured.cover}
              alt={content.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              quality={80}
              className="object-cover object-top transition duration-700 hover:scale-[1.02]"
            />
          </Link>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <p className="text-sm font-semibold text-[var(--accent)]">
                {featured.categories
                  .map((category) => tPortfolio(`filters.${category}`))
                  .join(" · ")}
              </p>
              <h3 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)]">
                {content.title}
              </h3>
              <p className="mt-3 text-[var(--muted)]">{content.summary}</p>

              <dl className="mt-8 grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-4">
                {featured.metrics.map((metric) => (
                  <div key={`${metric.value}-${metric.label.en}`}>
                    <dt className="font-display text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                      {metric.value}
                    </dt>
                    <dd className="mt-1 text-xs text-[var(--muted)]">
                      {metric.label[locale]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href={`/work/${featured.slug}`}
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {t("viewCase")}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </article>

        {secondary.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {secondary.map((project) => {
              const item = localizeProject(project, locale);
              return (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group overflow-hidden rounded-3xl bg-[var(--surface)] ring-1 ring-[var(--border)] transition hover:ring-[var(--accent)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.cover}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
                      {item.summary}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
