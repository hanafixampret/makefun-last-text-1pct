import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "dying at 1%. the charger was in the kitchen drawer the whole time. " +
  "i watched you tear the house apart for three days. worth it. goodbye.";

// Gate: the entry must be 1-200 UTF-8 chars and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} is outside the 1-200 gate`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
