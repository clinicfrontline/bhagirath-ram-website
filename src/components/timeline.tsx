"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { journey } from "@/lib/site";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const height = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });

  return (
    <div ref={ref} className="relative mt-14 pl-10 sm:pl-14">
      {/* track */}
      <div className="absolute left-[13px] top-2 bottom-2 w-px bg-line sm:left-[17px]" />
      {/* progress fill */}
      <motion.div
        style={{ scaleY: height }}
        className="absolute left-[13px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-gold-light via-gold to-gold-deep sm:left-[17px]"
      />

      <ol className="space-y-12">
        {journey.map((m, i) => (
          <motion.li
            key={m.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* node */}
            <span className="absolute -left-10 top-1 grid h-7 w-7 place-items-center rounded-full border border-gold/50 bg-ink sm:-left-14">
              <span className="h-2.5 w-2.5 rounded-full bg-gold" />
            </span>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              {m.year}
            </div>
            <h3 className="mt-2 text-xl font-semibold text-bone">{m.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog sm:text-base">{m.body}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
