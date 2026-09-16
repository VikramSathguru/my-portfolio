"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createBrowserSupabaseClient();
    const { error: signError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (signError) {
      setError(signError.message);
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-16">
      <h1 className="font-display text-3xl font-bold tracking-tight">Admin login</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Sign in with your Supabase Auth admin user to manage projects.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">Password</span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3"
          />
        </label>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
