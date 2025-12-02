import { NextRequest, NextResponse } from 'next/server'
import { users, hashPassword } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name } = body

    // Validate required fields
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
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

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      )
    }

    // Check if user already exists
    if (users.has(email.toLowerCase())) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // Create new user
    const hashedPassword = hashPassword(password)
    const emailLower = email.toLowerCase()
    
    users.set(emailLower, {
      password: hashedPassword,
      name,
      company,
      plan,
      createdAt: new Date().toISOString()
    })

    console.log('New user registered:', {
      email: emailLower,
      name,
      company,
      plan,
      timestamp: new Date().toISOString(),
      totalUsers: users.size
    })

    // Return success (in production, also create session token)
    return NextResponse.json(
      { 
        success: true,
        message: 'Account created successfully',
        user: {
          email: email.toLowerCase(),
          name,
        },
        redirectTo: '/dashboard'
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
