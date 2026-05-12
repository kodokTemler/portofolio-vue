# AGENTS.md

## Commands

```sh
npm run dev      # dev server with HMR (Vite)
npm run build    # production build to dist/
npm run preview  # preview production build
```

No lint, test, or typecheck scripts configured.

## Tech stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite 8**, **Tailwind CSS v4** (via `@tailwindcss/vite` plugin), **daisyUI v5**
- No Vue Router — single-page anchor-based navigation (`#home`, `#about`, etc.)
- No state management — all data (nav, skills, projects) is hardcoded in `App.vue`
- Node `^20.19.0 || >=22.12.0`

## Key paths

| Path | Purpose |
|---|---|
| `src/App.vue` | Entire app (all sections in one SFC) |
| `src/main.js` | Entry: imports `main.css`, mounts `App` |
| `src/assets/main.css` | All styles (Tailwind + daisyUI imports + custom CSS) |
| `src/assets/` | Local images (profile, logo, about) |
| `public/images/` | Project screenshot images |
| `vite.config.js` | `@` alias → `./src` |

## Gotchas

- **No test/lint/typecheck**. Do not assume they exist.
- `src/assets/main.css` imports `daisyui/daisyui.css` twice — intentional? Leave it alone unless asked.
- `index.html` has `lang="id"` (Indonesian).
- `src/components/` contains leftover Vue scaffold files (HelloWorld, TheWelcome, WelcomeItem, icons/) — unused by the app, safe to remove.
