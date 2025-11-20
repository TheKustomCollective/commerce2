# CommerceCult Quick Reference

## 🚀 Getting Started (First Time)

```bash
# 1. Install all dependencies
cd CommerceCult_app_v2/server
npm install
cd ../client
npm install

# 2. Set up environment variables
cd CommerceCult_app_v2/server
cp .env.example .env
# Edit .env with your Stripe keys

cd ../client
cp .env.example .env.local
# Edit .env.local with your Stripe keys

# 3. Start development
# Open two terminals:

# Terminal 1 - Server
cd CommerceCult_app_v2/server
npm run dev

# Terminal 2 - Client
cd CommerceCult_app_v2/client
npm run dev

# 4. Open http://localhost:3000
```

## 📋 Common Commands

### Development
```bash
# Start server (with auto-reload)
cd CommerceCult_app_v2/server && npm run dev

# Start client (with auto-reload)
cd CommerceCult_app_v2/client && npm run dev

# Build client for production
cd CommerceCult_app_v2/client && npm run build

# Start production client
cd CommerceCult_app_v2/client && npm start
```

### Testing
```bash
# Test Stripe test card
Card: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits

# Health check
curl http://localhost:4242/api/health
```

## 🔑 Required API Keys

| Key | Get it from | Used in |
|-----|-------------|---------|
| STRIPE_SECRET_KEY | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) | Server .env |
| STRIPE_PUBLISHABLE_KEY | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) | Client .env.local |
| STRIPE_PRICE_ID | [Stripe Products](https://dashboard.stripe.com/products) | Both .env files |
| STRIPE_WEBHOOK_SECRET | [Stripe Webhooks](https://dashboard.stripe.com/webhooks) | Server .env |
| OPENAI_API_KEY | [OpenAI Platform](https://platform.openai.com/api-keys) | frontend/.env.local |

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Module not found | Run `npm install` in server AND client |
| Port already in use | Kill process: `lsof -ti:PORT \| xargs kill -9` |
| Stripe error | Check API keys in .env files |
| Server not connecting | Verify NEXT_PUBLIC_API_URL matches server URL |
| Can't checkout | Make sure server is running first |

## 📁 Project Structure

```
CommerceCult_app_v2/
├── server/           # Express backend (port 4242)
│   ├── index.js      # Main server file
│   └── .env          # Server configuration (create from .env.example)
├── client/           # Next.js frontend (port 3000)
│   ├── pages/        # React pages
│   └── .env.local    # Client configuration (create from .env.example)
└── database/         # PostgreSQL schema
    └── schema.sql    # Database structure
```

## ✅ Is Everything Working?

Run this checklist:

- [ ] Server installed: `cd CommerceCult_app_v2/server && npm install`
- [ ] Client installed: `cd CommerceCult_app_v2/client && npm install`
- [ ] Server .env created from .env.example
- [ ] Client .env.local created from .env.example
- [ ] Stripe keys added to .env files
- [ ] Server starts: `cd server && npm run dev` → "Server listening on 4242"
- [ ] Client starts: `cd client && npm run dev` → "Ready on http://localhost:3000"
- [ ] Can open http://localhost:3000 in browser
- [ ] "Buy / Checkout" button redirects to Stripe

## 🆘 Still Need Help?

1. Read the detailed [SETUP_GUIDE.md](./SETUP_GUIDE.md)
2. Check server logs in Terminal 1
3. Check browser console (F12) for errors
4. Verify all environment variables are set
5. Make sure both server AND client are running

## 🎯 What's Fixed

✅ Invalid OpenAI model (`gpt-4o-mini` now used)  
✅ Missing .env.example files created  
✅ Missing frontend/package.json added  
✅ Comprehensive documentation added  
✅ Clear setup instructions provided
