# APOGEE 2026 quality audit

## Anti-patterns verdict

The authored cyberpunk identity is preserved: original city geometry, camera motion, artwork, display fonts, glass navigation and mechanical menus. New fallback navigation uses the original Steel Skies artwork and bracket treatment. Added portfolio/demo banners and generic mobile/reduced-motion replacement copy are removed. The original glass treatment is part of the edition rather than an added design template.

## Executive summary

Remaining findings: zero critical, one high, two medium and one low. Core registration, loading, content routes and canvas recovery pass the reported checks. Remaining work concerns original keyboard controls, verified historical event copy and the cost of rendering the preserved city. No numerical design score or unmeasured FPS claim is assigned.

## High: keyboard access to original speaker controls

**Location:** `src/pages/speakers/Speakers.tsx`, year nodes, portrait nodes and previous/next arrows. **Category:** Accessibility.

Several original div/SVG controls respond only to clicks. Keyboard users cannot operate the full year/portrait carousel. This relates to WCAG 2.1.1. Convert these controls to labelled native buttons or equivalent keyboard controls, preserving their exact graphical layout and motion. Use `/harden` and `/adapt` for this focused follow-up. Event category and city navigation controls have keyboard support; the closed-registration dialog uses native focus and Escape behavior.

## Medium: preserved city rendering cost

**Location:** `src/pages/city/City.tsx`, `CityScene` and its four city clones. **Category:** Performance.

The city route still contains approximately 1.37 MB of minified JS and renders the original multi-block scene with animated car/globe/effects. Entry loading and media size are substantially reduced, DPR is capped, hidden rendering pauses, and static building matrices are frozen locally. Software GPU navigation remains expensive. Profile on representative hardware before changing original geometry or effects; use `/optimize` with measured frame/interaction traces. The current checks establish functionality and artifact size, not a frame-rate guarantee.

## Medium: original placeholder event content

**Location:** `src/pages/events/eventsData.ts`. **Category:** Content accuracy.

The upstream dataset includes placeholder names, repeated locations/times and a 2025 introduction. Presenting it as a verified 2026 program could mislead a reader. The refinement preserves original wording and removes the added demo wording. Replace this data only from an authorized historical program; use `/clarify` once that source is supplied. Registration remains closed and submits no data.

## Low: existing lint debt

**Location:** original/generated scene components, types and effect code. **Category:** Maintainability.

Full lint results are 68 errors and 29 warnings, versus 85 errors and 21 warnings in the baseline. New components and hooks pass. Remaining permissive types and legacy effect patterns make later modifications harder to assess. Resolve these in focused components with meaningful interaction checks; use `/harden`. The production TypeScript build, deployment checks and dependency audits pass.

## Patterns and positive findings

The original interface uses many graphic-only controls and fixed scene dimensions; keyboard improvements should preserve its art rather than replace the visual system. Original single-theme colors and local font faces remain consistent. The new dialog has a clear label, native focus behavior and a 44px minimum Close target. Artwork fallback navigation is responsive. All original font hashes and brochure pages are preserved. Uncached route/media work is deferred, and cleanup now removes the main recurring RAF/listener leaks.

## Priority and validation

Address speaker keyboard access first. Resolve the event dataset when an authoritative historical program is available. Profile the city before further performance tradeoffs, then pay down local lint debt as affected components change. Coordinate `/harden`, `/clarify`, `/optimize` and `/adapt` work around the original design requirements.

The coordinating agent reports native-GPU normal, seven-second slow-model and failed-GLB recovery checks with zero page errors, plus 20 desktop/mobile content-route checks. Failed GLBs are caught in the DOM root before Fiber is created; recovery uses original artwork and closed-registration notice. HDR/GPU faults remain inside Fiber and subject to its caught-error reporting behavior; HDR fault injection is untested. Error reporting is not suppressed.
