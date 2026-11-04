/**
 * /cms-login — Microsoft Entra SSO sign-in page for CMS users.
 *
 * Implements React Suspense for asynchronous searchParams access in compliance
 * with Next.js Cache Components (nextConfig.cacheComponents).
 *
 * Provides a single-click unified authentication flow:
 * 1. Employee clicks "Sign in with Microsoft".
 * 2. Synchronously opens an authentication popup ('auth') to prevent popup blocking.
 * 3. Completes Microsoft Entra SSO in the popup and establishes the Auth.js session.
 * 4. Popup notifies the main window, which navigates to /admin/index.html#/collections/site_settings.
 * 5. Sveltia CMS uses the already-open 'auth' popup to perform the GitHub OAuth handshake automatically.
 * 6. Sveltia lands directly in the Site Settings collection without a second sign-in screen.
 * 7. Standard form submission fallback is preserved if the popup is blocked by browser policy.
 */
import { auth, signIn } from "@/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "CMS Login — FCC",
  description: "Sign in with your company Microsoft account to access the CMS.",
  robots: "noindex",
};

interface CmsLoginPageProps {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}

async function LoginContent({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const { callbackUrl, error } = await searchParams;

  // If already authenticated, redirect directly into the CMS
  const session = await auth();
  if (session?.user) {
    redirect(callbackUrl ?? "/admin/index.html#/collections/site_settings");
  }

  const fallbackRedirectTo =
    callbackUrl ?? "/admin/index.html#/collections/site_settings";

  return (
    <>
      {error && (
        <div
          id="error-banner"
          style={{
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: "8px",
            padding: "12px 16px",
            marginBottom: "24px",
            color: "#991b1b",
            fontSize: "0.875rem",
            textAlign: "left",
          }}
        >
          {error === "AccessDenied"
            ? "Access denied. Only authorized company Microsoft accounts are permitted."
            : error === "OAuthAccountNotLinked"
              ? "This account is not linked. Please sign in with your corporate account."
              : "Sign-in failed. Please verify your credentials and try again."}
        </div>
      )}

      <div
        id="client-error-banner"
        style={{
          display: "none",
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "8px",
          padding: "12px 16px",
          marginBottom: "24px",
          color: "#991b1b",
          fontSize: "0.875rem",
          textAlign: "left",
        }}
      />

      <form
        id="ms-signin-form"
        action={async () => {
          "use server";
          await signIn("microsoft-entra-id", {
            redirectTo: fallbackRedirectTo,
          });
        }}
      >
        <button
          id="ms-signin-btn"
          type="submit"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            width: "100%",
            padding: "12px 20px",
            border: "1.5px solid #d1d5db",
            borderRadius: "8px",
            background: "#ffffff",
            cursor: "pointer",
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "#111827",
            transition: "background-color 0.15s, border-color 0.15s",
          }}
        >
          <svg
            id="ms-logo-icon"
            style={{ width: "20px", height: "20px", flexShrink: 0 }}
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="1" width="9" height="9" fill="#f25022" />
            <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
            <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
            <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
          </svg>
          <span id="ms-signin-btn-text">Sign in with Microsoft</span>
        </button>
      </form>
    </>
  );
}

function LoginFormFallback() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        width: "100%",
        padding: "12px 20px",
        border: "1.5px solid #d1d5db",
        borderRadius: "8px",
        background: "#ffffff",
        opacity: 0.8,
        fontSize: "0.9375rem",
        fontWeight: 600,
        color: "#111827",
      }}
    >
      <svg
        style={{ width: "20px", height: "20px", flexShrink: 0 }}
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="9" height="9" fill="#f25022" />
        <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
        <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
        <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
      </svg>
      <span>Sign in with Microsoft</span>
    </div>
  );
}

export default function CmsLoginPage({ searchParams }: CmsLoginPageProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "24px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "48px 40px",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: "1.75rem",
            color: "#BF1A1F",
            marginBottom: "6px",
            letterSpacing: "-0.5px",
          }}
        >
          FCC
        </div>
        <div
          style={{
            color: "#6b7280",
            fontSize: "0.875rem",
            marginBottom: "32px",
            fontWeight: 500,
          }}
        >
          Fintech Convergence Council CMS
        </div>

        <Suspense fallback={<LoginFormFallback />}>
          <LoginContent searchParams={searchParams} />
        </Suspense>

        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            margin: "32px 0 20px",
          }}
        />
        <p style={{ fontSize: "0.75rem", color: "#9ca3af", lineHeight: "1.4" }}>
          Single-tenant corporate authentication.
          <br />
          Personal Microsoft accounts are not supported.
        </p>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              // Use event delegation on document so click handling works
              // regardless of whether the button has already hydrated
              document.addEventListener('click', function (e) {
                var target = e.target;
                while (target && target !== document) {
                  if (target.id === 'ms-signin-btn') {
                    handleButtonClick(e, target);
                    return;
                  }
                  target = target.parentElement;
                }
              });

              function handleButtonClick(e, btn) {
                var form = document.getElementById('ms-signin-form');
                var btnText = document.getElementById('ms-signin-btn-text');
                var clientError = document.getElementById('client-error-banner');

                if (!form) return;

                // Intercept click to open the authentication popup synchronously within user gesture
                e.preventDefault();

                var width = 600;
                var height = 800;
                var left = Math.max(0, (window.screen.width - width) / 2);
                var top = Math.max(0, (window.screen.height - height) / 2);

                // Open named popup synchronously
                var popup = window.open(
                  '/cms-login/popup-start',
                  'auth',
                  'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',status=no,menubar=no,toolbar=no'
                );

                // Fallback to regular full-page redirect if popup is blocked
                if (!popup || popup.closed || typeof popup.closed === 'undefined') {
                  console.warn('[cms-login] Popup blocked by browser; falling back to full-page redirect');
                  form.submit();
                  return;
                }

                // Update button state
                btn.disabled = true;
                btn.style.opacity = '0.7';
                btn.style.cursor = 'not-allowed';
                if (btnText) btnText.textContent = 'Signing in with Microsoft...';
                if (clientError) clientError.style.display = 'none';

                var closedCheckTimer = null;

                function cleanup() {
                  if (closedCheckTimer) clearInterval(closedCheckTimer);
                  window.removeEventListener('message', handleAuthMessage);
                  btn.disabled = false;
                  btn.style.opacity = '1';
                  btn.style.cursor = 'pointer';
                  if (btnText) btnText.textContent = 'Sign in with Microsoft';
                }

                function handleAuthMessage(event) {
                  if (event.origin !== window.location.origin) return;

                  if (event.data && event.data.type === 'MS_AUTH_SUCCESS') {
                    console.log('[CMS_AUTH_DIAGNOSTIC] MS_AUTH_SUCCESS_RECEIVED');
                    cleanup();

                    // Set auto-auth flag so Sveltia CMS coordinates with the open popup
                    try {
                      sessionStorage.setItem('fcc_auto_auth', '1');
                    } catch (err) {}

                    // Redirect directly to the Site Settings collection
                    window.location.href = '/admin/index.html#/collections/site_settings';
                  } else if (event.data && event.data.type === 'MS_AUTH_ERROR') {
                    cleanup();
                    if (clientError) {
                      clientError.textContent = event.data.error || 'Authentication failed. Please try again.';
                      clientError.style.display = 'block';
                    }
                  }
                }

                window.addEventListener('message', handleAuthMessage);

                // Check if user manually closes the popup
                closedCheckTimer = setInterval(function () {
                  if (popup.closed) {
                    cleanup();
                  }
                }, 1000);
              }
            })();
          `,
        }}
      />
    </div>
  );
}
