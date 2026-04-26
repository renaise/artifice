# Status — artificenyc.org

| | |
|---|---|
| **Slot** | P2 (Nonprofit identity) |
| **Phase** | 1 (Strategy → Design transition) |
| **Repo** | [renaise/artifice](https://github.com/renaise/artifice) |
| **Default branch** | `main` |
| **Production URL** | `artificenyc.org` *(domain not yet pointed at this build)* |
| **Staging URL** | `artificenyc-ss.pages.dev` *(once Cloudflare Pages project is created)* |

## Current focus

Planning-stage. Repo holds the strategy artifacts:

- `artificenyc-website-v1-prd.md` — product requirements
- `before-after-figma-spec.md` — design specification
- `before-after-full-copy.md` — full site copy
- `before-after-developer-handoff.md` — handoff doc

Build (Phase 3) has not started. Next gate: Design system v1 + key page comps approved.

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
