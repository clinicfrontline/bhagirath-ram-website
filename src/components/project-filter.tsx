"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projects, type ProjectCategory } from "@/lib/site";

const TABS: ("All" | ProjectCategory)[] = ["All", "Infrastructure", "Institutional", "Commercial"];

export function ProjectFilter() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => {
          const count = t === "All" ? projects.length : projects.filter((p) => p.category === t).length;
          const on = active === t;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                on
                  ? "border-gold bg-gold/15 text-gold-light"
                  : "border-line text-fog hover:border-line-strong hover:text-bone"
              }`}
            >
              {t}
              <span className={`ml-2 text-xs ${on ? "text-gold/70" : "text-fog-dim"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
