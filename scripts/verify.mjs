import {readFile, readdir, stat} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
const bundled=await build({entryPoints:['src/utils/demoService.ts'],bundle:true,write:false,format:'esm',platform:'node'});
const demo=await import('data:text/javascript;base64,'+Buffer.from(bundled.outputFiles[0].text).toString('base64'));
assert.match(demo.confirmDemo([]),/Select at least/);
assert.match(demo.confirmDemo([9999]),/valid sample/);
assert.match(demo.confirmDemo([demo.demoEvents[0].id]),/Nothing was sent/);
assert.equal(demo.sampleIdentity.email,'visitor@example.com');
async function walk(root){let files=[];for(const e of await readdir(root,{withFileTypes:true})){const p=root+'/'+e.name;files.push(...(e.isDirectory()?await walk(p):[p]));}return files;}
const assets=await walk('dist');for(const f of assets)assert.ok((await stat(f)).size<=25*1024*1024,`${f} exceeds Pages limit`);
const styles=await readFile('src/assets/global.scss','utf8');for(const m of styles.matchAll(/url\('([^']+)'\)/g))await stat('public'+m[1]);
for(const file of await walk('src')){if(!/\.(tsx?|html)$/.test(file))continue;const source=await readFile(file,'utf8');assert.ok(!/bits-apogee\.org\/2026\/main|apis\.mappls|sdk\.mappls|GoogleOAuthProvider|useCookies|axios\./.test(source),`Live dependency in ${file}`)}
assert.equal(await readFile('public/_redirects','utf8'),'/* /index.html 200\n');
console.log(`PASS: demo empty/invalid/valid confirmation, local identity, ${assets.length} deployment asset limits, fonts, no legacy APIs, SPA fallback.`);
