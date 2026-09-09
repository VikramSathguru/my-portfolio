import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import type { CmsProject } from "@/lib/cms/types";
import { localizeProject } from "@/lib/cms/localize";

export async function CaseStudyView({
  project,
  locale,
  mode = "page",
}: {
  project: CmsProject;
  locale: AppLocale;
  mode?: "page" | "modal";
}) {
  const t = await getTranslations({ locale, namespace: "CaseStudy" });
  const tPortfolio = await getTranslations({ locale, namespace: "Portfolio" });
  const content = localizeProject(project, locale);

  return (
    <article className={mode === "modal" ? "max-h-[90vh] overflow-y-auto" : ""}>
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface)] sm:aspect-[21/9]">
        <Image
          src={project.cover}
          alt={content.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
      </div>

      <div className="site-container px-5 py-10 sm:px-8 sm:py-14">
        <p className="text-sm font-semibold text-[var(--accent)]">
          {project.categories
            .map((category) => tPortfolio(`filters.${category}`))
            .join(" · ")}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          {content.summary}
        </p>
        <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
          {content.role}
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.value}
              className="rounded-2xl bg-[var(--surface)] p-5 ring-1 ring-[var(--border)]"
            >
              <dt className="font-display text-2xl font-bold text-[var(--foreground)]">
                {metric.value}
              </dt>
              <dd className="mt-1 text-sm text-[var(--muted)]">
                {metric.label[locale]}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--foreground)]">
              {t("challenge")}
            </h2>
            <p className="mt-3 text-[var(--muted)]">{content.challenge}</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--foreground)]">
              {t("solution")}
            </h2>
            <p className="mt-3 text-[var(--muted)]">{content.solution}</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--foreground)]">
              {t("results")}
            </h2>
            <p className="mt-3 text-[var(--muted)]">{content.results}</p>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-xl font-bold text-[var(--foreground)]">
            {t("highlights")}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {content.highlights.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] ring-1 ring-[var(--border)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-bold text-[var(--foreground)]">
            {t("tech")}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-full bg-[var(--background)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)] ring-1 ring-[var(--border)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-bold text-[var(--foreground)]">
            {t("gallery")}
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{t("cmsNote")}</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {project.gallery.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-3xl ring-1 ring-[var(--border)]"
              >
                <div className="relative aspect-[16/10] bg-[var(--surface)]">
                  <Image
                    src={item.src}
                    alt={item.alt[locale]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-medium text-[var(--muted)]">
                  {item.label[locale]}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href={{ pathname: "/", hash: "contact" }}
            className="inline-flex h-12 items-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white"
          >
            {t("cta")}
          </Link>
          <Link
            href={{ pathname: "/", hash: "portfolio" }}
            className="inline-flex h-12 items-center rounded-full border border-[var(--border-strong)] px-6 text-sm font-semibold text-[var(--foreground)]"
          >
            {t("back")}
          </Link>
        </div>
      </div>
    </article>
  );
}
