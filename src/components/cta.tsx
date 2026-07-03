import { Phone, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function CTA({
  title = "Have a project in mind?",
  intro = "From a single steel span to a complete turnkey campus — tell us what you want to build, and we'll bring six decades of engineering discipline to it.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="wrap relative flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">{title}</h2>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-fog sm:text-lg">{intro}</p>
          </Reveal>
        </div>
        <Reveal i={2}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={site.contact.phoneHref} className="btn btn-gold">
              <Phone className="h-4 w-4" />
              {site.contact.phone}
            </a>
            <a href="/contact" className="btn btn-ghost">
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
