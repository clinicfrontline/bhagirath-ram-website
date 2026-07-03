import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-24">
      {image ? (
        <>
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-ink/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-50" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold/8 blur-3xl" />
        </>
      )}
      <div className="wrap relative">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal i={1}>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal i={2}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-fog sm:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
