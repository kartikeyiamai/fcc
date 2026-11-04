/**
 * /cms-signout — Sign-out page for Sveltia CMS users.
 * Terminates the NextAuth session and purges local CMS client state.
 */
import { signOut } from "@/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign out — FCC CMS",
  robots: "noindex",
};

export default function CmsSignOutPage() {
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
          maxWidth: "380px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.25rem",
            marginBottom: "8px",
            color: "#111827",
            fontWeight: 700,
          }}
        >
          Sign out of FCC CMS
        </h1>
        <p
          style={{
            color: "#6b7280",
            fontSize: "0.875rem",
            marginBottom: "28px",
          }}
        >
          You will terminate your CMS session and be returned to the sign-in page.
        </p>
        <form
          id="signout-form"
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/cms-login" });
          }}
        >
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
            }}
          >
            Sign out
          </button>
        </form>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var btn = document.getElementById('signout-btn');
              var form = document.getElementById('signout-form');
              if (!btn || !form) return;

              btn.addEventListener('click', function () {
                // Clear any stored Sveltia CMS user or session state
                try {
                  localStorage.removeItem('sveltia-cms.user');
                  sessionStorage.clear();
                } catch (e) {}
              });
            })();
          `,
        }}
      />
    </div>
  );
}
