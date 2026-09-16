"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";
import { routing, type AppLocale } from "@/i18n/routing";

const CATEGORIES = ["web", "mobile", "uiux", "ecommerce", "ai"] as const;

type LocaleFields = {
  title: string;
  summary: string;
  role: string;
  challenge: string;
  solution: string;
  results: string;
  highlights: string;
};

function emptyLocale(): LocaleFields {
  return {
    title: "",
    summary: "",
    role: "",
    challenge: "",
    solution: "",
    results: "",
    highlights: "",
  };
}

export type ProjectFormInitial = {
  id?: string;
  slug: string;
  featured: boolean;
  sort_order: number;
  published: boolean;
  categories: string[];
  cover_path: string;
  tech: string;
  locales: Record<AppLocale, LocaleFields>;
};

const defaultLocales = () =>
  Object.fromEntries(routing.locales.map((l) => [l, emptyLocale()])) as Record<
    AppLocale,
    LocaleFields
  >;

export function ProjectForm({ initial }: { initial?: ProjectFormInitial }) {
  const router = useRouter();
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [featured, setFeatured] = useState(initial?.featured ?? false);
  const [published, setPublished] = useState(initial?.published ?? true);
  const [sortOrder, setSortOrder] = useState(initial?.sort_order ?? 0);
  const [categories, setCategories] = useState<string[]>(
    initial?.categories ?? ["web"],
  );
  const [coverPath, setCoverPath] = useState(initial?.cover_path ?? "");
  const [tech, setTech] = useState(initial?.tech ?? "");
  const [locale, setLocale] = useState<AppLocale>("en");
  const [locales, setLocales] = useState(initial?.locales ?? defaultLocales());
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  function updateLocaleField<K extends keyof LocaleFields>(
    key: K,
    value: LocaleFields[K],
  ) {
    setLocales((prev) => ({
      ...prev,
      [locale]: { ...prev[locale], [key]: value },
    }));
  }

  async function uploadCover(file: File) {
    setUploading(true);
    setError(null);
    const supabase = createBrowserSupabaseClient();
    const ext = file.name.split(".").pop() || "png";
    const path = `${slug || "draft"}/cover-${Date.now()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("portfolio")
      .upload(path, file, { upsert: true, contentType: file.type });
    setUploading(false);
    if (uploadError) {
      setError(uploadError.message);
      return;
    }
    const { data } = supabase.storage.from("portfolio").getPublicUrl(path);
    setCoverPath(data.publicUrl);
    await supabase.from("media").upsert(
      {
        storage_path: path,
        public_url: data.publicUrl,
        alt: `${slug} cover`,
      },
      { onConflict: "storage_path" },
    );
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);
    const supabase = createBrowserSupabaseClient();

    const payload = {
      slug: slug.trim(),
      featured,
      published,
      sort_order: Number(sortOrder) || 0,
      categories,
      cover_path: coverPath,
      tech: tech
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    let projectId = initial?.id;

    if (projectId) {
      const { error: updateError } = await supabase
        .from("projects")
        .update(payload)
        .eq("id", projectId);
      if (updateError) {
        setSaving(false);
        setError(updateError.message);
        return;
      }
      await supabase.from("project_locales").delete().eq("project_id", projectId);
    } else {
      const { data, error: insertError } = await supabase
        .from("projects")
        .insert(payload)
        .select("id")
        .single();
      if (insertError || !data) {
        setSaving(false);
        setError(insertError?.message ?? "Failed to create project");
        return;
      }
      projectId = data.id;
    }

    const localeRows = routing.locales.map((code) => {
      const fields = locales[code];
      return {
        project_id: projectId,
        locale: code,
        title: fields.title || locales.en.title,
        summary: fields.summary || locales.en.summary,
        role: fields.role || locales.en.role,
        challenge: fields.challenge || locales.en.challenge,
        solution: fields.solution || locales.en.solution,
        results: fields.results || locales.en.results,
        highlights: fields.highlights
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      };
    });

    const { error: localeError } = await supabase
      .from("project_locales")
      .insert(localeRows);
    setSaving(false);
    if (localeError) {
      setError(localeError.message);
      return;
    }

    router.replace("/admin");
    router.refresh();
  }

  async function onDelete() {
    if (!initial?.id) return;
    if (!window.confirm(`Delete project “${slug}”? This cannot be undone.`)) {
      return;
    }
    setSaving(true);
    setError(null);
    const supabase = createBrowserSupabaseClient();
    const { error: deleteError } = await supabase
      .from("projects")
      .delete()
      .eq("id", initial.id);
    setSaving(false);
    if (deleteError) {
      setError(deleteError.message);
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  const fields = locales[locale];

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-3xl space-y-6 px-5 py-12">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          {initial?.id ? "Edit project" : "New project"}
        </h1>
        <a href="/admin" className="text-sm font-semibold text-[var(--accent)]">
          Back
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="mb-1 block text-sm font-semibold">Slug</span>
          <input
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-1 block text-sm font-semibold">Sort order</span>
          <input
            type="number"
            value={sortOrder}
            onChange={(e) => setSortOrder(Number(e.target.value))}
            className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-4 text-sm">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          Featured
        </label>
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          Published
        </label>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">Categories</legend>
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((category) => {
            const checked = categories.includes(category);
            return (
              <label key={category} className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    setCategories((prev) =>
                      checked
                        ? prev.filter((c) => c !== category)
                        : [...prev, category],
                    );
                  }}
                />
                {category}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-1 block text-sm font-semibold">Tech (comma-separated)</span>
        <input
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3"
        />
      </label>

      <div>
        <span className="mb-1 block text-sm font-semibold">Cover image</span>
        <input
          value={coverPath}
          onChange={(e) => setCoverPath(e.target.value)}
          placeholder="https://... or /portfolio/..."
          className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3"
        />
        <input
          type="file"
          accept="image/*"
          className="mt-2 block text-sm"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void uploadCover(file);
          }}
        />
        {uploading ? (
          <p className="mt-1 text-xs text-[var(--muted)]">Uploading…</p>
        ) : null}
      </div>

      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          {routing.locales.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLocale(code)}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                locale === code
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--background)] ring-1 ring-[var(--border)]"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {(
            [
              ["title", "Title"],
              ["summary", "Summary"],
              ["role", "Role"],
              ["challenge", "Challenge"],
              ["solution", "Solution"],
              ["results", "Results"],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="block">
              <span className="mb-1 block text-sm font-semibold">
                {label} ({locale})
              </span>
              {key === "summary" ||
              key === "challenge" ||
              key === "solution" ||
              key === "results" ? (
                <textarea
                  required={locale === "en"}
                  rows={3}
                  value={fields[key]}
                  onChange={(e) => updateLocaleField(key, e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2"
                />
              ) : (
                <input
                  required={locale === "en"}
                  value={fields[key]}
                  onChange={(e) => updateLocaleField(key, e.target.value)}
                  className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3"
                />
              )}
            </label>
          ))}
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">
              Highlights (one per line, {locale})
            </span>
            <textarea
              rows={4}
              value={fields.highlights}
              onChange={(e) => updateLocaleField("highlights", e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2"
            />
          </label>
        </div>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={saving || !coverPath}
          className="inline-flex h-11 items-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save project"}
        </button>
        {initial?.id ? (
          <button
            type="button"
            disabled={saving}
            onClick={() => void onDelete()}
            className="inline-flex h-11 items-center rounded-full border border-red-500/40 px-5 text-sm font-semibold text-red-600 disabled:opacity-60"
          >
            Delete
          </button>
        ) : null}
      </div>
    </form>
  );
}
