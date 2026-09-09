import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseStudyView } from "@/components/case-study-view";
import { getProjectBySlug, getProjectSlugs } from "@/lib/cms/projects";
import { routing, type AppLocale } from "@/i18n/routing";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
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
    <>
      <Header />
      <main className="flex-1 pt-[4.25rem]">
        <CaseStudyView project={project} locale={locale as AppLocale} />
      </main>
      <Footer />
    </>
  );
}
