# Environment Variables Setup

## Required for Production

### Google OAuth (for "Sign in with Google")
1. Go to https://console.cloud.google.com/
2. Create a new project or select existing
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure OAuth consent screen
6. Add authorized redirect URIs:
   - Production: `https://commercecult.app/api/auth/google/callback`
   - Development: `http://localhost:3000/api/auth/google/callback`
7. Copy Client ID and Client Secret

Add to Vercel environment variables:
```
GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret-here
NEXT_PUBLIC_URL=https://commercecult.app
```

### Facebook OAuth (optional)
```
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

### LinkedIn OAuth (optional)
```
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
```

## How to Add to Vercel

1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add each variable:
   - Name: `GOOGLE_CLIENT_ID`
   - Value: (paste your value)
   - Environment: Production, Preview, Development
4. Click "Save"
5. Redeploy your site

## Current Status

✅ Google OAuth implemented and ready
⏳ Needs Google Cloud credentials to activate
🔧 Facebook/LinkedIn buttons ready but need API keys

## Quick Test (After Setup)

1. Click "Continue with Google" button
2. Select your Google account
3. Grant permissions
4. Redirects to dashboard
5. Account automatically created!

## Security Notes

- Never commit API keys to GitHub
- Always use environment variables
- Rotate credentials if exposed
- Enable OAuth 2.0 security features in Google Cloud Console
