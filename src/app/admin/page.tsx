import Link from "next/link";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/public";
import { AdminSignOutButton } from "@/components/admin/sign-out-button";

export default async function AdminDashboardPage() {
  if (!isSupabaseConfigured()) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="font-display text-3xl font-bold">Admin</h1>
        <p className="mt-4 text-[var(--muted)]">
          Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to enable the CMS.
        </p>
      </main>
    );
  }

  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: projects } = await supabase
    .from("projects")
    .select("id, slug, featured, sort_order, published, cover_path")
    .order("sort_order", { ascending: true });

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight">Projects</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">{user.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/projects/new"
            className="inline-flex h-10 items-center rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white"
          >
            New project
          </Link>
          <AdminSignOutButton />
        </div>
      </div>

      <ul className="mt-10 divide-y divide-[var(--border)] rounded-2xl bg-[var(--background)] ring-1 ring-[var(--border)]">
        {(projects ?? []).map((project) => (
          <li key={project.id} className="flex items-center justify-between gap-4 px-5 py-4">
            <div>
              <p className="font-semibold">{project.slug}</p>
              <p className="text-xs text-[var(--muted)]">
                order {project.sort_order}
                {project.featured ? " · featured" : ""}
                {project.published ? "" : " · draft"}
              </p>
            </div>
            <Link
              href={`/admin/projects/${project.id}`}
              className="text-sm font-semibold text-[var(--accent)]"
            >
              Edit
            </Link>
          </li>
        ))}
        {!projects?.length ? (
          <li className="px-5 py-8 text-sm text-[var(--muted)]">
            No projects yet. Create one or run the backend seed.
          </li>
        ) : null}
      </ul>
    </main>
  );
}
