import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { InsurTechPage } from "@/components/pages/InsurTechPage";
import { loadCommitteePage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "InsurTech Committee — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadCommitteePage("insurtech");

  return (
    <PageShell active="/committees/insurtech">
      <InsurTechPage content={content} />
    </PageShell>
  );
}
