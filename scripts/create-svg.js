import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const uploadsDir = 'C:/Users/FAIZANz COMp/.gemini/antigravity-ide/brain/18c53a19-8d10-4756-a69c-2dee9c7967dd/.user_uploaded';

async function processImageToSvg(srcFilename, outSvgName, outPngName) {
  const srcImg = path.join(uploadsDir, srcFilename);
  const destSvg = path.resolve('public/assets', outSvgName);
  const destPng = path.resolve('public/assets', outPngName);

  const metadata = await sharp(srcImg).metadata();
  const width = metadata.width;
  const height = metadata.height;

  const buf = fs.readFileSync(srcImg);
  fs.writeFileSync(destPng, buf);

  const b64 = buf.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
  <image href="data:image/png;base64,${b64}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" />
</svg>`;

  fs.writeFileSync(destSvg, svgContent, 'utf-8');
  console.log(`SVG generated: ${destSvg} (${width}x${height})`);
}

async function main() {
  await processImageToSvg('media_1787481284144.png', 'ehub-institute.svg', 'ehub-institute.png');
  await processImageToSvg('media_1787481636247.png', 'ehub-aiverse.svg', 'ehub-aiverse.png');
  console.log('All SVGs generated with full meet aspect ratio successfully!');
}

main().catch(console.error);
