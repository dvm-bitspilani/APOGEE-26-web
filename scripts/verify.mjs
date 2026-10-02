import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { gzipSync } from 'node:zlib';
import { build } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const baseline = 'f9c6020';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
async function walk(root) {
  const files = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const path = `${root}/${entry.name}`;
    files.push(...(entry.isDirectory() ? await walk(path) : [path]));
  }
  return files;
}
// Render the native dialog with the application's React version; no DOM shim
// is involved, so these assertions cover the actual accessible HTML contract.
const bundled = await build({
  entryPoints: ['src/pages/components/RegistrationClosed/RegistrationClosed.tsx'],
  bundle: true, write: false, format: 'esm', platform: 'node', jsx: 'automatic',
  plugins: [{ name: 'verification-imports', setup(builder) {
    builder.onResolve({ filter: /^react(?:\/.*)?$/ }, args => ({ path: import.meta.resolve(args.path), external: true }));
    builder.onLoad({ filter: /\.scss$/ }, () => ({ contents: 'export default { dialog: "dialog" };', loader: 'js' }));
  } }],
});
const { RegistrationClosedDialog } = await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString('base64')}`);
const dialog = renderToStaticMarkup(createElement(RegistrationClosedDialog, { onClose() {} }));
assert.match(dialog, /<dialog[^>]*aria-labelledby="registration-closed-title"/);
assert.match(dialog, /<h2 id="registration-closed-title">Registration is closed for this edition<\/h2>/);
assert.match(dialog, /<button type="button"[^>]*autofocus=""[^>]*>Close<\/button>/);
assert.doesNotMatch(dialog, /<form|<input|<select|<textarea/);

const assets = await walk('dist');
for (const file of assets) assert.ok((await stat(file)).size <= 25 * 1024 * 1024, `${file} exceeds the Pages per-file limit`);
const expectedModels = ['city33-transformed.glb', 'cone.glb', 'dvmlogowide-v1.glb', 'onlyglobe-v1.glb'];
assert.deepEqual((await readdir('dist/models')).sort(), expectedModels.sort());
for (const file of expectedModels) assert.equal((await readFile(`dist/models/${file}`)).toString('ascii', 0, 4), 'glTF');
for (const file of ['draco_decoder.js', 'draco_decoder.wasm', 'draco_wasm_wrapper.js']) await stat(`dist/draco/${file}`);
assert.ok(assets.some(file => /car5\.0-transformed-.*\.glb$/.test(file)), 'Original car must remain in output');
assert.ok(assets.some(file => /city\.hdr$/.test(file)), 'Original city environment must remain in output');
assert.ok(!assets.includes('dist/404.html') && !assets.includes('dist/_redirects'), 'Pages uses its native SPA fallback');

const fontRecords = [];
for (const file of await walk('public/font')) {
  const actual = await readFile(file);
  const original = execFileSync('git', ['show', `${baseline}:${file}`]);
  assert.equal(hash(actual), hash(original), `Original font changed: ${file}`);
  fontRecords.push({ file, bytes: actual.length, sha256: hash(actual) });
}
const globalStyles = await readFile('src/assets/global.scss', 'utf8');
for (const match of globalStyles.matchAll(/url\(['"]([^'"]+)['"]\)/g)) await stat(`public${match[1]}`);
const brochurePath = 'src/assets/apogee-2026-brochure.pdf';
const brochure = await readFile(brochurePath);
assert.equal(hash(brochure), hash(execFileSync('git', ['show', `${baseline}:${brochurePath}`], { maxBuffer: 30 * 1024 * 1024 })), 'Compressed original brochure must stay unchanged');
assert.ok(brochure.length <= 25 * 1024 * 1024);
assert.ok(assets.some(file => /apogee-2026-brochure-.*\.pdf$/.test(file)));
const pdfInfo = await readFile('restoration-evidence/pdf-info.txt', 'utf8');
assert.match(pdfInfo, /Pages:\s+38/);

let imageReferences = 0;
for (const file of await walk('src')) {
  if (!/\.(tsx?|s?css)$/.test(file)) continue;
  const source = (await readFile(file, 'utf8')).replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  assert.doesNotMatch(source, /bits-apogee\.org\/2026\/main|apis\.mappls|sdk\.mappls|GoogleOAuthProvider|useCookies|axios\.|demoService/, `Removed live/mock dependency in ${file}`);
  assert.doesNotMatch(source, /portfolio archive|mobilemode|mobile mode|archived edition|demo registration|sample identity/i, `Added visible disclaimer in ${file}`);
  for (const match of source.matchAll(/["'(]([^"'()]+?\.(?:png|jpe?g|webp))(?=["')])/g)) {
    const url = match[1];
    if (url.startsWith('http') || url.includes('${')) continue;
    const target = url.startsWith('/src/') ? url.slice(1) : url.startsWith('/') ? `public${url}` : new URL(url, new URL(file, `file://${process.cwd()}/`));
    await stat(target);
    imageReferences++;
  }
}
const registrationSource = await readFile('src/pages/registration/Registration.tsx', 'utf8');
assert.match(registrationSource, /openRegistration/);
assert.doesNotMatch(registrationSource, /DetailsForm|Instructions|<form|<input|useRegistrationStore/);
assert.match(await readFile('src/pages/components/RegisterButton/RegisterButton.tsx', 'utf8'), /onClick=\{openRegistration\}/);
const artwork = await readFile('src/pages/city/LandingArtwork.tsx', 'utf8');
assert.match(artwork, /SteelSkiesbg\.webp/);
for (const route of ['/about', '/events', '/speakers', '/contact']) assert.ok(artwork.includes(`"${route}"`));
assert.doesNotMatch(artwork, /archive|portfolio|demo|motion|mobile mode/i);
const headers = await readFile('public/_headers', 'utf8');
assert.match(headers, /Cache-Control: public, max-age=0, must-revalidate/);
assert.match(headers, /\/assets\/\*\s+Cache-Control: public, max-age=31536000, immutable/);
assert.ok(!/localDecoders/.test(await readFile('src/main.tsx', 'utf8')), 'Three runtime must stay outside the entry route');
assert.match(await readFile('src/pages/city/City.tsx', 'utf8'), /^import "\.\.\/\.\.\/utils\/localDecoders"/);

let outputBytes = 0, jsBytes = 0, jsGzip = 0;
for (const file of assets) {
  const bytes = await readFile(file);
  outputBytes += bytes.length;
  if (file.startsWith('dist/assets/') && file.endsWith('.js')) { jsBytes += bytes.length; jsGzip += gzipSync(bytes).length; }
}
const html = await readFile('dist/index.html', 'utf8');
const entryFile = `dist${html.match(/<script[^>]*src="([^"]+\.js)"/)[1]}`;
const entry = await readFile(entryFile);
const optimization = JSON.parse(await readFile('restoration-evidence/artwork-optimization.json', 'utf8'));
const before = JSON.parse(await readFile("restoration-evidence/before-refinement.json", "utf8"));
const evidence = {
  baseline, before,
  after: { files: assets.length, outputBytes, jsBytes, jsGzip, entryBytes: entry.length, entryGzip: gzipSync(entry).length },
  artwork: { files: optimization.files, beforeBytes: optimization.before_bytes, afterBytes: optimization.after_bytes },
  brochure: { bytes: brochure.length, pages: 38, sha256: hash(brochure) },
  models: expectedModels, fonts: fontRecords,
  checks: ['Native labelled dialog with autofocus Close and no form fields', `${assets.length} deployment files below 25 MiB`, 'Active city models, car, environment and local Draco present', 'All original font and brochure hashes unchanged', `${imageReferences} local image references resolved`, 'No old APIs/mock registration or added disclaimers', 'Original artwork navigation', 'Hashed immutable caching and HTML revalidation', 'Native Pages SPA fallback'],
  browserChecks: 'Owned by coordinating agent; no browser timing or FPS claim is made by this verification.',
};
await writeFile('restoration-evidence/closed-edition-verification.json', `${JSON.stringify(evidence, null, 2)}\n`);
console.log(`PASS: ${evidence.checks.join('; ')}.`);
console.log(JSON.stringify({ before: evidence.before, after: evidence.after, artwork: evidence.artwork, brochure: evidence.brochure }));
