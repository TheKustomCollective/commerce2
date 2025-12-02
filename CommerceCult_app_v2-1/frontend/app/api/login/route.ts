import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory user store (shared with signup)
// In production, this would be a database
const users = new Map<string, { password: string; name: string; createdAt: string }>()

function verifyPassword(password: string, hashedPassword: string): boolean {
  return Buffer.from(password).toString('base64') === hashedPassword
}

// Create a demo account on server start
if (users.size === 0) {
  users.set('demo@commercecult.app', {
    password: Buffer.from('demo1234').toString('base64'),
    name: 'Demo User',
    createdAt: new Date().toISOString()
  })
}

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

    // Verify password
    if (!verifyPassword(password, user.password)) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    console.log('Successful login:', {
      email: emailLower,
      timestamp: new Date().toISOString()
    })

    // In production, create a secure session token/JWT here
    return NextResponse.json(
      { 
        success: true,
        message: 'Login successful',
        user: {
          email: emailLower,
          name: user.name,
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

// Export users for signup to access
export { users }
