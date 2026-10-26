"use client";

import { useId } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { m } from "@/components/motion";
import { expertiseAreas, processSteps, skillLevelColor, technicalSkills } from "@/data/portfolio";

const average = Math.round(
  technicalSkills.reduce((sum, skill) => sum + skill.level, 0) / technicalSkills.length,
);

function AreaIcon({ id }: { id: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "frontend":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "backend":
      return (
        <svg {...props}>
          <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13 6l-2 12" />
        </svg>
      );
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case "ecommerce":
      return (
        <svg {...props}>
          <path d="M5 7h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 7Z" />
          <path d="M9 7V5.5A3 3 0 0 1 12 2.5 3 3 0 0 1 15 5.5V7" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...props}>
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M11 18.5h2" />
        </svg>
      );
    case "ai":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
        </svg>
      );
    case "business":
      return (
        <svg {...props}>
          <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
          <path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" />
        </svg>
      );
  }
}

function Gauge({ value, label }: { value: number; label: string }) {
  const gid = useId().replace(/:/g, "");
  const radius = 68;
  const circ = 2 * Math.PI * radius;

  return (
    <div className="relative mx-auto grid h-44 w-44 place-items-center" role="img" aria-label={`${value}% ${label}`}>
      <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
        <circle cx="80" cy="80" r={radius} fill="none" stroke="var(--border)" strokeWidth="10" />
        <m.circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ * (1 - value / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <p className="font-display text-4xl font-semibold tracking-tight text-[var(--foreground)]">{value}%</p>
      </div>
    </div>
  );
}

export function Expertise() {
  const t = useTranslations("Expertise");
  const tAbout = useTranslations("About");

  return (
    <section id="expertise" className="scroll-mt-28 py-12 sm:py-16">
      <div className="site-container px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">02 · {t("eyebrow")}</p>
          <h2 className="font-display mt-3 text-3xl leading-tight font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">{t("description")}</p>
        </div>

        <div className="glass-panel mt-8 p-5 sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="section-kicker">03 · {t("coreTitle")}</p>
              <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                {t("coreTitle")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{t("coreDescription")}</p>
            </div>
            <Gauge value={average} label={t("coreTitle")} />
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {technicalSkills.map((skill, index) => {
              const barColor = skillLevelColor(skill.level);
              return (
                <div key={skill.name} className="glass-tile px-4 py-3">
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold text-[var(--foreground)]">{skill.name}</span>
                    <span className="font-mono text-xs font-medium" style={{ color: barColor }}>
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
                      transition={{ duration: 0.8, delay: (index % 3) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <p className="section-kicker">{tAbout("processEyebrow")}</p>
            <ol className="relative mt-5 grid gap-4 lg:grid-cols-4">
              <span
                className="pointer-events-none absolute top-5 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent lg:block"
                aria-hidden
              />
              {processSteps.map((step) => (
                <li key={step} className="relative">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white shadow-[0_8px_20px_color-mix(in_srgb,var(--accent)_40%,transparent)]">
                    {step}
                  </span>
                  <h4 className="font-display mt-3 text-lg font-semibold text-[var(--foreground)]">
                    {tAbout(`process.${step}.title`)}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{tAbout(`process.${step}.text`)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
            {t("stackTitle")}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {t("stackDescription")}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {expertiseAreas.map((item, index) => (
              <m.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel lift flex h-full flex-col p-5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] text-[var(--kicker)]">
                  <AreaIcon id={item.id} />
                </span>
                <h4 className="font-display mt-4 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  {t(`areas.${item.id}.title`)}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {t(`areas.${item.id}.description`)}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-2.5 py-1 text-[11px] font-semibold text-[var(--foreground)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </m.article>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link href="/solutions" className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold">
            {t("solutionsCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
