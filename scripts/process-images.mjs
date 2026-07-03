// Normalizes and optimizes the curated real project photos for the web.
// - .rotate() with no args bakes in EXIF orientation (fixes the sideways site shots)
// - resizes to a sensible max width and re-encodes as progressive JPEG
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const RAW = "_source/pdf-images-raw";
const OUT = "public/projects";
mkdirSync(OUT, { recursive: true });

// raw file -> web filename. Curated from a visual review of all 28 extracted images.
// NOTE: img-20 / img-21 are handled separately (they need an explicit rotate(90));
//       they are already processed and are intentionally NOT in this list.
const MAP = [
  // Round 1 (kept for reproducibility)
  ["img-03.jpg", "building-institutional-1.jpg"],
  ["img-07.jpg", "building-institutional-2.jpg"],
  ["img-02.jpg", "bridge-venkateshwar.jpg"],
  ["img-12.jpg", "bridge-motibagh.jpg"],
  ["img-16.jpg", "bridge-detail.jpg"],
  ["img-11.jpg", "school-grm-nilothi.jpg"],
  ["img-13.jpg", "school-grm-ranhola.jpg"],
  ["img-17.jpg", "institute-arches.jpg"],
  // Round 2 — additional real projects
  ["img-19.jpg", "sharp-coating.jpg"], // Sharp Coating Pvt Ltd — glass-facade HQ (commercial)
  ["img-18.jpg", "institute-entrance.jpg"], // Indian Institute of Aeronautics — arched entrance
  ["img-04.jpg", "block-green.jpg"], // modern ACP block, green/white, finished front
  ["img-05.jpg", "block-green-progress.jpg"], // same block, steel stair tower in progress
  ["img-08.jpg", "block-orange.jpg"], // modern ACP block, orange/white
  ["img-15.jpg", "bridge-landmark.jpg"], // steel FOB behind Shiva statue (landmark)
  ["img-14.jpg", "commercial-render.jpg"], // architectural design/render (commercial proposal)
];

const MAXW = 1920;

for (const [src, dst] of MAP) {
  const img = sharp(`${RAW}/${src}`).rotate(); // bake EXIF orientation
  const meta = await img.metadata();
  const pipe = img.clone();
  if ((meta.width ?? 0) > MAXW) pipe.resize({ width: MAXW });
  await pipe
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(`${OUT}/${dst}`);
  const out = await sharp(`${OUT}/${dst}`).metadata();
  console.log(`${dst.padEnd(30)} ${out.width}x${out.height}`);
}
console.log("Done.");
