# APOGEE 2026 — Under Steel Skies

The original BITS Pilani APOGEE 2026 website, with its city, camera choreography, cyberpunk artwork, typography and historical content retained. Registration opens an accessible closed-edition notice. Devices that cannot render the city use the edition's original artwork and navigation.

```sh
npm ci
npm run build
npm run verify
npm run preview
```

The build prepares `dist` for Cloudflare Pages, retaining the active city models and local Draco decoder. Hashed assets are cached immutably; HTML is revalidated. The compressed original brochure remains available with all 38 pages.

[Verification report](RESTORATION_VERIFICATION.md) records the measured size changes, dependency audits, browser checks and remaining limitations. [Quality audit](QUALITY_AUDIT.md) records remaining interface and code findings. Browser review, pushes and publication are performed by the coordinating agent.
