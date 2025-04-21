import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const radixPrefix = '@radix-ui/';
const targetDir = './src';

let radixImports = new Set();

function readFilesRecursively(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      readFilesRecursively(fullPath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/@radix-ui\/[a-zA-Z0-9-]+/g);
      if (matches) {
        matches.forEach(pkg => radixImports.add(pkg));
      }
    }
  });
}

function checkInstalledPackages() {
  const pkgJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  const deps = Object.assign({}, pkgJson.dependencies, pkgJson.devDependencies);
  return Array.from(radixImports).filter(pkg => !(pkg in deps));
}

function installPackages(pkgs) {
  if (pkgs.length === 0) {
    console.log('✅ Semua package Radix UI sudah terinstall.');
    return;
  }

  const installCommand = `npm install ${pkgs.join(' ')}`;
  console.log(`📦 Installing missing packages: ${pkgs.join(', ')}`);
  execSync(installCommand, { stdio: 'inherit' });
}

readFilesRecursively(targetDir);
const missing = checkInstalledPackages();
installPackages(missing);