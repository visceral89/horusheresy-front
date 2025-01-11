import { NextResponse } from 'next/server';

export function middleware(request) {
  // Retrieve the API key from the request headers
  const apiKey = request.headers.get('x-api-key');

  // Check if the API key is valid
  if (!apiKey || apiKey !== process.env.API_KEY) {
    // Respond with a 403 Forbidden status if the API key is missing or invalid
    return NextResponse.json(
      { message: 'Forbidden: Invalid API Key' },
      { status: 403 }
    );
  }

  // If valid, proceed with the request
  return NextResponse.next();
}

// Apply middleware only to API routes
export const config = {
  matcher: '/api/:path*', // Match all API routes
};
