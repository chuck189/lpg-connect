// export { default } from "next-auth/middleware";


// export const config = {

// matcher:[

// "/customer/:path*",

// "/supplier/:path*",

// "/driver/:path*",

// "/admin/:path*"

// ]

// };
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};