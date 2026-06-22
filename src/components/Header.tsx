"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Wordmark } from "@/components/Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-bp flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a href="#top" aria-label="BramPlan — home">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a href="#submit" className="btn btn-primary">
            Submit a Deal
            <span className="btn-arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 cursor-pointer p-2 text-ink md:hidden"
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
        <nav className="border-t border-line bg-cream md:hidden" aria-label="Mobile">
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
              className="btn btn-primary mt-2 mb-3 justify-center"
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
