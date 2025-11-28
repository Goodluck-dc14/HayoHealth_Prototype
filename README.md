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

## Project status (for submission)

- Type: Frontend prototype (React + Vite).
- Implementation summary (honest snapshot for graders):
  - Implemented (UI / prototype): Login UI (role selection), Hospital and Insurance apps, Patient list and Add patient UI, Coverage display screens, Audit & Reports UI, Billing and Fraud UI (UI-level, mocked data).
  - Partially implemented / mocked: Coverage verification prompts, Fraud alerts, and NFC-related UI prompts (no hardware I/O).
  - Not implemented (backend / hardware / future work): NFC read/write (card I/O), central database sync and APIs, card issuance & deactivation workflow, AI analysis backend and models, persistent audit log storage and RBAC enforcement.

## SRS Implementation Matrix (short)

Below is a short mapping of SRS functional requirements to this repository's current state. Use this in your Google Doc to be explicit to graders.

- FR1 (User Management): UI present (login and patient forms). Backend authentication, persistence and real registration endpoints: NOT IMPLEMENTED.
- FR2 (Card Write/Read): UI contains prompts and copy, but no WebNFC/NDEF or hardware integration: NOT IMPLEMENTED.
- FR3 (Central Database / Sync): No API client or fetch/axios calls; no sync implemented: NOT IMPLEMENTED.
- FR4 (Coverage Display): UI screens exist showing coverage and contracts: IMPLEMENTED (UI only).
- FR5 (AI Analysis): Fraud/alerts and FraudConsole exist as UI; no ML model or server-side analysis: PARTIAL / MOCKED.
- FR6 (Audit Trail): Audit UI exists (`components/insurance/Reports.tsx`), but no persistent backend logging: PARTIAL / UI ONLY.
- FR7 (Lost Card Replacement): Workflow is not implemented (no backend): NOT IMPLEMENTED.

Non-functional (security, performance, compliance): these are backend/infrastructure concerns and are NOT IMPLEMENTED in this frontend prototype. Document them as planned in the SRS.

Note about demo data: All data shown in the UI (patients, claims, audit entries, dashboard numbers, fraud alerts, etc.) are dummy/mock data included for demonstration purposes only. They are hard-coded or mocked within the frontend components and do not come from a live backend or real users. Please state this in your video when demoing the app.

## Demo instructions for graders (what to show and what to say)

1. Start the app and show Login: `components/common/Login.tsx`. Explain role selection (Hospital/Insurance) and that authentication is a UI prototype.
2. Switch to Hospital role and open `HospitalApp` → `FrontDesk` (show text "Scan card to verify insurance"). Explain: this prompt is a UI placeholder for NFC card scanning — the hardware integration is planned but not part of this submission.
3. Open `PatientList` and `AddPatient` to show patient management screens (UI flows).
4. Open `Billing` and `FraudConsole` to show example alerts and risk indicators (UI-driven examples). Note that these are mocked examples to illustrate intended functionality.
5. Open `InsuranceApp` → `Reports` to show the Audit Log UI (explain that persistence is not yet implemented).

While demoing, narrate clearly: which parts are implemented (UI) and which are planned/backlog (NFC, backend sync, AI, audit persistence). Point graders to the SRS link and the SRS Implementation Matrix in this README.

## How to describe missing features in your video (short script)

Use this short script when you reach missing features in the demo:

"The current submission is a frontend prototype demonstrating the user flows and UI for HayoHealth. NFC card I/O, backend synchronization, and AI analytics are planned and detailed in the SRS (linked). These features require server-side components and hardware access which are outside the scope of this frontend MVP. The SRS and the Implementation Matrix list the required work and the planned approach for integrating them in future iterations."

## Quick copy-paste block for your Google Doc (personNames*[Summative]*[MMDDYYYY])

Paste this block into your Google Doc and replace the placeholders with your links:

```
Project status: Frontend prototype (React + Vite). The repository implements UI flows for Login, Hospital and Insurance dashboards, patient management, coverage display, audit UI and mocked fraud/billing indicators. NFC hardware integration (card read/write), central database sync (APIs), AI analysis backend, and persistent audit logging are NOT implemented and are planned as future work (documented in the SRS).

GitHub repo: <paste your public repo URL here>
SRS (design document): <paste link to your SRS document here>
Live URL (if available): <paste deployment URL or state 'not deployed'>
Video link: <paste your recorded video link here>

Notes to graders: The submission is a UI prototype. Where the UI references card scanning or backend syncing, those are placeholders: the architecture and implementation plan for these features are included in the SRS linked above.
```

## Final checklist before submitting the Google Doc

- Make sure the GitHub repo is public and the `README.md` clearly explains how to run the project (this file).
- Paste the exact repo URL and SRS link into the Google Doc and verify access permissions (set to "Anyone with link can view" for grading convenience).
- In the video, explicitly state which features are UI-only vs implemented and show the screens pointed out above.
