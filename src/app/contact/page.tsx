import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Bhagirath Ram about your project. Call, WhatsApp or visit our Paschim Vihar office in West Delhi.",
};

// Paschim Vihar, West Delhi — approximate coordinates for the map embed.
const LAT = 28.6717;
const LON = 77.0977;
const bbox = `${LON - 0.014},${LAT - 0.009},${LON + 0.014},${LAT + 0.009}`;
const osm = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT},${LON}`;
const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.mapsQuery)}`;

export default function ContactPage() {
  const methods = [
    { icon: Phone, label: "Call us", value: site.contact.phone, href: site.contact.phoneHref, accent: true },
    { icon: MessageCircle, label: "WhatsApp", value: "Message us instantly", href: `https://wa.me/${site.contact.whatsapp}` },
    { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let&rsquo;s build something that&nbsp;<span className="text-gradient-gold">lasts.</span></>}
        intro="Tell us about your project — infrastructure, institutional, commercial or turnkey. The fastest way to reach us is a call or a WhatsApp message."
      />

      <section className="py-20 sm:py-28">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* contact methods */}
          <div className="space-y-4">
            {methods.map((m, i) => (
              <Reveal key={m.label} i={i}>
                <a
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-5 rounded-2xl border p-6 transition-colors ${
                    m.accent
                      ? "border-gold/40 bg-gold/10 hover:border-gold"
                      : "border-line bg-ink-3 hover:border-line-strong"
                  }`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-gold">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-fog-dim">
                      {m.label}
                    </span>
                    <span className="mt-1 block text-lg font-medium text-bone">{m.value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-fog-dim transition-colors group-hover:text-gold" />
                </a>
              </Reveal>
            ))}

            <Reveal i={3}>
              <div className="rounded-2xl border border-line bg-ink-3 p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-fog-dim">
                      Office
                    </span>
                    {site.contact.addressLines.map((l) => (
                      <span key={l} className="mt-1 block text-base text-bone">{l}</span>
                    ))}
                    <a href={directions} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold-light hover:underline">
                      Get directions <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-5 text-sm text-fog">
                  <Clock className="h-4 w-4 text-gold" />
                  Mon–Sat, 9:30 am – 6:30 pm
                </div>
              </div>
            </Reveal>
          </div>

          {/* map */}
          <Reveal i={1}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Office location — Paschim Vihar, West Delhi"
                src={osm}
                loading="lazy"
                className="absolute inset-0 h-full w-full [filter:invert(0.92)_hue-rotate(180deg)_brightness(0.95)_contrast(0.9)]"
              />
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 btn btn-gold h-10 px-4 text-sm"
              >
                <MapPin className="h-4 w-4" /> Open in Maps
              </a>
            </div>
          </Reveal>
        </div>

        {/* credentials */}
        <div className="wrap mt-8">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
              {site.credentials.map((c) => (
                <div key={c.label} className="bg-ink p-5">
                  <div className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-fog-dim">{c.label}</div>
                  <div className="mt-1.5 text-sm font-medium text-bone">{c.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
