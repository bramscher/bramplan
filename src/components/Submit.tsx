import { DealForm } from "@/components/DealForm";

export function Submit() {
  return (
    <section id="submit" className="bg-ink">
      <div className="container-bp py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Submit a Deal</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">
            Send us what you&rsquo;re working on
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-cream/70">
            Held in strict confidence. Blind and coded submissions are welcome.
          </p>

          <div className="mt-2 rounded-sm border border-line-dark bg-cream p-8 sm:p-10">
            <DealForm />
          </div>
        </div>
      </div>
    </section>
  );
}
