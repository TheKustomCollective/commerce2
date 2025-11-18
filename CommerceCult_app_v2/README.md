
# CommerceCult_app_v2

AI-powered business platform scaffold (Frontend + Backend + Stripe integration).

This zip contains:
- `client/` — Next.js (React) frontend (minimal scaffold)
- `server/` — Express backend with Stripe Checkout + Webhook endpoints
- `database/` — SQL schema
- `.env.example` — example environment variables

IMPORTANT: Replace environment variables in `.env` with your real values (Stripe keys, DATABASE_URL, etc.) before running.

Quick start (dev)
```bash
# install root helper (optional)
# Run server
cd server
npm install
npm run dev

# Run client
cd ../client
npm install
npm run dev
```

For production, build the client and run the server behind a process manager or host separately (Vercel for frontend, Render/Heroku for backend). See server/README.md and client/README.md for details.
