# AI Coding Agent Instructions for `commerce2`
# AI Coding Agent Instructions for `commerce2`

Purpose
-------
Give an AI agent the minimal, concrete knowledge needed to be productive: where the code lives, how to run/build it locally, how it is deployed, and the few quirks to watch for.

Quick repo layout
- Root: `README.md` (brief project title).
- `CommerceCult_app_v2-1/frontend/` — Next.js (app router), TypeScript + Tailwind; contains the real `package.json` and app code (`app/` directory).
- `vercel.json` (root) — deployment config present but contains duplicated/concatenated JSON objects (needs fixing).
- `backend/` — referenced by `vercel.json` routes/builds but currently empty in the repo.

Key facts and patterns (what matters now)
- Framework: Next.js (v14.x) using the `app/` directory structure. Look in `CommerceCult_app_v2-1/frontend/app/` for pages/layouts and `globals.css`.
- Languages/tools: TypeScript, Tailwind, PostCSS. Frontend `package.json` includes `dev`, `build`, `start`, and `lint` scripts.
- Deployment: Vercel is the intended host. The root `vercel.json` has two concatenated JSON objects and references `backend/*.js` and `frontend/` — this must be reconciled before trusting automated builds.

Developer workflows (concrete commands to run)
- Local dev (from repo root, Windows PowerShell):
  cd CommerceCult_app_v2-1/frontend; npm ci; npm run dev
- Build locally:
  cd CommerceCult_app_v2-1/frontend; npm ci; npm run build
- Lint:
  cd CommerceCult_app_v2-1/frontend; npm run lint

Vercel for GitHub integration
- Connect this repository to Vercel via the Vercel dashboard (https://vercel.com/new).
- Import the GitHub repository and Vercel will auto-detect Next.js.
- Override build settings in the Vercel project:
  - Root Directory: `CommerceCult_app_v2-1/frontend`
  - Build Command: `npm run build`
  - Output Directory: `.next` (default for Next.js)
  - Install Command: `npm ci`
- After connecting, every push to `main` triggers automatic production deploys; PRs get preview deployments.
- Configure environment variables in the Vercel project settings (not in repo).Important repo checks before making changes
- Verify `vercel.json`: open the file and fix the JSON so there is a single valid object. Confirm `builds` and `routes` point to existing files. Example problems found:
	- `vercel.json` currently contains two JSON objects back-to-back and references `backend/**/*.js` while `backend/` is empty.
- Check for missing environment variables/secrets in the Vercel dashboard. The codebase has no local `.env` checked in; assume secrets live in Vercel.

Conventions & patterns to follow (project-specific)
- Frontend is the primary app. Keep changes scoped to `CommerceCult_app_v2-1/frontend/` unless you are explicitly adding backend APIs.
- There is no top-level `package.json`. If you add tooling, prefer adding scripts under `CommerceCult_app_v2-1/frontend/package.json` or add a clear top-level reason and update `vercel.json` accordingly.
- Serverless APIs (if added) should be placed in `backend/` with clear filenames (`backend/foo.js`) and then map via `vercel.json` routes to `/api/*`.

When to open a human-facing issue
- `vercel.json` malformed or contradicts expected routing. Describe the proposed JSON fix in the PR.
- `backend/` is empty but routes reference it — ask whether APIs were removed intentionally or just not committed.
- Missing CI or build scripts at `CommerceCult_app_v2-1/frontend/package.json` (not the case now, but include in PR notes if you change them).

Files to inspect when making changes
- `CommerceCult_app_v2-1/frontend/package.json` — scripts & deps
- `CommerceCult_app_v2-1/frontend/app/` — pages, layout.tsx, globals.css
- `vercel.json` (root) — fix and validate
- `backend/` — add APIs here if needed and update `vercel.json` routes

Assumptions I made while writing this
- The frontend in `CommerceCult_app_v2-1/frontend/` is the deployable Next.js app.
- Vercel is the chosen deployment target; production secrets are configured in the Vercel project (not in repo).

Next steps for an AI agent
1. Validate and fix `vercel.json` so it's a single well-formed JSON object.
2. Confirm whether `backend/` should contain API files; if so, locate missing sources or add new serverless functions.
3. Run the frontend `dev` and `build` commands locally to ensure the repo builds.
4. Connect the GitHub repository to Vercel for automatic deployments (see "Vercel for GitHub integration" section above).

If anything above is unclear or you want me to also propose a corrected `vercel.json` (or create starter `backend/` API stubs), tell me which option to take and I will update the repo.
