"use server";

import { Resend } from "resend";
import {
  dealSchema,
  parseMoney,
  type DealActionState,
  type DealInput,
} from "@/lib/validation";
import { getServiceClient } from "@/lib/supabase";

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Verified sender for Resend. Until a domain is verified, Resend's
// onboarding@resend.dev works for testing to the account owner's address.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "BramPlan <onboarding@resend.dev>";

export async function submitDeal(raw: DealInput): Promise<DealActionState> {
  const parsed = dealSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: DealActionState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof DealInput | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, error: "Please fix the highlighted fields.", fieldErrors };
  }

  const data = parsed.data;

  // Honeypot: a filled hidden field means a bot. Pretend success, store nothing.
  if (data.company_website && data.company_website.length > 0) {
    return { ok: true };
  }

  const row = {
    broker_name: data.brokerName,
    broker_firm: data.brokerFirm ?? null,
    broker_email: data.brokerEmail,
    broker_phone: data.brokerPhone ?? null,
    deal_name: data.dealName ?? null,
    location: data.location ?? null,
    industry: data.industry ?? null,
    annual_revenue: parseMoney(data.annualRevenue),
    ebitda: parseMoney(data.ebitda),
    includes_real_estate: data.includesRealEstate,
    asking_price: parseMoney(data.askingPrice),
    cim_url: data.cimUrl ?? null,
    notes: data.notes ?? null,
  };

  // 1) Persist to Supabase if configured. RLS allows inserts; service role here.
  const supabase = getServiceClient();
  if (supabase) {
    const { error } = await supabase.from("deal_submissions").insert(row);
    if (error) {
      console.error("[submitDeal] Supabase insert failed:", error.message);
      return {
        ok: false,
        error: "Something went wrong saving your submission. Please email us directly.",
      };
    }
  } else {
    console.warn(
      "[submitDeal] Supabase not configured — submission not persisted (local/dev).",
    );
  }

  // 2) Notify by email via Resend if configured.
  if (RESEND_API_KEY && NOTIFY_EMAIL) {
    try {
      const resend = new Resend(RESEND_API_KEY);
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        replyTo: data.brokerEmail,
        subject: `New deal submitted${data.dealName ? `: ${data.dealName}` : ""}`,
        text: dealEmailText(data),
      });
    } catch (err) {
      // Email failure shouldn't fail the submission if it was already stored.
      console.error("[submitDeal] Resend email failed:", err);
      if (!supabase) {
        return {
          ok: false,
          error: "We couldn't deliver your submission. Please email us directly.",
        };
      }
    }
  } else {
    console.warn(
      "[submitDeal] Resend not configured — no email sent (local/dev). Submission:",
      JSON.stringify(row, null, 2),
    );
  }

  return { ok: true };
}

function dealEmailText(d: DealInput): string {
  const line = (label: string, value?: string | boolean | null) => {
    if (value === undefined || value === null || value === "") return null;
    const v = typeof value === "boolean" ? (value ? "Yes" : "No") : value;
    return `${label}: ${v}`;
  };

  return [
    "New deal submission via bramplan.com",
    "----------------------------------------",
    line("Broker", d.brokerName),
    line("Firm", d.brokerFirm),
    line("Email", d.brokerEmail),
    line("Phone", d.brokerPhone),
    "",
    line("Deal name", d.dealName),
    line("Location", d.location),
    line("Industry", d.industry),
    line("Annual revenue", d.annualRevenue),
    line("EBITDA", d.ebitda),
    line("Real estate included", d.includesRealEstate),
    line("Asking price", d.askingPrice),
    line("Teaser / CIM", d.cimUrl),
    "",
    d.notes ? `Notes:\n${d.notes}` : null,
  ]
    .filter((l): l is string => l !== null)
    .join("\n");
}
