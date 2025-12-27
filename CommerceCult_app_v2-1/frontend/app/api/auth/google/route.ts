import { NextRequest, NextResponse } from 'next/server'

// Google OAuth configuration
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REDIRECT_URI = process.env.NEXT_PUBLIC_URL 
  ? `${process.env.NEXT_PUBLIC_URL}/api/auth/google/callback`
  : 'http://localhost:3000/api/auth/google/callback'

export async function GET(request: NextRequest) {
  // Check if Google OAuth is properly configured
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || 
      GOOGLE_CLIENT_ID.includes('your-google-client-id') ||
      GOOGLE_CLIENT_SECRET.includes('your-google-client-secret')) {
    const errorUrl = new URL('/login', request.url)
    errorUrl.searchParams.set('error', 'oauth_not_configured')
    errorUrl.searchParams.set('message', 'Google OAuth is not configured. Please contact support.')
    return NextResponse.redirect(errorUrl)
  }

  // Build Google OAuth URL
  const googleAuthUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  
  googleAuthUrl.searchParams.append('client_id', GOOGLE_CLIENT_ID)
  googleAuthUrl.searchParams.append('redirect_uri', REDIRECT_URI)
  googleAuthUrl.searchParams.append('response_type', 'code')
  googleAuthUrl.searchParams.append('scope', 'openid email profile')
  googleAuthUrl.searchParams.append('access_type', 'offline')
  googleAuthUrl.searchParams.append('prompt', 'consent')

  // Redirect to Google OAuth
  return NextResponse.redirect(googleAuthUrl.toString())
}
