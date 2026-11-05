/**
 * /cms-signout — Complete Sign-out for FCC CMS users.
 *
 * 1. Purges local Sveltia CMS authentication state (`sveltia-cms.user`) and temporary flags (`fcc_auto_auth`).
 * 2. Clears the Auth.js session and session cookies server-side via `signOut`.
 * 3. Redirects to Microsoft Entra tenant-specific logout endpoint:
 *    `https://login.microsoftonline.com/<TENANT_ID>/oauth2/v2.0/logout?post_logout_redirect_uri=...`
 * 4. Microsoft Entra clears the user session and returns them to `/cms-login`.
 */
import { signOut, getMicrosoftLogoutUrl } from "@/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signing out — FCC CMS",
  robots: "noindex",
};

export default function CmsSignOutPage() {
  async function performSignOut() {
    "use server";
    const logoutUrl = getMicrosoftLogoutUrl();
    await signOut({ redirectTo: logoutUrl });
  }

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
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            border: "3px solid #e5e7eb",
            borderTopColor: "#BF1A1F",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            margin: "0 auto 20px",
          }}
        />
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>

        <h1
          style={{
            fontSize: "1.25rem",
            marginBottom: "8px",
            color: "#111827",
            fontWeight: 700,
          }}
        >
          Signing out of FCC CMS
        </h1>
        <p
          id="signout-status-text"
          style={{
            color: "#6b7280",
            fontSize: "0.875rem",
            marginBottom: "28px",
            lineHeight: 1.5,
          }}
        >
          Terminating your CMS and Microsoft Entra session&hellip;
        </p>

        <form id="signout-form" action={performSignOut}>
          <button
            id="signout-btn"
            type="submit"
            style={{
              padding: "10px 24px",
              border: "none",
              borderRadius: "8px",
              background: "#BF1A1F",
              color: "#ffffff",
              fontSize: "0.9375rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
          >
            Complete Sign Out
          </button>
        </form>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              // 1. Purge Sveltia CMS authentication credentials, S3 secret key, and auto-auth flag
              try {
                localStorage.removeItem('sveltia-cms.user');
                sessionStorage.removeItem('fcc_auto_auth');
                var prefs = JSON.parse(localStorage.getItem('sveltia-cms.prefs') || '{}');
                if (prefs && prefs.apiKeys && prefs.apiKeys.aws_s3) {
                  delete prefs.apiKeys.aws_s3;
                  localStorage.setItem('sveltia-cms.prefs', JSON.stringify(prefs));
                }
              } catch (e) {}

              var form = document.getElementById('signout-form');
              var btn = document.getElementById('signout-btn');

              // 2. Automatically submit the form to clear Auth.js and redirect to Microsoft Entra logout
              if (form) {
                if (btn) {
                  btn.disabled = true;
                  btn.style.opacity = '0.7';
                  btn.textContent = 'Redirecting to Microsoft logout...';
                }

                if (typeof form.requestSubmit === 'function') {
                  form.requestSubmit();
                } else {
                  form.submit();
                }
              }
            })();
          `,
        }}
      />
    </div>
  );
}
