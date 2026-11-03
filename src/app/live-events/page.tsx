import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LiveEventsPage } from "@/components/pages/LiveEventsPage";
import { loadLiveEvents } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Live Events — Fintech Convergence Council",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await loadLiveEvents();

  return (
    <PageShell active="/live-events">
      <LiveEventsPage content={content} />
    </PageShell>
  );
}
