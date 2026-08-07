# SeaOfLee.github.io

The **GitHub Pages user site** for [@SeaOfLee](https://github.com/SeaOfLee), served at
**[leerichardson.net](https://leerichardson.net)**.

## Why the repo name matters

GitHub decides user-site status purely from the repository name: `<username>.github.io`. That has
one consequence worth understanding, because it is the reason this repo is named what it is.

A custom domain set on the **user site** repo is inherited by every other Pages-enabled repo on the
account, served under a path. A custom domain set on a *project* repo applies to that repo alone
and nothing inherits.

This repo previously lived under the name `contact-me`. While it held `leerichardson.net` as a
project site, the apex worked but nothing else could sit beneath it — every other project was
stranded at `seaoflee.github.io/<repo>`. Renaming it back to `SeaOfLee.github.io` turned path
inheritance on for the whole account at no cost: no DNS change, no certificate re-issue, no content
moved. GitHub redirects the old repo URL.

## What is live

| URL | Repo | Source |
|---|---|---|
| [leerichardson.net](https://leerichardson.net) | this repo | `gh-pages` branch |
| [/dayward-privacy](https://leerichardson.net/dayward-privacy/) | this repo | Dayward app privacy policy |
| [/dayward-support](https://leerichardson.net/dayward-support/) | this repo | Dayward app support page |
| [/fight-rite](https://leerichardson.net/fight-rite/) | [fight-rite](https://github.com/SeaOfLee/fight-rite) | `main` `/docs` |
| [/swedish-snus](https://leerichardson.net/swedish-snus/) | [swedish-snus](https://github.com/SeaOfLee/swedish-snus) | `master` root — repo archived |
| [/magic8ball](https://leerichardson.net/magic8ball/) | [magic8ball](https://github.com/SeaOfLee/magic8ball) | `gh-pages` root — repo archived |

Adding another is just enabling Pages on that repo — it appears at `leerichardson.net/<repo>`
automatically, with no configuration here.

The `dayward-*` pages back an App Store listing. Their URLs are external dependencies; don't move
or rename them without updating the listing first.

## This site

Gatsby v2 with React 16 — old, and knowingly so. It is a small contact page plus the two Dayward
support pages, and it has no reason to change often.

```sh
npm install
npm run develop     # local dev server at localhost:8000
npm run build       # production build into public/
npm run deploy      # build, then publish public/ to the gh-pages branch
```

Two things to know before touching the build:

- **`master` is the source; `gh-pages` is generated.** Pages serves `gh-pages`. Never commit there
  by hand — `npm run deploy` overwrites it wholesale.
- **`gatsby-config.js` deliberately sets no `pathPrefix`**, so the `--prefix-paths` flag in the
  deploy script is a no-op and the site builds for the domain root. Setting a `pathPrefix` would
  break every asset URL at the apex.

The `CNAME` file holding `leerichardson.net` must survive into the published output. It currently
lives in the `gh-pages` branch and is re-added by GitHub if the custom domain is set in repo
settings. If the apex ever starts 404ing after a deploy, check that first.

## DNS

Hosted at Hover. The apex points at GitHub's four Pages IPs, with `www` alongside:

```
A     leerichardson.net    185.199.108.153
A     leerichardson.net    185.199.109.153
A     leerichardson.net    185.199.110.153
A     leerichardson.net    185.199.111.153
```

The domain is **verified** with GitHub (`protected_domain_state: verified`), backed by a TXT record
at `_github-pages-challenge-seaoflee.leerichardson.net`. That record must stay in place. Verification
stops any other GitHub account claiming `leerichardson.net` or its subdomains — which otherwise
becomes possible the moment a Pages site here is disabled while DNS still points at GitHub.

HTTPS is enforced on the apex and on every inherited path.

## Current state and known gaps

- **Gatsby 2 / React 16 are several majors behind.** No security-critical exposure for a static
  brochure site, but `npm install` on a modern Node will likely need `--legacy-peer-deps`, and a
  future upgrade is a rewrite rather than a bump.
- **`magic8ball` and `swedish-snus` are archived and therefore read-only.** Their Pages sites still
  serve and still inherit the domain, but their repo settings can no longer be changed. HTTPS was
  enforced on both before archiving — that ordering matters, because archiving freezes Pages
  settings along with everything else. Unarchive first if either ever needs adjusting.
- Two abandoned 2015 attempts at this same site, `SeaOfLee.github.io-DEPRECATED` and
  `SeaOfLee.github.io-Deprecated-`, have been deleted. Neither had Pages enabled and nothing linked
  to them. Full-history `git bundle` archives were taken first and live outside this repo in
  `~/Documents/repo-archives/`; restore either with `git clone <name>.bundle`.
