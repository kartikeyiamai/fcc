/**
 * /api/cms-auth/callback — GitHub OAuth broker: Callback / token delivery.
 *
 * Implements Sveltia CMS's expected OAuth popup postMessage protocol:
 *   1. Validates the CSRF state parameter against the HttpOnly cookie.
 *   2. Validates that the active session belongs to an authorized Microsoft user.
 *   3. Reads the server-side bot PAT (`CMS_GITHUB_TOKEN`).
 *   4. Delivers the token back to the Sveltia opener window using the exact
 *      Sveltia protocol string:
 *        `authorization:github:success:{"token":"...","provider":"github"}`
 *   5. Never logs the GitHub token and never leaks it into URLs or response headers.
 */

import { auth } from "@/auth";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const state = searchParams.get("state");

  // 1. Verify CSRF state
  const cookieStore = await cookies();
  const expectedState = cookieStore.get("cms_oauth_state")?.value;

  // Single-use token: remove the cookie immediately
  cookieStore.delete("cms_oauth_state");

  if (!state || !expectedState || state !== expectedState) {
    return errorResponse("Invalid or expired CSRF state. Please try logging in again.");
  }

  // 2. Verify Microsoft Entra session
  const session = await auth();
  if (!session?.user) {
    return errorResponse("Your Microsoft session has expired. Please sign in again.");
  }

  // 3. Retrieve bot PAT from server-side environment
  const githubToken = process.env.CMS_GITHUB_TOKEN;
  if (!githubToken) {
    console.error("[cms-auth] CMS_GITHUB_TOKEN is missing from server environment");
    return errorResponse(
      "CMS GitHub bot token is not configured. Please contact the administrator."
    );
  }

  // 4. Construct Sveltia CMS protocol payload
  console.log("[CMS_AUTH_DIAGNOSTIC] GITHUB_BROKER_CALLBACK_COMPLETED");
  // Format: authorization:github:success:{"token":"<token>","provider":"github"}
  const payload = JSON.stringify({ token: githubToken, provider: "github" });
  const message = `authorization:github:success:${payload}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>CMS Authentication</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #f9fafb;
      color: #374151;
    }
    .spinner {
      width: 32px;
      height: 32px;
      border: 3px solid #e5e7eb;
      border-top-color: #BF1A1F;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-bottom: 16px;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="spinner"></div>
  <p>Connecting to CMS repository&hellip;</p>
  <script>
    (function () {
      var message = ${JSON.stringify(message)};

      function sendToken() {
        if (window.opener) {
          try {
            window.opener.postMessage(message, window.location.origin);
          } catch (e) {
            window.opener.postMessage(message, "*");
          }
        }
      }

      // Initial send attempt
      sendToken();

      // Listen for Sveltia CMS handshake:
      // Sveltia CMS can respond to 'authorizing:github' with 'github'
      window.addEventListener("message", function (event) {
        if (event.data === "github" || event.data === "authorizing:github") {
          sendToken();
        }
      }, false);

      // Trigger Sveltia's readiness check if it is waiting
      if (window.opener) {
        try {
          window.opener.postMessage("authorizing:github", "*");
        } catch (e) {}
      }

      // Fallback window closure if opener didn't close it automatically
      setTimeout(function () {
        try {
          window.close();
        } catch (e) {}
      }, 3500);
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function errorResponse(message: string): Response {
  const errorMessage = `authorization:github:error:${JSON.stringify({ error: message })}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>CMS Authentication Failed</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #fef2f2;
      color: #991b1b;
      padding: 24px;
      text-align: center;
    }
  </style>
</head>
<body>
  <p>${escapeHtml(message)}</p>
  <script>
    (function () {
      if (window.opener) {
        try {
          window.opener.postMessage(${JSON.stringify(errorMessage)}, "*");
        } catch (e) {}
      }
      setTimeout(function () {
        try { window.close(); } catch (e) {}
      }, 3000);
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    status: 401,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
