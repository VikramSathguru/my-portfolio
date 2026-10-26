"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { SiteSearch } from "./site-search";

const sectionIds = [
  "top",
  "about",
  "expertise",
  "portfolio",
  "education",
  "experience",
  "contact",
];

type NavId =
  | "top"
  | "about"
  | "expertise"
  | "solutions"
  | "portfolio"
  | "education"
  | "experience"
  | "contact";

function NavGlyph({ id }: { id: NavId }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "top":
      return (
        <svg {...props}>
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
        </svg>
      );
    case "about":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5 19.2c1.4-3 3.8-4.5 7-4.5s5.6 1.5 7 4.5" />
        </svg>
      );
    case "expertise":
      return (
        <svg {...props}>
          <path d="M12 3 4.5 7v5c0 4.2 3.1 7.2 7.5 8.5 4.4-1.3 7.5-4.3 7.5-8.5V7L12 3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "solutions":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "portfolio":
      return (
        <svg {...props}>
          <rect x="3.5" y="5" width="17" height="14" rx="2" />
          <path d="M3.5 10h17M9 5V3.8A1.3 1.3 0 0 1 10.3 2.5h3.4A1.3 1.3 0 0 1 15 3.8V5" />
        </svg>
      );
    case "education":
      return (
        <svg {...props}>
          <path d="m3 9 9-5 9 5-9 5-9-5Z" />
          <path d="M7 11.5V16c1.6 1.4 3.2 2 5 2s3.4-.6 5-2v-4.5" />
        </svg>
      );
    case "experience":
      return (
        <svg {...props}>
          <rect x="3.5" y="7" width="17" height="12.5" rx="2" />
          <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3.5 12h17" />
        </svg>
      );
    case "contact":
      return (
        <svg {...props}>
          <rect x="3.5" y="5" width="17" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
  }
}

export function HomeFrame({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const year = new Date().getFullYear();

  const items: { id: NavId; label: string; href: string; route?: boolean }[] = [
    { id: "top", label: t("homeLabel"), href: "#top" },
    { id: "about", label: t("about"), href: "#about" },
    { id: "expertise", label: t("skills"), href: "#expertise" },
    { id: "solutions", label: t("solutions"), href: "/solutions", route: true },
    { id: "portfolio", label: t("portfolio"), href: "#portfolio" },
    { id: "education", label: t("education"), href: "#education" },
    { id: "experience", label: t("experience"), href: "#experience" },
    { id: "contact", label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let bestId = "top";
        let best = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > best) {
            best = ratio;
            bestId = id;
          }
        }
        if (best > 0) setActive(bestId);
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function itemClass(id: string, compact = false) {
    const on = active === id;
    return `flex items-center gap-2 rounded-2xl text-[var(--muted)] transition hover:text-[var(--foreground)] ${
      compact ? "flex-col px-1 py-2 text-center text-[10px] leading-tight font-semibold" : "px-3 py-2.5 text-sm font-semibold"
    } ${on ? "bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] text-[var(--kicker)]" : ""}`;
  }

  return (
    <div className="home-stage">
      <div className="home-bubbles" aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>

      <aside className="glass-panel fixed top-3 bottom-3 left-3 z-40 hidden w-[6.75rem] flex-col items-center px-2 py-4 lg:flex">
        <a href="#top" aria-label={t("home")} className="mb-4" onClick={() => setActive("top")}>
          <BrandLogo size="md" showWordmark={false} />
        </a>
        <nav className="flex w-full flex-1 flex-col gap-1 overflow-y-auto">
          {items.map((item) =>
            item.route ? (
              <Link key={item.id} href="/solutions" className={itemClass(item.id, true)}>
                <NavGlyph id={item.id} />
                <span>{item.label}</span>
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                className={itemClass(item.id, true)}
                aria-current={active === item.id ? "true" : undefined}
                onClick={() => setActive(item.id)}
              >
                <NavGlyph id={item.id} />
                <span>{item.label}</span>
              </a>
            ),
          )}
        </nav>
      </aside>

      <div className="relative z-[1] overflow-x-clip pt-3 lg:ml-[8.25rem] lg:w-[calc(100%-9rem)]">
        <div className="site-container sticky top-3 z-30 px-5 sm:px-8">
          <div className="glass-panel">
            <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2.5 sm:px-4">
              <div className="flex items-center gap-3">
                <a href="#top" className="lg:hidden" aria-label={t("home")} onClick={() => setActive("top")}>
                  <BrandLogo size="sm" showWordmark={false} />
                </a>
                <p className="text-[11px] font-bold tracking-[0.2em] text-[var(--muted)] uppercase">
                  {year} · {t("portfolio")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:block">
                  <SiteSearch />
                </div>
                <LanguageSwitcher />
                <ThemeToggle />
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--glass-strong)] text-[var(--foreground)] lg:hidden"
                  aria-expanded={open}
                  aria-label={t("openMenu")}
                  onClick={() => setOpen((value) => !value)}
                >
                  <span className="flex w-4 flex-col gap-1.5">
                    <span className={`h-0.5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                  </span>
                </button>
              </div>
            </div>
            {open ? (
              <div className="border-t border-[var(--border)] px-3 py-3 lg:hidden">
                <div className="mb-3 sm:hidden">
                  <SiteSearch />
                </div>
                <nav className="grid grid-cols-2 gap-2">
                  {items.map((item) =>
                    item.route ? (
                      <Link
                        key={item.id}
                        href="/solutions"
                        className={itemClass(item.id)}
                        onClick={() => setOpen(false)}
                      >
                        <NavGlyph id={item.id} />
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <a
                        key={item.id}
                        href={item.href}
                        className={itemClass(item.id)}
                        onClick={() => {
                          setActive(item.id);
                          setOpen(false);
                        }}
                      >
                        <NavGlyph id={item.id} />
                        <span>{item.label}</span>
                      </a>
                    ),
                  )}
                </nav>
              </div>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
