"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { processSteps, stats } from "@/data/portfolio";

const categoryPills = [
  "hotspotEcommerce",
  "hotspotUiux",
  "hotspotWeb",
  "hotspotMobile",
] as const;

export function Hero() {
  const t = useTranslations("Hero");
  const tAbout = useTranslations("About");

  return (
    <section id="top" className="scroll-mt-28 pt-4 pb-6 sm:pb-10">
      <div className="site-container px-5 sm:px-8">
        <div className="glass-panel relative overflow-hidden px-5 py-7 sm:px-8 sm:py-10 lg:px-10">
          <p className="home-wordmark" aria-hidden>
            PORTFOLIO
          </p>

          <div className="relative z-[1] grid items-center gap-8 pt-[4.2rem] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-28">
            <div>
              <p className="section-kicker">{t("slides.craft.eyebrow")}</p>
              <h1 className="font-display mt-4 max-w-xl text-[clamp(2.15rem,4.4vw,3.9rem)] leading-[1.05] font-bold tracking-tight text-[var(--foreground)]">
                {t("slides.craft.headline")}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {t("slides.craft.tagline")}
              </p>

              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--glass-strong)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="text-[var(--kicker)]">
                  <path
                    d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.7" />
                </svg>
                {tAbout("location")}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#portfolio"
                  className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold"
                >
                  {t("ctaPortfolio")}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#expertise"
                  className="btn-ghost inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold"
                >
                  {t("ctaSkills")}
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {categoryPills.map((key) => (
                  <a
                    key={key}
                    href="#portfolio"
                    className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--kicker)]"
                  >
                    {t(key)}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="hero-art relative aspect-[5/4] w-full">
                <Image
                  src="/images/vikram-banner.png"
                  alt={t("slides.craft.imageAlt")}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  quality={82}
                  className="object-contain p-3 sm:p-5"
                />
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="portrait-orb h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                  <div className="portrait-orb-inner">
                    <Image
                      src="/images/vikram-graduation.jpg"
                      alt={t("slides.bio.imageAlt")}
                      fill
                      sizes="112px"
                      className="object-cover object-[center_12%]"
                    />
                  </div>
                </div>
                <div className="glass-tile min-w-0 flex-1 px-4 py-3">
                  <p className="section-kicker">{tAbout("processEyebrow")}</p>
                  <p className="mt-2 text-sm leading-relaxed font-medium text-[var(--foreground)]">
                    {processSteps.map((step) => tAbout(`process.${step}.title`)).join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <dl className="relative z-[1] mt-8 grid grid-cols-3 gap-3 border-t border-[var(--border)] pt-6">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="glass-tile px-3 py-3 sm:px-4 sm:py-4">
                <dt className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[11px] leading-snug text-[var(--muted)] sm:text-sm">
                  {tAbout(`stats.${stat.labelKey}`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
