"use client";

import { useTranslations } from "next-intl";
import { BrandLogo } from "./brand-logo";
import { site } from "@/data/portfolio";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const year = new Date().getFullYear();

  const navItems = [
    { href: "#portfolio", label: tNav("portfolio") },
    { href: "#about", label: tNav("about") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <footer className="bg-[#0b1220] text-white">
      <div className="site-container grid gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandLogo size="md" showWordmark className="[&_.font-display]:text-white" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            {t("blurb")}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
            {t("navigate")}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            {navItems.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
            {t("connect")}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-3 px-5 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {site.fullName}. {t("rights")}
          </p>
          <a href="#top" className="transition hover:text-white">
            {t("backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
}
