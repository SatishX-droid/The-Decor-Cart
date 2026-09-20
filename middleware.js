import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname === '/google4de67fec486f31de.html') {
    return new NextResponse(
      'google-site-verification: google4de67fec486f31de.html',
      {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/google4de67fec486f31de.html'],
};
