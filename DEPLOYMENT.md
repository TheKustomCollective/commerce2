# CommerceCult Deployment Guide# Deployment Instructions



## Current Status ✓## Current Status

- ✅ Repository cleaned (removed static site files)

Your repository is **structurally ready** for deployment! All configuration files are in place and valid:- ✅ Next.js app configured in `CommerceCult_app_v2-1/frontend/`

- ✅ vercel.json created

- ✓ Next.js app configured correctly- ⚠️ DNS still pointing to GitHub Pages (needs update)

- ✓ TypeScript + Tailwind setup complete

- ✓ `vercel.json` fixed and validated## Fix Deployment

- ✓ All source files present

- ✓ No compile/lint errors### 1. Disable GitHub Pages

- Go to: https://github.com/TheKustomCollective/commerce2/settings/pages

## Prerequisites- Set Source to **"None"**



Before deploying, you need:### 2. Connect to Vercel

- Go to: https://vercel.com/new

### 1. Node.js (if testing locally)- Import `TheKustomCollective/commerce2`

- Download: https://nodejs.org/en/download/- Framework: **Next.js** (auto-detected)

- Install the LTS version (includes npm)- Root Directory: Leave default (vercel.json handles it)

- Restart PowerShell after installation- Click **Deploy**

- Verify: `node --version` and `npm --version`

### 3. Add Custom Domain

### 2. Git Repository- In Vercel project → **Settings** → **Domains**

- Ensure changes are committed- Add: `commercecult.app`

- Push to GitHub (your repo should already be there)- Follow DNS instructions provided by Vercel



## Deployment Options### 4. Update DNS

At your domain registrar, set:

### Option A: GitHub + Vercel Integration (⭐ RECOMMENDED)```

Type: A

This is the easiest way to get live and enables automatic deployments on every push.Name: @

Value: 76.76.21.21

**Steps:**

Type: CNAME  

1. **Go to Vercel Dashboard**Name: www

   - Visit: https://vercel.com/newValue: cname.vercel-dns.com

   - Sign in with your GitHub account```



2. **Import Repository**## Verify Deployment

   - Click "Import Git Repository"After DNS propagates (5-30 minutes):

   - Select your `commerce2` repository- Visit: https://commercecult.app

   - Click "Import"- Should show: "CommerceCult - Your application is now live!"


3. **Configure Build Settings**
   
   Vercel will auto-detect Next.js, but you need to override the root directory:
   
   ```
   Framework Preset: Next.js (auto-detected)
   Root Directory: CommerceCult_app_v2-1/frontend
   Build Command: npm run build
   Output Directory: .next (default)
   Install Command: npm ci
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build
   - Your site will be live at a `*.vercel.app` URL

5. **Automatic Deployments**
   - Every push to `main` = automatic production deploy
   - Pull requests = automatic preview deployments
   - No manual steps needed!

### Option B: Vercel CLI

For manual deployments from your local machine:

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Navigate to frontend directory
cd CommerceCult_app_v2-1/frontend

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Custom Domain Setup (commercecult.app)

After deploying:

1. **In Vercel Dashboard**
   - Go to your project
   - Settings → Domains
   - Click "Add Domain"
   - Enter `commercecult.app`

2. **Configure DNS**
   
   Vercel will show you the required DNS records. Add these to your domain registrar:
   
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

3. **Wait for Propagation**
   - DNS changes take 5-60 minutes
   - Vercel will auto-verify and issue SSL certificate

## Environment Variables (if needed)

If your app requires environment variables:

1. In Vercel Dashboard → Settings → Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy to apply changes

Common variables for Next.js:
- `NEXT_PUBLIC_API_URL`
- `DATABASE_URL`
- `API_SECRET_KEY`

## Testing Before Deployment (Optional)

If you want to test the build locally first:

```powershell
# Navigate to frontend
cd CommerceCult_app_v2-1/frontend

# Install dependencies
npm ci

# Run development server
npm run dev

# Build for production
npm run build

# Test production build
npm start
```

Visit `http://localhost:3000` to see your app.

## Troubleshooting

### Build Fails on Vercel

1. Check the build logs in Vercel Dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors (run `npm run build` locally to check)
   - Node.js version mismatch

### Domain Not Working

1. Verify DNS records are correct
2. Wait up to 48 hours for full propagation
3. Check Vercel Dashboard for SSL certificate status

### Want to Test Locally But Don't Have Node.js?

You don't need to test locally! Vercel will build and deploy for you. Just:
1. Commit your code
2. Push to GitHub
3. Deploy via Vercel Dashboard

## Quick Start (No Local Setup Needed)

**Fastest path to live site:**

1. ✓ Your code is ready (already done!)
2. Commit changes:
   ```powershell
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```
3. Go to https://vercel.com/new
4. Import your repository
5. Set Root Directory: `CommerceCult_app_v2-1/frontend`
6. Click Deploy
7. Done! 🎉

Your site will be live at `<your-project>.vercel.app` in ~2 minutes.

## Files Created for You

- `deploy-live.ps1` - Validation script (run to check everything)
- `vercel.json` - Deployment configuration (fixed and ready)
- `.github/copilot-instructions.md` - AI coding agent guidelines

## Next Steps After Going Live

1. **Monitor**: Check Vercel Analytics for traffic
2. **Iterate**: Push changes to `main`, they auto-deploy
3. **Scale**: Vercel handles scaling automatically
4. **Optimize**: Use Vercel Speed Insights to improve performance

---

**Ready to go live?** Run `.\deploy-live.ps1` to validate everything, then head to https://vercel.com/new!
