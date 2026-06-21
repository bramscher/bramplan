import { z } from "zod";

// Optional text → trimmed string or undefined (so empty fields don't store "").
const optionalText = z
  .string()
  .trim()
  .max(2000)
  .optional()
  .transform((v) => (v ? v : undefined));

// Optional money/number entered as free text ("$1.2M", "1200000", "1.2m").
// We keep the raw string for the email and parse a numeric best-effort for the DB.
const optionalMoney = z
  .string()
  .trim()
  .max(40)
  .optional()
  .transform((v) => (v ? v : undefined));

export const dealSchema = z.object({
  brokerName: z.string().trim().min(1, "Your name is required").max(120),
  brokerFirm: optionalText,
  brokerEmail: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email")
    .max(200),
  brokerPhone: optionalText,
  dealName: optionalText,
  location: optionalText,
  industry: optionalText,
  annualRevenue: optionalMoney,
  ebitda: optionalMoney,
  includesRealEstate: z.boolean().default(false),
  askingPrice: optionalMoney,
  cimUrl: z
    .string()
    .trim()
    .max(500)
    .optional()
    .transform((v) => (v ? v : undefined))
    .refine(
      (v) => !v || /^https?:\/\/.+/i.test(v),
      "Link must start with http:// or https://",
    ),
  notes: optionalText,
  // Honeypot — must stay empty. Bots fill it; humans never see it.
  company_website: z.string().max(0).optional().default(""),
});

// Form-side values (before zod transforms) vs. validated output (after).
export type DealValues = z.input<typeof dealSchema>;
export type DealInput = z.output<typeof dealSchema>;

export type DealActionState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof DealInput, string>>;
};

/**
 * Best-effort numeric parse from free-text money input.
 * "$1.2M" -> 1200000, "850k" -> 850000, "1,200,000" -> 1200000.
 * Returns null when nothing usable is present.
 */
export function parseMoney(input?: string): number | null {
  if (!input) return null;
  const cleaned = input.toLowerCase().replace(/[$,\s]/g, "");
  const match = cleaned.match(/^(\d+(?:\.\d+)?)(k|m|b)?$/);
  if (!match) {
    const n = Number(cleaned.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) && n > 0 ? n : null;
  }
  const value = parseFloat(match[1]);
  const mult =
    match[2] === "b"
      ? 1_000_000_000
      : match[2] === "m"
        ? 1_000_000
        : match[2] === "k"
          ? 1_000
          : 1;
  const result = value * mult;
  return Number.isFinite(result) && result > 0 ? result : null;
}
