/**
 * /api/cms-auth/auth — GitHub OAuth broker: Authorization entry point.
 *
 * Sveltia CMS opens a popup to this URL when the user clicks "Sign In with GitHub".
 * This endpoint:
 *   1. Verifies the user has a valid Microsoft Entra session (server-side).
 *   2. Generates a cryptographically secure state token (CSRF protection).
 *   3. Stores the state in a short-lived HttpOnly cookie.
 *   4. Immediately issues a GitHub fine-grained PAT response — we skip the real
 *      GitHub OAuth round-trip because we use a single bot PAT stored server-side.
 *      Instead, we redirect straight to our callback with the state, which issues
 *      the postMessage response Sveltia expects.
 *
 * WHY we skip the real GitHub OAuth round-trip:
 *   - The CMS GitHub backend only needs an access token.
 *   - We already have a server-side PAT (CMS_GITHUB_TOKEN).
 *   - The real GitHub OAuth would require exposing a GitHub OAuth App client_secret
 *     AND would issue a token scoped to the EMPLOYEE's GitHub account, not the bot.
 *   - Sveltia only validates that the postMessage carries a token string; it does
 *     not care whether the OAuth round-trip was real or brokered.
 *   - This design is identical to how Netlify Identity and sveltia-cms-auth work:
 *     they are trusted intermediaries that hand back the token via postMessage.
 *
 * Security model:
 *   - No session → 401 redirect to CMS login
 *   - State must match the cookie value (CSRF)
 *   - The GitHub token is NEVER sent to the browser directly; it travels only
 *     through the postMessage in the callback HTML page which the popup renders.
 *   - The popup is opened by the CMS origin; postMessage target is validated
 *     against a fixed allowlist in the callback.
 */

import { auth } from "@/auth";
import { getAppOrigin } from "@/lib/origin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { randomBytes } from "crypto";

export async function GET(request: NextRequest) {
  console.log("[CMS_AUTH_DIAGNOSTIC] GITHUB_BROKER_REQUEST_RECEIVED");

  // 1. Verify Microsoft session
  const session = await auth();
  if (!session?.user) {
    return redirect("/cms-login");
  }

  // 2. Generate CSRF state
  const state = randomBytes(32).toString("hex");

  // 3. Store state in a short-lived, HttpOnly, SameSite=Lax cookie
  const cookieStore = await cookies();
  cookieStore.set("cms_oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 300, // 5 minutes
    path: "/api/cms-auth",
  });

  // 4. Redirect to our own callback endpoint with the state param.
  //    We safely resolve the origin using getAppOrigin to avoid internal localhost
  //    or misconfigured proxy hostnames.
  const appOrigin = getAppOrigin(request);
  const callbackUrl = new URL("/api/cms-auth/callback", appOrigin);
  callbackUrl.searchParams.set("state", state);

  return redirect(callbackUrl.toString());
}

