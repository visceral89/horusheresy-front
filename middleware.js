import { NextResponse } from "next/server";

export function middleware(request) {
	const apiKey = request.headers.get("x-api-key");
	const response = NextResponse.next();

	// Set CORS headers
	response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins
	response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	response.headers.set("Access-Control-Allow-Headers", "Content-Type, x-api-key");

	if (!apiKey || apiKey !== process.env.API_KEY) {
		return NextResponse.json({ message: "Forbidden: Invalid API Key" }, { status: 403 });
	}

	return response;
}

export const config = {
	matcher: "/api/:path*", // Match all API routes
};
