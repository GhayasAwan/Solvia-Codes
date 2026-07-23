import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

async function processFavicons() {
  console.log('Optimizing favicons...');

  // Resize favicon.png to 64x64
  await sharp(path.join(publicDir, 'favicon.png'))
    .resize(64, 64)
    .png({ compressionLevel: 9 })
    .toBuffer()
    .then(data => sharp(data).toFile(path.join(publicDir, 'favicon.png.tmp')));

  // Resize apple-touch-icon.png to 180x180
  await sharp(path.join(publicDir, 'apple-touch-icon.png'))
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toBuffer()
    .then(data => sharp(data).toFile(path.join(publicDir, 'apple-touch-icon.png.tmp')));

  console.log('Favicons optimized successfully!');
}

processFavicons().catch(err => {
  console.error('Error optimizing favicons:', err);
  process.exit(1);
});
