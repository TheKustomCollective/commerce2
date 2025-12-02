// Shared user store for authentication
// In production, this would be a database like Supabase, MongoDB, or PostgreSQL

export interface User {
  password: string
  name: string
  createdAt: string
  company: string
  plan: string
  provider?: string
}

// In-memory user store (persists during server runtime)
export const users = new Map<string, User>()

// Simple password hash function (use bcrypt in production)
export function hashPassword(password: string): string {
  return Buffer.from(password).toString('base64')
}

export function verifyPassword(password: string, hashedPassword: string): boolean {
  return Buffer.from(password).toString('base64') === hashedPassword
}

// Initialize with demo account
if (users.size === 0) {
  users.set('demo@commercecult.app', {
    password: hashPassword('demo1234'),
    name: 'Demo User',
    company: 'Demo Company',
    plan: 'free',
    createdAt: new Date().toISOString()
  })
  console.log('Demo account initialized: demo@commercecult.app / demo1234')
}
