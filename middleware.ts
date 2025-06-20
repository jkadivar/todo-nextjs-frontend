import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt');

  const { pathname } = request.nextUrl;

  const isProtectedRoute =
    pathname === '/' || pathname.startsWith('/task');

  const isAuthRoute =
    pathname === '/login' || pathname === '/register';

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/task/:path*', '/login', '/register'],
};
