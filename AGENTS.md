# Steam Deck Web App Generator

Nuxt 4 web app that generates a bash script which adds a website to Steam as a non-Steam game, so Steam Deck owners can open it in Chrome from Game Mode.

## Verify a change

- CI (`.github/workflows/ci.yml`) runs `npm ci`, `npm run build` and `npm test` on Node LTS for pushes and pull requests to `main`. Run all three before pushing.
- `npm test` runs `test/*.test.ts` with Node's built-in runner and type stripping, so it needs Node 24 (Node 22 builds without TypeScript support fail with `ERR_NO_TYPESCRIPT`).
- `npm ci` also runs `nuxt prepare` (postinstall) and installs the husky hook (prepare).
- `node .output/server/index.mjs` serves the build on port 3000 (`PORT` overrides it). Use it to check rendered head tags and `/api/web-app/create`.

## Gotchas

- The husky pre-commit hook runs `prettier --write .` over the whole repo (minus `.prettierignore`, which protects the Search Console verification file) and does not restage. After a commit, check `git status`; if files changed, commit them as a normal follow-up commit.
- Prettier uses `printWidth: 220`, so long lines stay on one line.
- `server/utils/bash-script.ts` builds the script that `server/api/web-app/create.ts` returns. Every user value goes through `shellQuote`, it runs the flatpak `com.google.Chrome` in kiosk mode and calls `steamos-add-to-steam`. `test/bash-script.test.ts` runs the generated script and launcher with stub `steamos-add-to-steam` and `flatpak` commands, so quoting regressions fail CI.
- `public/sitemap.xml` is hand-written and lists `/`, `/donate`, `/guides` and every guide. Add new pages to it and to `public/llms.txt`.
- Guides live in `pages/guides/` and are listed in `utils/guides.ts`, which feeds the home page, the guides index and each guide's footer. `components/guide/Steps.vue` holds the shared setup steps: change it when the generated script changes.
- Site-wide SEO tags, canonical URL and JSON-LD live in `app.vue`; a page sets its own title with `useSeoMeta`.

## Deploy

- Production is https://steam-deck-web-app-generator.vercel.app. There is no Vercel config in the repo, so the defaults for a Nuxt project apply.

## Conventions

- Conventional-commit subject lines only, in English, with no body and no trailer.
- Work on a branch and open a pull request. The owner merges.
- No emoji in new text. Code comments are short, one line where possible, and explain why.
- The README follows the owner's template. Every image served from `halitsever-api.vercel.app` stays byte-for-byte; only the `title=` value of `api/repo-title` and the issue wrapper link may be corrected.
- Dependency upgrades and deploy settings are handled by the owner.
