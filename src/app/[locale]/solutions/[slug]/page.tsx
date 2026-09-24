import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { SolutionView } from "@/components/solutions/solution-view";
import { getSolution, localeText, solutionSlugs } from "@/data/solutions";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    solutionSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  const copyName = localeText(solution.name, locale);
  const tagline = localeText(solution.tagline, locale);
  const overview = localeText(solution.overview, locale);
  const t = await getTranslations({ locale, namespace: "Solutions" });
  const siteUrl = siteConfig.getSiteUrl();
  const title = `${copyName} — ${t("title")}`;

  return {
    title: `${title} — ${siteConfig.name}`,
    description: tagline,
    alternates: { canonical: `/${locale}/solutions/${slug}` },
    openGraph: {
      title,
      description: overview,
      url: `${siteUrl}/${locale}/solutions/${slug}`,
      type: "article",
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <PageTransition>
      <Header />
      <main className="flex-1 pt-[4.25rem]">
        <SolutionView solution={solution} locale={locale} />
      </main>
      <Footer />
    </PageTransition>
  );
}
