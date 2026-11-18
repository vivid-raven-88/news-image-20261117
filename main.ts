// news-image-20261117: "Sum up 17 November's world news in one image".
// The entry image is bundled in this repository as entry.png. This program
// only copies those exact bytes to the output directory: no network access,
// no drawing, no randomness, so repeated runs write identical files.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
console.log(`wrote entry.png (${statSync(source).size} bytes) to ${outDir}`);
