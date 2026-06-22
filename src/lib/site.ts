/*
 * Central site content + placeholders.
 *
 * ⚠️  OWNER: fill in every [BRACKETED] value before going live.
 * These are intentionally left visible (per build spec) rather than invented.
 * The tombstone YEARS in particular must be confirmed — do not guess.
 */

export const contact = {
  // Where broker submissions + general inquiries should reach you.
  email: "[CONTACT_EMAIL]",
  // Optional direct line for brokers. Leave as-is to hide it.
  phone: "[CONTACT_PHONE]",
  location: "Bend, Oregon",
};

export const hero = {
  wordmark: "BramPlan",
  eyebrow: "Pacific Northwest · Permanent Capital",
  // Carries forward the original site's strongest line — operator credibility.
  headline: "Business builders who have been there.",
  subhead:
    "We acquire and operate one exceptional Pacific Northwest business — and we hold it for the long run.",
  trustLine: "Founder-led. Proven closer. Permanent capital.",
};

// Social proof, surfaced early: the public acquirers our companies exited to.
export const trustBand = {
  label: "Companies we built have been acquired by",
  acquirers: [
    { name: "Polaris Industries", note: "NYSE: PII" },
    { name: "Cummins Inc.", note: "NYSE: CMI" },
    { name: "USWeb", note: "" },
  ],
};

// Big-number credibility band.
export const stats = [
  { value: "4", label: "Companies built, scaled & exited" },
  { value: "2", label: "Public-company acquirers" },
  { value: "1", label: "Business we'll buy and hold" },
  { value: "PNW", label: "Oregon · Washington · Idaho" },
];

/*
 * Track record "tombstones" — austere, identical M&A acquisition notices.
 * Maxperts (1996) and DreamMedia (1997, ~9 months before USWeb's IPO) are
 * confirmed. Brammo years (2015/2017) are pre-filled per the brief — confirm.
 * ELogic is an investment exit awaiting acquirer + year ([ELOGIC_*]).
 */
export type Tombstone = {
  company: string;
  descriptor?: string;
  acquirer: string;
  acquirerNote?: string;
  year: string;
  // Optional: drop an official logo SVG/PNG in /public/logos/ and set the path
  // here (e.g. "/logos/polaris.svg") to render it instead of the monogram.
  companyLogo?: string;
  acquirerLogo?: string;
};

export const tombstones: Tombstone[] = [
  {
    company: "Brammo",
    descriptor: "Electric Vehicles",
    companyLogo: "/logos/brammo.png",
    acquirer: "Polaris Industries",
    acquirerNote: "NYSE: PII",
    year: "[BRAMMO_2015]", // pre-filled 2015 in brief — confirm
  },
  {
    company: "Brammo Power",
    descriptor: "Powertrain & Battery Systems",
    companyLogo: "/logos/brammo-power.png",
    acquirer: "Cummins Inc.",
    acquirerNote: "NYSE: CMI",
    year: "[BRAMMO_2017]", // pre-filled 2017 in brief — confirm
  },
  {
    company: "DreamMedia",
    descriptor: "Web Technology & Agency",
    acquirer: "USWeb",
    acquirerNote: "9 months before IPO",
    year: "1997",
  },
  {
    company: "Maxperts, Inc.",
    descriptor: "Software & Hardware VAR",
    acquirer: "a private acquirer",
    year: "1996",
  },
  {
    company: "ELogic",
    descriptor: "Investment",
    acquirer: "[ELOGIC_ACQUIRER]", // who acquired ELogic? (owner to confirm)
    year: "[ELOGIC_YEAR]", // year ELogic sold (owner to confirm)
  },
];

// A "private acquirer" / generic / unconfirmed name gets a confidential mark,
// not a monogram. Detected by a leading article, a lowercase first letter, or
// an unfilled [PLACEHOLDER].
export function isConfidentialName(name: string): boolean {
  return (
    name.startsWith("[") ||
    /^(a |an |the )/i.test(name) ||
    name[0] === name[0]?.toLowerCase()
  );
}

// Derive a monogram (initials) from a company name for the tombstone logo tile.
export function monogram(name: string): string {
  const cleaned = name
    .replace(/,?\s+(Inc\.?|L\.?L\.?C\.?|Co\.?|Corp\.?|Ltd\.?)$/i, "")
    .trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length === 1) {
    // Single word: use internal capitals if present (DreamMedia -> DM,
    // USWeb -> US), otherwise a single initial (Brammo -> B).
    const caps = words[0].match(/[A-Z]/g);
    if (caps && caps.length >= 2) return caps.slice(0, 2).join("");
    return words[0][0]?.toUpperCase() ?? "";
  }
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export const founder = {
  eyebrow: "The Operator",
  heading: "You're dealing with someone who has sat on your side of the table.",
  name: "Craig Bramscher",
  role: "Founder, BramPlan",
  // Drop a headshot in /public (e.g. /founder.jpg) and set the path here.
  photo: "[FOUNDER_PHOTO]",
  bio: [
    "Craig founded and ran Brammo, the Oregon electric-vehicle company whose businesses were acquired by Polaris Industries and Cummins. Before that he built and sold companies — including DreamMedia, acquired by USWeb.",
    "He has been the founder preparing a company for sale, negotiating with public-company acquirers, and carrying a business through transition. BramPlan is where he now does the buying: acquiring and operating one exceptional Pacific Northwest business for the long run.",
  ],
  credentials: [
    "Multiple exits to public-company acquirers",
    "An operator, not just an investor — he runs what he buys",
    "Based in Bend, Oregon, focused on the Pacific Northwest",
  ],
  pullQuote:
    "I've built companies, scaled them, and sold them. Now I buy one — and hold it.",
};

export const dealBox = {
  ebitda: "$1.0M – $1.5M",
  geography:
    "Pacific Northwest (Oregon, Washington, Idaho — HQ in Bend, OR)",
  realEstate:
    "With or without — glad to acquire owner-occupied real estate or operate from a lease",
  // Smaller, muted "nice-to-haves". Editable defaults.
  niceToHaves: [
    "Owner planning a genuine transition",
    "Healthy, durable margins",
    "Recurring or repeatable revenue preferred",
    "Industry-agnostic (services, property management, light manufacturing, B2B)",
  ],
  reassurance:
    "If you're close on EBITDA or just outside the region, send it anyway — we'd rather see it.",
};

export const portfolio = [
  {
    name: "High Desert Property Management",
    location: "Bend, Oregon",
    blurb: "[HDPM_BLURB]", // 1–2 sentence public description — owner to provide
  },
];

export const brokerReasons = [
  {
    title: "Proven closer.",
    body: "Companies built and exited to public acquirers (Polaris, Cummins, USWeb).",
  },
  {
    title: "Operator-led.",
    body: "We run what we buy — clean transitions for owners and teams.",
  },
  {
    title: "Permanent capital.",
    body: "Not a fund on a clock. We hold and grow.",
  },
  {
    title: "Straightforward process.",
    body: "Serious LOIs, confidentiality respected, no games.",
  },
  {
    title: "Flexible structure.",
    body: "Cash, seller financing, with or without the real estate.",
  },
];

export const nav = [
  { label: "Track Record", href: "#track-record" },
  { label: "What We Buy", href: "#what-we-buy" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Founder", href: "#about" },
  { label: "For Brokers", href: "#for-brokers" },
];
