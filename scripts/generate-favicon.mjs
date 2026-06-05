import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logo = path.join(root, "public", "morph-logo.png");

/** Transparent square — for browser tabs on dark UI */
async function makeTransparentIcon(size, output) {
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

  console.log(`Created transparent ${output}`);
}

/** Dark square with rounded corners — for Google Search (white result circles) */
async function makeDarkIcon(size, output) {
  const padding = Math.round(size * 0.18);
  const logoSize = size - padding * 2;
  const radius = Math.round(size * 0.2);

  const resized = await sharp(logo)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const roundedMask = Buffer.from(
    `<svg width="${size}" height="${size}">
      <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white"/>
    </svg>`
  );

  const darkBg = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 10, g: 10, b: 10, alpha: 255 },
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toBuffer();

  await sharp(darkBg)
    .composite([{ input: roundedMask, blend: "dest-in" }])
    .png()
    .toFile(output);

  console.log(`Created dark ${output}`);
}

// Tab / dark-mode browsers
await makeTransparentIcon(48, path.join(root, "public", "favicon-tab.png"));

// Google Search + light contexts + default crawlers (/favicon.ico source)
await makeDarkIcon(48, path.join(root, "public", "favicon-dark.png"));
await makeDarkIcon(192, path.join(root, "public", "favicon-dark-192.png"));
await makeDarkIcon(512, path.join(root, "public", "favicon-dark-512.png"));
await makeDarkIcon(32, path.join(root, "app", "icon.png"));
await makeDarkIcon(180, path.join(root, "app", "apple-icon.png"));
