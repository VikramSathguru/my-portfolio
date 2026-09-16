"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { SiteSearch } from "./site-search";

const navItems = [
  { href: "#portfolio", key: "portfolio" as const },
  { href: "#expertise", key: "skills" as const },
  { href: "#about", key: "about" as const },
];

export function Header() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_90%,transparent)] shadow-sm backdrop-blur-xl"
          : "bg-[color-mix(in_srgb,var(--background)_70%,transparent)] backdrop-blur-md"
      }`}
    >
      <div className="site-container flex h-[4.25rem] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" aria-label={t("home")} className="shrink-0">
          <BrandLogo size="md" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <SiteSearch />
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#portfolio"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {t("viewWork")}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <SiteSearch />
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            aria-label={t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]"
          >
            <span className="sr-only">{t("openMenu")}</span>
            <div className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-0.5 bg-[var(--foreground)] transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 bg-[var(--foreground)] transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 bg-[var(--foreground)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-semibold text-[var(--foreground)]"
              >
                {t(link.key)}
              </a>
            ))}
            <a
              href="#portfolio"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white"
            >
              {t("viewWork")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
