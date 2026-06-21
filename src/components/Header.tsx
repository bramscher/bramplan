"use client";

import { useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-sm">
      <div className="container-bp flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-tight text-ink"
        >
          BramPlan
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#submit"
            className="rounded-sm bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-ink-soft"
          >
            Submit a Deal
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-cream md:hidden"
          aria-label="Mobile"
        >
          <div className="container-bp flex flex-col py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-sm text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#submit"
              className="mt-2 mb-3 rounded-sm bg-ink px-4 py-3 text-center text-sm font-medium text-cream"
              onClick={() => setOpen(false)}
            >
              Submit a Deal
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
