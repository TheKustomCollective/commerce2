# 🚀 GET STARTED IN 5 MINUTES

No more frustration! Follow these exact steps to get CommerceCult running.

## ☑️ Prerequisites Checklist

Before you start, make sure you have:
- [ ] Node.js installed (check: `node --version`)
- [ ] npm installed (check: `npm --version`)
- [ ] A Stripe account (free at stripe.com)

---

## 📝 STEP 1: Install Dependencies (2 minutes)

Open your terminal in the project directory:

```bash
# Install server dependencies
cd CommerceCult_app_v2/server
npm install
```

**What you should see:** `added 120 packages`

```bash
# Install client dependencies
cd ../client
npm install
```

**What you should see:** `added 147 packages`

✅ **Success:** Both install without errors

---

## 🔑 STEP 2: Get Your Stripe Keys (1 minute)

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Click **Developers** → **API keys**
3. Copy these two keys:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (starts with `sk_test_`)

4. Create a product to get a Price ID:
   - Click **Products** → **Add Product**
   - Set any name and price
   - After saving, copy the **Price ID** (starts with `price_`)

---

## ⚙️ STEP 3: Configure Environment (1 minute)

### Server Configuration:

```bash
cd CommerceCult_app_v2/server
cp .env.example .env
```

Now edit `.env` and replace the placeholder values:

```env
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE
STRIPE_PRICE_ID=price_YOUR_ACTUAL_PRICE_ID_HERE
```

### Client Configuration:

```bash
cd ../client
cp .env.example .env.local
```

Now edit `.env.local` and replace the placeholder values:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
NEXT_PUBLIC_PRICE_ID=price_YOUR_ACTUAL_PRICE_ID_HERE
```

✅ **Success:** Both .env files created and configured

---

## 🏃 STEP 4: Start the Application (1 minute)

### Open TWO Terminal Windows:

**Terminal 1 - Start the Server:**
```bash
cd CommerceCult_app_v2/server
npm run dev
```

**What you should see:**
```
[nodemon] starting `node index.js`
Server listening on 4242
```

**Terminal 2 - Start the Client:**
```bash
cd CommerceCult_app_v2/client
npm run dev
```

**What you should see:**
```
- ready started server on 0.0.0.0:3000
- Local:        http://localhost:3000
```

✅ **Success:** Both running without errors

---

## 🎉 STEP 5: Test It! (30 seconds)

1. Open your browser to: **http://localhost:3000**

2. You should see the CommerceCult demo page

3. Click **"Buy / Checkout"**

4. You'll be redirected to Stripe's checkout page

5. Use the test card:
   - Card: `4242 4242 4242 4242`
   - Expiry: `12/34` (any future date)
   - CVC: `123` (any 3 digits)

6. Complete the purchase

7. You'll be redirected back to your site

✅ **SUCCESS!** Everything is working! 🎊

---

## 🆘 Something Not Working?

### Problem: "npm: command not found"
**Solution:** Install Node.js from nodejs.org

### Problem: "npm install" fails
**Solution:** 
```bash
# Clear npm cache and try again
npm cache clean --force
npm install
```

### Problem: "Port 4242 already in use"
**Solution:**
```bash
# Kill the process
lsof -ti:4242 | xargs kill -9
```

### Problem: "Port 3000 already in use"
**Solution:**
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
```

### Problem: "Stripe error" when checking out
**Solution:** Double-check your .env files:
- Make sure you copied the ENTIRE key (they're long!)
- Make sure there are no extra spaces
- Make sure you saved the file after editing
- Restart both server and client

### Problem: Can't find .env file
**Solution:** 
- macOS/Linux: Files starting with `.` are hidden
- Show hidden files: `ls -la` (terminal) or Cmd+Shift+. (Finder)
- Or create it: `touch .env` then edit with any text editor

---

## 📚 More Help

- **Quick commands:** See QUICK_REFERENCE.md
- **Detailed guide:** See SETUP_GUIDE.md
- **What changed:** See CHANGES_SUMMARY.md

---

## ✨ That's It!

You now have a fully working CommerceCult application with:
- ✅ Working Stripe integration
- ✅ Server running on port 4242
- ✅ Client running on port 3000
- ✅ Test mode enabled for safe testing

**No more frustration!** 🎉

---

## 🔄 To Start Again Later

Just run these two commands in separate terminals:

```bash
# Terminal 1
cd CommerceCult_app_v2/server && npm run dev

# Terminal 2
cd CommerceCult_app_v2/client && npm run dev
```

Then open http://localhost:3000

**That's it!** Your configuration is saved in the .env files.
