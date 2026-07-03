"use client";

import { motion } from "framer-motion";
import { research } from "@/lib/site";

const MAX = research.cementSiteMixed; // 500 sets the scale

function Bar({
  label,
  value,
  tone,
  delay,
}: {
  label: string;
  value: number;
  tone: "muted" | "gold";
  delay: number;
}) {
  const pct = (value / MAX) * 100;
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium text-bone">{label}</span>
        <span className="font-display text-lg font-bold text-bone">
          {value}
          <span className="ml-1 text-xs font-medium text-fog-dim">kg/m³</span>
        </span>
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full bg-ink">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className={
            tone === "gold"
              ? "h-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light"
              : "h-full rounded-full bg-gradient-to-r from-[#3a3d44] to-[#565a63]"
          }
        />
      </div>
    </div>
  );
}

export function CementComparison() {
  return (
    <div className="card p-8 sm:p-10">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-bone">
          Cement per m³ for the same {research.grade} strength
        </h3>
      </div>
      <div className="mt-8 space-y-7">
        <Bar label="Hand-mixed on site" value={research.cementSiteMixed} tone="muted" delay={0} />
        <Bar label="Professionally-designed mix" value={research.cementOptimised} tone="gold" delay={0.25} />
      </div>
      <div className="mt-8 flex items-center justify-between rounded-xl border border-gold/30 bg-gold/10 px-5 py-4">
        <span className="text-sm text-fog">Potential saving</span>
        <span className="font-display text-2xl font-bold text-gradient-gold">
          ≈ {research.cementSaved} kg/m³
        </span>
      </div>
      <p className="mt-4 text-xs text-fog-dim">
        Illustrative figures from the inventor&rsquo;s filing, comparing typical site-mixed practice
        with an optimised {research.grade} mix design.
      </p>
    </div>
  );
}

export function VolumeScale() {
  const marks = [0.25, 0.5, 1, 5, 6];
  return (
    <div className="card p-8 sm:p-10">
      <h3 className="text-lg font-semibold text-bone">The volume gap</h3>
      <p className="mt-2 text-sm text-fog">
        Conventional RMC starts at truckload sizes. Real small jobs need a fraction of that.
      </p>
      <div className="mt-8 space-y-3">
        {marks.map((m, i) => {
          const small = m <= research.maxSmallVolume;
          const pct = (m / 6) * 100;
          return (
            <div key={m} className="flex items-center gap-4">
              <span className="w-16 shrink-0 text-right font-display text-sm font-semibold text-bone">
                {m} m³
              </span>
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-ink">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={
                    small
                      ? "h-full rounded-full bg-gradient-to-r from-gold-deep to-gold-light"
                      : "h-full rounded-full bg-[#3a3d44]"
                  }
                />
              </div>
              <span className="w-24 shrink-0 text-xs text-fog-dim">
                {small ? "underserved" : "typical RMC"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
