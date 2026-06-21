import { contact } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-cream">
      <div className="container-bp py-12">
        <div className="flex flex-col gap-8 border-t border-line pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-ink">BramPlan</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              All submissions are held in strict confidence.
            </p>
          </div>

          <div className="text-sm text-ink-soft">
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-bronze"
              >
                {contact.email}
              </a>
            </p>
            {contact.phone && (
              <p className="mt-1">
                <a
                  href={`tel:${contact.phone}`}
                  className="transition-colors hover:text-bronze"
                >
                  {contact.phone}
                </a>
              </p>
            )}
            <p className="mt-1 text-ink-muted">{contact.location}</p>
          </div>
        </div>

        <p className="mt-10 text-xs text-ink-muted">
          &copy; {year} BramPlan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
