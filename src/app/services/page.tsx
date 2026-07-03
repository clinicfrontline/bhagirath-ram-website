import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ImageDivider } from "@/components/image-divider";
import { CTA } from "@/components/cta";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Civil & infrastructure, institutional buildings, commercial & residential, and full turnkey contracting — delivered with six decades of engineering discipline.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>Four verticals, delivered to one&nbsp;<span className="text-gradient-gold">standard.</span></>}
        intro="Whether it's a steel span over a highway or a complete campus handed over ready to use, the engineering discipline behind it never changes."
      />

      <div className="divide-y divide-line">
        {services.map((s, idx) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-24 py-20 sm:py-28">
            <div className="wrap grid items-center gap-12 lg:grid-cols-2">
              <Reveal className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                </div>
              </Reveal>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <Reveal>
                  <span className="eyebrow">{`0${idx + 1} · ${s.title}`}</span>
                </Reveal>
                <Reveal i={1}>
                  <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">{s.title}</h2>
                </Reveal>
                <Reveal i={2}>
                  <p className="mt-5 text-base leading-relaxed text-fog sm:text-lg">{s.description}</p>
                </Reveal>
                <Reveal i={3}>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-fog">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                          <Check className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <ImageDivider
        image="/generated/divider-facade.jpg"
        quote="One firm, four verticals, and a single answer for who's accountable: us."
        height="h-[52vh]"
      />

      <CTA />
    </>
  );
}
