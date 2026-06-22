import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your deal submission has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-32">
      <div className="max-w-lg text-center">
        <p className="eyebrow">BramPlan</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
          Thank you
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          We&rsquo;ve received your deal and will be in touch shortly. Everything
          you sent is held in strict confidence.
        </p>
        <Link
          href="/"
          className="btn btn-outline mt-10"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
