import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PartnershipBenefitsPage } from "@/components/pages/PartnershipBenefitsPage";
import { loadPartnershipBenefits } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Partnership Benefits — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadPartnershipBenefits();

  return (
    <PageShell active="/partnership-benefits">
      <PartnershipBenefitsPage content={content} />
    </PageShell>
  );
}
