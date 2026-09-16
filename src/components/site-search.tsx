"use client";

import { FormEvent, useDeferredValue, useState, useTransition } from "react";
import { Link as LocaleLink } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";

function isSupabaseBrowserConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

type Hit = {
  id: string;
  doc_type: string;
  slug: string;
  locale: string;
  title: string;
  excerpt: string;
  rank: number;
};

export function SiteSearch() {
  const t = useTranslations("Search");
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<Hit[]>([]);
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);

  async function runSearch(value: string) {
    if (!value.trim() || !isSupabaseBrowserConfigured()) {
      setHits([]);
      return;
    }
    const supabase = createBrowserSupabaseClient();
    const { data } = await supabase.rpc("search_site", {
      q: value.trim(),
      loc: locale,
    });
    setHits((data as Hit[]) ?? []);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    startTransition(() => {
      void runSearch(deferredQuery);
      setOpen(true);
    });
  }

  return (
    <div className="relative">
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            startTransition(() => {
              void runSearch(value);
              setOpen(Boolean(value.trim()));
            });
          }}
          onFocus={() => setOpen(Boolean(query.trim()))}
          placeholder={t("placeholder")}
          aria-label={t("label")}
          className="h-10 w-36 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 text-sm sm:w-48"
        />
      </form>

      {open && query.trim() ? (
        <div className="absolute right-0 z-50 mt-2 w-72 rounded-2xl bg-[var(--background)] p-2 shadow-xl ring-1 ring-[var(--border)] sm:w-80">
          {pending ? (
            <p className="px-3 py-2 text-sm text-[var(--muted)]">{t("searching")}</p>
          ) : hits.length === 0 ? (
            <p className="px-3 py-2 text-sm text-[var(--muted)]">{t("empty")}</p>
          ) : (
            <ul className="max-h-72 overflow-auto">
              {hits.map((hit) => (
                <li key={`${hit.doc_type}-${hit.id}`}>
                  <LocaleLink
                    href={`/work/${hit.slug}`}
                    className="block rounded-xl px-3 py-2 hover:bg-[var(--surface)]"
                    onClick={() => setOpen(false)}
                  >
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {hit.title}
                    </p>
                    <p className="line-clamp-2 text-xs text-[var(--muted)]">
                      {hit.excerpt}
                    </p>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
