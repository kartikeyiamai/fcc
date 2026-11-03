import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { HomePage } from "@/components/pages/HomePage";
import { loadCommittees, loadHomepage, loadSiteSettings } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await loadSiteSettings();
  return {
    title: settings.site_title,
    description: settings.site_description,
  };
}

export default async function Page() {
  const [content, committeesData] = await Promise.all([loadHomepage(), loadCommittees()]);

  return (
    <PageShell active="/">
      <HomePage content={content} committees={committeesData.items} />
    </PageShell>
  );
}
