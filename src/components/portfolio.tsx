"use client";

import Image from "next/image";
import { useMemo, useState, useDeferredValue } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { m, AnimatePresence } from "@/components/motion";
import { ProjectCoverTransition } from "@/components/project-cover-transition";
import { portfolioFilterKeys, type PortfolioFilterKey } from "@/data/portfolio";
import type { AppLocale } from "@/i18n/routing";
import type { CmsProject } from "@/lib/cms/types";
import { localizeProject } from "@/lib/cms/localize";

export function Portfolio({ projects }: { projects: CmsProject[] }) {
  const t = useTranslations("Portfolio");
  const locale = useLocale() as AppLocale;
  const [active, setActive] = useState<PortfolioFilterKey>("all");
  const deferredActive = useDeferredValue(active);

  const filtered = useMemo(() => {
    if (deferredActive === "all") return projects;
    return projects.filter((project) => project.categories.includes(deferredActive));
  }, [deferredActive, projects]);

  return (
    <section id="portfolio" className="scroll-mt-28 py-12 sm:py-16">
      <div className="site-container px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">04 · {t("eyebrow")}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">{t("description")}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {portfolioFilterKeys.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "btn-primary" : "btn-ghost"
                }`}
              >
                {t(`filters.${filter}`)}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const content = localizeProject(project, locale);
              const metric = project.metrics[0];
              return (
                <m.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel lift group h-full"
                >
                  <Link
                    href={`/work/${project.slug}`}
                    transitionTypes={["nav-forward"]}
                    className="flex h-full flex-col"
                  >
                    <ProjectCoverTransition slug={project.slug}>
                      <div className="relative m-3 mb-0 aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-[var(--surface)]">
                        <Image
                          src={project.cover}
                          alt={content.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={75}
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </ProjectCoverTransition>

                    <div className="flex flex-1 flex-col p-5 pt-4">
                      <p className="font-mono text-xs font-semibold text-[var(--kicker)]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display mt-1 text-xl font-semibold tracking-tight text-[var(--foreground)]">
                        {content.title}
                      </h3>
                      <p className="mt-2 text-xs font-semibold tracking-wide text-[var(--muted)] uppercase">
                        {project.categories.map((category) => t(`filters.${category}`)).join(" · ")}
                      </p>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">{content.summary}</p>
                      {metric ? (
                        <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">
                          {metric.value}
                          <span className="font-normal text-[var(--muted)]"> · {metric.label[locale]}</span>
                        </p>
                      ) : null}
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-2.5 py-1 text-[11px] font-semibold text-[var(--foreground)]"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white transition group-hover:translate-x-0.5">
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
                          <path
                            d="M3.5 9h11M10 4.5 14.5 9 10 13.5"
                            stroke="currentColor"
                            strokeWidth="1.85"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </m.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && <p className="mt-10 text-center text-[var(--muted)]">{t("empty")}</p>}
      </div>
    </section>
  );
}
