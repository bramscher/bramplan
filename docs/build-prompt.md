# BramPlan — Build Spec

> The full content brief Claude Code follows. `CLAUDE.md` is the quick brief;
> this is the detail. Fill the `[BRACKETED]` placeholders before launch.

---

## ⚠️ Placeholders to fill

| Placeholder | What to put |
|---|---|
| `[CONTACT_EMAIL]` | Email broker submissions + inquiries go to |
| `[CONTACT_PHONE]` | Direct line for brokers (optional) |
| `[NOTIFY_EMAIL]` | Where the "new deal submitted" alert is sent (can = CONTACT_EMAIL) |
| `[DREAMMEDIA_YEAR]` | Year DreamMedia was acquired by USWeb (confirm) |
| `[MAXPERTS_YEAR]` | Year Maxperts, Inc. was acquired (confirm) |
| `[HDPM_BLURB]` | 1–2 sentence public description of High Desert Property Management |
| `[BRAMMO_2015]` / `[BRAMMO_2017]` | Pre-filled 2015 / 2017 — confirm both |
| Logo / wordmark | Drop in `/public`, or use a clean type-based wordmark |

**Never on the public site:** HDPM EBITDA, the manufacturing/SBA strategy, door
targets, or any internal financials.

---

## Audience & goal
Audience: **business brokers and M&A intermediaries**, Pacific Northwest.
Goal: credibility (track record) → clarity (the box) → easy contact (submit).

## Tech stack
Next.js (App Router) + TypeScript · Tailwind + shadcn/ui · Supabase (Postgres) ·
react-hook-form + zod · Resend for email · deploy on Vercel. Accessible (WCAG
AA), responsive, Lighthouse 95+.

## Design direction
Lower-middle-market PE / search-fund feel: calm, permanent, trustworthy.
- Palette: deep navy/charcoal primary; warm off-white/cream background; one
  restrained accent (muted bronze/gold or deep forest green). No bright colors.
- Type: refined serif headlines (Fraunces, Libre Caslon, or Source Serif) +
  clean sans body (Inter or Geist).
- Layout: generous whitespace, ~1100px max-width, thin dividers, no stock-photo
  clutter. A quiet topographic/contour motif behind one section is welcome.
- Copy tone: confident, plain-spoken, operator-to-owner. No hype.

## Pages / sections (single landing page + a thank-you page)

**1. Sticky header** — wordmark **BramPlan** left; anchor links: Track Record,
What We Buy, Portfolio, For Brokers; primary button **Submit a Deal**.

**2. Hero** — Headline (serif, large): **BramPlan**. Subhead: *We acquire and
operate one exceptional Pacific Northwest business — and we hold it for the long
run.* CTAs: **Submit a Deal** (primary) and **See Our Track Record**. Trust line:
*Founder-led. Proven closer. Permanent capital.*

**3. Track Record — "Tombstones"** — heading **Track Record**; intro *Companies
we've built, scaled, and successfully exited.* Render each as a classic M&A
tombstone card: austere, centered, thin border, serif type, *"has been acquired
by"* in small-caps italic between the names, year beneath. Grid: 2-up desktop,
1-up mobile. Use these four (confirm details):

1. **Brammo** *(Electric Vehicles)* — has been acquired by — **Polaris
   Industries** *(NYSE: PII)* — **[BRAMMO_2015]**
2. **Brammo Power** *(Powertrain & Battery Systems)* — has been acquired by —
   **Cummins Inc.** *(NYSE: CMI)* — **[BRAMMO_2017]**
3. **DreamMedia** — has been acquired by — **USWeb** — **[DREAMMEDIA_YEAR]**
4. **Maxperts, Inc.** — has been acquired by — **a private acquirer** —
   **[MAXPERTS_YEAR]**

**4. What We Buy — the "Deal Box"** — a single prominent bordered panel,
scannable in 5 seconds:
- **EBITDA:** $1.0M – $1.5M
- **Geography:** Pacific Northwest *(Oregon, Washington, Idaho — HQ in Bend, OR)*
- **Real estate:** With or without — glad to acquire owner-occupied real estate
  or operate from a lease

Secondary "nice-to-haves" (smaller, muted — **editable defaults**): owner
planning a genuine transition; healthy durable margins; recurring/repeatable
revenue preferred; industry-agnostic (services, property management, light
manufacturing, B2B). Reassurance line: *If you're close on EBITDA or just
outside the region, send it anyway — we'd rather see it.*

**5. Current Portfolio** — heading **Current Portfolio**; one card:
**High Desert Property Management** — Bend, Oregon — `[HDPM_BLURB]`. Layout ready
to accept more holdings later.

**6. For Brokers — why work with BramPlan** — icon + one line each:
- **Proven closer.** Companies built and exited to public acquirers (Polaris,
  Cummins, USWeb).
- **Operator-led.** We run what we buy — clean transitions for owners and teams.
- **Permanent capital.** Not a fund on a clock. We hold and grow.
- **Straightforward process.** Serious LOIs, confidentiality respected, no games.
- **Flexible structure.** Cash, seller financing, with or without the real estate.

**7. Submit a Deal (form)** — heading **Submit a Deal**; sub *Held in strict
confidence. Blind/coded submissions welcome.* Fields: Your name (req), Firm,
Email (req), Phone, Deal name (blind ok), Location, Industry, Annual revenue,
EBITDA, Real estate included? (toggle), Asking price, Link to teaser/CIM, Notes.
On submit: zod validate → insert into Supabase → Resend email to `[NOTIFY_EMAIL]`
→ redirect to `/thank-you`. Hidden honeypot field for spam. Inline errors +
button loading state.

**8. Footer** — *All submissions are held in strict confidence.* Contact:
`[CONTACT_EMAIL]`, `[CONTACT_PHONE]`, Bend, Oregon. © BramPlan + current year.

**9. /thank-you** — centered confirmation: *Thanks — we've received your deal and
will be in touch shortly.* Link home.

## Supabase schema

```sql
create table public.deal_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  broker_name text not null,
  broker_firm text,
  broker_email text not null,
  broker_phone text,
  deal_name text,
  location text,
  industry text,
  annual_revenue numeric,
  ebitda numeric,
  includes_real_estate boolean,
  asking_price numeric,
  cim_url text,
  notes text,
  status text not null default 'new'  -- new | reviewing | passed | pursuing
);

alter table public.deal_submissions enable row level security;

create policy "anon can insert deals"
  on public.deal_submissions for insert
  to anon
  with check (true);
-- No anon SELECT policy on purpose — submissions stay private.
```

Insert from a server action. Never expose the service-role key client-side. The
anon key is fine client-side because RLS only permits INSERT. Review the pipeline
in the Supabase dashboard (a password-protected admin page is out of scope for v1).

## Env vars
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=     # server-only
RESEND_API_KEY=
NOTIFY_EMAIL=[NOTIFY_EMAIL]
```

## Build order
1. Scaffold Next.js + Tailwind + shadcn/ui; set color/type theme.
2. Build static sections 1–6 with the real copy above.
3. Supabase client + schema, then the form (section 7) via server action + zod.
4. Resend notification + `/thank-you` + honeypot.
5. Polish: responsiveness, focus states, metadata/OG, favicon, Lighthouse.
6. README with setup + env instructions.

## Simpler v1 (no database)
Drop Supabase; have the server action send the submission via Resend only to
`[NOTIFY_EMAIL]`. You lose the searchable pipeline but ship faster; the UI is
unchanged and the DB can be added later.
