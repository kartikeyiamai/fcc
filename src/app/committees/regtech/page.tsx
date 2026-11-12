import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { RegTechPage } from "@/components/pages/RegTechPage";
import { loadCommitteePage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "RegTech Committee — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadCommitteePage("regtech");

  return (
    <PageShell active="/committees/regtech">
      <RegTechPage content={content} />
    </PageShell>
  );
}
