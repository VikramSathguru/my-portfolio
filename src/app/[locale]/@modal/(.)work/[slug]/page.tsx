import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { CaseStudyModal } from "@/components/case-study-modal";
import { CaseStudyView } from "@/components/case-study-view";
import { getProjectBySlug } from "@/lib/cms/projects";
import type { AppLocale } from "@/i18n/routing";

export default async function InterceptedCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <CaseStudyModal>
      <CaseStudyView
        project={project}
        locale={locale as AppLocale}
        mode="modal"
      />
    </CaseStudyModal>
  );
}
