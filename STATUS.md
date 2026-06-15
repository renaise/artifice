# Status — artificenyc.org

| | |
|---|---|
| **Slot** | P2 (Nonprofit identity) |
| **Phase** | 2 (Design → Build) · scaffold complete |
| **Repo** | [renaise/artifice](https://github.com/renaise/artifice) |
| **Default branch** | `main` |
| **Production URL** | `artificenyc.org` *(currently serves Framer; cutover after staging QA)* |
| **Staging URL** | `staging.artificenyc.pages.dev` *(once first staging deploy lands)* |

## Current focus

Re-implementing the live ECO SYSTEM Framer site in Astro. Strict 1:1 mirror
of design / copy / media; off-platform. See `prd.md` for full scope and
`audit.md` for the source-of-truth content capture.

**Decisions locked (2026-05-24):**
- Stack: Astro 6 on Cloudflare Pages (matches `studioartifice.com/web`)
- Type: Helvetica Now Display self-hosted (license risk accepted)
- Footer: standardize both pages to `© 2026 ARTIFICE NYC, Inc.` (only content deviation from 1:1)
- VLA cleanup: deferred

**Completed:**
- Audit of live site → `audit.md` + `_audit/` raw captures
- 53 Framer-CDN assets pulled to `public/{fonts,img,video}/` (~177 MB)
- Astro scaffold (package.json, astro.config.mjs, tsconfig, Base layout,
  fonts.css, global.css)
- `Nav`, `Marquee`, `Footer` components
- `index.astro` — hero (video bg), marquee, upcoming, about manifesto,
  chapters (LAB+STAGE pillars), services (numbered list), nodes, footer
- `contact.astro` — chapter archive (WHITEBOX/BLACKBOX 001–005)
- `npm run build` green, dist/ verified Framer-free (zero references)
- Index page output: 14.4 KB (vs Framer 574 KB)

**Next:**
- Local `astro dev` QA — confirm sections render as expected
- Side-by-side visual diff vs. live Framer site, iterate
- First Cloudflare Pages staging deploy
- Production cutover

## Push convention

```bash
# push to staging
git checkout staging && git merge main && git push     # → artificenyc-ss.pages.dev

# push to prod
git checkout main && git merge staging && git push     # → artificenyc.org
```

## Open items

- [ ] Decide build stack (Astro? Next? matching `artifice-site`?)
- [ ] Set up Cloudflare Pages project (`artifice` or `artificenyc`)
- [ ] Move into Phase 2 (Design) → Phase 3 (Build)
- [ ] Connect production domain `artificenyc.org`

See `../PLAYBOOK.md` for the full lifecycle and conventions.
