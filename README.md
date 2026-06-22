# BramPlan

Marketing site for **BramPlan** — a founder-led, permanent-capital acquirer in
Bend, Oregon. Built for **business brokers and M&A intermediaries** in the
Pacific Northwest: it establishes credibility (exit track record), states
acquisition criteria plainly, and makes it easy to submit a deal in confidence.

Single landing page + a `/thank-you` confirmation. **"Electric Slate"** aesthetic:
dark charcoal base, off-white text, an electric-blue accent, and high-contrast
Playfair Display headlines — a modern, tech-forward nod to the founder's EV
heritage. The Tailwind theme tokens (`ink`/`cream`/`paper`/`bronze`/`line` in
`globals.css`) are re-valued for this dark scheme; `bronze` is the electric-blue
accent (name kept to avoid churn).

## Stack
- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Supabase** (Postgres) — private deal-submission storage
- **react-hook-form** + **zod** — the deal form
- **Resend** — "new deal submitted" email alert
- Deploy on **Vercel**

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in (optional for local review — see below)
npm run dev                  # http://localhost:3000
```

The site **runs without any environment variables**. In that mode the deal form
validates and redirects to `/thank-you`, and submissions are logged to the
server console (not saved or emailed). Add env vars to enable real storage +
email.

## Before it goes live — fill these in

All copy and placeholders live in **`src/lib/site.ts`**. Search for `[` to find
every placeholder:

| Placeholder | What to put |
|---|---|
| `[CONTACT_EMAIL]` | Email for broker submissions + inquiries |
| `[CONTACT_PHONE]` | Optional direct line (leave as-is to hide) |
| `[BRAMMO_2015]` / `[BRAMMO_2017]` | Confirm the two Brammo exit years (2015 / 2017) |
| `[DREAMMEDIA_YEAR]` | Year DreamMedia was acquired by USWeb — **confirm** |
| `[MAXPERTS_YEAR]` | Year Maxperts, Inc. was acquired — **confirm** |
| `[HDPM_BLURB]` | 1–2 sentence public description of High Desert Property Management |

> ⚠️ Don't guess the tombstone years — confirm them. Tombstone credibility
> depends on accuracy.

**Never put internal financials on this public site** — no EBITDA figures,
no manufacturing/SBA strategy, no door-count targets.

## Environment variables

See `.env.example`. Summary:

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key (safe client-side; RLS = insert-only) |
| `SUPABASE_SERVICE_ROLE_KEY` | **Server-only.** Used by the insert. Never expose. |
| `RESEND_API_KEY` | Resend API key for the email alert |
| `NOTIFY_EMAIL` | Where the "new deal" alert is sent |
| `RESEND_FROM_EMAIL` | Verified sender (defaults to Resend test sender) |
| `NEXT_PUBLIC_SITE_URL` | Canonical/OG base URL (e.g. `https://bramplan.com`) |

## Supabase setup
1. Create a Supabase project.
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the SQL editor. It creates
   `public.deal_submissions` and enables RLS (anon **INSERT** only — no anon
   SELECT, so submissions stay private).
3. Copy the URL, anon key, and service-role key into your env vars.
4. Review incoming deals in the Supabase Table editor (a password-protected
   admin page is out of scope for v1).

## Email setup (Resend)
1. Create a Resend API key.
2. Set `RESEND_API_KEY` and `NOTIFY_EMAIL`.
3. For production, verify your domain in Resend and set `RESEND_FROM_EMAIL`
   (e.g. `BramPlan <deals@bramplan.com>`). Until then it uses Resend's test
   sender, which only delivers to the account owner's address.

## Deploy (Vercel)
1. Push to GitHub.
2. Import the repo in Vercel.
3. Add all env vars from `.env.example`.
4. Deploy. Run `npm run build` locally first to confirm a clean build.

## Project layout
```
src/
  app/
    page.tsx          # landing page (assembles sections)
    thank-you/        # post-submit confirmation (noindex)
    actions.ts        # submitDeal server action
    layout.tsx        # fonts, metadata, OG
    globals.css       # Tailwind v4 theme (colors, type, motifs)
  components/         # Header, Hero, TrackRecord, DealBox, Portfolio,
                      # ForBrokers, Submit, DealForm, Footer
  lib/
    site.ts           # ALL copy + [BRACKETED] placeholders
    validation.ts     # zod schema + money parsing
    supabase.ts       # server-only service-role client
supabase/schema.sql   # table + RLS policy
docs/                 # original build brief

npm run build   # type-check + production build
npm run lint    # eslint
```
