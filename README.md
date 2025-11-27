# HayoHealth — Frontend (G-Frontend)

This repository contains the frontend application built with React, Vite and TypeScript. The instructions below show every step required to get the project running locally on macOS (zsh) and how to build and preview a production bundle.

## Quick summary

- Dev server: `npm run dev` (Vite)
- Build: `npm run build`
- Preview production build locally: `npm run preview`

## Prerequisites

1. Node.js (LTS). Recommended: Node 18.x, 20.x or 22.x. Use nvm/n to manage versions.
   - Verify with:

```bash
node --version
npm --version
```

2. Git (to clone the repo) — optional if you already have the code.

3. macOS / zsh: the commands below assume zsh (your default shell).

## Step-by-step setup (every single step)

1. Open a terminal (zsh) and change to the folder where you want the project. Example:

```bash
cd ~/Desktop
```

2. Clone the repository (if you haven't already):

```bash
git clone <your-repo-url>
cd G-Frontend
```

3. Install project dependencies with npm (this will create a node_modules folder):

```bash
npm install
```

Notes:

- If you prefer yarn or pnpm, you can use them instead, but the provided scripts use npm in examples.
- If you see permission errors on macOS, avoid sudo; instead fix ownership (e.g., use a node version manager). Do not run npm with sudo.

4. (Optional but recommended) Create an environment file to store environment variables used by the app. The project previously referenced `GEMINI_API_KEY` in older README content — if your app needs this or other env vars, create a `.env.local` file in the project root.

Create `.env.local` with the variables you need, for example:

```bash
cat > .env.local <<'EOF'
VITE_GEMINI_API_KEY=your_api_key_here
# Add other VITE_ prefixed variables as needed (Vite only exposes env vars starting with VITE_)
EOF
```

Important: Vite only exposes environment variables that begin with VITE* to client-side code. If you need a variable available in browser JS, prefix it: `VITE*...`.

5. Start the development server (hot reload enabled):

```bash
npm run dev
```

This runs the `vite` script. By default, Vite prints a local and network URL, typically http://localhost:5173. Open that in your browser.

6. Build a production bundle:

```bash
npm run build
```

This creates a `dist/` folder with the production-ready files.

7. Preview the production build locally (serves the `dist` folder):

```bash
npm run preview
```

## Scripts (from package.json)

- `npm run dev` — start Vite dev server
- `npm run build` — produce a production build (`dist/`)
- `npm run preview` — preview the production build locally

## Node / TypeScript / Vite versions

The project lists these dependencies in `package.json`:

- react ^19.2.0
- react-dom ^19.2.0
- vite ^6.2.0
- typescript ~5.8.2

If you need to pin an exact Node version, add an `.nvmrc` file with the desired version (example below). Create `.nvmrc` with the string `18` or `20`.

```bash
echo "18" > .nvmrc
```

## Common issues & troubleshooting

- Missing or wrong Node version: if you see complaints from TypeScript or native modules, install and switch to the recommended Node version using nvm:

```bash
nvm install 18
nvm use 18
```

- Permission errors during `npm install`: avoid sudo. If npm keeps failing because of permissions, reinstall Node via a version manager (nvm) or fix file ownership.

- Port already in use: Vite defaults to 5173. To run on a different port:

```bash
npx vite --port 3000
```

- Environment variables not available in browser: ensure they are prefixed with `VITE_`. For example, `VITE_GEMINI_API_KEY`.

## Testing and Type-checking

There are no test scripts configured in `package.json` by default. To type-check the project with TypeScript:

```bash
npx tsc --noEmit
```

Add a test runner (Jest / Vitest) later if you want automated tests.

## Deployment notes

- The `dist/` folder after `npm run build` contains static files you can deploy to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).
- For Vercel: link the repository and set the build command to `npm run build` and the output directory to `dist`.

## Project structure (high level)

Key files and folders:

- `index.html` — Vite entry
- `src/` or top-level components directory (this project uses top-level components folder)
- `tsconfig.json` — TypeScript config
- `vite.config.ts` — Vite configuration

## Notes and assumptions I made

- I preserved the original asset banner at the top of the README.
- The project previously referenced `GEMINI_API_KEY` — I recommend using `VITE_GEMINI_API_KEY` so it is accessible to client-side code. If the key must remain secret, never commit it to the repo and use server-side proxies instead.

## Next steps you might want

- Add an `.nvmrc` file to standardize Node across contributors.
- Add a `Makefile` or npm script for convenience (e.g., `npm run setup` to run `npm install` and create a sample `.env.local`).
- Add basic tests and a CI workflow (GitHub Actions) for build checks on push.

---

If you'd like, I can also add an `.nvmrc`, example `.env.local.example`, and a `setup` npm script to automate the steps above. Tell me which you'd prefer and I'll add them.
