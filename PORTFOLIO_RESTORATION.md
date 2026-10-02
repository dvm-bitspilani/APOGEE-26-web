# APOGEE 2026 restoration

The first restoration made the original project buildable with patched dependencies, bundled fonts, local Draco and a compressed brochure. The refinement removes its added notice banners, sample registration service and personal-data form flow. Every Register control now opens the small native closed-edition dialog; direct `/registration` behaves the same way.

The original city and animated navigation remain. Original raster artwork is recompressed as WebP, and the city runtime is loaded by its route. Secondary images and the optional theme video no longer block the entry experience. The original camera sequence remains; terminal readiness follows the scene instead of a fixed deadline, and the post-launch logo/fade delay is shortened to 600 ms.

Canvas errors and context loss render the original Steel Skies artwork with navigation. Route boundaries reset per route. GLTF cache entries are read in the DOM root before Canvas so failed GLBs are caught without a Fiber global error. Later GPU/HDR faults remain subject to the installed Fiber `window.reportError` behavior; it is not suppressed. Normal browser navigation has no application errors.

Local fonts and the previously compressed 38-page brochure are unchanged. The build publishes four active public GLB exports, the hashed original car and local Draco; development model iterations remain in source. Native Pages SPA fallback replaces the catch-all rewrite rule. See [the verification report](RESTORATION_VERIFICATION.md) for checks and exact measurements.
