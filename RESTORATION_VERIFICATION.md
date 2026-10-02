# APOGEE 2026 refinement verification

Registration now opens a small labelled native dialog with exactly “Registration is closed for this edition”. It provides autofocus Close, Escape, backdrop dismissal, focus restoration and scroll locking. The direct registration route uses the same notice. The added banner, mock service, personal-data forms and sample confirmation flow are removed.

The original city, four city blocks, car, globe, cone, DVM logo, lighting, fog, camera sequence, graphical menus and typography remain. Original Steel Skies artwork supplies navigation when WebGL cannot render. There is no portfolio, archive, demo or mobile-mode notice in the product flow.

## Measurements

The before build is commit `f9c6020`, reproduced with its own locked install in an isolated worktree. The after values come from the production build and `npm run verify`. These are artifact sizes, not network timings or FPS measurements.

| Metric | Before | After | Reduction |
|---|---:|---:|---:|
| Production output | 141,351,338 B | 32,125,069 B | 77.3% |
| Production JS chunks | 2,109,743 B | 1,917,817 B | 9.1% |
| Production JS chunks, gzip | 642,118 B | 572,776 B | 10.8% |
| Entry script | 1,240,530 B | 371,779 B | 70.0% |
| Entry script, gzip | 350,948 B | 124,867 B | 64.4% |
| Recompressed original raster set (102 files) | 90,047,891 B | 11,138,694 B | 87.6% |

JS chunk measurements cover `dist/assets`; unchanged local Draco files are counted in total output. The raster set includes source and public artwork and is not a claim about any page's initial transfer. The build emits 278 files, each below 25 MiB. The largest file is the original compressed brochure: 8,175,071 bytes, 38 pages, unchanged SHA-256 `b5590b5cf81d910fa95f1ee39cf5090740de325852df647ceb9340a3770ea050`.

## Loading and rendering changes

- Three/Draco setup loads with the city route. The five GLTF cache entries are read individually in the DOM root before Canvas, so failed GLBs reach the route boundary without a Fiber global error. Existing parallel preloads and shared cache keys remain. Navigation prefetches route code on intent; scene About and Contact content mounts only when opened.
- The original terminal appears after model readiness and uses actual scene readiness. The fixed 12-second escape and all-secondary-artwork gate are removed. Original intro choreography remains; reduced motion skips the camera intro. Post-launch delay is 600 ms instead of three seconds.
- Events and Speakers show without downloading every image first. Sponsor/media logos decode asynchronously and load lazily; the original theme video iframe mounts on Play and stops when hidden or closed.
- Canvas DPR is capped at 1.25 and rendering pauses in hidden documents. Static building matrices are composed once while the outer Theatre choreography remains active. Countdown range checks run at 10 Hz.
- Navbar and tracker RAF loops cancel on unmount. Gesture listeners, Observer, decay timers, menu timelines and hover timers clean up. Route unmount pauses the intro and releases detached scene/camera/scroll references and modal state. Cached GLTF resources remain available for return navigation.
- Hashed assets use immutable caching; HTML revalidates. Native Pages SPA fallback is used without a self-rewriting catch-all rule.

## Checks

- Locked `npm ci`, production TypeScript/Vite build and `npm run verify`: pass.
- Full and production dependency audits: zero vulnerabilities.
- Native dialog server-render checks: correct label/text, autofocus Close and no form fields.
- 124 local image references resolve. Active city models, original car/environment and local Draco are present. Every original local font and the compressed brochure match baseline hashes.
- `git diff --check`: pass.
- Coordinating agent browser checks: 20 non-home desktop/mobile route cases passed with zero application errors, failed resources, broken images or horizontal overflow. Direct registration passed. Final native-GPU normal, seven-second slow-model and failed-GLB resilience checks passed with zero page errors; original city/artwork fallback, registration notice and Escape worked.

## Known limits

Failed GLBs are caught in the DOM root before Fiber exists; final fault-injection checks have zero page errors. HDR loading and later GPU/render exceptions still occur inside Fiber, whose installed version calls `window.reportError` even for caught errors. HDR fault injection is untested. Normal navigation has no application errors. No global error handler or dependency code is patched to hide errors.

The upstream event dataset contains placeholder names/times and a 2025 introduction. Its original wording is preserved; no replacement 2026 program is invented. Remaining interface findings are in [QUALITY_AUDIT.md](QUALITY_AUDIT.md).

Full-repository ESLint remains nonzero: 85 errors/21 warnings before, 68 errors/29 warnings after. Newly added components/hooks have zero errors/warnings. Existing/generated scene code, permissive types, effect rules and older controls account for the remaining findings. Production TypeScript compilation passes.

Machine-readable evidence is in `restoration-evidence/before-refinement.json`, `closed-edition-verification.json`, `artwork-optimization.json`, `lint-summary.json`, `audit.json` and `audit-production.json`. No browser, push or deployment operation was performed by this repository worker.
