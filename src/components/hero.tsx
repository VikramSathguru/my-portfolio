"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="top" className="relative overflow-hidden pt-[4.25rem]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_55%)]" aria-hidden />

      <div className="site-container relative grid items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-14">
        <div className="lg:pr-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-sm font-semibold tracking-[0.16em] text-[var(--accent)] uppercase"
          >
            {t("role")} · {t("company")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display max-w-xl text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.08] font-bold tracking-tight text-[var(--foreground)]"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--accent)] px-7 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {t("ctaTalk")}
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
              href="#portfolio"
              className="inline-flex h-12 items-center rounded-full border border-[var(--border-strong)] bg-[var(--background)] px-7 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {t("ctaPortfolio")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mx-2 sm:mx-0 lg:-mr-2 lg:justify-self-stretch"
        >
          <div className="relative w-full">
            <Image
              src="/images/vikram-banner.png"
              alt={t("bannerAlt")}
              width={1469}
              height={1071}
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
