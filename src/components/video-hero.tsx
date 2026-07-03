"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function VideoHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // gentle parallax + fade as you scroll past the hero
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink grain"
      aria-label="Bhagirath Ram — showreel"
    >
      <motion.video
        style={{ scale }}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero/blueprint.mp4" type="video/mp4" />
      </motion.video>

      {/* cinematic grading: darken edges, keep centre readable */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_15%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/80 to-transparent" />
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink via-ink/70 to-transparent"
      />

      {/* scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.4em] text-bone/70">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-9 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
