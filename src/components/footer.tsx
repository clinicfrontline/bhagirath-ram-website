import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-2">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">
            {site.intro}
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-fog-dim">
            {site.legalName} · Estd. {site.founded}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-fog-dim">
            Explore
          </h4>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-fog transition-colors hover:text-gold-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-fog-dim">
            Get in touch
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-fog">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.contact.addressLines.join(", ")}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={site.contact.phoneHref} className="hover:text-bone">{site.contact.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-bone">{site.contact.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-xs text-fog-dim sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>GSTIN 07AACFB6497L1ZZ</span>
            <span className="text-line-strong">·</span>
            <span>Registered Partnership Firm</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
