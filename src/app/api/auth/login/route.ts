import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Get credentials from environment variables (REQUIRED - no fallbacks for security)
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

    // Validate credentials are configured
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      console.error('Admin credentials not configured')
      return NextResponse.json(
        { success: false, error: 'Authentication service unavailable' },
        { status: 503 }
      )
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Create a response with authentication cookie
      const response = NextResponse.json({ 
        success: true,
        message: 'Login successful'
      })

      // Set secure HTTP-only cookie (expires in 7 days)
      response.cookies.set('admin_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      })

      return response
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'Login failed' },
      { status: 500 }
    )
  }
}

