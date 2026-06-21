import { contact, nav } from "@/lib/site";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-cream">
      <div className="container-bp py-16">
        <div className="grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              Founder-led, permanent-capital acquirer. We buy and operate one
              exceptional Pacific Northwest business — and hold it for the long run.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              All submissions are held in strict confidence.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5 text-sm">
            <p className="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
              Explore
            </p>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline w-fit text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm">
            <p className="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
              Contact
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="link-underline w-fit text-ink-soft transition-colors hover:text-bronze"
            >
              {contact.email}
            </a>
            {contact.phone && (
              <p className="mt-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="link-underline w-fit text-ink-soft transition-colors hover:text-bronze"
                >
                  {contact.phone}
                </a>
              </p>
            )}
            <p className="mt-2 text-ink-muted">{contact.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            &copy; {year} BramPlan. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">Bend, Oregon &middot; Pacific Northwest</p>
        </div>
      </div>
    </footer>
  );
}
