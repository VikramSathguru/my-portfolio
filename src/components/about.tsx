"use client";

import { useTranslations } from "next-intl";
import { m } from "@/components/motion";
import {
  experienceHighlightKeys,
  processSteps,
  stats,
} from "@/data/portfolio";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="content-auto scroll-mt-24 py-20 sm:py-28">
      <div className="site-container px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.16em] text-[var(--accent)] uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {t("p1")}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {t("p2")}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {t("p3")}
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-8">
              {stats.map((stat) => (
                <div key={stat.labelKey}>
                  <dt className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-[var(--muted)] sm:text-sm">
                    {t(`stats.${stat.labelKey}`)}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <p className="mb-4 text-sm font-medium tracking-[0.16em] text-[var(--accent)] uppercase">
                {t("experienceEyebrow")}
              </p>
              <div className="border-t border-[var(--border)] pt-5">
                <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                  {t("jobTitle")}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                  {t("company")}
                </p>
                <ul className="mt-4 space-y-3">
                  {experienceHighlightKeys.map((key) => (
                    <li
                      key={key}
                      className="text-sm leading-relaxed text-[var(--muted)]"
                    >
                      {t(`highlights.${key}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <p className="mb-6 text-sm font-medium tracking-[0.16em] text-[var(--accent)] uppercase">
                {t("processEyebrow")}
              </p>
              <ol>
                {processSteps.map((step, index) => (
                  <m.li
                    key={step}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="grid grid-cols-[auto_1fr] gap-5 border-b border-[var(--border)] py-5"
                  >
                    <span className="font-mono text-sm text-[var(--accent)]">
                      {step}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                        {t(`process.${step}.title`)}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                        {t(`process.${step}.text`)}
                      </p>
                    </div>
                  </m.li>
                ))}
              </ol>
            </div>

            <div>
              <p className="mb-6 text-sm font-medium tracking-[0.16em] text-[var(--accent)] uppercase">
                {t("educationEyebrow")}
              </p>
              <ul>
                <li className="border-b border-t border-[var(--border)] py-5">
                  <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                    {t("masters")}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{t("school")}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {t("mastersPeriod")} · {t("singapore")}
                  </p>
                </li>
                <li className="border-b border-[var(--border)] py-5">
                  <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                    {t("bachelors")}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{t("school")}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {t("bachelorsPeriod")} · {t("singapore")}
                  </p>
                </li>
              </ul>
              <p className="mt-6 text-sm text-[var(--muted)]">{t("location")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
