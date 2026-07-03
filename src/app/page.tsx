import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Leaf } from "lucide-react";
import { VideoHero } from "@/components/video-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatCounter } from "@/components/stat-counter";
import { ProjectCard } from "@/components/project-card";
import { ProcessSteps } from "@/components/process-steps";
import { ClientsStrip } from "@/components/clients-strip";
import { ImageDivider } from "@/components/image-divider";
import { CTA } from "@/components/cta";
import { site, stats, services, projects, research } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <VideoHero />

      {/* ---- Legacy + stats ------------------------------------------ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="wrap relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <Reveal>
                <span className="eyebrow">Building India since {site.founded}</span>
              </Reveal>
              <Reveal i={1}>
                <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
                  Six decades of building{" "}
                  <span className="text-gradient-gold">what stands the test of time.</span>
                </h1>
              </Reveal>
            </div>
            <Reveal i={2}>
              <p className="text-pretty text-base leading-relaxed text-fog sm:text-lg">
                {site.legalName} is a Delhi-based construction firm founded in {site.founded}.
                From steel-structure foot-over-bridges on the capital&rsquo;s busiest roads to
                complete institutional campuses, we have spent {site.yearsExperience} years turning
                engineering discipline into infrastructure people rely on every day.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} i={i} className="bg-ink-2 p-7 sm:p-9">
                <div className="font-display text-4xl font-bold text-bone sm:text-5xl">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm font-medium text-bone">{s.label}</div>
                <div className="mt-1 text-xs text-fog-dim">{s.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- What we build ------------------------------------------- */}
      <section className="relative border-t border-line bg-ink-2 py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we build"
            title={<>Four verticals. One standard of&nbsp;work.</>}
            intro="Whatever the scale, the discipline is the same — sound engineering, statutory compliance, and a finish that lasts."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} i={i % 2}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-3 transition-colors hover:border-line-strong"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-3 via-ink-3/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-bone">{s.title}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-fog-dim transition-colors group-hover:text-gold" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-fog">{s.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Image divider ------------------------------------------- */}
      <ImageDivider
        image="/generated/divider-steel.jpg"
        quote="Six decades on, the structures we built are still standing — and still working."
        attribution="Bhagirath Ram · Since 1963"
      />

      {/* ---- How we work --------------------------------------------- */}
      <ProcessSteps />

      {/* ---- Signature projects -------------------------------------- */}
      <section className="py-24 sm:py-32">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Signature projects"
              title={<>Work that carries real&nbsp;public load.</>}
            />
            <Reveal>
              <Link href="/projects" className="btn btn-ghost">
                View all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} i={i}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Research teaser ----------------------------------------- */}
      <section className="relative overflow-hidden border-y border-line">
        <Image
          src="/generated/concrete-pour.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />

        <div className="wrap relative grid gap-12 py-24 sm:py-32 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                <Leaf className="h-3.5 w-3.5" /> {research.badge} · R&amp;D
              </span>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-6 text-balance text-3xl font-semibold sm:text-4xl md:text-[2.7rem]">
                We&rsquo;re not just building with concrete. We&rsquo;re{" "}
                <span className="text-gradient-gold">rethinking it.</span>
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-fog sm:text-lg">
                {research.lede}
              </p>
            </Reveal>
            <Reveal i={3}>
              <Link href="/research" className="btn btn-gold mt-8">
                Explore the research <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal i={2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { big: `~${research.cementSaved} kg`, small: "less cement per m³" },
                { big: research.grade, small: "grade strength, kept" },
                { big: `${research.minVolume}–${research.maxSmallVolume} m³`, small: "small volumes supplied" },
                { big: "↓ CO₂", small: "a measurably smaller footprint" },
              ].map((c) => (
                <div key={c.small} className="card p-6">
                  <div className="font-display text-3xl font-bold text-gradient-gold">{c.big}</div>
                  <div className="mt-2 text-sm text-fog">{c.small}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Clients ------------------------------------------------- */}
      <ClientsStrip />

      <CTA />
    </>
  );
}
