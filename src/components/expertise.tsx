"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { m } from "@/components/motion";
import {
  expertiseAreas,
  skillLevelColor,
  technicalSkills,
} from "@/data/portfolio";

export function Expertise() {
  const t = useTranslations("Expertise");

  return (
    <section
      id="expertise"
      className="content-auto scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28"
    >
      <div className="site-container px-5 sm:px-8">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-sm font-medium tracking-[0.16em] text-[var(--accent)] uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="mb-20">
          <div className="mb-8 max-w-2xl">
            <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
              {t("coreTitle")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {t("coreDescription")}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((skill, index) => {
              const barColor = skillLevelColor(skill.level);
              return (
                <m.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 3) * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold text-[var(--foreground)]">
                      {skill.name}
                    </span>
                    <span
                      className="font-mono text-xs font-medium"
                      style={{ color: barColor }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
                    <m.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: barColor }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-8 max-w-2xl">
            <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
              {t("stackTitle")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {t("stackDescription")}
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((item, index) => (
              <m.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t border-[var(--border-strong)] pt-6"
              >
                <h4 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  {t(`areas.${item.id}.title`)}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {t(`areas.${item.id}.description`)}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-[var(--background)] px-2.5 py-1 text-sm font-medium text-[var(--foreground)] ring-1 ring-[var(--border)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/solutions"
              className="inline-flex h-11 items-center rounded-full border border-[var(--border-strong)] px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {t("solutionsCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
