# ECO SYSTEM diagram — fix spec for Framer

Reference asset: `eco-system-diagram.svg` (corrected hierarchy, ready to drop into Framer as an SVG layer).

## What's wrong in the current Framer diagram

1. **Arrows imply wrong parentage.** Visually, the elbows make it look like `PROFILES → ARTIFACTS` and `ATLAS → WORLDS`. The schema is: `INDEX` is the parent of `ARTIFACTS` and `WORLDS`. Re-route the elbow so it descends from **INDEX**, then splits into the two children.

2. **Missing one level of hierarchy.** `URL [DIGITAL PROJECTS]` and `IRL [EXPERIENTIAL PROGRAMS]` are children of `WORLDS`, not siblings of `ARTIFACTS`/`WORLDS`. They belong indented one level deeper.

## Canonical structure (use this exactly)

```
RADAR [DISCOVER]  →  PROFILES [CONNECT]  →  ATLAS [LOCATE]  →  INDEX [ARCHIVE]
                                                                      │
                                                                      ├──→  ARTIFACTS [OBJECTS]
                                                                      │
                                                                      └──→  WORLDS [CAPTURE]
                                                                                    │
                                                                                    ├──→  URL [DIGITAL PROJECTS]
                                                                                    │
                                                                                    └──→  IRL [EXPERIENTIAL PROGRAMS]
```

Rules the diagram must enforce:
- Top row reads left → right as one linear sentence: discover, connect, locate, archive.
- The vertical drop is from **INDEX** only.
- ARTIFACTS has no children (it is the output).
- WORLDS has exactly two children — URL and IRL.

## Other text issues on the page (while you're in Framer)

3. **"VISIBLE CURATIONAL PROCESS" → "VISIBLE CURATORIAL PROCESS"** unless `curational` is intentional. It currently reads as a typo of `curatorial`.

4. **First-person breaks the editorial voice.** Replace:
   > This is what I (Renaise) have been incubating with our community team and artist network.

   With something third-person, e.g.:
   > The Artifice ecosystem runs on a set of books — discovery, talent, space, production capture, artifact archive — connected through the work. The infrastructure isn't behind the scenes; it is the practice.

   (Move the personal voice to a colophon, byline, or "from the editor" section if you want to keep it on the page.)

5. **Tile descriptions are using internal jargon.** Rewrite the sub-lines so a first-time reader can parse them without a glossary:

   | Current | Suggested |
   |---|---|
   | DISCOVER PROFILES, SPACES, AND ARTIFACTS FROM THE URL | DISCOVER PROFILES, SPACES, AND ARTIFACTS ACROSS DIGITAL CHANNELS |
   | CONNECT TALENT WITH THE URL + IRL | CONNECT TALENT ACROSS DIGITAL AND PHYSICAL WORK |
   | MAP SPACES AND VENUES TO THE IRL | MAP SPACES AND VENUES WHERE WORK GETS MADE |
   | URL DOCUMENTED ARTIFACTS FOR THE IRL | DOCUMENTED ARTIFACTS FROM EVERY PROGRAM |

   If you want to keep `URL` and `IRL` as terms (they're part of your taxonomy), then add a one-line legend somewhere on the page defining them — don't deploy them as if they're public language.

6. **Order convention is inverted between the diagram and the tiles.**
   - Diagram: `RADAR [DISCOVER]` (noun first, bracket second)
   - Tiles: `[DISCOVER]` over `RADAR` (bracket first, noun second)

   Pick one and apply everywhere. Recommended: noun first, bracket second (matches the diagram and reads as "RADAR, comma, the discover step").
