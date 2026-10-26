"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BrandLogo } from "./brand-logo";
import { site } from "@/data/portfolio";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const tAbout = useTranslations("About");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const navItems = [
    { href: `/${locale}#portfolio`, label: tNav("portfolio") },
    { href: "/solutions", label: tNav("solutions"), route: true },
    { href: `/${locale}#expertise`, label: tNav("skills") },
    { href: `/${locale}#about`, label: tNav("about") },
    { href: `/${locale}#education`, label: tNav("education") },
    { href: `/${locale}#experience`, label: tNav("experience") },
  ];

  const facts = [tAbout("location"), tAbout("jobTitle"), tAbout("company"), tAbout("school")];

  return (
    <footer id="contact" className="scroll-mt-28 py-8 sm:py-12">
      <div className="site-container px-5 sm:px-8">
        <div className="glass-panel relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
          <div
            className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--accent)_28%,transparent)] blur-3xl"
            aria-hidden
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="section-kicker">07 · {tNav("contact")}</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">{t("blurb")}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`/${locale}#portfolio`}
                  className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold"
                >
                  {tNav("viewWork")}
                </a>
                <Link
                  href="/solutions"
                  className="btn-ghost inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold"
                >
                  {tNav("solutions")}
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <BrandLogo size="lg" showWordmark={false} />
              <ul className="flex flex-wrap gap-2 lg:justify-end">
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className="glass-tile px-3 py-1.5 text-xs font-semibold text-[var(--foreground)]"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mt-8 grid gap-6 border-t border-[var(--border)] pt-6 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-[var(--muted)] uppercase">{t("navigate")}</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
                {navItems.map((link) => (
                  <li key={link.href}>
                    {"route" in link && link.route ? (
                      <Link href="/solutions" className="transition hover:text-[var(--kicker)]">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="transition hover:text-[var(--kicker)]">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-sm text-[var(--muted)] sm:text-right">
              <p>
                © {year} {site.fullName}. {t("rights")}
              </p>
              <a href="#top" className="mt-2 inline-block transition hover:text-[var(--kicker)]">
                {t("backToTop")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
