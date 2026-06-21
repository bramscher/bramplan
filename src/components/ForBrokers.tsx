import { brokerReasons } from "@/lib/site";

// Restrained line icons — one per reason, in source order.
const icons = [
  // Proven closer — checkmark seal
  <path key="i" d="M5 13l4 4L19 7" />,
  // Operator-led — gear-ish / wrench
  <path key="i" d="M14.5 4.5a3.5 3.5 0 00-4.6 4.6L4 15v3h3l5.9-5.9a3.5 3.5 0 004.6-4.6l-2.3 2.3-1.8-1.8 2.1-2.5z" />,
  // Permanent capital — anchor / infinity
  <path
    key="i"
    d="M3 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm6 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z"
  />,
  // Straightforward process — document with check
  <path
    key="i"
    d="M7 3h7l4 4v14H7zM14 3v4h4M9.5 14l1.5 1.5L15 12"
  />,
  // Flexible structure — adjustable sliders
  <path key="i" d="M4 8h16M4 16h16M9 8V5m0 6V8m6 8v-3m0-3v3" />,
];

export function ForBrokers() {
  return (
    <section id="for-brokers" className="bg-paper border-b border-line">
      <div className="container-bp py-20 sm:py-28">
        <p className="eyebrow">For Brokers</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink sm:text-4xl">
          Why work with BramPlan
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {brokerReasons.map((reason, i) => (
            <div key={reason.title} className="flex gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0 text-bronze"
                aria-hidden="true"
              >
                {icons[i]}
              </svg>
              <p className="leading-relaxed text-ink-soft">
                <span className="font-medium text-ink">{reason.title}</span>{" "}
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
