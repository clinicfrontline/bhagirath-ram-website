/**
 * Single source of truth for all Bhagirath Ram site content.
 * Every fact here is drawn from the firm's official project-profile / govt records.
 * Placeholders that need real values are marked  // TODO: real value
 */

const FOUNDED = 1963;
export const YEARS_EXPERIENCE = new Date().getFullYear() - FOUNDED; // 63 in 2026

export const site = {
  name: "Bhagirath Ram",
  legalName: "Bhagirath Ram (Regd.)",
  founded: FOUNDED,
  yearsExperience: YEARS_EXPERIENCE,
  tagline: "Building India since 1963.",
  intro:
    "A Delhi-based construction firm with six decades of proven work across public infrastructure, institutional buildings and turnkey civil projects.",

  // ---- contact --------------------------------------------------------
  contact: {
    phone: "+91 98105 39363",
    phoneHref: "tel:+919810539363",
    whatsapp: "919810539363", // digits only, country code first
    email: "info@bhagirathram.com", // TODO: swap when the new brand domain is live
    addressLines: ["B-2/52, Paschim Vihar", "West Delhi, Delhi – 110063"],
    mapsQuery: "B-2/52, Paschim Vihar, West Delhi, Delhi 110063",
  },
} as const;

// ---- headline stats ---------------------------------------------------
export const stats = [
  { value: YEARS_EXPERIENCE, suffix: "+", label: "Years of proven work", sub: "Established 1963" },
  { value: 6, suffix: "", label: "Decades of continuity", sub: "Three generations" },
  { value: 4, suffix: "", label: "Verticals delivered", sub: "Infra · Institutional · Commercial · Turnkey" },
  { value: 100, suffix: "%", label: "Statutory compliance", sub: "GST · EPF · ESIC registered" },
];

// ---- capabilities / services -----------------------------------------
export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "civil-infrastructure",
    title: "Civil & Infrastructure",
    short: "Steel-structure foot-over-bridges, public works and heavy civil construction.",
    description:
      "Our signature work: government-grade infrastructure engineered to carry public load for decades. From steel-structure foot-over-bridges on Delhi's busiest arterial roads to RCC civil works, we build for scale, safety and permanence.",
    points: [
      "Steel-structure foot-over-bridges",
      "RCC & structural civil works",
      "Government & public-sector projects",
      "Roads, decks and load-bearing structures",
    ],
    image: "/projects/bridge-venkateshwar.jpg",
  },
  {
    slug: "institutional-buildings",
    title: "Institutional Buildings",
    short: "Schools, colleges and public institutions built to last generations.",
    description:
      "We have delivered multi-storey educational campuses across Delhi — designed for daily use by thousands, finished to a standard that endures decades of service.",
    points: [
      "Schools & senior-secondary campuses",
      "Colleges & training institutes",
      "Multi-storey RCC frames",
      "Complete interiors & finishing",
    ],
    image: "/projects/school-grm-nilothi.jpg",
  },
  {
    slug: "commercial-residential",
    title: "Commercial & Residential",
    short: "Commercial blocks and residential builds delivered end-to-end.",
    description:
      "Modern commercial and residential structures built with the same engineering discipline as our infrastructure work — clean facades, sound frames and dependable timelines.",
    points: [
      "Commercial & mixed-use blocks",
      "Residential structures",
      "Facade & ACP cladding systems",
      "Renovation & extensions",
    ],
    image: "/projects/building-institutional-2.jpg",
  },
  {
    slug: "turnkey-contracting",
    title: "Turnkey Contracting",
    short: "Design, build and deliver — a complete project under one accountable partner.",
    description:
      "Hand us the site and the brief; we return a finished, compliant, ready-to-use building. Single-point accountability across design, procurement, execution and handover.",
    points: [
      "Design-to-handover delivery",
      "Procurement & site management",
      "Quality & statutory compliance",
      "On-time, on-budget execution",
    ],
    image: "/projects/site-rebar.jpg",
  },
];

// ---- projects ---------------------------------------------------------
export type ProjectCategory = "Infrastructure" | "Institutional" | "Commercial";

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: ProjectCategory;
  image: string;
  blurb: string;
  tag?: string; // optional badge, e.g. "In progress", "Design"
};

export const projects: Project[] = [
  // ---- Infrastructure ----
  {
    slug: "fob-venkateshwar",
    name: "Foot-Over-Bridge — Venkateshwar College",
    location: "Ring Road, New Delhi",
    category: "Infrastructure",
    image: "/projects/bridge-venkateshwar.jpg",
    blurb:
      "A fully-illuminated steel-structure foot-over-bridge spanning one of Delhi's busiest Ring Road junctions near Venkateshwar College.",
  },
  {
    slug: "fob-motibagh",
    name: "Foot-Over-Bridge — Moti Bagh",
    location: "Moti Bagh Ring Road, near Nanakpura, New Delhi",
    category: "Infrastructure",
    image: "/projects/bridge-motibagh.jpg",
    blurb:
      "Steel-structure foot-over-bridge with covered walkways and staircases, serving heavy pedestrian traffic on Moti Bagh Ring Road.",
  },
  {
    slug: "fob-landmark",
    name: "Steel Foot-Over-Bridge — Landmark Crossing",
    location: "New Delhi",
    category: "Infrastructure",
    image: "/projects/bridge-landmark.jpg",
    blurb:
      "A covered steel foot-over-bridge that has become a local landmark, framing a public crossing beside a temple green.",
  },
  {
    slug: "rcc-deck",
    name: "RCC Deck & Structural Works",
    location: "New Delhi",
    category: "Infrastructure",
    image: "/projects/site-rebar.jpg",
    blurb:
      "Large-span reinforced-concrete deck under construction — reinforcement, formwork and pour managed on a live urban site.",
    tag: "In progress",
  },
  // ---- Institutional ----
  {
    slug: "grm-nilothi",
    name: "G.R.M. Senior Secondary School",
    location: "Vill. Nilothi, New Delhi",
    category: "Institutional",
    image: "/projects/school-grm-nilothi.jpg",
    blurb:
      "A multi-storey senior-secondary campus — full civil structure through to finished interiors and circulation.",
  },
  {
    slug: "grm-ranhola",
    name: "G.R.M. Public School",
    location: "Ranhola, Najafgarh Road, New Delhi",
    category: "Institutional",
    image: "/projects/school-grm-ranhola.jpg",
    blurb:
      "A landmark multi-block school building with arched facades, delivered as a complete institutional campus.",
  },
  {
    slug: "institute-aeronautics",
    name: "Indian Institute of Aeronautics",
    location: "Ranhola, Nangloi, New Delhi",
    category: "Institutional",
    image: "/projects/institute-arches.jpg",
    blurb:
      "A red-sandstone institutional campus with traditional arches, chhatris and a grand columned entrance — heritage detailing on a modern frame.",
  },
  {
    slug: "acp-block-green",
    name: "Multi-Storey Institutional Block",
    location: "New Delhi",
    category: "Institutional",
    image: "/projects/building-institutional-1.jpg",
    blurb:
      "A four-storey institutional building with a clean green-and-white ACP-clad facade and full RCC frame, delivered end-to-end.",
  },
  {
    slug: "acp-block-orange",
    name: "Institutional Building — ACP Facade",
    location: "New Delhi",
    category: "Institutional",
    image: "/projects/building-institutional-2.jpg",
    blurb:
      "A modern multi-storey block with a warm ACP-clad elevation, external steel staircase and a paved forecourt.",
  },
  // ---- Commercial ----
  {
    slug: "sharp-coating",
    name: "Sharp Coating Pvt. Ltd.",
    location: "Industrial Area, Delhi NCR",
    category: "Commercial",
    image: "/projects/sharp-coating.jpg",
    blurb:
      "A corporate headquarters for Sharp Coating Pvt. Ltd. — a striking glass-and-composite facade over a landscaped industrial campus.",
  },
  {
    slug: "commercial-design",
    name: "Commercial Building — Design Concept",
    location: "New Delhi",
    category: "Commercial",
    image: "/projects/commercial-render.jpg",
    blurb:
      "An architectural design for a mixed-use commercial block: full-height glazing, a curved glass atrium and a landscaped frontage.",
    tag: "Design",
  },
];

// ---- named clients (marketing) ---------------------------------------
export const clients = [
  "G.R.M. Group of Schools",
  "Blooming Dales Public School",
  "Indian Institute of Aeronautics",
  "Sharp Coating Pvt. Ltd.",
  "Government & Public Works",
];

// ---- company journey / roadmap ---------------------------------------
export type Milestone = { year: string; title: string; body: string };

export const journey: Milestone[] = [
  {
    year: "1963",
    title: "The firm is founded",
    body: "Bhagirath Ram is established in Delhi as a partnership firm — the start of an unbroken run of civil construction work.",
  },
  {
    year: "Early years",
    title: "Civil & public works",
    body: "Decades of RCC and civil construction build the firm's reputation for structures that stand — including steel foot-over-bridges on Delhi's Ring Road.",
  },
  {
    year: "Growth",
    title: "Institutional campuses",
    body: "Complete multi-storey schools and institutes — G.R.M. schools, Indian Institute of Aeronautics — delivered from foundation to finished interiors.",
  },
  {
    year: "Expansion",
    title: "Commercial & corporate",
    body: "The same discipline extends to commercial builds, including the Sharp Coating corporate headquarters and modern ACP-clad blocks.",
  },
  {
    year: "Today",
    title: "Turnkey delivery",
    body: "Design, procurement, execution and handover under one accountable partner — across all four verticals.",
  },
  {
    year: "Now building",
    title: "Patent-pending R&D",
    body: "A patent-pending approach to small-volume, low-cement concrete — professional strength with far less cement and carbon.",
  },
  {
    year: "What's next",
    title: "Low-cement concrete at scale",
    body: "Bringing quality-assured, low-cement concrete to the small projects that have never had access to it — cheaper to build and kinder to the planet.",
  },
];

// ---- research: patent-pending concrete innovation ---------------------
export const research = {
  badge: "Patent Pending",
  title: "Small-volume, low-cement concrete",
  lede:
    "A firm that has built for sixty years is now building the future of concrete itself — a patent-pending approach that delivers professional-grade strength in small quantities, with dramatically less cement.",
  // core numbers (from the inventor's filing)
  cementSiteMixed: 500, // kg/m³ typical site-mixed for M25
  cementOptimised: 270, // kg/m³ optimised RMC for equivalent M25
  get cementSaved() {
    return this.cementSiteMixed - this.cementOptimised; // 230
  },
  grade: "M25",
  minVolume: 0.25, // m³
  maxSmallVolume: 1, // m³
  problem: [
    "Ready-Mix Concrete (RMC) is supplied only in large truckload volumes — typically 5–6 m³ or more.",
    "Small jobs — a home extension, a boundary wall, a staircase, a small foundation — need just 0.25–1 m³.",
    "So small builders mix concrete by hand on-site: quality becomes inconsistent and cement use spikes.",
  ],
  insight:
    "In practice, a professionally-designed M25 mix reaches full strength on roughly 270 kg of cement per cubic metre. The same strength site-mixed by hand often consumes close to 500 kg — nearly twice the cement for the same result.",
  solution:
    "Supply professionally-designed, quality-assured concrete in the small volumes real projects actually need — 0.25 to 1 m³ — so even the smallest job gets RMC-grade strength without over-using cement.",
  benefits: [
    {
      title: "≈230 kg less cement / m³",
      body: "Equivalent strength with far less cement — because the mix is engineered, not guessed.",
    },
    {
      title: "Lower cost to build",
      body: "Cement is the most expensive ingredient in concrete. Use less of it and small builders save on every pour.",
    },
    {
      title: "Consistent, predictable strength",
      body: "Designed mixes replace on-site estimation — the same reliable M25 quality, every batch.",
    },
    {
      title: "A real cut in CO₂",
      body: "Cement is one of the largest industrial sources of carbon. Less cement per cubic metre means a measurably smaller footprint.",
    },
  ],
};

// ---- navigation -------------------------------------------------------
export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];
