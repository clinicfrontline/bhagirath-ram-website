// Generates cinematic atmospheric imagery via KIE AI (nano-banana-2) and saves
// optimized versions into public/generated/. Real project photos come from the PDF;
// these are mood/background assets that carry the dark, premium look.
//
// Usage: node scripts/generate-images.mjs [only-slug]
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import sharp from "sharp";

// --- load KIE_API_KEY from .env (scripts don't get Next's env) -----------
const env = Object.fromEntries(
  readFileSync(".env", "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.trim().startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);
const KEY = process.env.KIE_API_KEY || env.KIE_API_KEY;
if (!KEY) {
  console.error("No KIE_API_KEY found in env or .env");
  process.exit(1);
}

const OUT = "public/generated";
mkdirSync(OUT, { recursive: true });

const BASE = "https://api.kie.ai/api/v1/jobs";
const STYLE =
  "Cinematic, ultra-realistic, moody dark charcoal atmosphere, dramatic low-key lighting, " +
  "subtle warm gold rim light, fine dust particles, shallow depth of field, high-end architectural " +
  "photography, muted desaturated palette, no text, no watermark, no people's faces in focus. ";

const JOBS = [
  {
    slug: "concrete-pour",
    ar: "16:9",
    prompt:
      "Close-up of fresh grey concrete being poured from a chute on a construction site at dusk, " +
      "glistening wet texture, sparks of warm light catching the aggregate.",
  },
  {
    slug: "blueprint-desk",
    ar: "16:9",
    prompt:
      "An architect's rolled technical blueprints and drafting tools on a dark walnut desk, " +
      "a single warm work-lamp raking across the paper, deep shadows, engineering instruments.",
  },
  {
    slug: "concrete-cylinders",
    ar: "16:9",
    prompt:
      "A row of grey concrete compression-test cylinders in a materials testing laboratory, " +
      "dark backdrop, one cylinder lit by a focused beam, scientific and precise mood.",
  },
  {
    slug: "dusk-skyline",
    ar: "16:9",
    prompt:
      "Silhouette of tower cranes and a multi-storey building under construction against a deep " +
      "twilight sky, distant city lights, scaffolding, a sense of scale and ambition.",
  },
  {
    slug: "steel-texture",
    ar: "16:9",
    prompt:
      "Abstract macro of dark brushed structural steel and bolted girder connections, " +
      "a thin streak of gold light gliding across the metal, industrial and premium.",
  },
  {
    slug: "cement-sustainability",
    ar: "16:9",
    prompt:
      "A single cupped handful of fine grey cement powder against a very dark background, " +
      "soft particles drifting, a faint green-gold glow suggesting sustainability and care.",
  },

  // --- Round 2: process band (4 steps) ---
  {
    slug: "process-survey",
    ar: "4:3",
    prompt:
      "A civil engineer in a hard hat using a total-station survey instrument on a cleared " +
      "construction site at dawn, distant city outline, focused and precise.",
  },
  {
    slug: "process-design",
    ar: "4:3",
    prompt:
      "Close-up of structural engineering drawings and a laptop showing a building model on a " +
      "dark desk, scale ruler and pencil, warm lamp light, planning stage.",
  },
  {
    slug: "process-build",
    ar: "4:3",
    prompt:
      "Workers in hi-vis vests and hard hats erecting a reinforced-concrete and steel structure, " +
      "scaffolding and rebar, golden-hour light, motion and effort.",
  },
  {
    slug: "process-handover",
    ar: "4:3",
    prompt:
      "A finished modern multi-storey building at dusk with warm interior lights just switched on, " +
      "clean facade, a sense of completion and pride, ready for handover.",
  },

  // --- Round 2: vertical dividers + heritage ---
  {
    slug: "divider-steel",
    ar: "21:9",
    prompt:
      "A welder joining a heavy steel girder, brilliant sparks arcing into deep shadow, " +
      "molten glow, dramatic industrial close-up, mostly black frame.",
  },
  {
    slug: "divider-facade",
    ar: "21:9",
    prompt:
      "A sleek modern glass-and-ACP commercial building facade reflecting a deep blue dusk sky, " +
      "clean geometric mullions, a warm gold sunset streak on the glass.",
  },
  {
    slug: "divider-institutional",
    ar: "21:9",
    prompt:
      "A long clean corridor inside a newly built school or institute, soft warm daylight from " +
      "arched openings, polished floor receding into the distance, calm and orderly.",
  },
  {
    slug: "heritage-hands",
    ar: "4:3",
    prompt:
      "Extreme close-up of a veteran builder's weathered hands resting on a rolled blueprint and a " +
      "steel trowel, warm rim light, decades of craft, dark background.",
  },
];

const only = process.argv[2];
const jobs = only ? JOBS.filter((j) => j.slug === only) : JOBS;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function createTask(job) {
  const res = await fetch(`${BASE}/createTask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KEY}`,
    },
    body: JSON.stringify({
      model: "nano-banana-2",
      input: {
        prompt: STYLE + job.prompt,
        aspect_ratio: job.ar,
        resolution: "2K",
        output_format: "jpg",
      },
    }),
  });
  const json = await res.json();
  if (json.code !== 200) throw new Error(`createTask ${job.slug}: ${JSON.stringify(json)}`);
  return json.data.taskId;
}

async function poll(taskId) {
  for (let i = 0; i < 90; i++) {
    await sleep(4000);
    const res = await fetch(`${BASE}/recordInfo?taskId=${taskId}`, {
      headers: { Authorization: `Bearer ${KEY}` },
    });
    const json = await res.json();
    const d = json.data || {};
    if (d.state === "success") {
      const parsed = JSON.parse(d.resultJson || "{}");
      return parsed.resultUrls?.[0];
    }
    if (d.state === "fail") throw new Error(`task failed: ${d.failMsg || JSON.stringify(json)}`);
    process.stdout.write(".");
  }
  throw new Error("timed out");
}

for (const job of jobs) {
  const dest = `${OUT}/${job.slug}.jpg`;
  if (existsSync(dest) && !only) {
    console.log(`✓ ${job.slug} (exists, skip)`);
    continue;
  }
  try {
    process.stdout.write(`→ ${job.slug} `);
    const taskId = await createTask(job);
    const url = await poll(taskId);
    if (!url) throw new Error("no result url");
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    await sharp(buf)
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true, mozjpeg: true })
      .toFile(dest);
    console.log(` saved ${dest}`);
  } catch (e) {
    console.log(`\n✗ ${job.slug}: ${e.message}`);
  }
}
console.log("\nGeneration run complete.");
