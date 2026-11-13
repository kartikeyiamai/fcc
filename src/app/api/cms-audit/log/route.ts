import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await req.json().catch(() => ({}));
    const userEmail = session.user.email || payload.user || "unknown";
    const userName = session.user.name || payload.name || "unknown";
    const headline = payload.headline || "unknown change";
    const files = Array.isArray(payload.files) ? payload.files : [];
    const timestamp = payload.timestamp || new Date().toISOString();

    // Structured audit trail log for AWS CloudWatch and server observability
    console.log(
      `[CMS_AUDIT_LOG] user="${userEmail}" name="${userName}" headline="${headline}" files="${files.join(", ")}" timestamp="${timestamp}"`
    );

    return NextResponse.json({ success: true, timestamp });
  } catch (error) {
    console.error("[CMS_AUDIT_LOG_ERROR]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
