import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ApplyPartnershipPage } from "@/components/pages/ApplyPartnershipPage";
import { loadApplyPartnership } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Apply for Partnership — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadApplyPartnership();

  return (
    <PageShell active="/apply-partnership">
      <ApplyPartnershipPage content={content} />
    </PageShell>
  );
}
