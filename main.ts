import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The apology a smart speaker gives after mishearing its owner.
// "heating" and "meeting" sound alike — the speaker acted on the wrong one.
const LINE =
  "Sorry, I heard 'turn the heating down' as 'turn the meeting down.' " +
  "Your boss's invite has been declined. Twice.";

const MAX_CHARS = 140;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what landed on disk so a silent write failure cannot pass.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line");
}

console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
