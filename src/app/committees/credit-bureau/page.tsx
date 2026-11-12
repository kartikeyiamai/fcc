import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CreditBureauPage } from "@/components/pages/CreditBureauPage";
import { loadCommitteePage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Credit Bureau Committee — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadCommitteePage("credit-bureau");

  return (
    <PageShell active="/committees/credit-bureau">
      <CreditBureauPage content={content} />
    </PageShell>
  );
}
