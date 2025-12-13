# Google AdSense Setup Guide for CommerceCult

## Overview
CommerceCult is now configured to display Google AdSense ads on your site. Follow these steps to start earning revenue.

## Step 1: Sign Up for Google AdSense

1. Go to **https://www.google.com/adsense/**
2. Click **"Get Started"**
3. Sign in with your Google account
4. Fill out the application form:
   - Website URL: `https://commercecult.app` (or your Vercel URL)
   - Select your content language
   - Accept terms and conditions
5. Submit your application

**Application Review:** Google typically reviews applications within 1-2 weeks.

## Step 2: Get Your AdSense Publisher ID

Once approved:
1. Log into your AdSense dashboard
2. Go to **Account** → **Settings**
3. Find your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)
4. Copy this ID

## Step 3: Configure Your Site

1. Create a `.env.local` file in the `frontend/` directory:
   ```bash
   cd /workspaces/commerce2/CommerceCult_app_v2-1/frontend
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your AdSense ID:
   ```env
   NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
   ```

## Step 4: Create Ad Units

1. In AdSense dashboard, go to **Ads** → **By ad unit**
2. Click **"Create ad unit"**
3. Create these ad types:

   **Banner Ad (Top of page)**
   - Type: Display ads
   - Size: Responsive or 728×90 (Leaderboard)
   - Name: "Homepage Banner"
   - Copy the **Ad slot ID** (e.g., 1234567890)

   **Square Ad (Sidebar/Content)**
   - Type: Display ads
   - Size: 300×250 (Medium Rectangle)
   - Name: "Content Square"
   - Copy the **Ad slot ID**

4. Update your `.env.local` with the slot IDs:
   ```env
   NEXT_PUBLIC_AD_SLOT_BANNER=1234567890
   NEXT_PUBLIC_AD_SLOT_SQUARE=9876543210
   ```

## Step 5: Update Ad Slots in Code

Edit `/app/page.tsx` and replace placeholder slot IDs:

```tsx
// Replace this:
<GoogleAd slot="1234567890" ... />

// With your actual slot ID:
<GoogleAd slot={process.env.NEXT_PUBLIC_AD_SLOT_BANNER} ... />
```

## Step 6: Deploy to Vercel

1. Add environment variables to Vercel:
   ```bash
   vercel env add NEXT_PUBLIC_GOOGLE_ADSENSE_ID
   # Enter your ca-pub-XXXXXXXXXXXXXXXX when prompted
   ```

2. Deploy your site:
   ```bash
   git add -A
   git commit -m "Add Google AdSense integration"
   git push origin main
   ```

## Step 7: Verify Ad Placement

1. Visit your deployed site
2. Open browser DevTools (F12)
3. Check for AdSense script loading
4. Ads may show as blank initially - this is normal during setup
5. Test ads will appear within 24 hours after verification

## Revenue Expectations

### Estimated Earnings (based on typical rates):
- **Page Views:** 10,000/month → $20-$50/month
- **Page Views:** 50,000/month → $100-$300/month
- **Page Views:** 100,000/month → $250-$750/month
- **Page Views:** 500,000/month → $1,500-$4,000/month

**Factors affecting revenue:**
- Traffic volume
- Visitor location (US/UK traffic pays more)
- Niche (business/tech pays well)
- Click-through rate (CTR)
- Ad placement optimization

## Alternative: Microsoft Advertising

If you want to use Microsoft Advertising instead:

1. Sign up at **https://about.ads.microsoft.com/**
2. Follow similar steps to get your Publisher ID
3. Update `.env.local` with Microsoft ID
4. Modify `/app/layout.tsx` to use Microsoft's ad script

## Best Practices

### ✅ Do:
- Place ads above the fold (visible without scrolling)
- Use 2-3 ad units per page (not too many)
- Match ad colors to your site design
- Use responsive ad units for mobile
- Keep content quality high for better CPM

### ❌ Don't:
- Click your own ads (violates AdSense policy)
- Ask users to click ads
- Place ads too close to navigation
- Use more than 3 ad units per page initially
- Place ads in pop-ups or slide-ins

## Monitoring Performance

1. Check AdSense dashboard daily for:
   - Impressions (ad views)
   - Clicks
   - CTR (Click-through rate)
   - Revenue (updated daily)

2. Payment threshold: $100
3. Payment schedule: Monthly (around 21st)
4. Payment methods: Direct deposit, check, wire

## Ad Placement Locations

Currently configured ad locations:
- ✅ Homepage banner (728×90 or responsive)
- ✅ Homepage square ad (300×250)
- 🔄 Can add: Sidebar ads on blog pages
- 🔄 Can add: Footer banner
- 🔄 Can add: In-article ads for blog content

## Troubleshooting

**Ads not showing?**
- Check that `.env.local` has correct AdSense ID
- Wait 24-48 hours after setup
- Verify site is approved in AdSense dashboard
- Check browser console for errors

**Low earnings?**
- Increase traffic through SEO and marketing
- Experiment with ad placement
- Try different ad sizes
- Focus on high-value content
- Target US/UK/Canada traffic

**Account suspended?**
- Review AdSense policies
- Check for invalid click activity
- Ensure content complies with guidelines
- Appeal if you believe it's a mistake

## Support

- AdSense Help: https://support.google.com/adsense
- Contact: support@commercecult.app
- Community: AdSense Community Forum

---

**Pro Tip:** Combine AdSense with affiliate marketing and your B2B marketplace for maximum revenue diversification!
