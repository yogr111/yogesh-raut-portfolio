import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("..", import.meta.url);
const scanRoots = ["README.md", "package.json", "package-lock.json", "index.html", "src", "public"];
const textExtensions = new Set([".html", ".js", ".css", ".svg", ".txt", ".md", ".json", ""]);

const forbidden = [
  { label: "private key", pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { label: "AWS access key", pattern: /AKIA[0-9A-Z]{16}/ },
  { label: "database connection string", pattern: /(?:mongodb(?:\+srv)?|postgres(?:ql)?|mysql):\/\//i },
  { label: "password assignment", pattern: /password\s*[:=]\s*["'][^"']+/i },
  { label: "API key assignment", pattern: /api[_-]?key\s*[:=]\s*["'][^"']+/i },
  { label: "candidate identifier", pattern: /candidate[_ -]?(?:id|nid)\s*[:=]/i },
  { label: "payment identifier", pattern: /payment[_ -]?id\s*[:=]/i },
];

const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const permittedPublicEmailHashes = new Set([
  "699a1c0d21c8e5e085242e8a4eb0b074b60bc7285ca19e0c3199aa5c359afb40",
]);

const formerPublicIdentifierHashes = new Set([
  "cede0324c80f58214a6393b081d9585cb0f1c05d1da188c682abc6bd73bcada9",
  "7d5f53b5520c0dca52d9394bce0627adac91ac1d1295ff10cf94fdf9bb825682",
  "27aba2a5f8b99e12f9a58c2c2a48506491456313cd98970d73ab071f8e061545",
  "c7abb3f8ce2b935df50904adc56e27836796c6b82ef1f6829f8c9aa614c87434",
  "708c750da8473e2cbd6fa3298f16c527080d94a2e013eef7865292442d7a248e",
  "fa1a197bd9f96af5adb2a3a789258a1c8e6d92fd11ae7246f713f50491e28c6c",
  "35a0f7cda38b25f99bf189f3204fbc7049413b6aebe74b9944ecd4e0f0153dac",
  "cfde1b5aa09d1e0b5b35634fd9bb7ea1da3e9ec883b9f80f2ad2e1371be82b04",
]);

const digest = (value) => createHash("sha256").update(value).digest("hex");

const containsFormerPublicIdentifier = (value) => {
  const tokens = value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);
  for (const size of [1, 2]) {
    for (let index = 0; index <= tokens.length - size; index += 1) {
      if (formerPublicIdentifierHashes.has(digest(tokens.slice(index, index + size).join(" ")))) return true;
    }
  }
  return false;
};

async function collect(path) {
  const absolute = new URL(path, root);
  try {
    const entries = await readdir(absolute, { withFileTypes: true });
    const nested = await Promise.all(
      entries.map((entry) => collect(join(path, entry.name))),
    );
    return nested.flat();
  } catch {
    return [path];
  }
}

const files = (await Promise.all(scanRoots.map(collect))).flat();
const findings = [];

for (const file of files) {
  if (containsFormerPublicIdentifier(file)) findings.push(`${file}: former public identifier in public path`);
  if (!textExtensions.has(extname(file))) continue;
  const content = await readFile(new URL(file, root), "utf8");
  for (const rule of forbidden) {
    if (rule.pattern.test(content)) findings.push(`${file}: ${rule.label}`);
  }
  for (const email of content.match(emailPattern) ?? []) {
    if (!permittedPublicEmailHashes.has(digest(email.toLowerCase()))) {
      findings.push(`${file}: email address`);
    }
  }
  if (containsFormerPublicIdentifier(content)) findings.push(`${file}: former public identifier`);
}

if (findings.length) {
  console.error("Privacy check failed:\n" + findings.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Privacy check passed across ${files.length} public source files.`);
