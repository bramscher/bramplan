import { founder } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  const hasPhoto = founder.photo && !founder.photo.startsWith("[");

  return (
    <section id="about" className="border-b border-line bg-cream">
      <div className="container-bp py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          {/* Portrait */}
          <Reveal>
            <figure className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-paper">
                {hasPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={founder.photo}
                    alt={`${founder.name}, ${founder.role}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="dot-grid dot-grid-fade flex h-full w-full items-center justify-center">
                    <span className="font-serif text-7xl font-semibold text-bronze/40">
                      CB
                    </span>
                    <span className="absolute bottom-4 left-0 right-0 text-center text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
                      Founder photo
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="mt-4">
                <p className="font-serif text-xl font-semibold text-ink">
                  {founder.name}
                </p>
                <p className="mt-0.5 text-sm text-ink-muted">{founder.role}</p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Narrative */}
          <div>
            <Reveal>
              <p className="eyebrow">{founder.eyebrow}</p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                {founder.heading}
              </h2>
            </Reveal>

            <div className="mt-7 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
              {founder.bio.map((para, i) => (
                <Reveal key={i} delay={80 + i * 60}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={220}>
              <blockquote className="mt-10 max-w-2xl border-l-2 border-bronze pl-5 font-serif text-2xl italic leading-snug text-ink">
                &ldquo;{founder.pullQuote}&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={280}>
              <ul className="mt-10 grid max-w-2xl gap-x-8 gap-y-3 sm:grid-cols-2">
                {founder.credentials.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-ink-soft">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-bronze"
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
