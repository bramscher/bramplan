import { portfolio } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-line">
      <div className="container-bp py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow">Current Portfolio</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
            What we operate today.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolio.map((holding, i) => (
            <Reveal key={holding.name} delay={i * 90}>
              <div className="group h-full border border-line bg-paper p-9 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-[0_20px_50px_-30px_rgba(15,26,35,0.45)]">
                <div className="flex items-center justify-between">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze">
                    Operating
                  </p>
                  <span className="h-2 w-2 rounded-full bg-bronze" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-ink sm:text-3xl">
                  {holding.name}
                </h3>
                <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                  {holding.location}
                </p>
                <p className="mt-5 leading-relaxed text-ink-soft">{holding.blurb}</p>
              </div>
            </Reveal>
          ))}

          {/* Quiet "room to grow" placeholder card */}
          <Reveal delay={portfolio.length * 90}>
            <div className="flex h-full min-h-[14rem] flex-col items-center justify-center border border-dashed border-line p-9 text-center">
              <p className="font-serif text-lg italic text-ink-muted">
                Room for one more.
              </p>
              <p className="mt-2 max-w-xs text-sm text-ink-muted">
                We hold what we buy and add deliberately — one exceptional business
                at a time.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
