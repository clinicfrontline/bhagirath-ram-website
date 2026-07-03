import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Brand lockup: the firm's building mark (glowing skyline in a chevron)
 * next to the name set in the display face.
 */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <Image
        src="/logo-mark.png"
        alt={`${site.name} logo`}
        width={44}
        height={44}
        priority
        className="h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-105"
      />
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
