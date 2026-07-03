import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, TrendingDown, IndianRupee, Gauge, Sprout, ArrowDown } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CementComparison, VolumeScale } from "@/components/research-viz";
import { CTA } from "@/components/cta";
import { research } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Our patent-pending approach to small-volume, low-cement concrete: professional-grade strength in the quantities small projects actually need, with a fraction of the cement and carbon.",
};

const benefitIcons = [TrendingDown, IndianRupee, Gauge, Sprout];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow={`${research.badge} · Research & Development`}
        title={<>The next thing we&rsquo;re building is&nbsp;<span className="text-gradient-gold">better concrete.</span></>}
        intro={research.lede}
        image="/generated/concrete-cylinders.jpg"
      />

      {/* headline numbers */}
      <section className="border-b border-line py-16">
        <div className="wrap grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {[
            { big: `≈${research.cementSaved} kg`, small: `less cement per m³ vs. hand-mixed` },
            { big: `${research.minVolume}–${research.maxSmallVolume} m³`, small: "quality concrete in small volumes" },
            { big: research.grade, small: "grade strength — fully retained" },
          ].map((c, i) => (
            <Reveal key={c.small} i={i} className="bg-ink p-8 text-center sm:text-left">
              <div className="font-display text-4xl font-bold text-gradient-gold sm:text-5xl">{c.big}</div>
              <div className="mt-3 text-sm text-fog">{c.small}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* problem */}
      <section className="py-24 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Reveal><span className="eyebrow">01 · The problem</span></Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">A gap between big supply and small need</h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              {research.problem.map((p, i) => (
                <Reveal key={i} i={i}>
                  <div className="flex gap-4">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <p className="text-base leading-relaxed text-fog">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal i={1}>
            <VolumeScale />
          </Reveal>
        </div>
      </section>

      {/* insight */}
      <section className="border-y border-line bg-ink-2 py-24 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal className="lg:order-2">
            <CementComparison />
          </Reveal>
          <div className="lg:order-1">
            <Reveal><span className="eyebrow">02 · The insight</span></Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                The same strength — with almost{" "}
                <span className="text-gradient-gold">half the cement.</span>
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-6 text-base leading-relaxed text-fog sm:text-lg">{research.insight}</p>
            </Reveal>
            <Reveal i={3}>
              <div className="mt-8 flex items-center gap-3 text-sm text-fog-dim">
                <ArrowDown className="h-4 w-4 text-gold" />
                Less cement, engineered — not less strength.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* solution */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <Image src="/generated/cement-sustainability.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-ink/60" />
        <div className="wrap relative max-w-3xl">
          <Reveal><span className="eyebrow">03 · The solution</span></Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl md:text-[2.6rem]">
              Professional concrete, in the sizes small projects actually order.
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-6 text-base leading-relaxed text-fog sm:text-lg">{research.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* benefits */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className="wrap">
          <Reveal><span className="eyebrow">04 · Why it matters</span></Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Cheaper to build, consistent in quality, kinder to the planet
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {research.benefits.map((b, i) => {
              const Icon = benefitIcons[i] ?? Leaf;
              return (
                <Reveal key={b.title} i={i % 2}>
                  <div className="card h-full p-8">
                    <Icon className="h-8 w-8 text-gold" />
                    <h3 className="mt-5 text-lg font-semibold text-bone">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-fog">{b.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <p className="mx-auto mt-14 max-w-3xl text-center text-xs leading-relaxed text-fog-dim">
              This low-cement concrete innovation is the subject of a patent application now being
              filed. This page shares the concept and its benefits; the specific mix design remains
              proprietary. Figures are illustrative, drawn from the inventor&rsquo;s filing.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Want to build better — and greener?"
        intro="If you're planning a small pour or a large project, talk to us about doing it with less cement and more certainty."
      />
    </>
  );
}
