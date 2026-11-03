import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ResearchPage } from "@/components/pages/ResearchPage";
import { loadPublications } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Research — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadPublications();

  return (
    <PageShell active="/research">
      <ResearchPage content={content} />
    </PageShell>
  );
}
