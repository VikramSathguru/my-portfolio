"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link as LocaleLink } from "@/i18n/navigation";
import { usePortfolioIndex } from "@/components/portfolio-index";
import { searchDocs } from "@/lib/search-docs";

export function SiteSearch() {
  const t = useTranslations("Search");
  const docs = usePortfolioIndex();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const hits = query.trim().length >= 2 ? searchDocs(docs, query) : [];

  return (
    <div className="relative">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setOpen(true);
        }}
        className="flex items-center gap-2"
      >
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            if (query.trim().length >= 2) setOpen(true);
          }}
          placeholder={t("placeholder")}
          aria-label={t("label")}
          className="h-10 w-36 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--foreground)] sm:w-48"
        />
      </form>

      {open && query.trim().length >= 2 ? (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-2xl bg-[var(--background)] p-3 shadow-xl ring-1 ring-[var(--border)]">
          {hits.length > 0 ? (
            <ul className="max-h-72 overflow-auto">
              {hits.map((hit) => (
                <li key={hit.href}>
                  <LocaleLink
                    href={hit.href}
                    className="block rounded-xl px-2 py-2 hover:bg-[var(--surface)]"
                    onClick={() => setOpen(false)}
                  >
                    <p className="text-sm font-semibold text-[var(--foreground)]">{hit.title}</p>
                    <p className="line-clamp-2 text-xs text-[var(--muted)]">{hit.excerpt}</p>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-1 py-2 text-sm text-[var(--muted)]">{t("empty")}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
