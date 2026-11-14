import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
const source = await readFile(new URL('../diet-cvd-evidence-app.html', import.meta.url), 'utf8');
if (!source.includes('<!DOCTYPE html>') || !source.includes('</html>')) {
  throw new Error('The application source is not a complete HTML document.');
}
const output = new URL('../public/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await Promise.all(['index.html', 'diet-cvd-evidence-app.html'].map(name =>
  writeFile(new URL(name, output), source)
));
console.log('Built CardioDiet at / and /diet-cvd-evidence-app.html');
