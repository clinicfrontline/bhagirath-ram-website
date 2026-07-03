import { Reveal } from "@/components/reveal";
import { clients } from "@/lib/site";

export function ClientsStrip() {
  return (
    <section className="border-t border-line py-16">
      <div className="wrap">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-fog-dim">
            Trusted by institutions, businesses &amp; public bodies
          </p>
        </Reveal>
        <Reveal i={1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {clients.map((c) => (
              <span
                key={c}
                className="font-display text-base font-medium text-fog/80 sm:text-lg"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
