"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { expertiseAreas, technicalSkills } from "@/data/portfolio";

export function Expertise() {
  const t = useTranslations("Expertise");

  return (
    <section
      id="expertise"
      className="scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28"
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

        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((skill, index) => (
            <motion.div
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
                <span className="font-mono text-xs text-[var(--accent)]">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden bg-[var(--border)]">
                <motion.div
                  className="h-full bg-[var(--accent)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((item, index) => (
            <motion.div
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
              <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)]">
                {t(`areas.${item.id}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {t(`areas.${item.id}.description`)}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm font-medium text-[var(--foreground)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
