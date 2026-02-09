const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, 'dist');
const oldPath = path.join(buildDir, 'index.html');
const newPath = path.join(buildDir, 'Medplum.html');

if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log(`Renamed ${oldPath} to ${newPath}`);
} else {
  console.error(`${oldPath} does not exist`);
}