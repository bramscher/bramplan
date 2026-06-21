-- BramPlan — broker deal submissions
-- Run this in the Supabase SQL editor for your project.
-- RLS is enabled with anon INSERT only (no anon SELECT) so submissions stay private.
-- The server action reads/writes via the service-role key, which bypasses RLS.

create table if not exists public.deal_submissions (
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

-- Allow anonymous inserts (the public form). No SELECT policy on purpose.
drop policy if exists "anon can insert deals" on public.deal_submissions;
create policy "anon can insert deals"
  on public.deal_submissions for insert
  to anon
  with check (true);

-- Review the pipeline in the Supabase dashboard (Table editor / SQL).
-- A password-protected admin page is out of scope for v1.
