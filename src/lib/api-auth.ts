import { NextRequest, NextResponse } from 'next/server'

/**
 * Middleware to check if request is authenticated as admin
 * Returns null if authenticated, or NextResponse with error if not
 */
export function requireAdminAuth(request: NextRequest): NextResponse | null {
  const authCookie = request.cookies.get('admin_auth')
  
  if (!authCookie || authCookie.value !== 'authenticated') {
    return NextResponse.json(
      { error: 'Unauthorized - Admin access required' },
      { status: 401 }
    )
  }
  
  return null
}

/**
 * Wrapper for API route handlers that require admin authentication
 */
export function withAdminAuth(
  handler: (request: NextRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest) => {
    const authError = requireAdminAuth(request)
    if (authError) {
      return authError
    }
    return handler(request)
  }
}
