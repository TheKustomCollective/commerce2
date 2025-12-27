import { NextRequest, NextResponse } from 'next/server'
import { users } from '@/lib/auth'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REDIRECT_URI = process.env.NEXT_PUBLIC_URL 
  ? `${process.env.NEXT_PUBLIC_URL}/api/auth/google/callback`
  : 'http://localhost:3000/api/auth/google/callback'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.redirect(new URL(`/login?error=${error}`, request.url))
  }

  if (!code) {
    return NextResponse.redirect(new URL('/login?error=no_code', request.url))
  }

  try {
    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    })

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for tokens')
    }

    const tokens = await tokenResponse.json()

    // Get user info from Google
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    })

    if (!userInfoResponse.ok) {
      throw new Error('Failed to get user info')
    }

    const googleUser = await userInfoResponse.json()

    // Create or update user in our system
    const emailLower = googleUser.email.toLowerCase()
    
    if (!users.has(emailLower)) {
      // Create new user
      users.set(emailLower, {
        password: '', // No password for OAuth users
        name: googleUser.name || googleUser.email.split('@')[0],
        company: '',
        plan: 'free',
        provider: 'google',
        createdAt: new Date().toISOString(),
      })
      
      console.log('New Google user registered:', {
        email: emailLower,
        name: googleUser.name,
        provider: 'google',
        totalUsers: users.size
      })
    }

    // In production, create a secure session here
    // For now, redirect to dashboard with user info in URL (not secure, just for demo)
    const dashboardUrl = new URL('/dashboard', request.url)
    dashboardUrl.searchParams.append('email', emailLower)
    dashboardUrl.searchParams.append('name', googleUser.name || 'User')
    dashboardUrl.searchParams.append('provider', 'google')

    return NextResponse.redirect(dashboardUrl.toString())
  } catch (error) {
    console.error('Google OAuth error:', error)
    return NextResponse.redirect(new URL('/login?error=oauth_failed', request.url))
  }
}
