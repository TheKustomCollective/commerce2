# AI Coding Agent Instructions for `commerce2`

Purpose
-------
Give AI agents the minimal, concrete knowledge needed to be productive in this repository: where the code lives, how it's deployed, and the few quirks to watch for.

Key repo layout (discovered)
- Root: `README.md` (brief project title only).
- Main app folder: `CommerceCult_app_v2-1/` with two primary sub-areas:
	- `CommerceCult_app_v2-1/frontend/` — contains a `package.json` that appears to hold Vercel deployment rules (see example below).
	- `CommerceCult_app_v2-1/vercel.json/` — empty directory discovered (may be legacy or misnamed).

Concrete discovered patterns & examples
- The file `CommerceCult_app_v2-1/frontend/package.json` contains a `builds` array resembling Vercel config rather than a typical npm script section. Example lines from that file:
	- `{ "src": "frontend/package.json", "use": "@vercel/next" }`
	- `{ "src": "backend/server.js", "use": "@vercel/next" }`
	- `{ "src": "/api/(.*)", "dest": "backend/server.js" }`
	These indicate the repo is intended to deploy to Vercel with frontend and backend routing configured. Note: the JSON block appears malformed and should be verified before using it programmatically.

Developer workflows (what an agent can run/expect)
- There is no top-level `package.json`. Look under `CommerceCult_app_v2-1/frontend/` for frontend install/build scripts. If scripts are missing or invalid, open an issue or add minimal `dev`, `build`, `start` scripts following Next.js conventions.
- Deployment is expected to target Vercel (see `builds` block in `frontend/package.json`). Confirm with the team before changing deploy rules.

Integration and external dependencies
- Vercel: deployment rules are embedded in `frontend/package.json` (unusual placement). Verify whether a `vercel.json` or project settings in Vercel dashboard are the source of truth.
- Backend entrypoint referenced: `backend/server.js` (used as an API handler in the builds/routes mapping). If you modify API routing, update the Vercel config accordingly.

Agent guidance: what to do first
1. Inspect `CommerceCult_app_v2-1/frontend/package.json` and correct malformed JSON if you need to parse it.
2. Locate or add npm scripts in `CommerceCult_app_v2-1/frontend/package.json` (`dev`, `build`, `start`) to enable local dev and CI checks.
3. Do not assume a working dev server — run `npm ci` and check `npm run dev` (or equivalent) inside `CommerceCult_app_v2-1/frontend/` to verify the workflow.

When to open a human-facing issue
- If deployment config (the `builds` block) is malformed or contradicts team docs. Add a short PR that fixes formatting and preserves intent, and open an issue if you need clarification.

Files to inspect when making changes
- `CommerceCult_app_v2-1/frontend/package.json` — primary artifact to edit for frontend scripts and deploy rules.
- `CommerceCult_app_v2-1/backend/` — look for `server.js` and `package.json` if present; these are referenced by the Vercel mapping.
- Root `README.md` — currently minimal; consider updating only after confirming app structure.

Feedback
--------
If any of the above points are unclear or you discover additional subprojects, tell us which files you inspected and what you found so we can iterate on these instructions.

-- End