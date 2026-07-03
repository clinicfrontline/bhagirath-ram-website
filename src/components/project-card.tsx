import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <figure className="group relative overflow-hidden rounded-xl border border-line bg-ink-3">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />
        <span className="absolute left-4 top-4 rounded-full border border-line-strong bg-ink/70 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold-light backdrop-blur">
          {project.category}
        </span>
        {project.tag && (
          <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#1a1401]">
            {project.tag}
          </span>
        )}
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-lg font-semibold leading-snug text-bone">{project.name}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-fog">
          <MapPin className="h-3.5 w-3.5 text-gold" />
          {project.location}
        </p>
      </figcaption>
    </figure>
  );
}
