"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { m } from "@/components/motion";
import { experienceHighlightKeys, site } from "@/data/portfolio";

const bioPoints = ["pointNus", "pointPhd", "pointRole"] as const;

export function AboutStory() {
  const t = useTranslations("About");
  const tHero = useTranslations("Hero");

  const chips = [t("location"), t("company"), t("school")];

  return (
    <section id="about" className="scroll-mt-28 py-12 sm:py-16">
      <div className="site-container px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <div>
            <p className="section-kicker">{t("eyebrow")}</p>
            <h2 className="font-display mt-3 text-4xl leading-[1.05] font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {site.fullName}
            </h2>
            <p className="mt-4 text-lg font-medium text-[var(--foreground)] sm:text-xl">{t("title")}</p>
            <p className="mt-3 text-base font-medium text-[var(--kicker)]">{tHero("slides.bio.headline")}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">{tHero("slides.bio.tagline")}</p>
            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-[var(--muted)]">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
            <ul className="mt-6 max-w-xl space-y-3">
              {bioPoints.map((key) => (
                <li key={key} className="flex gap-3 text-sm leading-relaxed text-[var(--foreground)] sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--kicker)]" aria-hidden />
                  <span>{tHero(`slides.bio.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="relative px-6 py-5">
              <div className="orbit" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-[0_24px_60px_var(--shadow)]">
                <Image
                  src="/images/vikram-graduation.jpg"
                  alt={tHero("slides.bio.imageAlt")}
                  fill
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover object-[center_18%]"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-[var(--glass-strong)] px-3 py-2 text-center text-xs font-semibold text-[var(--foreground)] backdrop-blur-md">
                  {t("jobTitle")}
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="glass-tile px-3 py-2 text-center text-xs leading-snug font-semibold text-[var(--foreground)]"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPath() {
  const t = useTranslations("About");

  const degrees = [
    {
      title: t("masters"),
      period: t("mastersPeriod"),
    },
    {
      title: t("bachelors"),
      period: t("bachelorsPeriod"),
    },
  ];

  return (
    <>
      <section id="education" className="scroll-mt-28 py-12 sm:py-16">
        <div className="site-container px-5 sm:px-8">
          <p className="section-kicker">05 · {t("educationEyebrow")}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {degrees.map((degree) => (
              <article key={degree.title} className="glass-panel p-6 sm:p-7">
                <p className="section-kicker">{degree.period}</p>
                <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  {degree.title}
                </h2>
                <p className="mt-3 text-sm text-[var(--muted)]">{t("school")}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{t("singapore")}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">{t("location")}</p>
        </div>
      </section>

      <section id="experience" className="scroll-mt-28 py-4 pb-12 sm:pb-16">
        <div className="site-container px-5 sm:px-8">
          <p className="section-kicker">06 · {t("experienceEyebrow")}</p>
          <div className="glass-panel mt-6 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              {t("jobTitle")}
            </h2>
            <p className="mt-1 text-sm font-semibold text-[var(--kicker)]">{t("company")}</p>
            <ol className="relative mt-8 space-y-5 border-l border-[var(--border-strong)] pl-6">
              {experienceHighlightKeys.map((key, index) => (
                <m.li
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative text-sm leading-relaxed text-[var(--muted)]"
                >
                  <span
                    className="absolute top-1.5 -left-[1.85rem] h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
                    aria-hidden
                  />
                  {t(`highlights.${key}`)}
                </m.li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
