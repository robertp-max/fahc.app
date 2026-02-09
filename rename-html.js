import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.resolve(__dirname, 'dist');
const oldPath = path.join(buildDir, 'index.html');
const newPath = path.join(buildDir, 'FrontEndToMedplum.html');

if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log(`Renamed ${oldPath} to ${newPath}`);
} else {
  console.error(`${oldPath} does not exist`);
}