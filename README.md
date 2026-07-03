# Bhagirath Ram — website

A modern, dark & cinematic multi-page marketing site for **Bhagirath Ram (Regd.)**, a
Delhi-based construction firm established **1963**. Built with Next.js (App Router),
Tailwind CSS v4 and Framer Motion.

> **Rebrand note:** the site currently uses the name "Bhagirath Ram". A new brand name +
> domain will replace it later. All copy, the wordmark and metadata read from
> `src/lib/site.ts`, so a rename is a one-file change. Verified-available `.com`
> candidates researched during the build: `aarohanbuild.com`, `anvayainfra.com`,
> `meruinfra.com`, `setubuild.com`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start   # production
```

## Where to edit content — `src/lib/site.ts`

Everything (facts, stats, services, projects, research figures, nav, contact) lives in
one file. **Fill these real values before launch** — they are marked `// TODO: real value`:

- `contact.phone`, `contact.phoneHref`, `contact.whatsapp` (digits only, e.g. `9198…`)
- `contact.email`

## Pages

| Route | What it is |
|-------|------------|
| `/` | Full-screen looping **video hero** (no text) → legacy + stats → services → projects → research teaser → credentials → CTA |
| `/about` | Heritage story, values, organisation structure |
| `/services` | The four verticals (civil/infra, institutional, commercial/residential, turnkey) |
| `/projects` | Gallery of real projects (photos extracted from the profile PDF) |
| `/research` | Flagship data-driven page on the **patent-pending** low-cement concrete R&D |
| `/contact` | Call / WhatsApp CTAs, office address, map |

## Assets

- **Hero video:** `public/hero/blueprint.mp4` (muted, looped, `object-cover`).
- **Real project photos:** `public/projects/*.jpg` — extracted & normalised from the
  profile PDF via `scripts/extract-pdf-images.mjs` + `scripts/process-images.mjs`.
- **AI atmospherics:** `public/generated/*.jpg` — generated with **KIE AI (nano-banana-2)**
  via `scripts/generate-images.mjs` (reads `KIE_API_KEY` from `.env`).

Regenerate AI images:

```bash
node scripts/generate-images.mjs               # all
node scripts/generate-images.mjs concrete-pour # one slug
```

`.env` holds `KIE_API_KEY` and is git-ignored. Original source files (video, PDF, raw
extracted images) are kept in `_source/` and the scratchpad, outside the served bundle.

## Design system

Dark cinematic theme defined in `src/app/globals.css` (`@theme` tokens): near-black
surfaces, warm-gold accent (`#c9a227`), steel-blue secondary; Sora (display) + Inter
(body), self-hosted via `next/font`. Reusable classes: `.wrap`, `.eyebrow`, `.card`,
`.btn`/`.btn-gold`/`.btn-ghost`, `.text-gradient-gold`, `.blueprint-grid`. Motion respects
`prefers-reduced-motion`.
