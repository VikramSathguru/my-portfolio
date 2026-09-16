"use client";

import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";

export function AdminSignOutButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="inline-flex h-10 items-center rounded-full border border-[var(--border-strong)] px-4 text-sm font-semibold"
      onClick={async () => {
        const supabase = createBrowserSupabaseClient();
        await supabase.auth.signOut();
        router.replace("/admin/login");
        router.refresh();
      }}
    >
      Sign out
    </button>
  );
}
