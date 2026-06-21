import { portfolio } from "@/lib/site";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-line">
      <div className="container-bp py-20 sm:py-28">
        <p className="eyebrow">Current Portfolio</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
          What we operate today
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolio.map((holding) => (
            <div
              key={holding.name}
              className="border border-line bg-paper p-8"
            >
              <h3 className="font-serif text-2xl font-semibold text-ink">
                {holding.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-muted">
                {holding.location}
              </p>
              <p className="mt-5 leading-relaxed text-ink-soft">
                {holding.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
