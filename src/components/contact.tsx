"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { site } from "@/data/portfolio";

export function Contact() {
  const t = useTranslations("Contact");
  const tAbout = useTranslations("About");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      t("mailSubject", { name: name || "visitor" }),
    );
    const body = encodeURIComponent(
      `${t("name")}: ${name}\n${t("emailLabel")}: ${email}\n${t("phoneLabel")}: ${phone}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <div className="site-container px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {t("description")}
            </p>

            <dl className="mt-10 space-y-5">
              <div>
                <dt className="text-xs font-semibold tracking-wide text-[var(--muted)] uppercase">
                  {t("email")}
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-[var(--muted)] uppercase">
                  {t("phone")}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-[var(--foreground)]">
                  {site.phone}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-[var(--muted)] uppercase">
                  {t("location")}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-[var(--foreground)]">
                  {tAbout("location")}
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-[var(--surface)] p-6 ring-1 ring-[var(--border)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                  {t("name")}
                </span>
                <input
                  name="name"
                  required
                  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
                  placeholder={t("namePlaceholder")}
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                  {t("emailLabel")}
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
                  placeholder={t("emailPlaceholder")}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                  {t("phoneLabel")}
                </span>
                <input
                  name="phone"
                  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
                  placeholder={t("phonePlaceholder")}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                  {t("message")}
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
                  placeholder={t("messagePlaceholder")}
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-8 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {t("submit")}
            </button>

            {sent && (
              <p className="mt-4 text-sm text-[var(--muted)]">
                {t("sent")}{" "}
                <a className="text-[var(--accent)]" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
