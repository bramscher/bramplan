import { dealBox } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function DealBox() {
  const rows = [
    { n: "01", label: "EBITDA", value: dealBox.ebitda },
    { n: "02", label: "Geography", value: dealBox.geography },
    { n: "03", label: "Real estate", value: dealBox.realEstate },
  ];

  return (
    <section id="what-we-buy" className="relative overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="dot-grid dot-grid-fade pointer-events-none absolute inset-0 opacity-[0.18]"
      />
      <div className="container-bp relative py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow">What We Buy</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold text-ink sm:text-5xl">
            Our acquisition criteria, in five seconds.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 border border-line-dark bg-white/[0.03] backdrop-blur-sm">
            <dl>
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-2 border-b border-line-dark px-7 py-8 transition-colors last:border-b-0 hover:bg-white/[0.03] sm:grid-cols-[3.5rem_180px_1fr] sm:items-baseline sm:gap-8 sm:px-10"
                >
                  <span className="font-serif text-sm text-bronze-soft/70">
                    {row.n}
                  </span>
                  <dt className="text-xs uppercase tracking-[0.2em] text-bronze-soft">
                    {row.label}
                  </dt>
                  <dd className="text-lg leading-relaxed text-ink sm:text-xl">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                Also nice to have
              </p>
              <ul className="mt-4 grid gap-x-10 gap-y-2.5 text-sm text-ink/70 sm:grid-cols-2">
                {dealBox.niceToHaves.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-12 max-w-2xl border-l-2 border-bronze pl-5 font-serif text-xl italic leading-relaxed text-ink/85">
            {dealBox.reassurance}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
