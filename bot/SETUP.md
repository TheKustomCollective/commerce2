# Marketing Bot Setup Guide

## 🤖 Your Bot is Ready!

The CommerceCult marketing bot is now built and ready to start posting. Here's how to activate it:

## Step 1: Create Social Media Accounts

If you don't have them already, create:

- **Twitter/X**: @CommerceCultApp (or your preferred handle)
- **Facebook**: Business Page for CommerceCult
- **LinkedIn**: Company Page for CommerceCult
- **Instagram**: Business Account for CommerceCult

## Step 2: Get API Credentials

### Twitter/X
1. Go to https://developer.twitter.com/
2. Create a new app
3. Get your API keys and tokens

### Facebook
1. Go to https://developers.facebook.com/
2. Create an app
3. Get Page Access Token for your business page

### LinkedIn
1. Go to https://www.linkedin.com/developers/
2. Create an app
3. Get OAuth 2.0 credentials

### Instagram
1. Convert to Business Account
2. Connect to Facebook Page
3. Get access token via Facebook Graph API

## Step 3: Add Secrets to GitHub

Go to your repo settings and add these secrets:

```
TWITTER_API_KEY=your_key_here
TWITTER_API_SECRET=your_secret_here
TWITTER_ACCESS_TOKEN=your_token_here
TWITTER_ACCESS_SECRET=your_secret_here

FACEBOOK_PAGE_ID=your_page_id
FACEBOOK_ACCESS_TOKEN=your_token_here

LINKEDIN_ACCESS_TOKEN=your_token_here
LINKEDIN_ORG_ID=your_org_id

INSTAGRAM_ACCESS_TOKEN=your_token_here
INSTAGRAM_BUSINESS_ID=your_business_id
```

## Step 4: Test the Bot Locally

```bash
cd /workspaces/commerce2/bot
npm install
node scripts/social-media-poster.js
```

## Step 5: Enable GitHub Actions

The bot will automatically run based on the schedule in `.github/workflows/social-media-bot.yml`

**Current Schedule:**
- Twitter: 5 times per day (9am, 12pm, 3pm, 6pm, 9pm)
- Facebook: 2 times per day (1pm, 7pm)
- LinkedIn: Once per day at 8am (weekdays only)

## Step 6: Monitor Activity

Check the logs in `bot/logs/posting-log.json` to see what the bot has posted.

## What the Bot Does

✅ **Automatically posts** about CommerceCult AI Business Intelligence Software
✅ **Curates content** from industry sources
✅ **Schedules posts** at optimal times
✅ **Uses hashtags** for maximum reach
✅ **Rotates content** to avoid repetition
✅ **Logs all activity** for tracking

## Sample Posts

The bot will post messages like:

- "🚀 Transform your business idea into reality with CommerceCult's AI Business Intelligence Software!"
- "💡 Generate comprehensive business plans in minutes with AI-powered insights"
- "📊 Stop guessing, start knowing! Get market analysis and competitor insights instantly"
- "💼 Need funding? Our FundMyStartup program connects entrepreneurs with investors"

## Safety Features

- ✅ Respectful tone aligned with brand values
- ✅ No spam - scheduled posts only
- ✅ Human-reviewed content templates
- ✅ Logs all activity for audit
- ✅ Can be disabled anytime via GitHub Actions

## To Disable the Bot

Go to `.github/workflows/social-media-bot.yml` and comment out the schedule, or disable the workflow in GitHub Actions settings.

## Current Status

🟡 **READY BUT NOT ACTIVE** - Waiting for API credentials to be added to GitHub secrets.

Once you add the credentials, the bot will start posting automatically!
