import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal i={1}>
        <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl md:text-[2.7rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal i={2}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-fog sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
