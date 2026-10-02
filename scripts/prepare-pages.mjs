import { readFile, readdir, rm, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';

// Only these public exports are imported by the live CityScene. Keep the
// development export iterations in source without publishing them each build.
export const cityModels = new Set([
  'city33-transformed.glb', 'onlyglobe-v1.glb', 'cone.glb', 'dvmlogowide-v1.glb',
]);
for (const name of await readdir('dist/models')) {
  if (!cityModels.has(name)) await rm(`dist/models/${name}`);
}
for (const name of cityModels) {
  const bytes = await readFile(`dist/models/${name}`);
  assert.equal(bytes.toString('ascii', 0, 4), 'glTF', `${name} must be a valid GLB`);
}
for (const file of ['draco_decoder.js', 'draco_decoder.wasm', 'draco_wasm_wrapper.js']) {
  assert.ok((await stat(`dist/draco/${file}`)).size > 0, `Missing local Draco decoder ${file}`);
}
async function walk(root) {
  const files = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const path = `${root}/${entry.name}`;
    files.push(...(entry.isDirectory() ? await walk(path) : [path]));
  }
  return files;
}
for (const file of await walk('dist')) {
  assert.ok((await stat(file)).size <= 25 * 1024 * 1024, `${file} exceeds the Pages per-file limit`);
}
console.log(`Prepared Pages output with ${cityModels.size} original city models and local Draco.`);
