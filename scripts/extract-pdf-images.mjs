// Extracts embedded JPEG images from the Bhagirath Ram project-profile PDF.
// Scans for baseline-JPEG SOI (FFD8FF) ... EOI (FFD9) byte ranges, which is how
// /DCTDecode image XObjects are stored in the PDF. Writes them to public/projects/raw.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const PDF =
  process.argv[2] ||
  "/tmp/claude-1000/-home-userclinicfrontline-Real-Estate/fed38f3a-7a5b-4f99-9999-d664175c3176/scratchpad/source/profile.pdf";
const OUT = "public/projects/raw";
mkdirSync(OUT, { recursive: true });

const buf = readFileSync(PDF);
let count = 0;
let i = 0;
const results = [];
while (i < buf.length - 3) {
  // SOI marker: FF D8 FF
  if (buf[i] === 0xff && buf[i + 1] === 0xd8 && buf[i + 2] === 0xff) {
    // find EOI: FF D9
    let j = i + 2;
    while (j < buf.length - 1) {
      if (buf[j] === 0xff && buf[j + 1] === 0xd9) break;
      j++;
    }
    if (j < buf.length - 1) {
      const end = j + 2;
      const bytes = buf.subarray(i, end);
      if (bytes.length > 8000) {
        // skip tiny thumbnails/icons
        count++;
        const name = `${OUT}/img-${String(count).padStart(2, "0")}.jpg`;
        writeFileSync(name, bytes);
        results.push({ name, kb: Math.round(bytes.length / 1024) });
      }
      i = end;
      continue;
    }
  }
  i++;
}

console.log(`Extracted ${count} JPEG images (>8KB) to ${OUT}`);
for (const r of results) console.log(`  ${r.name}  (${r.kb} KB)`);
