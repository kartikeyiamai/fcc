import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { VirtualEventsPage } from "@/components/pages/VirtualEventsPage";
import { loadVirtualEvents } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Virtual Events — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadVirtualEvents();

  return (
    <PageShell active="/virtual-events">
      <VirtualEventsPage content={content} />
    </PageShell>
  );
}
