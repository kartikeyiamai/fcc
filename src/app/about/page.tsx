import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AboutPage } from "@/components/pages/AboutPage";
import { loadAbout } from "@/lib/cms";

export const metadata: Metadata = {
  title: "About Us — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadAbout();

  return (
    <PageShell active="/about">
      <AboutPage content={content} />
    </PageShell>
  );
}
