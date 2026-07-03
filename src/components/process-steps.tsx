import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  { n: "01", title: "Survey & assess", body: "We start on the ground — measuring the site, the soil and the constraints before a single line is drawn.", image: "/generated/process-survey.jpg" },
  { n: "02", title: "Design & plan", body: "Structural design, quantities and method statements — the whole build engineered before it begins.", image: "/generated/process-design.jpg" },
  { n: "03", title: "Build & control", body: "Execution led by graduate engineers, with quality and safety checks at every stage of the pour.", image: "/generated/process-build.jpg" },
  { n: "04", title: "Finish & hand over", body: "A complete, compliant, ready-to-use structure — handed over on time and built to last.", image: "/generated/process-handover.jpg" },
];

export function ProcessSteps() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          eyebrow="How we work"
          title={<>From bare ground to&nbsp;handover.</>}
          intro="One accountable team across every stage — so nothing falls through the gaps between design and delivery."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} i={i}>
              <div className="group h-full overflow-hidden rounded-2xl border border-line bg-ink-3">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover opacity-80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-3 to-transparent" />
                  <span className="absolute left-4 top-3 font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-bone">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
