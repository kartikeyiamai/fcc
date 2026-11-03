import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { MembersPage } from "@/components/pages/MembersPage";
import { loadMembers } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Our Members — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadMembers();

  return (
    <PageShell active="/members">
      <MembersPage content={content} />
    </PageShell>
  );
}
