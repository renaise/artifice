# Artifice Design Tokens

The single source of truth for color, type, space, and motion across every
Artifice surface (artificenyc.org, index, worldsite, CRM, decks). Values are
sourced from the Figma **"AFXHQ — Brand"** variables. Implemented in
[`global.css`](./global.css).

## The one rule for agents

> **Components reference Tier-2 (semantic) tokens and above — never a raw hex,
> never a Tier-1 primitive.** If you need a value that has no token, add a token;
> don't inline a hex. "cream", `#f7f4ec`, `#0e0e0e`, ad-hoc `#fff` — all banned.

Three tiers: **primitives** (raw values) → **semantic** (roles) → **type/space/motion**.
Primitives can change; components never notice because they bind to roles.

---

## Tier 1 · Primitives (raw — do not reference in components)

| Token | Value | Figma |
|---|---|---|
| `--black` | `#000000` | artificenyc.org/Black |
| `--white` | `#ffffff` | Color 1 / White |
| `--white-linen` | `#fcfaf5` | White Linen / grey-97 |
| `--grey-88` | `#e0e0e0` | grey-88 |
| `--near-black` | `#1c1c1c` | — |
| `--off-black` | `#0a0a0a` | — |
| `--grad-dark` | `#0e0e0e` | footer gradient start |
| `--grad-fade` | `#414141` | footer gradient end |
| `--cobalt` | `#0000ee` | link blue |

## Tier 2 · Semantic roles (reference THESE)

| Token | Resolves to | Use for |
|---|---|---|
| `--bg` | black | default (dark) page background |
| `--bg-light` | white-linen | light sections (WHITEBOX, light surfaces) |
| `--surface` | off-black | raised surface on dark |
| `--fg` | white-linen | text + marks on dark |
| `--fg-invert` | black | text + marks on light |
| `--text-muted` | `rgba(252,250,245,.6)` | secondary text on dark |
| `--rule` | `rgba(252,250,245,.12)` | hairline borders on dark |
| `--rule-invert` | `rgba(0,0,0,.14)` | hairline borders on light |
| `--accent` | cobalt | links, focus, contact card |
| `--footer-bg` | gradient | footer background |

Legacy aliases still resolve (`--ink`→black, `--ink-soft`→near-black,
`--off-dark`→off-black, `--muted`→text-muted). Migrate to the roles above over time.

## Tier 3 · Type

| Token | Value |
|---|---|
| `--font-display` | Helvetica Now Display (headings, body) |
| `--font-body` | Helvetica Now Display (always — same family as display) |
| `--font-mono` | Fragment Mono (labels, eyebrows, nav, UI) |
| `--text-display` | `clamp(40px, 6vw, 96px)` |
| `--text-h1` | `clamp(34px, 4.4vw, 64px)` |
| `--text-h2` | `clamp(24px, 3vw, 48px)` |
| `--text-body` | `clamp(15px, 1.2vw, 18px)` |
| `--text-label` | `11px` (mono labels) |
| `--tracking-tight` | `-0.02em` (display) |
| `--tracking-label` | `0.06em` (mono labels) |

Pairing: one display sans + one mono. Never add a third family. Cursive
WHITEBOX/BLACKBOX/ARTIFICE wordmarks are **art assets (PNG/SVG)**, not fonts.

## Tier 4 · Space / radius / motion

| Token | Value | Use |
|---|---|---|
| `--container` | `min(1440px, 100% - 2rem)` | max content width |
| `--gutter` | `clamp(16px, 4vw, 40px)` | page side padding |
| `--radius-sm` | `6px` | media frames, buttons |
| `--radius-md` | `12px` | program cards |
| `--radius-pill` | `999px` | pill chrome |
| `--radius-dot` | `50%` | dots/avatars |
| `--ease` | `cubic-bezier(0.22,1,0.36,1)` | ease-out-quint (all transitions) |
| `--dur` | `0.25s` | default transition |

## Theme contract (light vs dark sections)

Artifice is dark by default with light "WHITEBOX" interludes. A section sets its
own ground, and chrome inverts to match:

- **Dark section:** `background: var(--bg)`, text `var(--fg)`, borders `var(--rule)`.
- **Light section:** `background: var(--bg-light)`, text `var(--fg-invert)`, borders `var(--rule-invert)`.

The fixed nav reads the section under it and toggles `.nav--light` accordingly —
that mechanism, not a per-page color, is how nav contrast stays correct.

## Adding to the system

1. New brand color → add the **primitive** (named by what it is) + a **semantic
   role** (named by what it does). Reference only the role.
2. Confirm it exists as a Figma variable first; tokens mirror Figma, not the reverse.
3. Run the `gander` warden after changes to catch off-token drift before it ships.
