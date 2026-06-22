import { brokerReasons } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

// Restrained line icons — one per reason, in source order.
const icons = [
  <path key="i" d="M5 13l4 4L19 7" />, // Proven closer — check
  <path
    key="i"
    d="M14.5 4.5a3.5 3.5 0 00-4.6 4.6L4 15v3h3l5.9-5.9a3.5 3.5 0 004.6-4.6l-2.3 2.3-1.8-1.8 2.1-2.5z"
  />, // Operator-led — wrench
  <path
    key="i"
    d="M3 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm6 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z"
  />, // Permanent capital — infinity
  <path key="i" d="M7 3h7l4 4v14H7zM14 3v4h4M9.5 14l1.5 1.5L15 12" />, // Straightforward — doc check
  <path key="i" d="M4 8h16M4 16h16M9 8V5m0 6V8m6 8v-3m0-3v3" />, // Flexible — sliders
];

export function ForBrokers() {
  return (
    <section id="for-brokers" className="border-b border-line bg-cream">
      <div className="container-bp py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow">For Brokers</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold text-ink sm:text-5xl">
            Why work with BramPlan.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {brokerReasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 70}>
              <div className="flex h-full flex-col gap-4 bg-paper p-8 transition-colors duration-300 hover:bg-[#1c232d]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-bronze"
                  aria-hidden="true"
                >
                  {icons[i]}
                </svg>
                <p className="leading-relaxed text-ink-soft">
                  <span className="block font-serif text-lg font-medium text-ink">
                    {reason.title}
                  </span>
                  <span className="mt-1 block">{reason.body}</span>
                </p>
              </div>
            </Reveal>
          ))}

          {/* Filler cell to complete the grid on lg (5 reasons + 1) — electric CTA */}
          <div className="hidden bg-bronze p-8 lg:flex lg:flex-col lg:justify-center">
            <p className="font-serif text-xl italic leading-snug text-[#07111c]">
              One good deal is all it takes.
            </p>
            <a
              href="#submit"
              className="link-underline mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#07111c]"
            >
              Submit a Deal
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
