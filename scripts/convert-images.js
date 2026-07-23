import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src/import');

async function processImages() {
  console.log('Optimizing images...');
  
  // ghayas.png -> ghayas.webp (width 600)
  await sharp(path.join(srcDir, 'ghayas.png'))
    .resize({ width: 600, fit: 'inside' })
    .webp({ quality: 80 })
    .toFile(path.join(srcDir, 'ghayas.webp'));
  console.log('Processed ghayas.webp');

  // hamza.png -> hamza.webp (width 600)
  await sharp(path.join(srcDir, 'hamza.png'))
    .resize({ width: 600, fit: 'inside' })
    .webp({ quality: 80 })
    .toFile(path.join(srcDir, 'hamza.webp'));
  console.log('Processed hamza.webp');

  // warda.png -> warda.webp (width 500)
  await sharp(path.join(srcDir, 'warda.png'))
    .resize({ width: 500, fit: 'inside' })
    .webp({ quality: 80 })
    .toFile(path.join(srcDir, 'warda.webp'));
  console.log('Processed warda.webp');

  // faizan.jpg -> faizan.webp (width 500)
  await sharp(path.join(srcDir, 'faizan.jpg'))
    .resize({ width: 500, fit: 'inside' })
    .webp({ quality: 80 })
    .toFile(path.join(srcDir, 'faizan.webp'));
  console.log('Processed faizan.webp');

  // logo.jpg -> logo.webp (width 400)
  await sharp(path.join(srcDir, 'logo.jpg'))
    .resize({ width: 400, fit: 'inside' })
    .webp({ quality: 85 })
    .toFile(path.join(srcDir, 'logo.webp'));
  console.log('Processed logo.webp');

  console.log('All images optimized successfully!');
}

processImages().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
