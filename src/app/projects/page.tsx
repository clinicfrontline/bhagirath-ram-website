import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectFilter } from "@/components/project-filter";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Steel-structure foot-over-bridges, institutional campuses and commercial buildings delivered across Delhi by Bhagirath Ram — including Sharp Coating and the Indian Institute of Aeronautics.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={<>Structures Delhi uses&nbsp;<span className="text-gradient-gold">every single day.</span></>}
        intro="Real projects from our records — public foot-over-bridges, institutional campuses and commercial landmarks. Filter by what you're looking to build."
        image="/projects/bridge-motibagh.jpg"
      />

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <ProjectFilter />
        </div>
      </section>

      <CTA title="Your project could be next on this list." intro="From a single steel span to a full institutional campus — let's talk about what you need built." />
    </>
  );
}
