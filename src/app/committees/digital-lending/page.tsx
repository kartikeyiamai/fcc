import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { DigitalLendingPage } from "@/components/pages/DigitalLendingPage";
import { loadCommitteePage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Digital Lending Committee — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadCommitteePage("digital-lending");

  return (
    <PageShell active="/committees/digital-lending">
      <DigitalLendingPage content={content} />
    </PageShell>
  );
}
