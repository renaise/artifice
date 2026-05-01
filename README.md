# artificenyc.org

The marketing site for Artifice NYC, Inc. (501c3) — currently hosted on **Framer** (no source files in this repo).

This folder holds **edge-routing config** that runs on Cloudflare Pages *before* requests reach Framer:

- `_redirects` — Cloudflare Pages redirect file. The `artificenyc` Pages project is bound to `artificenyc.org` and `www.artificenyc.org` at the DNS level; redirects defined here run before Framer sees the request.

## Active routes

| Path | Destination | Status | Use |
|---|---|---|---|
| `/support`, `/donate` (and subpaths) | `https://www.paypal.com/ncp/payment/PKRQF4RGVBSZU` | 302 | PayPal donation page |

## Do not add a `/*` catch-all

Cloudflare Pages `_redirects` source paths are **not host-scoped**. A `/*` rule fires on every domain bound to the project — apex, www, and `*.pages.dev`. A naive `/* → https://www.artificenyc.org/:splat 301` redirects www to itself, producing an infinite loop. (This is exactly what broke the site on 2026-04-29.)

If you need host-conditional routing (e.g. send `*.pages.dev` traffic to www), use a Pages Function at `functions/_middleware.ts` that inspects `request.url`.

## Deploy

> ⚠️ **Footgun:** running `wrangler pages deploy .` from this folder uploads only `_redirects` and the README. The Framer-exported HTML currently in production is **not** in this repo; deploying from an empty folder wipes it from the Pages project, leaving every path 404 except the redirect rules. Before deploying, either (a) export Framer into this folder first, or (b) only deploy when this folder contains the actual site source.

```bash
cd Websites/artificenyc.org
npx wrangler@4 pages deploy . --project-name=artificenyc --branch=main --commit-dirty=true
```

Notes:
- `main` is the production branch (matches the repo default; aligned with the Pages project on 2026-05-01)
- Other branches deploy to preview URLs (`<branch>.artificenyc.pages.dev`) — useful for testing `_redirects` before promoting
- Recover from a bad production deploy: `POST /accounts/$ACCT/pages/projects/artificenyc/deployments/$GOOD_ID/rollback` (or use the Cloudflare dashboard's rollback button)

## Why no full site source

The marketing site itself is built in Framer. Migrating Framer → GitHub-based static site is on the roadmap (see `Artifice NYC/01_Operations/04_Finance/00_Budgets/2026-funding-strategy.md` — "Migrate website Framer → GitHub" task to kill the $500/mo Framer cost).

When that migration happens, the full site source moves into this folder alongside `_redirects`.

## Verify deploy

```bash
# Apex
curl -sI https://artificenyc.org/support | grep -iE "^HTTP|^location"
# www
curl -sI https://www.artificenyc.org/support | grep -iE "^HTTP|^location"
# Pages dev URL
curl -sI https://artificenyc.pages.dev/support | grep -iE "^HTTP|^location"
```

All three should return `HTTP/2 302` and `location: https://www.paypal.com/ncp/payment/PKRQF4RGVBSZU`.
