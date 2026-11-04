/**
 * Main Auth.js configuration — runs in Node.js runtime only.
 * Configures Microsoft Entra ID provider with single-tenant enforcement.
 */
import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import { authConfig } from "./auth.config";

// Safe diagnostic to inspect environment variable readiness without printing secrets
function runAuthDiagnostic() {
  const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  const vars = [
    { key: "AUTH_SECRET", val: process.env.AUTH_SECRET },
    { key: "AUTH_MICROSOFT_ENTRA_ID_ID", val: process.env.AUTH_MICROSOFT_ENTRA_ID_ID },
    { key: "AUTH_MICROSOFT_ENTRA_ID_SECRET", val: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET },
    { key: "AUTH_MICROSOFT_ENTRA_ID_ISSUER", val: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER },
    { key: "CMS_GITHUB_TOKEN", val: process.env.CMS_GITHUB_TOKEN },
  ];

  console.log("[auth-diagnostic] Checking authentication environment variables:");
  for (const { key, val } of vars) {
    if (!val) {
      console.error(`[auth-diagnostic] ❌ ${key}: MISSING or EMPTY`);
    } else {
      const isGuid = guidRegex.test(val);
      const isHttps = val.startsWith("https://");
      console.log(
        `[auth-diagnostic] ✅ ${key}: SET (length=${val.length}, isGuid=${isGuid}, isHttps=${isHttps})`
      );

      // Critical check for Microsoft Entra Secret Value vs Secret ID
      if (key === "AUTH_MICROSOFT_ENTRA_ID_SECRET" && isGuid) {
        console.error(
          `[auth-diagnostic] ⚠️ MISCONFIGURATION DETECTED for AUTH_MICROSOFT_ENTRA_ID_SECRET:\n` +
          `  The value is a 36-character GUID (Secret ID).\n` +
          `  Microsoft Entra ID requires the Client Secret "Value" (usually ~40 characters, e.g. abc~xyz...),\n` +
          `  NOT the "Secret ID".\n` +
          `  Please copy the "Value" column from Microsoft Entra Admin Center -> Certificates & Secrets.`
        );
      }
    }
  }
}

// Run diagnostic on server startup
runAuthDiagnostic();

// Normalize issuer URL by removing any trailing slashes
const normalizedIssuer = process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER?.replace(/\/+$/, "");

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  debug: process.env.NODE_ENV === "development",
  logger: {
    error(error) {
      console.error(`[auth][error] ${error.name}: ${error.message}`);
      if (error.cause && typeof error.cause === "object") {
        const cause = error.cause as Record<string, unknown>;
        // Safely extract Microsoft OAuth error details without logging secrets/tokens/codes
        const safeDetails: Record<string, unknown> = {};
        const safeKeys = [
          "providerId",
          "error",
          "error_description",
          "error_codes",
          "timestamp",
          "trace_id",
          "correlation_id",
          "error_uri",
        ];
        for (const k of safeKeys) {
          if (cause[k] !== undefined) {
            safeDetails[k] = cause[k];
          }
        }
        if (Object.keys(safeDetails).length > 0) {
          console.error("[auth][microsoft-error-details]", JSON.stringify(safeDetails, null, 2));
        }
      }
    },
    warn(code) {
      console.warn(`[auth][warn] ${code}`);
    },
    debug(message, metadata) {
      console.log(`[auth][debug] ${message}`, metadata ? JSON.stringify(metadata) : "");
    },
  },
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID!,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET!,
      issuer: normalizedIssuer,
      client: {
        token_endpoint_auth_method: "client_secret_post",
      },
      authorization: {
        params: {
          // Single-tenant authorization code flow: request openid, profile, email
          scope: "openid profile email",
        },
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    /**
     * Server-side tenant verification.
     * Prevents accounts from another Microsoft tenant from signing in.
     */
    async signIn({ account, profile }) {
      if (account?.provider === "microsoft-entra-id") {
        const expectedIssuer = normalizedIssuer;
        if (expectedIssuer && profile) {
          const profileTid = (profile as Record<string, unknown>).tid as string | undefined;
          const profileIss = (profile as Record<string, unknown>).iss as string | undefined;

          // Check if the tenant ID matches the configured issuer URL
          const isTenantValid =
            (profileTid && expectedIssuer.includes(profileTid)) ||
            (profileIss && expectedIssuer.startsWith(profileIss.replace(/\/v2\.0$/, "")));

          if (!isTenantValid) {
            console.warn(
              `[auth] Access denied: Account tenant does not match configured tenant. Expected: ${expectedIssuer}, tid: ${profileTid}`
            );
            return false;
          }
        }
      }
      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.tenantId = (profile as Record<string, unknown>).tid as string | undefined;
        token.oid = (profile as Record<string, unknown>).oid as string | undefined;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.tenantId) {
        (session as typeof session & { tenantId?: string }).tenantId = token.tenantId as string;
      }
      return session;
    },
  },
});
