"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "@/components/motion";

const SLIDE_MS = 6000;
const PUSH_MS = 0.6;

type Hotspot = {
  href: string;
  labelKey: "hotspotPortfolio" | "hotspotSkills" | "hotspotAbout" | "hotspotEcommerce" | "hotspotUiux" | "hotspotWeb" | "hotspotMobile";
  className: string;
};

const slides = [
  {
    id: "craft",
    href: "#portfolio",
    src: "/images/vikram-banner.png",
    fit: "contain" as const,
    hotspots: [
      {
        href: "#portfolio",
        labelKey: "hotspotEcommerce" as const,
        className: "left-[4%] top-[12%] h-[18%] w-[22%]",
      },
      {
        href: "#portfolio",
        labelKey: "hotspotUiux" as const,
        className: "right-[3%] top-[10%] h-[16%] w-[20%]",
      },
      {
        href: "#portfolio",
        labelKey: "hotspotWeb" as const,
        className: "left-[3%] bottom-[10%] h-[20%] w-[24%]",
      },
      {
        href: "#portfolio",
        labelKey: "hotspotMobile" as const,
        className: "right-[4%] bottom-[8%] h-[22%] w-[18%]",
      },
      {
        href: "#expertise",
        labelKey: "hotspotSkills" as const,
        className: "left-[8%] top-[38%] h-[28%] w-[18%]",
      },
    ] satisfies Hotspot[],
  },
  {
    id: "bio",
    href: "#about",
    src: "/images/vikram-graduation.jpg",
    fit: "cover" as const,
    hotspots: [
      {
        href: "#about",
        labelKey: "hotspotAbout" as const,
        className: "inset-0",
      },
    ] satisfies Hotspot[],
  },
] as const;

export function Hero() {
  const t = useTranslations("Hero");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const active = slides[index];

  function goTo(next: number) {
    const wrappingForward = index === slides.length - 1 && next === 0;
    const wrappingBack = index === 0 && next === slides.length - 1;
    setDirection(wrappingForward ? 1 : wrappingBack ? -1 : next > index ? 1 : -1);
    setIndex(next);
  }

  const panelVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0.85 }),
    center: { x: "0%", opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0.85 }),
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[4.25rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_55%)]"
        aria-hidden
      />

      <div className="site-container relative px-5 py-10 sm:px-8 lg:py-14">
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <m.div
              key={active.id}
              custom={direction}
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: PUSH_MS, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8"
            >
              <a
                href={active.href}
                className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] lg:pr-2"
                aria-label={t(`slides.${active.id}.clickHint`)}
              >
                <p className="mb-4 text-sm font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
                  {t(`slides.${active.id}.eyebrow`)}
                </p>
                <h1 className="font-display max-w-xl text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.08] font-bold tracking-tight text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                  {t(`slides.${active.id}.headline`)}
                </h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  {t(`slides.${active.id}.tagline`)}
                </p>
                {active.id === "bio" ? (
                  <ul className="mt-5 max-w-lg space-y-2 text-sm leading-relaxed text-[var(--foreground)] sm:text-base">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                      <span>{t("slides.bio.pointNus")}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                      <span>{t("slides.bio.pointPhd")}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                      <span>{t("slides.bio.pointRole")}</span>
                    </li>
                  </ul>
                ) : null}
                <p className="mt-4 text-sm font-semibold text-[var(--accent)] opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  {t(`slides.${active.id}.clickHint`)} →
                </p>
              </a>

              <div className="relative -mx-2 sm:mx-0 lg:-mr-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3]">
                  <Image
                    src={active.src}
                    alt={t(`slides.${active.id}.imageAlt`)}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    quality={82}
                    className={
                      active.fit === "cover"
                        ? "rounded-[1.5rem] object-cover object-[center_18%] ring-1 ring-[var(--border)]"
                        : "object-contain object-center"
                    }
                  />

                  {active.hotspots.map((spot) => (
                    <a
                      key={`${active.id}-${spot.labelKey}`}
                      href={spot.href}
                      aria-label={t(spot.labelKey)}
                      className={`absolute z-10 rounded-xl focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${spot.className}`}
                    />
                  ))}
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#portfolio"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--accent)] px-7 text-sm font-semibold text-white transition hover:brightness-110"
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
            className="inline-flex h-12 items-center rounded-full border border-[var(--border-strong)] bg-[var(--background)] px-7 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {t("ctaSkills")}
          </a>

          <div
            className="ml-auto flex items-center gap-2"
            role="tablist"
            aria-label={t("carouselLabel")}
          >
            {slides.map((slide, slideIndex) => {
              const selected = slideIndex === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-label={t("slideControl", { n: slideIndex + 1 })}
                  onClick={() => goTo(slideIndex)}
                  className={`h-2.5 rounded-full transition-all ${
                    selected
                      ? "w-8 bg-[var(--accent)]"
                      : "w-2.5 bg-[var(--border-strong)] hover:bg-[var(--muted)]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
