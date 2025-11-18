
# Server (Express)

Provides API endpoints:
- `POST /api/checkout` — create Stripe Checkout session (expects JSON { priceId })
- `POST /api/stripe/webhook` — Stripe webhook endpoint (raw body verification)
- `GET /api/health` — health check

Set environment variables from the project root `.env` or server `.env`.
