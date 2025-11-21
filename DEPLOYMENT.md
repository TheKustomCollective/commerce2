# Deployment Instructions

## Current Status
- ✅ Repository cleaned (removed static site files)
- ✅ Next.js app configured in `CommerceCult_app_v2-1/frontend/`
- ✅ vercel.json created
- ⚠️ DNS still pointing to GitHub Pages (needs update)

## Fix Deployment

### 1. Disable GitHub Pages
- Go to: https://github.com/TheKustomCollective/commerce2/settings/pages
- Set Source to **"None"**

### 2. Connect to Vercel
- Go to: https://vercel.com/new
- Import `TheKustomCollective/commerce2`
- Framework: **Next.js** (auto-detected)
- Root Directory: Leave default (vercel.json handles it)
- Click **Deploy**

### 3. Add Custom Domain
- In Vercel project → **Settings** → **Domains**
- Add: `commercecult.app`
- Follow DNS instructions provided by Vercel

### 4. Update DNS
At your domain registrar, set:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## Verify Deployment
After DNS propagates (5-30 minutes):
- Visit: https://commercecult.app
- Should show: "CommerceCult - Your application is now live!"
