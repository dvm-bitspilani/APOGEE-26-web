# APOGEE 2026 portfolio restoration

Starting main commit: `f09be0e3bc0758e6b0f55a7f6a2753a8ba448447`.

The approved restoration preserves the original Under Steel Skies artwork, local fonts, car/city models, Theatre camera choreography and original page components. It replaces unavailable backend registration, Google OAuth, auth cookies, redirects and analytics with an in-memory demo. A persistent archive notice identifies the site. Events are sourced from the repository's existing dummy event data, explicitly labeled sample; these are not asserted to be the historical 2026 schedule. Demo identity and colleges are sample fixtures. Event selection validates empty/invalid selections and confirms locally; no payment, email, account or booking exists.

Routes load lazily. The original city remains the default; reduced-motion preference, unavailable WebGL or render failure provide a static branded archive with navigation. Asset loading gates have bounded escape timers. DPR is capped, debug/studio/performance imports removed, and existing keyboard cleanup was checked. Theatre core and R3F remain necessary runtime dependencies for the original animation.

Mappls SDK/token use is replaced by a labeled static venue schematic and optional external directions links. Draco decoder JS/WASM is bundled at `/draco/` and configured before routes load; registration no longer fetches remote environment presets. CSP restricts scripts to self and optional YouTube API, allows WASM compilation and blob workers, and does not allow JavaScript unsafe-eval. Same-origin fonts/textures and native brochure framing are allowed. Canonical/social metadata uses the requested original domain; DNS/domain binding is handled separately.

## Assets

- Public assets: 313,805,866 → 112,487,844 bytes.
- Source assets: 106,446,466 → 78,870,752 bytes.
- Removed 202,411,248 bytes of unreferenced public GLB export iterations. Referenced original models remain.
- Brochure: 35,751,196 → 8,175,071 bytes; all 38 pages retained. Ghostscript ebook compression; cover and page 10 visually checked, preserving artwork and legible typography. Native PDF viewer loads lazily and download remains available.
- All 18 font files converted to WOFF2 without glyph subsetting: CSS uses 329,308 bytes compared with 1,155,448 original font bytes. Original source fonts remain. Blender Pro thin/medium/bold/heavy weights and Cyberpunks italic declarations remain. Original display fonts have limited punctuation coverage; browser fallback handles glyphs absent in the source.

## Validation

- `npm run build`: passes (TypeScript 5.9, React 19, Vite 7 patched compatible versions).
- `npm audit` and `npm audit --omit=dev`: zero vulnerabilities, improved from baseline 32.
- `npm run verify`: local empty/invalid/valid demo confirmations, sample identity, all deployment asset sizes below 25 MiB, local font paths, absence of old backend/OAuth/SDK dependencies, ASCII SPA redirects.
- `git diff --check`: passes.
- Build/audit/size/font/PDF logs are in `restoration-evidence/`.
- Wrangler 4.145.0 pinned; Pages project `dvm-portfolio-apogee-2026`, output `dist`; deployment uses account environment variable. CI validates builds/fixtures/audit and performs no remote deployment.

## Limits

Original 3D runtime creates large JS chunks; no extended mobile/performance testing was requested. No exhaustive artwork raster/video optimization was performed after the user narrowed scope to rendering/fonts/main interactions and prompt deployment. Optional YouTube playback and external sponsor/social/directions links still depend on third-party sites. Browser/render/interaction review, GitHub push and Cloudflare publication are performed by the coordinating agent after this commit; no remote operation was performed in this working task.
