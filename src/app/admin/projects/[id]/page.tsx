import { redirect, notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/public";
import { ProjectForm } from "@/components/admin/project-form";
import { routing, type AppLocale } from "@/i18n/routing";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!isSupabaseConfigured()) redirect("/admin");
  const { id } = await params;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: project } = await supabase
    .from("projects")
    .select(
      "id, slug, featured, sort_order, published, categories, cover_path, tech, project_locales(locale, title, summary, role, challenge, solution, results, highlights)",
    )
    .eq("id", id)
    .maybeSingle();

  if (!project) notFound();

  const locales = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      {
        title: "",
        summary: "",
        role: "",
        challenge: "",
        solution: "",
        results: "",
        highlights: "",
      },
    ]),
  ) as Record<
    AppLocale,
    {
      title: string;
      summary: string;
      role: string;
      challenge: string;
      solution: string;
      results: string;
      highlights: string;
    }
  >;

  for (const row of project.project_locales ?? []) {
    if (!routing.locales.includes(row.locale as AppLocale)) continue;
    locales[row.locale as AppLocale] = {
      title: row.title,
      summary: row.summary,
      role: row.role,
      challenge: row.challenge,
      solution: row.solution,
      results: row.results,
      highlights: (row.highlights ?? []).join("\n"),
    };
  }

  return (
    <ProjectForm
      initial={{
        id: project.id,
        slug: project.slug,
        featured: project.featured,
        sort_order: project.sort_order,
        published: project.published,
        categories: project.categories ?? [],
        cover_path: project.cover_path,
        tech: (project.tech ?? []).join(", "),
        locales,
      }}
    />
  );
}
