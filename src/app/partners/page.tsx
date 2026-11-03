import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PartnersPage } from "@/components/pages/PartnersPage";
import { loadPartners } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Our Partners — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadPartners();

  return (
    <PageShell active="/partners">
      <PartnersPage content={content} />
    </PageShell>
  );
}
