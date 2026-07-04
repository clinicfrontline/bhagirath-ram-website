// One-off: clean the brand mark so it merges on the dark header/footer.
// The source render (logo-mark.png) has transparent corners but a large
// semi-transparent GRAY glow halo (RGB ~96) that reads as an unwanted box
// when scaled down onto a near-black background.
//
// This script:
//   1. backs up the original to logo-mark-original.png (once)
//   2. zeroes alpha on the faint gray fringe (alpha < FLOOR)
//   3. trims to the bounding box of the remaining mark (alpha >= TRIM) + padding
//   4. re-exports a centered square transparent PNG
//
// Usage: node scripts/process-logo.mjs
import sharp from "sharp";
import { existsSync, copyFileSync } from "node:fs";

const SRC = "public/logo-mark.png";
const BACKUP = "public/logo-mark-original.png";
const OUT = "public/logo-mark.png";

const FLOOR = 60; // alpha below this -> fully transparent (kills faintest haze)
const SOLID = 230; // alpha at/above this is the solid mark -> always kept
const BLUE = 26; // min blue-dominance (b - max(r,g)) for a glow pixel to survive
const TRIM = 90; // bbox is computed from pixels with alpha >= this (after keying)
const PAD = 20; // px of breathing room around the trimmed mark (at source scale)
const SIZE = 256; // final square canvas

if (!existsSync(BACKUP)) {
  copyFileSync(SRC, BACKUP);
  console.log(`backed up original -> ${BACKUP}`);
}

const { data, info } = await sharp(BACKUP).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// 1. clean: keep the solid mark; in the glow region keep only clearly-blue
//    pixels and drop the desaturated gray haze.
let minx = width, miny = height, maxx = -1, maxy = -1;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    let a = data[i + 3];

    if (a < FLOOR) {
      a = 0;
    } else if (a < SOLID) {
      // glow region: survive only if the pixel leans blue
      const blueDom = b - Math.max(r, g);
      if (blueDom < BLUE) a = 0;
    }
    data[i + 3] = a;

    // 2. track bbox of the surviving mark
    if (a >= TRIM) {
      if (x < minx) minx = x;
      if (x > maxx) maxx = x;
      if (y < miny) miny = y;
      if (y > maxy) maxy = y;
    }
  }
}

// 3. pad + clamp the crop rectangle
const left = Math.max(0, minx - PAD);
const top = Math.max(0, miny - PAD);
const right = Math.min(width - 1, maxx + PAD);
const bottom = Math.min(height - 1, maxy + PAD);
const cw = right - left + 1;
const ch = bottom - top + 1;
console.log(`mark bbox ${minx},${miny} .. ${maxx},${maxy} -> crop ${cw}x${ch}`);

const cleaned = sharp(Buffer.from(data), { raw: { width, height, channels } })
  .png()
  .extract({ left, top, width: cw, height: ch });

// 4. fit into a centered square transparent canvas
await cleaned
  .resize({ width: SIZE, height: SIZE, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(OUT);

console.log(`wrote ${OUT} (${SIZE}x${SIZE})`);
