"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function ImageDivider({
  image,
  quote,
  attribution,
  height = "h-[60vh]",
}: {
  image: string;
  quote: string;
  attribution?: string;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className={`relative ${height} min-h-80 w-full overflow-hidden border-y border-line`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="wrap relative flex h-full items-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-balance font-display text-2xl font-semibold leading-tight text-bone sm:text-3xl md:text-4xl">
            {quote}
          </p>
          {attribution && (
            <footer className="mt-5 text-sm uppercase tracking-[0.2em] text-gold-light">{attribution}</footer>
          )}
        </motion.blockquote>
      </div>
    </section>
  );
}
