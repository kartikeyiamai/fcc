import { auth } from "@/auth";
import { NextResponse } from "next/server";

/**
 * GET /api/cms-s3-credentials
 *
 * Securely delivers the AWS S3 Secret Access Key to authenticated CMS users.
 *
 * Security Model:
 * 1. Requires an active Auth.js Microsoft Entra ID session (server-side verification).
 * 2. Reads CMS_S3_SECRET_ACCESS_KEY from server-side environment variables.
 * 3. Never exposed via NEXT_PUBLIC_* variables or logged.
 * 4. Delivered over HTTPS with Cache-Control: no-store.
 */
export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const secretAccessKey = process.env.CMS_S3_SECRET_ACCESS_KEY;
  if (!secretAccessKey) {
    console.error("[cms-s3] CMS_S3_SECRET_ACCESS_KEY is not configured on the server");
    return NextResponse.json(
      { error: "S3 credentials are not configured on the server." },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { secretAccessKey },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
