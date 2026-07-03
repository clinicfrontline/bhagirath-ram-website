import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Compass, HardHat, Users, ShieldCheck, Recycle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { ImageDivider } from "@/components/image-divider";
import { CTA } from "@/components/cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 1963, Bhagirath Ram is a Delhi-based construction firm with six decades of work across infrastructure and institutional buildings.",
};

const values = [
  { icon: ShieldCheck, title: "Built to endure", body: "We build for the long life of the structure, not the length of the contract. Public infrastructure has to stand for decades — so that is how we build everything." },
  { icon: Compass, title: "Engineering discipline", body: "Graduate engineers, method statements, and quality checks on every pour. Nothing is left to on-site guesswork." },
  { icon: Users, title: "Single-point accountability", body: "One firm answerable for design, procurement, execution and handover — the way turnkey delivery should work." },
  { icon: Recycle, title: "Responsible by design", body: "From material efficiency to our patent-pending low-cement research, we build in a way that respects cost and carbon alike." },
];

const org = [
  { title: "Managing Partner", sub: "Direction & accountability", icon: Building2 },
  { title: "Operations", sub: "Site execution & delivery", icon: HardHat },
  { title: "Accounts & Administration", sub: "Compliance & controls", icon: ShieldCheck },
  { title: "Marketing", sub: "Clients & growth", icon: Compass },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Established ${site.founded}`}
        title={<>A builder&rsquo;s reputation is measured in&nbsp;<span className="text-gradient-gold">decades.</span></>}
        intro={`Bhagirath Ram has spent ${site.yearsExperience} years building infrastructure and institutions across Delhi — quietly, reliably, and to a standard that outlasts us.`}
      />

      {/* story */}
      <section className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <Image src="/generated/blueprint-desk.jpg" alt="Engineering drawings and instruments" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our story" title={<>From a partnership in 1963 to a name Delhi builds&nbsp;with.</>} />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-fog">
              <Reveal i={2}>
                <p>
                  {site.legalName} was founded as a partnership firm in {site.founded}. Over six
                  decades we grew from civil contracting into a firm trusted with public
                  infrastructure — most visibly, the illuminated steel-structure foot-over-bridges
                  that carry thousands of pedestrians across Delhi&rsquo;s Ring Road every day.
                </p>
              </Reveal>
              <Reveal i={3}>
                <p>
                  Alongside that infrastructure work, we have delivered complete institutional
                  campuses — multi-storey schools built for daily use by generations of students —
                  and expanded into commercial, residential and full turnkey contracting.
                </p>
              </Reveal>
              <Reveal i={4}>
                <p>
                  The constant across all of it is discipline: graduate engineers, statutory
                  compliance, and an obsession with structures that stay sound long after handover.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* heritage divider */}
      <ImageDivider
        image="/generated/heritage-hands.jpg"
        quote="A reputation you can't rush — only build, one honest project at a time."
        height="h-[52vh]"
      />

      {/* journey / roadmap */}
      <section className="py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our journey"
            title={<>Sixty years, one&nbsp;direction.</>}
            intro="From a 1963 partnership to a turnkey builder with a patent-pending idea for greener concrete — here's the road so far, and where it's heading."
          />
          <Timeline />
        </div>
      </section>

      {/* values */}
      <section className="border-y border-line bg-ink-2 py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="What we stand for" title="Principles that don't move" align="center" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} i={i % 2}>
                <div className="card h-full p-8">
                  <v.icon className="h-8 w-8 text-gold" />
                  <h3 className="mt-5 text-lg font-semibold text-bone">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* organisation */}
      <section className="py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="How we're organised" title="A clear line from decision to delivery" intro="A lean structure keeps accountability short — from the managing partner down to the graduate engineers on site." />
          <div className="mt-14">
            <Reveal>
              <div className="mx-auto max-w-xs rounded-xl border border-gold/40 bg-gold/10 p-6 text-center">
                <Building2 className="mx-auto h-7 w-7 text-gold" />
                <div className="mt-3 font-semibold text-bone">Managing Partner</div>
                <div className="text-xs text-fog-dim">Direction &amp; accountability</div>
              </div>
            </Reveal>
            <div className="mx-auto my-6 h-8 w-px bg-line-strong" />
            <div className="grid gap-4 sm:grid-cols-3">
              {org.slice(1).map((o, i) => (
                <Reveal key={o.title} i={i}>
                  <div className="card p-6 text-center">
                    <o.icon className="mx-auto h-6 w-6 text-gold" />
                    <div className="mt-3 font-medium text-bone">{o.title}</div>
                    <div className="text-xs text-fog-dim">{o.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mx-auto my-6 h-8 w-px bg-line-strong" />
            <Reveal>
              <div className="mx-auto max-w-xs rounded-xl border border-line bg-ink-3 p-6 text-center">
                <HardHat className="mx-auto h-6 w-6 text-gold" />
                <div className="mt-3 font-medium text-bone">Graduate Engineers</div>
                <div className="text-xs text-fog-dim">On-site execution</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA title="Build with a firm that's still here in 2063." intro="Six decades in, we're still building for the long term. Bring us your project and hold us to that standard." />
    </>
  );
}
