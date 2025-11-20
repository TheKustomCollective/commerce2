# COMMERCECULT
## BUSINESS INTELLIGENCE SOFTWARE

CommerceCult is an AI-powered business platform with Stripe payment integration.

## Repository Structure

- **`CommerceCult_app_v2/`** - Main full-stack application
  - `server/` - Express backend with Stripe integration
  - `client/` - Next.js React frontend
  - `database/` - PostgreSQL schema
- **`frontend/`** - Standalone Next.js pages with OpenAI integration
- **`backend/`** - Simple Express server
- **Root files** - Static GitHub Pages site (published at `commercecult.app`)

## 🚀 Quick Start

**Ready to get started?** See the [**SETUP_GUIDE.md**](./SETUP_GUIDE.md) for detailed step-by-step instructions.

### TL;DR

```bash
# 1. Install dependencies
cd CommerceCult_app_v2/server && npm install
cd ../client && npm install

# 2. Configure environment variables
cp server/.env.example server/.env
cp client/.env.example client/.env.local
# Edit .env files with your Stripe keys

# 3. Run the application
# Terminal 1:
cd server && npm run dev

# Terminal 2:
cd client && npm run dev

# 4. Open http://localhost:3000
```

## What's Included

✅ **Stripe Checkout** - Complete payment flow with test mode support  
✅ **Webhook handling** - Secure webhook verification for transaction events  
✅ **Next.js frontend** - Modern React framework with hot reload  
✅ **Express backend** - RESTful API with CORS support  
✅ **PostgreSQL schema** - Database structure for users, products, and transactions  
✅ **OpenAI integration** - AI content generation (frontend/pages/api/)

## Key Features Fixed

This update addresses several critical issues:

1. ✅ **Fixed invalid OpenAI model** - Changed from `gpt-4.1-mini` to `gpt-4o-mini`
2. ✅ **Added environment configuration** - Created `.env.example` files for all components
3. ✅ **Comprehensive setup guide** - Step-by-step instructions with troubleshooting
4. ✅ **Clear documentation** - Organized README with quick start instructions

## Need Help?

- 📖 Read the [Setup Guide](./SETUP_GUIDE.md) for detailed instructions
- 🐛 Common issues and solutions are documented in the Setup Guide
- 💳 Use Stripe test cards: `4242 4242 4242 4242` for successful payments

## Static Site (GitHub Pages)

The root `index.html` and `style.css` files are published to GitHub Pages at `commercecult.app`.
