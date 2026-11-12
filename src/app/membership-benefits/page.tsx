import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { MembershipBenefitsPage } from "@/components/pages/MembershipBenefitsPage";
import { loadMembershipBenefits } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Membership Benefits — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadMembershipBenefits();

  return (
    <PageShell active="/membership-benefits">
      <MembershipBenefitsPage content={content} />
    </PageShell>
  );
}
