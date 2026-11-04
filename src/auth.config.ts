/**
 * Edge- and Node-compatible Auth.js configuration.
 * Used by proxy.ts and the main auth.ts configuration.
 */
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/cms-login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Allow the CMS auth broker endpoints through to their dedicated route handlers,
      // which perform their own session & CSRF state checks.
      if (nextUrl.pathname.startsWith("/admin/api/cms-auth")) {
        return true;
      }

      // Guard /admin and all sub-resources (including /admin/index.html and CMS assets)
      if (nextUrl.pathname.startsWith("/admin")) {
        return isLoggedIn;
      }

      return true;
    },
  },
  providers: [],
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
