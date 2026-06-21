# START HERE — BramPlan site

This folder is a Claude Code project, ready to build. You do the last step.

## Open it in Claude Code
- **Desktop app:** open Claude Code and choose this folder
  (`/Volumes/UserDrive/Craig/Documents/bramplan-site`) as the project.
- **Terminal:** `cd /Volumes/UserDrive/Craig/Documents/bramplan-site` then `claude`

When it opens, Claude Code automatically reads `CLAUDE.md` and knows the plan.

## First message to paste into Claude Code
> Read CLAUDE.md and build-prompt.md, then scaffold and build the BramPlan site.
> Run it locally so I can review before we deploy. Leave the [BRACKETED]
> placeholders visible — I'll fill them in.

## Fill these in before it goes live
- `[CONTACT_EMAIL]`, `[CONTACT_PHONE]`, `[NOTIFY_EMAIL]`
- The two tombstone years you need to confirm: DreamMedia→USWeb and
  Maxperts→(private). Brammo/Polaris (2015) and Brammo/Cummins (2017) are
  pre-filled — confirm those too.
- `[HDPM_BLURB]` — a public 1–2 sentence description of High Desert PM.

## Account setup order (each has a free tier that covers this)
1. **Supabase** — create a project, run the SQL in `build-prompt.md`, copy the
   URL + anon key + service-role key into env vars.
2. **Resend** — create an API key for the deal-alert email.
3. **GitHub** — Claude Code will push the repo here.
4. **Vercel** — import the GitHub repo, paste the same env vars, deploy.

## Files in this folder
- `CLAUDE.md` — the brief Claude Code reads on launch
- `build-prompt.md` — the full spec (copy, deal box, tombstones, schema, env)
- `START-HERE.md` — this file
