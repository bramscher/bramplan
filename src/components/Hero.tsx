import { hero } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="contour border-b border-line">
      <div className="container-bp py-24 sm:py-32 md:py-40">
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl font-semibold tracking-tight text-ink sm:text-7xl md:text-8xl">
            BramPlan
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            {hero.subhead}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#submit"
              className="inline-flex items-center justify-center rounded-sm bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-ink-soft"
            >
              Submit a Deal
            </a>
            <a
              href="#track-record"
              className="inline-flex items-center justify-center rounded-sm border border-ink/25 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink/5"
            >
              See Our Track Record
            </a>
          </div>

          <p className="eyebrow mt-12">{hero.trustLine}</p>
        </div>
      </div>
    </section>
  );
}
