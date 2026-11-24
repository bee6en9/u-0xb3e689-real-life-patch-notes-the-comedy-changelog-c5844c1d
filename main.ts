import { mkdirSync, writeFileSync } from "node:fs";

// Real-Life Patch Notes: The Comedy Changelog
// One-line patch note for a real human-biology bug: the doorway effect —
// crossing a doorway wipes the reason you entered the room. Dry release-note
// register, specific recognisable bug, punchline in the fix itself.
const ENTRY =
  "v2.7.0: fixed a bug where crossing a doorway deleted the reason you entered the room.";

if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-160 gate`);
}
if (/\r|\n/.test(ENTRY) || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
