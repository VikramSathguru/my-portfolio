"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BrandLogo } from "./brand-logo";
import { site } from "@/data/portfolio";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const navItems = [
    { href: `/${locale}#portfolio`, label: tNav("portfolio") },
    { href: "/solutions", label: tNav("solutions"), route: true },
    { href: `/${locale}#expertise`, label: tNav("skills") },
    { href: `/${locale}#about`, label: tNav("about") },
  ];

  return (
    <footer className="bg-[#0b1220] text-white">
      <div className="site-container grid gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr]">
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
                {"route" in link && link.route ? (
                  <Link href="/solutions" className="transition hover:text-white">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
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
