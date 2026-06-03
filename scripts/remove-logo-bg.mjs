import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(root, "Branding - 6.png");
const output = path.join(root, "public", "morph-logo.png");

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  // Remove near-black background while preserving white logo strokes.
  const isDark = r < 45 && g < 45 && b < 45;
  if (isDark) {
    data[i + 3] = 0;
  } else {
    // Slight edge softening for cleaner compositing on dark UI.
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    data[i + 3] = Math.min(255, Math.round((luminance / 255) * 255));
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log(`Saved transparent logo: ${output}`);
