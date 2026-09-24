import { getTranslations } from "next-intl/server";
import { SolutionShowcaseCard } from "@/components/solutions/solution-showcase-card";
import { solutions } from "@/data/solutions";

export async function SolutionsIndex({ locale }: { locale: string }) {
  const t = await getTranslations("Solutions");

  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="site-container px-5 sm:px-8">
          <div className="solutions-hero-panel">
            <p className="solution-kicker">
              <span aria-hidden>✨</span> {t("eyebrow")}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              {t("title")}
            </h1>
            <p className="solution-muted mt-6 max-w-2xl text-base sm:text-lg">
              {t("description")}
            </p>
            <div className="solutions-hero-badges mt-8" aria-hidden>
              <span>🌐</span>
              <span>🛍️</span>
              <span>🗂️</span>
              <span>🎯</span>
              <span>⚙️</span>
              <span>📱</span>
              <span>⛓️</span>
              <span>📈</span>
            </div>
          </div>
        </div>
      </section>

      <div className="site-container flex flex-col gap-16 px-5 pb-20 sm:gap-24 sm:px-8 sm:pb-28">
        {solutions.map((solution, index) => (
          <SolutionShowcaseCard
            key={solution.slug}
            solution={solution}
            locale={locale}
            index={index}
            openLabel={t("open")}
          />
        ))}
      </div>
    </div>
  );
}
