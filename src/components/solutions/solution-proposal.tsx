import { Link } from "@/i18n/navigation";
import { localeText } from "@/data/solutions";
import { getSolutionProposal } from "@/data/solution-proposals";
import type { SolutionSlug } from "@/data/solutions";

export function SolutionProposal({
  slug,
  locale,
  labels,
  proofHref,
}: {
  slug: SolutionSlug;
  locale: string;
  proofHref: string;
  labels: {
    proposal: string;
    situation: string;
    gets: string;
    process: string;
    proof: string;
    investment: string;
    next: string;
    terms: string;
    guarantee: string;
    faq: string;
    proofCta: string;
  };
}) {
  const proposal = getSolutionProposal(slug);

  return (
    <>
      <article className="solution-proposal mt-16">
        <p className="solution-kicker">{labels.proposal}</p>

        <section className="solution-doc">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            {labels.situation}
          </h2>
          <p className="solution-muted max-w-3xl">{localeText(proposal.intro, locale)}</p>
        </section>

        <section>
          <h2 className="solution-kicker">{labels.gets}</h2>
          <ul className="solution-gets mt-5">
            {proposal.gets.map((item) => (
              <li key={item.title.en} className="solution-point">
                <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                  {localeText(item.title, locale)}
                </h3>
                <p className="solution-muted mt-2">{localeText(item.body, locale)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="solution-kicker">{labels.process}</h2>
          <ol className="solution-steps mt-5">
            {proposal.steps.map((step, index) => (
              <li key={step.title.en} className="solution-step">
                <span className="solution-step-index" aria-hidden>
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                    {localeText(step.title, locale)}
                  </h3>
                  <p className="solution-muted mt-1">{localeText(step.body, locale)}</p>
                </div>
                <p className="solution-step-time">{localeText(step.time, locale)}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="solution-panel">
          <h2 className="solution-kicker">{labels.proof}</h2>
          <p className="solution-muted mt-3 max-w-3xl">{localeText(proposal.proof, locale)}</p>
          <Link href={proofHref} className="solution-cta mt-5 inline-flex">
            {labels.proofCta}
            <span aria-hidden>→</span>
          </Link>
        </section>

        <section className="solution-doc">
          <h2 className="solution-kicker">{labels.investment}</h2>
          <p className="solution-muted mt-3 max-w-3xl">{localeText(proposal.investment, locale)}</p>
        </section>

        <section className="solution-doc">
          <h2 className="solution-kicker">{labels.next}</h2>
          <p className="solution-muted mt-3 max-w-3xl">{localeText(proposal.next, locale)}</p>
        </section>

        <section>
          <h2 className="solution-kicker">{labels.terms}</h2>
          <ul className="solution-terms mt-4">
            {proposal.terms.map((item) => (
              <li key={item.en}>{localeText(item, locale)}</li>
            ))}
          </ul>
        </section>

        <section className="solution-guarantee">
          <h2 className="solution-kicker">{labels.guarantee}</h2>
          <p className="mt-3 max-w-3xl text-[var(--foreground)]">{localeText(proposal.guarantee, locale)}</p>
        </section>
      </article>

      <section className="solution-faq mt-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)]">
          {labels.faq}
        </h2>
        <div className="mt-6 flex flex-col gap-3">
          {proposal.faq.map((item) => (
            <details key={item.q.en} className="solution-faq-item">
              <summary>{localeText(item.q, locale)}</summary>
              <p className="solution-muted mt-3">{localeText(item.a, locale)}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
