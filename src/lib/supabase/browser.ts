import { createBrowserClient } from "@supabase/ssr";
import { getSupabasePublicKey } from "./public";

export function createBrowserSupabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    getSupabasePublicKey()!,
  );
}
