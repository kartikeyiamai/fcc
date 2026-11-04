/**
 * proxy.ts — Next.js 16 request proxy (formerly middleware.ts).
 *
 * Protects the /admin path: unauthenticated visitors are redirected to /cms-login.
 * Auth.js handles the redirect via authConfig.callbacks.authorized and
 * authConfig.pages.signIn.
 *
 * NOTE: In Next.js 16, the file is named `proxy.ts` and must export `proxy`
 *       (not `middleware`). The Auth.js `auth` export satisfies this requirement
 *       when re-exported as `proxy`.
 *
 * Edge-safety:
 *   - This imports from `@/auth.config` indirectly through `@/auth`.
 *   - `@/auth` only imports the Microsoft Entra provider and no Node-only DB adapters.
 *   - All session verification is JWT-based (no DB round-trip in proxy layer).
 */
export { auth as proxy } from "@/auth";

export const config = {
  matcher: [
    /*
     * Protect /admin and all sub-paths only.
     *
     * Explicitly NOT matched (and thus not protected):
     *   /api/auth/*           — Auth.js OAuth callbacks and sign-in endpoints
     *   /api/cms-auth/*       — Our GitHub auth broker
     *   /cms-login            — The sign-in page
     *   /cms-signout          — The sign-out page
     *   /_next/static/*       — Next.js static assets
     *   /_next/image/*        — Next.js image optimization
     *   /favicon.ico          — Browser favicon
     *   All public assets     — Files served from /public
     */
    "/admin/:path*",
  ],
};
