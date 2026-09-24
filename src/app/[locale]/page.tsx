import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Expertise } from "@/components/expertise";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { setRequestLocale } from "next-intl/server";
import { getProjects } from "@/lib/cms/projects";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const projects = await getProjects();

  return (
    <PageTransition>
      <Header />
      <main className="flex-1">
        <Hero />
        <Portfolio projects={projects} />
        <Expertise />
        <About />
      </main>
      <Footer />
    </PageTransition>
  );
}
