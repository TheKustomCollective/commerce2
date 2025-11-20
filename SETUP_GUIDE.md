# CommerceCult Setup Guide

This guide will help you get CommerceCult up and running step by step.

## Project Structure

This repository contains multiple components:
- **CommerceCult_app_v2/** - Full-stack application (Next.js frontend + Express backend)
- **frontend/** - Standalone Next.js pages with OpenAI integration
- **backend/** - Simple Express server
- **Root files** - Static GitHub Pages site

## Getting Started with CommerceCult_app_v2

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Stripe account (for payments)
- PostgreSQL database (optional, for production)

### Step 1: Install Dependencies

```bash
# Install server dependencies
cd CommerceCult_app_v2/server
npm install

# Install client dependencies
cd ../client
npm install
```

### Step 2: Configure Environment Variables

#### Server Configuration

1. Copy the example file:
```bash
cd CommerceCult_app_v2/server
cp .env.example .env
```

2. Edit `.env` and add your actual values:
```env
PORT=4242
STRIPE_SECRET_KEY=sk_test_your_actual_key
STRIPE_WEBHOOK_SECRET=whsec_your_actual_secret
STRIPE_PRICE_ID=price_your_actual_price_id
SUCCESS_URL=http://localhost:3000
CANCEL_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@localhost:5432/commercecult
```

**Where to get Stripe keys:**
- Log in to [Stripe Dashboard](https://dashboard.stripe.com/)
- Go to Developers → API keys for `STRIPE_SECRET_KEY`
- Go to Developers → Webhooks to create an endpoint and get `STRIPE_WEBHOOK_SECRET`
- Go to Products → Create a product to get `STRIPE_PRICE_ID`

#### Client Configuration

1. Copy the example file:
```bash
cd CommerceCult_app_v2/client
cp .env.example .env.local
```

2. Edit `.env.local` and add your actual values:
```env
NEXT_PUBLIC_API_URL=http://localhost:4242
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key
NEXT_PUBLIC_PRICE_ID=price_your_actual_price_id
```

### Step 3: Set Up Database (Optional)

If you want to persist transactions:

```bash
# Create PostgreSQL database
createdb commercecult

# Run schema
psql commercecult < CommerceCult_app_v2/database/schema.sql
```

### Step 4: Run the Application

Open two terminal windows:

**Terminal 1 - Start the server:**
```bash
cd CommerceCult_app_v2/server
npm run dev
```

You should see: `Server listening on 4242`

**Terminal 2 - Start the client:**
```bash
cd CommerceCult_app_v2/client
npm run dev
```

You should see: `Ready on http://localhost:3000`

### Step 5: Test the Application

1. Open your browser to http://localhost:3000
2. You should see the CommerceCult demo page
3. Click "Buy / Checkout" to test the Stripe integration
4. You'll be redirected to Stripe's checkout page

## Common Issues and Solutions

### Issue: "Module not found" errors

**Solution:** Make sure you've run `npm install` in both the server and client directories.

```bash
cd CommerceCult_app_v2/server && npm install
cd ../client && npm install
```

### Issue: "Stripe error: Invalid API Key"

**Solution:** Check that you've:
1. Created a `.env` file in the server directory
2. Added your actual Stripe secret key (starts with `sk_test_`)
3. Restarted the server after adding the key

### Issue: Server won't start - "Port 4242 already in use"

**Solution:** 
- Stop any other process using port 4242
- Or change the PORT in your `.env` file and update `NEXT_PUBLIC_API_URL` in client's `.env.local`

### Issue: Client won't start - "Port 3000 already in use"

**Solution:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
npm run dev -- -p 3001
```

### Issue: "Failed to create session" when clicking checkout

**Solution:**
- Make sure the server is running
- Check that `NEXT_PUBLIC_API_URL` in client matches server's address
- Verify your Stripe keys are correct
- Check browser console and server logs for error messages

### Issue: OpenAI API returns error (for frontend/pages/api/generate.js)

**Solution:**
- Make sure you have a valid OpenAI API key
- Create a `.env.local` file in the `frontend` directory
- Add `OPENAI_API_KEY=sk-proj-your_actual_key`
- Model has been updated to use `gpt-4o-mini` (valid model name)

## Development Tips

### Hot Reload

Both the server and client support hot reload:
- Server: Using nodemon, changes auto-restart
- Client: Next.js auto-reloads on file changes

### Testing Stripe Webhooks Locally

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Forward webhooks to your local server:
```bash
stripe listen --forward-to localhost:4242/api/stripe/webhook
```
3. Use the webhook signing secret from the CLI in your `.env`

### Production Deployment

**Client (Vercel):**
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

**Server (Render/Heroku):**
1. Push code to GitHub
2. Create new web service
3. Set environment variables
4. Deploy

## Testing Credentials

For development, you can use Stripe's test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Any future expiry date and CVC

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Express Documentation](https://expressjs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## Getting Help

If you're still stuck:
1. Check the error messages carefully
2. Review the server logs and browser console
3. Make sure all environment variables are set correctly
4. Verify that all dependencies are installed
5. Try the troubleshooting steps above

## Quick Start Checklist

- [ ] Node.js installed
- [ ] Stripe account created
- [ ] Server dependencies installed (`cd CommerceCult_app_v2/server && npm install`)
- [ ] Client dependencies installed (`cd CommerceCult_app_v2/client && npm install`)
- [ ] Server `.env` file created and configured
- [ ] Client `.env.local` file created and configured
- [ ] Server running on port 4242
- [ ] Client running on port 3000
- [ ] Tested checkout flow

You're all set! 🎉
