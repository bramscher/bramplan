@AGENTS.md

# BramPlan Site — project brief

A single-page marketing site for **BramPlan**, aimed at **business brokers and
M&A intermediaries** in the Pacific Northwest. Job: credibility (exit track
record) → clarity (acquisition criteria) → easy contact (submit a deal).

Full original brief lives in [`docs/`](docs/): `CLAUDE.md`, `build-prompt.md`,
`START-HERE.md`.

## Stack
Next.js 16 (App Router) + TypeScript · Tailwind CSS v4 · Supabase (Postgres) ·
react-hook-form + zod · Resend (email) · Vercel.

> Note: form UI is hand-built (not shadcn/ui as the original brief listed) to
> avoid shadcn init friction on Tailwind v4 + React 19. Same look, fewer deps.

## Where things live
- `src/lib/site.ts` — **all copy + every `[BRACKETED]` placeholder** (single source).
- `src/lib/validation.ts` — zod schema + money parsing for the deal form.
- `src/lib/supabase.ts` — server-only service-role client (degrades to null w/o env).
- `src/app/actions.ts` — `submitDeal` server action (validate → Supabase → Resend).
- `src/components/*` — section components (Header, Hero, TrackRecord, DealBox, …).
- `supabase/schema.sql` — table + RLS policy to run in Supabase.

## Hard rules (carried from the brief)
- **Never** publish internal financials: no HDPM EBITDA, no manufacturing/SBA
  strategy, no door-count targets. Public = track record + criteria + contact.
- Tombstones stay austere and identical — credibility from restraint.
- Inserts run in the **server action**; the service-role key is never exposed
  client-side. RLS = anon INSERT only, no anon SELECT.
- Leave `[BRACKETED]` placeholders visible until the owner confirms them —
  **especially the tombstone years**. Don't invent values.

## Run
```
npm run dev     # http://localhost:3000  (runs without env vars; form logs to console)
npm run build   # type-check + production build
```
Copy `.env.example` → `.env.local` and fill in to enable real storage + email.
