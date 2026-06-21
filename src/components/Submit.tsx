import { DealForm } from "@/components/DealForm";
import { Reveal } from "@/components/Reveal";

export function Submit() {
  return (
    <section id="submit" className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="dot-grid dot-grid-fade pointer-events-none absolute inset-0 opacity-[0.15]"
      />
      <div className="container-bp relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow">Submit a Deal</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-cream sm:text-5xl">
              Send us what you&rsquo;re working on.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/70">
              Held in strict confidence. Blind and coded submissions are welcome —
              send it even if it&rsquo;s early.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 border border-line-dark bg-cream p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] sm:p-10">
              <DealForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
