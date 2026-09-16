import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/public";
import { ProjectForm } from "@/components/admin/project-form";
import { routing, type AppLocale } from "@/i18n/routing";

export default async function NewProjectPage() {
  if (!isSupabaseConfigured()) redirect("/admin");
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  return <ProjectForm />;
}

export function buildEmptyLocales() {
  return Object.fromEntries(
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
}
