import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { WealthTechPage } from "@/components/pages/WealthTechPage";
import { loadCommitteePage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "WealthTech Committee — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadCommitteePage("wealthtech");

  return (
    <PageShell active="/committees/wealthtech">
      <WealthTechPage content={content} />
    </PageShell>
  );
}
