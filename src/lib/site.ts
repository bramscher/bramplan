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
  subhead:
    "We acquire and operate one exceptional Pacific Northwest business — and we hold it for the long run.",
  trustLine: "Founder-led. Proven closer. Permanent capital.",
};

/*
 * Track record "tombstones" — austere, identical M&A acquisition notices.
 * CONFIRM every year. Brammo years are pre-filled per the brief; the other
 * two are placeholders the owner must verify.
 */
export type Tombstone = {
  company: string;
  descriptor?: string;
  acquirer: string;
  acquirerNote?: string;
  year: string;
};

export const tombstones: Tombstone[] = [
  {
    company: "Brammo",
    descriptor: "Electric Vehicles",
    acquirer: "Polaris Industries",
    acquirerNote: "NYSE: PII",
    year: "[BRAMMO_2015]", // pre-filled 2015 in brief — confirm
  },
  {
    company: "Brammo Power",
    descriptor: "Powertrain & Battery Systems",
    acquirer: "Cummins Inc.",
    acquirerNote: "NYSE: CMI",
    year: "[BRAMMO_2017]", // pre-filled 2017 in brief — confirm
  },
  {
    company: "DreamMedia",
    acquirer: "USWeb",
    year: "[DREAMMEDIA_YEAR]", // confirm
  },
  {
    company: "Maxperts, Inc.",
    acquirer: "a private acquirer",
    year: "[MAXPERTS_YEAR]", // confirm
  },
];

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
  { label: "For Brokers", href: "#for-brokers" },
];
