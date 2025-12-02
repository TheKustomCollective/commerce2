import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // TODO: Integrate with authentication service (NextAuth, Supabase, etc.)
    // For now, we'll accept any email/password combo for demo
    
    console.log('Login attempt:', {
      email,
      timestamp: new Date().toISOString()
    })

    // Simulate successful login
    // In production, you would:
    // 1. Verify credentials against database
    // 2. Create session token
    // 3. Set secure HTTP-only cookie
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Login successful',
        user: {
          email,
          name: email.split('@')[0],
          id: 'demo-user-id'
        },
        redirectTo: '/dashboard'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
