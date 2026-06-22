import { stats } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Stats() {
  return (
    <section className="border-b border-line-dark bg-paper">
      <div className="container-bp py-16 sm:py-20">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center sm:text-left">
              <dt className="font-serif text-5xl font-semibold text-bronze-soft sm:text-6xl">
                {stat.value}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-ink/65">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
