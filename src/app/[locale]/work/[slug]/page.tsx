import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseStudyView } from "@/components/case-study-view";
import { PageTransition } from "@/components/page-transition";
import { getProjectBySlug, getProjectSlugs } from "@/lib/cms/projects";
import { localizeProject } from "@/lib/cms/localize";
import { routing, type AppLocale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const content = localizeProject(project, locale as AppLocale);
  const siteUrl = siteConfig.getSiteUrl();

  return {
    title: `${content.title} — ${siteConfig.name}`,
    description: content.summary,
    openGraph: {
      title: content.title,
      description: content.summary,
      type: "article",
      url: `${siteUrl}/${locale}/work/${slug}`,
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.summary,
      images: [project.cover],
    },
    alternates: {
      canonical: `/${locale}/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <PageTransition>
      <Header />
      <main className="flex-1 pt-[4.25rem]">
        <CaseStudyView project={project} locale={locale as AppLocale} />
      </main>
      <Footer />
    </PageTransition>
  );
}
