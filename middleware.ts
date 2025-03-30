import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()
    const { pathname } = url
    const hostname = request.headers.get('host') || ''

    // ONLY handle neongear.kylehub.dev subdomain
    if (hostname === 'neongear.kylehub.dev') {
        // Handle the root path for the neongear subdomain
        if (pathname === '/') {
            return NextResponse.rewrite(new URL('/neongear', request.url))
        }

        // For direct access to privacy-policy and terms-of-service
        if (pathname === '/privacy-policy') {
            return NextResponse.rewrite(new URL('/neongear/privacy-policy', request.url))
        }

        if (pathname === '/terms-of-service') {
            return NextResponse.rewrite(new URL('/neongear/terms-of-service', request.url))
        }
    }

    // For all other subdomains or the main domain, do nothing special
    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images/ (image files)
         */
        '/((?!_next/static|_next/image|favicon.ico|images/).*)',
    ],
}