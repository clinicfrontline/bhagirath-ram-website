import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Typographic wordmark (no logo file exists for the firm yet).
 * A minimal "BR" monogram in a surveyor's-mark frame + the name set in the display face.
 */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-md border border-line-strong bg-ink-3 transition-colors group-hover:border-gold">
        <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden>
          <path d="M8 30 L20 8 L32 30" fill="none" stroke="url(#brg)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12.5" y1="22" x2="27.5" y2="22" stroke="url(#brg)" strokeWidth="2.2" strokeLinecap="round" />
          <defs>
            <linearGradient id="brg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e6c877" />
              <stop offset="1" stopColor="#a07d1c" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[0.98rem] font-bold tracking-[0.16em] text-bone">
            BHAGIRATH RAM
          </span>
          <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.34em] text-fog-dim">
            Builders · Est. 1963
          </span>
        </span>
      )}
    </Link>
  );
}
