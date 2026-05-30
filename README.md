# Melix Website

This workspace contains a static, production-ready landing page for Melix.

## Files
- `index.html` : Main page (中文/English switch, status/loop sections, setup path, CTAs)
- `styles.css` : Custom visual system (no third-party stylesheet)
- `app.js` : Inline-free interaction layer (language toggle + content binding)
- `melix-website-copy.json` / `melix-website-copy-and-image-descriptions.md` /
  `melix-website-image-descriptions.csv` : Source text and image-description assets

## Run locally
1. Open `/Users/ChenYu/Documents/Melix Website/index.html` directly in a browser, or
2. Start a local static host:
   - `python3 -m http.server 4173` (from repo root)
   - open `http://localhost:4173`

## Third-party dependency security posture
- No frontend JavaScript frameworks/libs are used.
- No CSS CDN/font CDN is used.
- No analytics/telemetry script is embedded.
- Only three local files (`index.html`, `styles.css`, `app.js`) are required for rendering.
- Only static JSON link config is used for outbound destinations.

## Dependency governance
- There is no package manager dependency stack in the current branch (pure static page).
- If you switch to a framework stack (for example, Next.js), use this audit sequence before enabling the new dependency:
  1. Add/update dependency in `package.json`.
  2. Run `bun install`.
  3. Run `./dependency-audit.sh`.
  - `./dependency-audit.sh` enforces:
  - `bun audit --audit-level=high` pass (no high-severity vulnerabilities).
  - `bun outdated` clean (no update candidates).
  - If either step fails, block release until resolved.

## Deployment to production (`www.melix.run`)
- This repo is a static landing page. Vercel deployment should be configured as:
  - **Project root**: repository root
  - **Framework preset**: `Other`
  - **Build command**: empty
  - **Output directory**: empty
- Push-to-deploy checklist:
  1. Connect GitHub repo (`Keith-CY/melix-website`) to Vercel project.
  2. Bind custom domain `www.melix.run` in the project settings.
  3. Confirm branch filter includes `main` and automatic production deployments are enabled.
  4. Push a tiny commit to `main`.
  5. In Vercel dashboard, verify a new Production deployment was created.
  6. Open `https://www.melix.run` and confirm the site content and latest status metadata update.

### Scripted deployment check (optional)
- Run after each deployment-related push:
- Quick check:
  ```bash
  ./scripts/deploy-check.sh
  ```
- Full strict check (recommended before announcing release readiness):
  ```bash
  ./scripts/deploy-check.sh --strict --use-gh-fallback
  ```
- You can also run:
  - `REPO=owner/repo BRANCH=main SITE_URL=https://www.melix.run ./scripts/deploy-check.sh`
  - `./scripts/deploy-check.sh --repo Keith-CY/melix-website --branch main --url https://www.melix.run`
  - `./scripts/deploy-check.sh --strict --expect-deploy-id <x-vercel-id>`
    (only succeeds when the live edge header contains the expected deployment id)

### Notes
- A repository-level `vercel.json` is already present (`vercel.json`) to keep URL shaping consistent.

### Deployment checklist for this repository
1. Merge/commit changes to `main`.
2. Confirm branch sync: `./scripts/deploy-check.sh --use-gh-fallback`
   (or `--strict` in CI/release validation).
3. In Vercel, confirm the deployment appears on Production channel.
4. Confirm website response + edge metadata:
   `./scripts/deploy-check.sh --strict --use-gh-fallback`.

### GitHub Actions gate (optional, recommended)

- If you want CI to continuously enforce deployment correctness, this repo includes:
  - [`.github/workflows/deploy-gate.yml`](./.github/workflows/deploy-gate.yml)
- It runs on each push to `main`.
- It requires:
  - `gh` CLI available in runner (comes preinstalled on GitHub-hosted Linux runners).
  - `GITHUB_TOKEN` (provided automatically as `${{ github.token }}`).
- The workflow executes:
  - wait 60 seconds (deployment settle window),
  - `./scripts/deploy-check.sh --strict --use-gh-fallback`.

If this check fails on a push, deployment and/or DNS propagation is not yet in the expected state.

If strict mode succeeds, the local git HEAD is synchronized with GitHub for the target
branch, `https://www.melix.run` returns HTTP 200, and `x-vercel-id` is present.

## What to replace before public launch
- Fill outbound links in `index.html` JSON config block near the page end:
  - `<script id="site-links" type="application/json">`
  - Set `github`, `discussions`, `issues` URLs.
  - If any field is empty, that CTA is disabled to avoid dead links.
- You can also use script:
  - `./set-site-links.sh <github> <discussions> <issues>`

Example:
```html
<script id="site-links" type="application/json">
  {
    "github": "",
    "discussions": "",
    "issues": ""
  }
</script>
```

Example script usage:
```bash
./set-site-links.sh \
  "<github_url>" \
  "<discussions_url>" \
  "<issues_url>"
```

This placeholder must be replaced before public launch.
Do not use `your-org` or `<...>` placeholders in production.

Suggested replacements:
- Community: GitHub Discussions URL (or Telegram/Discord)
- Issues: GitHub Issues URL

## Security review checklist (recommended)
- Verify no third-party package URLs in rendered HTML/CSS/JS.
- Verify no embedded remote scripts/images/fonts.
- Verify CSP/Referrer/Permissions policy are set at deployment edge (the page includes a strict inline CSP baseline in `<head>`).
- Run `./security-checklist.sh` to confirm dependency/policy footprint before release.
- Ensure HTTP headers include:
  - `Content-Security-Policy`
  - `Referrer-Policy`
  - `Permissions-Policy` (if hosting platform supports)
  - `Strict-Transport-Security` (when served over HTTPS)
- Confirm no sensitive user data is persisted in client storage (the page now defaults language from browser locale).
