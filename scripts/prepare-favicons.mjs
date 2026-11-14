import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const source = new URL("../public/brd-logo.jpg", import.meta.url);
const sizes = [16, 32, 48, 64, 128, 256];
const square = (size) => sharp(fileURLToPath(source)).resize(size, size, { fit: "contain", background: "#ffffff" }).ensureAlpha().png().toBuffer();
const frames = [];
for (const size of sizes) frames.push(await square(size));

// ICO directory entries point to the embedded PNG frames at each browser size.
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
for (let index = 0; index < sizes.length; index++) {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index] % 256;
  directory[entry + 1] = sizes[index] % 256;
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(frames[index].length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += frames[index].length;
}
await writeFile(new URL("../app/favicon.ico", import.meta.url), Buffer.concat([directory, ...frames]));
await writeFile(new URL("../public/favicon-96x96.png", import.meta.url), await square(96));
await writeFile(new URL("../public/apple-touch-icon.png", import.meta.url), await square(180));
console.log("Prepared BRD favicon.ico, 96px search icon and 180px Apple touch icon");
