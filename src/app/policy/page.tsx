import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PolicyPage } from "@/components/pages/PolicyPage";
import { loadPolicy } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Policy — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadPolicy();

  return (
    <PageShell active="/policy">
      <PolicyPage content={content} />
    </PageShell>
  );
}
