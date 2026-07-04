import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Brand mark, drawn as inline SVG so it stays crisp at any size and never
 * shows the gray/white keying fringe the rendered PNG had on dark backgrounds:
 * a glowing three-tower isometric building rising out of a steel chevron.
 */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={44}
      height={44}
      role="img"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id="lm-glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#8fdcff" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#3fb4f5" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#3fb4f5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lm-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d3efff" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
        <filter id="lm-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>

      {/* steel chevron, behind the building */}
      <path
        d="M6 27 L32 53 L58 27 L50 27 L32 44 L14 27 Z"
        fill="#39435a"
      />
      <path
        d="M6 27 L32 53 L58 27 L50 27 L32 44 L14 27 Z"
        fill="none"
        stroke="#4a5670"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />

      {/* blue glow blooming off the towers */}
      <circle cx="32" cy="27" r="26" fill="url(#lm-glow)" filter="url(#lm-soft)" />

      {/* recessed dark slivers between the towers */}
      <path d="M23 21 L21 23 L21 45 L23 47 Z" fill="#101f52" />
      <path d="M23 21 L25 23 L25 45 L23 47 Z" fill="#14275f" />
      <path d="M41 21 L39 23 L39 45 L41 47 Z" fill="#101f52" />
      <path d="M41 21 L43 23 L43 45 L41 47 Z" fill="#14275f" />

      {/* left tower */}
      <path d="M15 25 L10 30 L10 45 L15 49 Z" fill="#2472d6" />
      <path d="M15 25 L20 30 L20 45 L15 49 Z" fill="#3f9fe8" />

      {/* right tower */}
      <path d="M49 25 L44 30 L44 45 L49 49 Z" fill="#2472d6" />
      <path d="M49 25 L54 30 L54 45 L49 49 Z" fill="#3f9fe8" />

      {/* center tower */}
      <path d="M32 8 L24 15 L24 46 L32 51 Z" fill="#2f9fe6" />
      <path d="M32 8 L40 15 L40 46 L32 51 Z" fill="url(#lm-shine)" />
    </svg>
  );
}

/**
 * Brand lockup: the firm's building mark next to the name set in the display face.
 */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <LogoMark className="h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-105" />
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
