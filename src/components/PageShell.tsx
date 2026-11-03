import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteInteractions } from "@/components/SiteInteractions";
import { loadSiteSettings } from "@/lib/cms";

export async function PageShell({
  active,
  children,
}: {
  active: string;
  children: ReactNode;
}) {
  const settings = await loadSiteSettings();

  return (
    <>
      <SiteHeader active={active} settings={settings} />
      <main>{children}</main>
      <SiteFooter settings={settings} />
      <SiteInteractions />
    </>
  );
}
