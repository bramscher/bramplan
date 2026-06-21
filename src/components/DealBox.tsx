import { dealBox } from "@/lib/site";

function Criterion({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line-dark py-6 first:border-t-0 first:pt-0 sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
      <dt className="text-xs uppercase tracking-[0.18em] text-bronze">
        {label}
      </dt>
      <dd className="mt-1 text-lg leading-relaxed text-cream sm:mt-0">
        {value}
      </dd>
    </div>
  );
}

export function DealBox() {
  return (
    <section id="what-we-buy" className="bg-ink">
      <div className="container-bp py-20 sm:py-28">
        <p className="eyebrow">What We Buy</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">
          Our acquisition criteria
        </h2>

        <div className="mt-12 border border-line-dark bg-ink-soft/15 p-8 sm:p-12">
          <dl>
            <Criterion label="EBITDA" value={dealBox.ebitda} />
            <Criterion label="Geography" value={dealBox.geography} />
            <Criterion label="Real estate" value={dealBox.realEstate} />
          </dl>

          <div className="mt-10 border-t border-line-dark pt-8">
            <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
              Also nice to have
            </p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-cream/70 sm:grid-cols-2">
              {dealBox.niceToHaves.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-bronze">
                    &middot;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-2xl font-serif text-lg italic text-cream/80">
          {dealBox.reassurance}
        </p>
      </div>
    </section>
  );
}
