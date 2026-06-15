# artificenyc.org — site audit (2026-05-24)

Source-of-truth capture of the live Framer site before re-implementing in Astro.
Raw HTML snapshots saved alongside this file at `_audit/anyc-home.html` and `_audit/anyc-contact.html`.

## Site identity (as found)

- **Brand label:** ECO SYSTEM™
- **Tagline:** THINK INSIDE THE BOX
- **Self-description:** "A science-fiction creative studio based in New York City."
- **Published (Framer):** Feb 25, 2026
- **Generator:** Framer 747ab96
- **Favicon:** w6si5X5rmkjcNRfQqW2pEwmgZxU.png

> **Entity flag (deferred):** Footer copyright is **inconsistent across pages** —
> homepage shows `© 2026 INDEX LLC`, contact page shows `© 2026 ARTIFICE NYC`.
> The user has chosen to mirror the current site exactly (VLA cleanup deferred).

## Routes

| Path | Status | Title | Notes |
|---|---|---|---|
| `/` | 200 | ECO SYSTEM | Single-page home; all sections live as anchors |
| `/about` | 200 | ECO SYSTEM | Serves home HTML (anchor) |
| `/chapters` | 200 | ECO SYSTEM | Serves home HTML (anchor) |
| `/nodes` | 200 | ECO SYSTEM | Serves home HTML (anchor) |
| `/services` | 200 | ECO SYSTEM | Serves home HTML (anchor) |
| `/eco-system` | 200 | ECO SYSTEM | Serves home HTML (anchor) |
| `/comingsoon` | 200 | ECO SYSTEM | Linked from page; serves home HTML |
| `/contact` | 200 | Contact · ECO SYSTEM™ | **Separate document** |
| `/support`, `/donate` | 302 | (PayPal) | Edge redirect via `_redirects` |

**Effectively two unique HTML documents:** home + contact. The Astro build will mirror this — one home page with anchor sections, one contact page, plus the existing edge redirects.

## Navigation

`CHAPTERS · NODES · ECO SYSTEM · ABOUT US · CONTACT`

(In-page anchor scrolls on home; `/contact` is the only real page hop.)

## Home — section order

1. **Marquee:** `THINK INSIDE THE BOX` (repeated)
2. **Upcoming:** `ARTIFICE 006`, `SIGHTS: SCIENCE // FICTION` — section header `UPCOMING`, copy `ECO SYSTEM: THE ARTIFACTS OF science-fiction. SHOWCASING WHITEBOX + BLACKBOX THROUGH LAB + STAGE.`
3. **About** (manifesto block, repeats 4×):
   > A SCIENCE-FICTION CREATIVE STUDIO BASED IN NEW YORK CITY. WHERE ART + TECHNOLOGY CONVERGE TO SHAPE + LINK ARTIFACTS THROUGH STRATEGY + VISION. ECO SYSTEM EMBODIES RELATIONAL ARTIFACTS, CONCEPTUALLY SHAPING AESTHETIC DICHOTOMIES WHETHER THAT BE HUMAN / TECH, SCIENCE / FICTION, ANALOG / DIGITAL... WHITEBOX / BLACKBOX.
4. **LAB + STAGE** (Chapters explainer):
   > CHAPTERS ARE DUAL FORMAT SHOWCASES FOR ARTIFACTS. WHERE LAB + STAGE MANIFEST THROUGH FOCUSED CONCEPTS; THE SCIENCE MATERIAL WHITEBOX + THE DIGITAL FICTIONS BLACKBOX.
   - SCIENCE / LAB · WHITEBOX
   - FICTION / STAGE · BLACKBOX
5. **OUR SERVICES — THE ARTIFACT STUDIO**
   - 01 PRODUCTION (COMING SOON)
   - 02 IDENTITY
   - 03 DESIGN
   - 04 STRATEGY
6. **OUR NETWORK — NODES**
7. **Footer**

## Contact — content

Header: `Contact · ECO SYSTEM™`

**Chapters list (visible on contact page):**
- WHITEBOX 005 / BLACKBOX 005
- WHITEBOX 004 / BLACKBOX 004
- WHITEBOX 003 / BLACKBOX 003
- WHITEBOX 002 / BLACKBOX 002
- WHITEBOX 001 / BLACKBOX 001

(Full contact form / contact body to be re-extracted in higher fidelity during page rebuild — current parse dropped form fields.)

## Footer (both pages, same nav)

- **Overview:** HOME · ABOUT · SERVICES · CONTACT
- **Socials:** INSTAGRAM · THREADS · YOUTUBE · LinkedIn · SUBSTACK
- **Copyright:** `© 2026 INDEX LLC` (home) / `© 2026 ARTIFICE NYC` (contact)
- **Back to top** link

## External links

- Instagram: https://www.instagram.com/artifice.nyc/
- Threads: https://www.threads.com/@artifice.nyc
- YouTube: https://www.youtube.com/artifice.nyc/
- LinkedIn: https://www.linkedin.com/company/artifice-nyc-org/
- Substack: https://artificenyc.substack.com/ (and https://substack.com/@artificenyc)
- Featured IG post: https://www.instagram.com/p/DP_5tOMDush/
- Spanish subdomain: https://es.artificenyc.org/

## Typography (to self-host)

| Family | Source | Files |
|---|---|---|
| **Helvetica Now Display Regular** | Framer-hosted | `OgzGHrLp73k4HEVv8yF1RK2ralQ.woff2` |
| **Inter** | Framer-hosted | 7 woff2 files (subsets) |
| **Fragment Mono** | Google Fonts | `fonts.gstatic.com/s/fragmentmono/v6/...` (2 woff2) |

Placeholder families (`Inter Placeholder`, `Helvetica Now Display Regular Placeholder`) map to `local("Arial")`.

> **Licensing call:** Helvetica Now Display is licensed (Monotype). The Framer site self-hosts it under Framer's umbrella; when we move off Framer we either need our own Monotype license, or substitute (Inter / Neue Haas Grotesk Display / equivalent). Resolve before the migration ships.

## Asset inventory — Framer-hosted

**Self-hostable (53 unique URLs):**

Fonts (8): 7× Inter woff2, 1× Helvetica Now Display Regular woff2
Images (16): 14× PNG, 2× SVG
Animated (3): 2× GIF, plus animated transitions in code
Video (4): RRDGSodDW8IMISFdDsKjwdvDffo.mp4, XusG2hsqMkuT2bCg6nR95oE6qSg.mp4, YprJDPAoHh6UOsesdXRnlCde4.mp4, n8BOb9Aj9Yy0yDuZYabAbBS8G3I.mp4
Framer runtime mjs (18): react, motion, framer, rolldown-runtime, shared-lib, plus components (Floating_Stars, Video, etc.) — **all to be replaced with Astro/native equivalents, not self-hosted**

Full URL list: see `_audit/asset-urls.txt`.

## Interactive behaviors to re-implement natively

| Framer module | What it does | Astro/native replacement |
|---|---|---|
| `Floating_Stars.*.mjs` | Animated star field background | CSS-only or small vanilla-JS canvas |
| `Video.*.mjs` | Inline video player | Native `<video>` with `autoplay muted playsinline loop` |
| `motion.*.mjs` | Scroll/reveal animations | CSS scroll-driven animations + IntersectionObserver |
| `framer.*.mjs` | Framer page runtime, transitions | Astro page transitions / no replacement needed |
| `react.*.mjs` | React runtime | Not needed — Astro islands only if specific component requires |
| Marquee (`THINK INSIDE THE BOX`) | Infinite horizontal scroll | CSS `@keyframes translateX` |

## Stack target (deferred — see prd.md)

- **Astro** (mirrors `Websites/studioartifice.com/web`)
- **Cloudflare Pages** (mirrors deploy pipeline)
- Self-hosted fonts in `public/fonts/`
- All images/video in `public/media/`
- Zero `framerusercontent.com` / `framer.com` references in shipped HTML, CSS, or JS

## Raw captures

- `_audit/anyc-home.html` (574 KB)
- `_audit/anyc-contact.html` (252 KB)
- `_audit/asset-urls.txt` (52 base URLs)

These are the immovable source-of-truth references for content/layout/copy.
