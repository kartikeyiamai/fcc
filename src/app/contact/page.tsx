import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactPage } from "@/components/pages/ContactPage";
import { loadContact } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Contact — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadContact();

  return (
    <PageShell active="/contact">
      <ContactPage content={content} />
    </PageShell>
  );
}
