import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logo = path.join(root, "public", "morph-logo.png");

/** Square transparent canvas — logo only, no background fill */
async function makeSquareIcon(size, output) {
  const padding = Math.round(size * 0.12);
  const logoSize = size - padding * 2;

  await sharp(logo)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(output);

  console.log(`Created ${output}`);
}

await makeSquareIcon(512, path.join(root, "app", "icon.png"));
await makeSquareIcon(180, path.join(root, "app", "apple-icon.png"));
await makeSquareIcon(512, path.join(root, "public", "icon.png"));
await makeSquareIcon(48, path.join(root, "public", "icon-48.png"));
await makeSquareIcon(32, path.join(root, "public", "favicon-32.png"));
