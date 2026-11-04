import { auth } from "@/auth";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Authenticating — FCC CMS",
  robots: "noindex",
};

async function PopupCallbackContent() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: "#374151",
        padding: "24px",
        textAlign: "center",
      }}
    >
      {isAuthenticated ? (
        <>
          <div
            style={{
              width: "36px",
              height: "36px",
              border: "3px solid #e5e7eb",
              borderTopColor: "#BF1A1F",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              marginBottom: "16px",
            }}
          />
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
              marginBottom: "6px",
              color: "#111827",
            }}
          >
            Microsoft Sign-in Complete
          </h2>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Connecting to CMS repository&hellip;
          </p>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  // Ensure window name remains 'auth' for Sveltia's OAuth handshake
                  window.name = 'auth';

                  function notifyOpener() {
                    if (window.opener && !window.opener.closed) {
                      try {
                        window.opener.postMessage(
                          { type: 'MS_AUTH_SUCCESS' },
                          window.location.origin
                        );
                      } catch (e) {
                        console.error('[popup] Failed to postMessage to opener:', e);
                      }
                    }
                  }

                  // Send notification immediately and poll briefly to ensure delivery
                  notifyOpener();
                  var notifyTimer = setInterval(function () {
                    notifyOpener();
                  }, 250);

                  // Also respond to ping requests from opener
                  window.addEventListener('message', function (event) {
                    if (event.origin !== window.location.origin) return;
                    if (event.data && event.data.type === 'PING_AUTH_STATUS') {
                      notifyOpener();
                    }
                  }, false);

                  // Extended safety timeout (60s) to allow CDN script and config.yml loading
                  setTimeout(function () {
                    if (notifyTimer) clearInterval(notifyTimer);
                    try { window.close(); } catch (e) {}
                  }, 60000);
                })();
              `,
            }}
          />
        </>
      ) : (
        <>
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
              marginBottom: "8px",
              color: "#991b1b",
            }}
          >
            Authentication Failed
          </h2>
          <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "16px" }}>
            Unable to verify your Microsoft account. Please close this window and try again.
          </p>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (window.opener && !window.opener.closed) {
                  try {
                    window.opener.postMessage(
                      { type: 'MS_AUTH_ERROR', error: 'Authentication failed' },
                      window.location.origin
                    );
                  } catch (e) {}
                }
                setTimeout(function () {
                  try { window.close(); } catch (e) {}
                }, 4000);
              `,
            }}
          />
        </>
      )}
    </div>
  );
}

function PopupLoadingShell() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: "#374151",
        padding: "24px",
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
          marginBottom: "16px",
        }}
      />
      <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
        Verifying authentication&hellip;
      </p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function PopupCallbackPage() {
  return (
    <Suspense fallback={<PopupLoadingShell />}>
      <PopupCallbackContent />
    </Suspense>
  );
}
