# artificenyc.org — PRD v2

**Decision date:** 2026-05-24
**Status:** Phase 2 (Design → Build transition) · scaffold complete
**Owner:** Renaise
**Companion docs:** `audit.md` (current-state capture), `STATUS.md` (project state)

## Goal

Re-implement the live artificenyc.org Framer site as an Astro static site
served from Cloudflare Pages. **Pixel-and-content parity with the current
Framer build** — same brand (ECO SYSTEM), same layout, same copy, same media,
same animations. The only thing that changes is the platform.

## Why

1. **Kill the $500/mo Framer hosting cost** (line item in
   `Artifice NYC/01_Operations/04_Finance/00_Budgets/2026-funding-strategy.md`).
2. **Eliminate Framer platform lock-in.** Site source lives in this repo;
   future edits don't require Framer.
3. **Match the studio stack.** `studioartifice.com/web` is Astro on Cloudflare
   Pages. Operating one stack reduces the surface area to maintain.

## Hard constraint — zero Framer fingerprints

Definition of done for the migration: a curl of any production URL returns
HTML with **no occurrence** of any of the following strings:

- `framer.com`
- `framerusercontent.com`
- `Framer`
- `framer-`
- `data-framer-*`
- Any class name starting with `framer-`
- Any embedded `<script>` that loads a Framer runtime

Verification: `grep -rE 'framer' dist/` returns nothing.
The current scaffold passes this check (verified 2026-05-24).

## Non-goals

- **No redesign.** We're rebuilding what's there, not iterating it. Visual /
  IA / copy changes happen in a separate phase after migration ships.
- **No new content.** Every section, image, and word comes from the current
  live site (see `audit.md`).
- **Entity scope: nonprofit-only.** (Updated 2026-05-25.) The current
  Framer site mixes 501(c)(3) programming with commercially-positioned
  studio content ("OUR SERVICES — THE ARTIFACT STUDIO" pitching Strategy /
  Design / Identity / Production). That block does not belong on the .org
  URL and has been **removed** from this build. Footer copyright
  standardized to `© 2026 ARTIFICE NYC, Inc.` on both pages. Commercial
  service offerings live on `studioartifice.com`, not here. This is a
  deliberate deviation from "1:1 mirror" for VLA compliance.
- **No CMS.** Content lives in `.astro` files. Future CMS introduction is a
  separate decision.

## Scope

### Pages (2)

| Route | Astro file | Source |
|---|---|---|
| `/` | `src/pages/index.astro` | `_audit/anyc-home.html` |
| `/contact` | `src/pages/contact.astro` | `_audit/anyc-contact.html` |

All other paths on the current site (`/about`, `/chapters`, `/nodes`,
`/services`, `/eco-system`, `/comingsoon`) **serve the home HTML on the live
Framer site** — they are anchor sections, not real pages. We mirror that
behavior with anchor links on `index.astro`.

### Edge redirects (preserved)

`_redirects` already handles `/support` and `/donate` → PayPal. Keep as-is.

### Assets (self-hosted)

All Framer-CDN assets pulled to `public/`:

- `public/fonts/` — Inter (8 woff2 subsets), Helvetica Now Display Regular,
  Fragment Mono regular + italic
- `public/img/` — 16 images + 2 SVG + 2 GIF
- `public/video/` — 4 MP4 clips

Total: ~177 MB. Cloudflare Pages handles binary delivery.

> **License note (Helvetica Now Display):** the woff2 was self-hosted under
> Framer's umbrella. We are self-hosting the same file under our own
> deployment. User has accepted the licensing call ("just use it"); revisit if
> Monotype contacts us.

### Animations / interactions (native re-implementations)

| Behavior on live site | Implementation |
|---|---|
| `THINK INSIDE THE BOX` marquee | CSS `@keyframes translateX`, infinite |
| Manifesto repeated 4× as scroll text | CSS animation or static repeat |
| Floating stars background | CSS-only positioned elements with `animation: drift` — or skip if not load-bearing |
| Inline videos (autoplay/loop) | Native `<video autoplay muted playsinline loop>` |
| Scroll-triggered reveals (`motion.mjs`) | `IntersectionObserver` + CSS transitions |
| Chapter list animation on contact page | CSS `:hover` transitions |
| Page transitions | Astro's built-in `<ViewTransitions />` if useful; otherwise none |

No React, no Framer Motion, no client framework. Vanilla JS islands only
where strictly needed.

## Typography

- **Display:** Helvetica Now Display Regular (self-hosted woff2)
- **Body / UI:** Inter (variable, 8 subsets self-hosted)
- **Mono / accent:** Fragment Mono (Google Fonts, self-hosted)

CSS variables in `src/styles/global.css`:

```
--font-display: "Helvetica Now Display", "Inter", system-ui, sans-serif;
--font-body: "Inter", system-ui, sans-serif;
--font-mono: "Fragment Mono", ui-monospace, monospace;
```

## Tokens (extracted from current site; refine during build)

- Background: `#000`
- Foreground: `#fff`
- Muted: `rgba(255,255,255,0.6)`
- Rule: `rgba(255,255,255,0.12)`
- Container: `min(1440px, 100% - 2rem)`

## Stack

- **Astro** 6.1.4 (static output, matches `studioartifice.com/web`)
- **Cloudflare Pages** for hosting (matches `studioartifice.com`)
- **Wrangler** for deploys (CLI command in `README.md`)
- Node ≥ 20

## Deployment plan

1. Land scaffold + page builds on the `afxhq` branch in this repo.
2. Build locally → `dist/`.
3. Manual deploy to Cloudflare Pages preview branch first:
   ```
   wrangler pages deploy dist --project-name=artificenyc --branch=staging --commit-dirty=true
   ```
4. Visual QA against live site side-by-side.
5. Promote to production by deploying to `--branch=main`. Production domain
   already bound; no DNS change needed.

## Open items (build phase)

- [ ] Implement home page sections from `_audit/anyc-home.html` (full
      DOM-level translation, not paraphrase)
- [ ] Implement contact page from `_audit/anyc-contact.html`
- [ ] Floating stars decision: implement or drop
- [ ] Video poster frames (so first paint doesn't show black before autoplay
      kicks in)
- [ ] Side-by-side QA pass against `www.artificenyc.org`
- [ ] First Cloudflare Pages staging deploy
- [ ] DNS cutover (no change needed — domain already bound to `artificenyc`
      project; we're just shipping a non-empty build)

## Success criteria

1. `grep -r "framer" dist/` returns nothing.
2. Lighthouse Performance ≥ 90 on home (better than Framer baseline).
3. Side-by-side visual diff vs. live Framer site: no perceptible regression
   on desktop or mobile.
4. Framer subscription can be cancelled.
