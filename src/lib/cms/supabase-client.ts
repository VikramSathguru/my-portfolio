import {
  createPublicSupabaseClient,
  isSupabaseConfigured,
} from "@/lib/supabase/public";
import {
  mapSupabaseProject,
  type SupabaseProjectRow,
} from "./map-supabase-project";
import type { CmsProject } from "./types";

const PROJECT_SELECT = `
  id,
  slug,
  featured,
  sort_order,
  categories,
  cover_path,
  tech,
  published,
  project_locales (
    locale, title, summary, role, challenge, solution, results, highlights
  ),
  project_metrics (
    id, value, sort_order,
    project_metric_locales ( locale, label )
  ),
  project_gallery (
    id, src, sort_order,
    project_gallery_locales ( locale, alt, label )
  )
`;

export async function fetchProjectsFromSupabase(): Promise<CmsProject[] | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("projects")
      .select(PROJECT_SELECT)
      .eq("published", true)
      .order("sort_order", { ascending: true });

    if (error) throw error;
    if (!data?.length) return null;

    return (data as unknown as SupabaseProjectRow[]).map(mapSupabaseProject);
  } catch (error) {
    console.warn("[cms] Supabase unavailable, falling back to JSON:", error);
    return null;
  }
}

export async function fetchProjectBySlugFromSupabase(
  slug: string,
): Promise<CmsProject | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("projects")
      .select(PROJECT_SELECT)
      .eq("published", true)
      .eq("slug", slug)
      .maybeSingle();

    if (error) throw error;
    if (!data) return null;
    return mapSupabaseProject(data as unknown as SupabaseProjectRow);
  } catch (error) {
    console.warn("[cms] Supabase unavailable for slug lookup:", error);
    return null;
  }
}

export type SearchHit = {
  id: string;
  doc_type: string;
  slug: string;
  locale: string;
  title: string;
  excerpt: string;
  rank: number;
};

export async function searchSite(
  query: string,
  locale: string,
): Promise<SearchHit[]> {
  if (!isSupabaseConfigured() || !query.trim()) return [];

  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase.rpc("search_site", {
      q: query.trim(),
      loc: locale,
    });
    if (error) throw error;
    return (data ?? []) as SearchHit[];
  } catch (error) {
    console.warn("[cms] search_site failed:", error);
    return [];
  }
}
