/**
 * origin.ts — Safe application origin resolution.
 *
 * Validates request hosts against a strict allowlist to prevent host header poisoning,
 * and falls back safely to known production/development defaults.
 */

const PRODUCTION_DOMAIN = "main.d2fqkki8q9kcbn.amplifyapp.com";
const PRODUCTION_ORIGIN = `https://${PRODUCTION_DOMAIN}`;
const DEVELOPMENT_ORIGIN = "http://localhost:3000";

// Allowed host patterns:
// 1. Production Amplify domain (with letter 'i')
// 2. Any subdomain/branch on d2fqkki8q9kcbn.amplifyapp.com or general amplifyapp.com
// 3. Official FCC custom domains
// 4. Localhost and loopback addresses for local testing
const ALLOWED_HOST_REGEX =
  /^(main\.d2fqkki8q9kcbn\.amplifyapp\.com|[a-z0-9-]+\.amplifyapp\.com|(www\.)?fintechcouncil\.in|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/i;

/**
 * Returns the canonical application origin.
 *
 * Priority:
 * 1. AUTH_URL or NEXTAUTH_URL environment variable (if explicitly set and valid)
 * 2. Incoming request's Host / x-forwarded-host (if matching the strict allowlist)
 * 3. Default fallback: production domain in production, localhost:3000 in development
 */
export function getAppOrigin(request?: Request): string {
  // 1. Explicit environment variable
  const envUrl = process.env.AUTH_URL || process.env.NEXTAUTH_URL;
  if (envUrl) {
    try {
      const parsed = new URL(envUrl);
      if (parsed.protocol === "http:" || parsed.protocol === "https:") {
        return parsed.origin;
      }
    } catch {
      // Ignore invalid URL in env
    }
  }

  // 2. Inspect incoming request headers if provided
  if (request) {
    try {
      const forwardedHost = request.headers.get("x-forwarded-host");
      const host = forwardedHost || request.headers.get("host");

      if (host) {
        // Strip any port or whitespace if present for regex test, but keep original host for URL
        const cleanHost = host.trim().split(",")[0].trim();

        if (ALLOWED_HOST_REGEX.test(cleanHost)) {
          const forwardedProto = request.headers.get("x-forwarded-proto");
          const proto =
            forwardedProto ||
            (cleanHost.startsWith("localhost") || cleanHost.startsWith("127.0.0.1")
              ? "http"
              : "https");
          return `${proto}://${cleanHost}`;
        } else {
          console.warn(`[origin] Untrusted host header rejected: "${cleanHost}"`);
        }
      }
    } catch (err) {
      console.warn("[origin] Failed to parse request host:", err);
    }
  }

  // 3. Safe fallback
  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_ORIGIN;
  }
  return DEVELOPMENT_ORIGIN;
}

