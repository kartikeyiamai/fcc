/**
 * proxy.ts — Next.js 16 request proxy.
 *
 * Protects /admin and all sub-paths: unauthenticated visitors are redirected to /cms-login.
 * Auth.js handles the redirect via authConfig.callbacks.authorized and authConfig.pages.signIn.
 *
 * Edge-safety:
 *   - Only imports Edge-safe authConfig without provider libraries or Node runtime modules.
 *   - Session verification is JWT-based.
 */
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export const proxy = auth;

export const config = {
  matcher: [
    /*
     * Match both /admin and /admin/:path* so direct visits to /admin,
     * /admin/, and /admin/index.html are protected.
     */
    "/admin",
    "/admin/:path*",
  ],
};
