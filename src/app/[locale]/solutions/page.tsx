import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { SolutionsIndex } from "@/components/solutions/solutions-index";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Solutions" });
  const siteUrl = siteConfig.getSiteUrl();

  return {
    title: `${t("title")} — ${siteConfig.name}`,
    description: t("description"),
    alternates: { canonical: `/${locale}/solutions` },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}/${locale}/solutions`,
      type: "website",
    },
  };
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      <Header />
      <main className="flex-1 pt-[4.25rem]">
        <SolutionsIndex locale={locale} />
      </main>
      <Footer />
    </PageTransition>
  );
}
