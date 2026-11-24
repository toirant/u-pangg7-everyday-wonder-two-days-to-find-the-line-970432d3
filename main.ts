// Everyday Wonder — one sentence, at most 200 characters.
// A small everyday moment made strange: a lift, a stranger, a song
// from another lifetime, and a building that briefly forgets its century.
//
// Revision: tightened the ending — "the whole building forgot which
// century it was" became "the building forgot what century it was",
// cutting a word and landing the surprise harder in a single read.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The lift doors opened on a stranger humming my grandmother's lullaby, and for one floor the building forgot what century it was.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
