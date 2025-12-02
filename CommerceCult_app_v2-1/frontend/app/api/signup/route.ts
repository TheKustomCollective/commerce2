import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory user store (replace with database in production)
// Format: { email: { password: hashedPassword, name: string, createdAt: string } }
const users = new Map<string, { password: string; name: string; createdAt: string }>()

// Simple password hash function (use bcrypt in production)
function hashPassword(password: string): string {
  // In production, use: await bcrypt.hash(password, 10)
  return Buffer.from(password).toString('base64')
}

function verifyPassword(password: string, hashedPassword: string): boolean {
  // In production, use: await bcrypt.compare(password, hashedPassword)
  return Buffer.from(password).toString('base64') === hashedPassword
}

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
    users.set(email.toLowerCase(), {
      password: hashedPassword,
      name,
      createdAt: new Date().toISOString()
    })

    console.log('New user registered:', {
      email: email.toLowerCase(),
      name,
      timestamp: new Date().toISOString()
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

// Export the users map for use in login
export { users, verifyPassword }
