import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logo = path.join(root, "public", "morph-logo.png");

async function makeSquareIcon(size, output) {
  const padding = Math.round(size * 0.18);
  const logoSize = size - padding * 2;

  const resized = await sharp(logo)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 10, g: 10, b: 10, alpha: 255 },
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(output);

  console.log(`Created ${output}`);
}

await makeSquareIcon(512, path.join(root, "app", "icon.png"));
await makeSquareIcon(180, path.join(root, "app", "apple-icon.png"));
await makeSquareIcon(512, path.join(root, "public", "icon.png"));
await makeSquareIcon(48, path.join(root, "public", "icon-48.png"));
await makeSquareIcon(32, path.join(root, "public", "favicon-32.png"));
