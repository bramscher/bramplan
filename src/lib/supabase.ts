import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/*
 * Server-side Supabase client using the SERVICE ROLE key.
 * NEVER import this into a client component — the service-role key bypasses RLS.
 * Inserts run from the server action only.
 *
 * Returns null when env vars are absent so the app still runs locally for
 * review (the form falls back to email-only / log-only — see actions.ts).
 */
export function getServiceClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export const supabaseConfigured = (): boolean =>
  Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
