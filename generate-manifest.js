// generate-manifest.js
const fs = require('fs');
const path = require('path');

const mediaDir = path.join(__dirname, 'media');
const outputFile = path.join(__dirname, 'media_manifest.json');

if (!fs.existsSync(mediaDir)) {
  console.error("❌ 'media' folder not found.");
  process.exit(1);
}

const mediaFiles = fs.readdirSync(mediaDir)
  .filter(file => file.endsWith('.webp') || file.endsWith('.mp4'))
  .map(file => `media/${file}`);

fs.writeFileSync(outputFile, JSON.stringify(mediaFiles, null, 2));
console.log(`✅ Manifest created with ${mediaFiles.length} entries.`);
