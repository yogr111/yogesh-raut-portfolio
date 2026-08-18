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
  { label: "email address", pattern: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i },
];

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
  if (!textExtensions.has(extname(file))) continue;
  const content = await readFile(new URL(file, root), "utf8");
  for (const rule of forbidden) {
    if (rule.pattern.test(content)) findings.push(`${file}: ${rule.label}`);
  }
}

if (findings.length) {
  console.error("Privacy check failed:\n" + findings.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Privacy check passed across ${files.length} public source files.`);
