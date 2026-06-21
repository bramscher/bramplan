import { tombstones, type Tombstone } from "@/lib/site";

function TombstoneCard({ t }: { t: Tombstone }) {
  return (
    <div className="flex flex-col items-center border border-line bg-paper px-8 py-12 text-center">
      <p className="font-serif text-2xl font-semibold text-ink">{t.company}</p>
      {t.descriptor && (
        <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-ink-muted">
          {t.descriptor}
        </p>
      )}

      <p className="my-6 font-serif text-sm italic text-bronze">
        has been acquired by
      </p>

      <p className="font-serif text-2xl font-semibold text-ink">{t.acquirer}</p>
      {t.acquirerNote && (
        <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-ink-muted">
          {t.acquirerNote}
        </p>
      )}

      <div className="mt-8 h-px w-10 bg-line" />
      <p className="mt-4 text-sm tracking-wide text-ink-soft">{t.year}</p>
    </div>
  );
}

export function TrackRecord() {
  return (
    <section id="track-record" className="border-b border-line">
      <div className="container-bp py-20 sm:py-28">
        <p className="eyebrow">Track Record</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink sm:text-4xl">
          Companies we&rsquo;ve built, scaled, and successfully exited.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {tombstones.map((t) => (
            <TombstoneCard key={`${t.company}-${t.acquirer}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
