# CLAUDE.md — BramPlan Site

This file orients Claude Code on first launch. Read `build-prompt.md` in this
folder for the full spec; this file is the quick brief + the rules that matter.

## What we're building
A fast, credible marketing site called **BramPlan**, aimed at **business brokers
and M&A intermediaries** in the Pacific Northwest. Its job: (1) establish
credibility via an exit track record, (2) state acquisition criteria clearly,
(3) make it easy for brokers to submit a deal.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (Postgres) for broker deal submissions
- react-hook-form + zod for the form
- Resend for the "new deal submitted" email alert
- Deploy: Vercel

## How to start
1. Scaffold a Next.js app **in this directory**: `npx create-next-app@latest .`
   (TypeScript, App Router, Tailwind = yes). If it objects to the existing
   `.md` files, move them into a `/docs` folder, scaffold, then continue.
2. Build the site exactly per `build-prompt.md` — it contains all section copy,
   the deal box, the tombstones, the Supabase schema, and the env vars.
3. Run it locally so the owner can review before anything is deployed.

## Hard rules
- **Never** put internal financials on this public site: no HDPM EBITDA, no
  manufacturing/SBA strategy, no door-count targets. Public visitors see track
  record + acquisition box + how to make contact. That's it.
- Tombstones must look austere and identical to each other — credibility comes
  from restraint, not flashiness.
- Deal-submission inserts happen in a **server action**; never expose the
  Supabase service-role key client-side. Enable RLS (anon INSERT only, no anon
  SELECT) so submissions stay private.
- Several values in `build-prompt.md` are `[BRACKETED]` placeholders the owner
  must confirm (contact info, two tombstone years). Leave them clearly visible /
  TODO-commented rather than inventing values — especially the deal years.

## Design feel
Lower-middle-market private equity / search fund: calm, permanent, trustworthy.
Deep navy or charcoal + warm cream + one restrained accent (muted bronze or
forest green). Refined serif headlines, clean sans body. Lots of whitespace.
