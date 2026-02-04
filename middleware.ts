import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BLOCKED_COUNTRIES = new Set(['CN'])

export function middleware(request: NextRequest) {
  const country =
    request.geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    ''

  if (BLOCKED_COUNTRIES.has(country)) {
    return new NextResponse('Access denied', { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico|robots.txt|sitemap.xml).*)']
}
