import { tombstones, type Tombstone } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

function TombstoneCard({ t }: { t: Tombstone }) {
  return (
    <div className="group relative flex flex-col items-center border border-line bg-paper px-8 py-14 text-center transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-[0_20px_50px_-30px_rgba(15,26,35,0.45)]">
      {/* Corner ticks — austere tombstone framing */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-line transition-colors group-hover:border-bronze/60" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-line transition-colors group-hover:border-bronze/60" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-line transition-colors group-hover:border-bronze/60" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-line transition-colors group-hover:border-bronze/60" />

      <p className="font-serif text-2xl font-semibold text-ink sm:text-[1.7rem]">
        {t.company}
      </p>
      {t.descriptor && (
        <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
          {t.descriptor}
        </p>
      )}

      <p className="my-7 font-serif text-sm italic text-bronze">
        has been acquired by
      </p>

      <p className="font-serif text-2xl font-semibold text-ink sm:text-[1.7rem]">
        {t.acquirer}
      </p>
      {t.acquirerNote && (
        <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
          {t.acquirerNote}
        </p>
      )}

      <div className="mt-9 h-px w-10 bg-line" />
      <p className="mt-4 text-sm tracking-[0.1em] text-ink-soft">{t.year}</p>
    </div>
  );
}

export function TrackRecord() {
  return (
    <section id="track-record" className="border-b border-line">
      <div className="container-bp py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow">Track Record</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold text-ink sm:text-5xl">
            Built, scaled, and successfully exited.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            We&rsquo;ve been on the seller&rsquo;s side of the table — companies we
            founded and ran went on to public acquirers. We know what a clean exit
            takes.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {tombstones.map((t, i) => (
            <Reveal key={`${t.company}-${t.acquirer}`} delay={(i % 2) * 90}>
              <TombstoneCard t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
