// food-picture-01 entry (Node 22, standard library only).
//
// The picture is the entry.png beside this file: a steaming bowl of
// tonkotsu ramen, chopsticks lifting glossy noodles from a rich golden
// broth, a jammy soft egg, charred chashu and scallions. This program
// writes that picture, byte for byte, to the output directory as
// entry.png, then verifies the copy with a SHA-256 digest so a
// truncated or corrupted write fails loudly. A plain copy always
// produces identical bytes, so two runs of this program agree exactly.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const picturePath = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
const bytes = readFileSync(picturePath);
const outPath = join(outputDir, 'entry.png');
writeFileSync(outPath, bytes);

// Read the copy back and verify it byte for byte: first its length, then
// its SHA-256 digest, so a partial or corrupted write fails loudly
// instead of silently shipping a truncated picture.
const copy = readFileSync(outPath);
if (copy.length !== bytes.length) {
  throw new Error('entry.png copy is incomplete');
}
const digest = (buf: Buffer) => createHash('sha256').update(buf).digest('hex');
if (digest(copy) !== digest(bytes)) {
  throw new Error('entry.png copy does not match the source');
}
