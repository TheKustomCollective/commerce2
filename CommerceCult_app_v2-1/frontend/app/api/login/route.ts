import { NextRequest, NextResponse } from 'next/server'
import { users, verifyPassword } from '@/lib/auth'

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

    const emailLower = email.toLowerCase()
    const user = users.get(emailLower)

    // Check if user exists
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Check if this is an OAuth user (no password set)
    if (!user.password && user.provider) {
      return NextResponse.json(
        { error: `This account uses ${user.provider} login. Please use "Continue with ${user.provider.charAt(0).toUpperCase() + user.provider.slice(1)}" button.` },
        { status: 401 }
      )
    }

    // Verify password
    if (!verifyPassword(password, user.password)) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    console.log('Successful login:', {
      email: emailLower,
      name: user.name,
      timestamp: new Date().toISOString(),
      totalUsers: users.size
    })

    // In production, create a secure session token/JWT here
    return NextResponse.json(
      { 
        success: true,
        message: 'Login successful',
        user: {
          email: emailLower,
          name: user.name,
          company: user.company,
          plan: user.plan,
          id: Buffer.from(emailLower).toString('base64')
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
