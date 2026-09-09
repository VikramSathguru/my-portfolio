"use client";

import Image from "next/image";
import { useMemo, useState, useDeferredValue } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
    return projects.filter((project) =>
      project.categories.includes(deferredActive),
    );
  }, [deferredActive, projects]);

  return (
    <section id="portfolio" className="scroll-mt-24 bg-[var(--surface)] py-16 sm:py-24">
      <div className="site-container px-5 sm:px-8">
        <div className="max-w-2xl">
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

        <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
          {portfolioFilterKeys.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--background)] text-[var(--muted)] ring-1 ring-[var(--border)] hover:text-[var(--foreground)]"
                }`}
              >
                {t(`filters.${filter}`)}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const content = localizeProject(project, locale);
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group overflow-hidden rounded-3xl bg-[var(--background)] shadow-[0_18px_50px_-36px_rgba(15,40,80,0.55)] ring-1 ring-[var(--border)]"
                >
                  <Link href={`/work/${project.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">
                      <Image
                        src={project.cover}
                        alt={content.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="flex items-end justify-between gap-4 p-6 sm:p-7">
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
                          {content.title}
                        </h3>
                        <p className="mt-2 text-sm text-[var(--muted)]">
                          {project.categories
                            .map((category) => t(`filters.${category}`))
                            .join(" · ")}
                        </p>
                        <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
                          {content.summary}
                        </p>
                      </div>

                      <span
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-white shadow-lg transition group-hover:translate-x-0.5 group-hover:brightness-110"
                        aria-hidden
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
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
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-[var(--muted)]">{t("empty")}</p>
        )}
      </div>
    </section>
  );
}
