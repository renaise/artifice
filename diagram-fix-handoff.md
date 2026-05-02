# ECO SYSTEM diagram fix — handoff

Two diagrams were addressed: the one on the Framer-hosted `artificenyc.org` (the screenshot source) and the related four-system pipeline on `index.artificenyc.org/about.html`.

## What was wrong

The Framer diagram's arrows visually implied `PROFILES → ARTIFACTS` and `ATLAS → WORLDS`. The schema (from memory + project canon) is:

- Top pipeline: `RADAR → PROFILES → ATLAS → INDEX`
- `INDEX` branches into `ARTIFACTS [OBJECTS]` and `WORLDS [CAPTURE]`
- `WORLDS` branches into `URL [DIGITAL PROJECTS]` and `IRL [EXPERIENTIAL PROGRAMS]`
- `ARTIFACTS` has no children — it is the output

`index.artificenyc.org/about.html` had a flat single-row pipeline with no sub-tree, and used lowercase verbs (`[scout]/[connect]`) inconsistent with the canonical bracket convention.

## What changed

### `~/afxhq/Websites/artificenyc.org/` — `renaise/artifice` repo, `main`

Two new files (committed locally as `c5dc3ee`, not pushed):

- **`eco-system-diagram.svg`** — corrected hierarchy as a drop-in SVG asset. Monospace fallback, white strokes, transparent background. Upload to Framer as an image layer, or use as a 1:1 reference for redrawing in Framer's vector tools.
- **`diagram-fix-spec.md`** — explicit change list for the Framer page:
  1. Structural diagram fix (the elbow re-route)
  2. `CURATIONAL → CURATORIAL` typo correction (unless `curational` is intentional)
  3. First-person line breaks the editorial voice — replace or move to a colophon
  4. `URL`/`IRL` jargon in the tile copy needs decoding for first-time readers
  5. Noun-vs-bracket order is inverted between the diagram and the tiles — pick one and apply everywhere

### `~/afxhq/Websites/index.artificenyc.org/about.html` — `renaise/artifice-index` repo, `main`

Updated section 05 ("The four-system pipeline"). Committed locally as `5fa27a3`, not pushed:

- Replaced the flat single-row pipeline with an ASCII tree that mirrors the schema — `INDEX` branches into `ARTIFACTS` and `WORLDS`; `WORLDS` branches into `URL` and `IRL`.
- Replaced lowercase verbs (`[scout]/[connect]`) with the canonical uppercase brackets (`[DISCOVER]/[CONNECT]/[LOCATE]/[ARCHIVE]`).
- Added `ARTIFACTS` and `WORLDS` list items with definitions; expanded the `INDEX` item to name the two-faces split.
- Switched `.pipeline` block to `white-space: pre` with character-precise column padding so the `│`/`├`/`└` glyphs align under `INDEX` (col 63) and `WORLDS` (col 69) in monospace.

## Pending — what you still need to do

1. **Open the artificenyc.org page in Framer**, follow `diagram-fix-spec.md`. Either redraw the diagram using `eco-system-diagram.svg` as a reference, or paste the SVG directly as a layer. (I can't edit Framer from the CLI.)
2. **Push the two commits** when you've reviewed them:
   ```bash
   git -C ~/afxhq/Websites/artificenyc.org push           # renaise/artifice main
   git -C ~/afxhq/Websites/index.artificenyc.org push     # renaise/artifice-index main (5 commits ahead)
   ```
3. **Optional next pass:** the four bottom tile descriptions on the Framer page still use `URL`/`IRL` as if they're public language. Plain-English rewrites are in `diagram-fix-spec.md` §5.

## Local commits, not pushed

| Repo | Branch | Commit | What |
|---|---|---|---|
| `renaise/artifice` | `main` | `c5dc3ee` | Add eco-system-diagram.svg + Framer fix spec |
| `renaise/artifice-index` | `main` | `5fa27a3` | about: fix four-system pipeline diagram hierarchy |
