import { trustBand } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function TrustBand() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-bp py-12 sm:py-14">
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">
            {trustBand.label}
          </p>
          <div className="flex flex-wrap items-baseline justify-center gap-x-12 gap-y-6">
            {trustBand.acquirers.map((a) => (
              <div key={a.name} className="flex items-baseline gap-2">
                <span className="font-serif text-xl font-medium text-ink sm:text-2xl">
                  {a.name}
                </span>
                {a.note && (
                  <span className="text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">
                    {a.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
