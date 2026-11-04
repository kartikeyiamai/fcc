import { signIn } from "@/auth";

export async function GET() {
  await signIn("microsoft-entra-id", {
    redirectTo: "/cms-login/popup-callback",
  });
}

