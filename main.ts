// news-image-20261119 entry (Node 22, standard library only).
//
// The entry image lives beside this file as entry.png (a 1024x1024 JPEG in a
// .png name, which the gate allows: it tells the format from the first bytes).
// This program copies it to the output directory as entry.png, byte for byte,
// every run. No network, no randomness, no timestamps in the output.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

// The gate tells the format from the first bytes, so refuse a source that is
// neither a JPEG (FFD8) nor a PNG (89 50 4E 47) instead of shipping a broken file.
const magic = readFileSync(source).subarray(0, 4);
const isJpeg = magic[0] === 0xff && magic[1] === 0xd8;
const isPng = magic[0] === 0x89 && magic[1] === 0x50 && magic[2] === 0x4e && magic[3] === 0x47;
if (!isJpeg && !isPng) {
  throw new Error('entry.png is neither a JPEG nor a PNG');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Confirm the copy is whole before exiting, so a truncated write fails loudly.
const copied = statSync(target).size;
const original = statSync(source).size;
if (copied !== original) {
  throw new Error(`entry.png copy incomplete: ${copied} of ${original} bytes`);
}
console.log(`wrote ${target} (${copied} bytes)`);
