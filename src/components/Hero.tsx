import { hero } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* Dot-grid motif — modern nod to the original pixelated wordmark */}
      <div
        aria-hidden="true"
        className="dot-grid dot-grid-fade pointer-events-none absolute inset-0 opacity-70"
      />
      {/* Warm light bloom, top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-bronze)_12%,transparent),transparent_70%)]"
      />

      <div className="container-bp relative py-28 sm:py-36 md:py-44">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow">{hero.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-serif font-semibold leading-[0.92] tracking-tight text-ink text-[clamp(3.5rem,11vw,9rem)]">
              BramPlan
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl font-serif text-2xl italic leading-snug text-bronze-soft sm:text-3xl">
              {hero.headline}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {hero.subhead}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#submit" className="btn btn-primary">
                Submit a Deal
                <span className="btn-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
              <a
                href="#track-record"
                className="btn btn-outline"
              >
                See Our Track Record
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <p className="eyebrow mt-14">{hero.trustLine}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
