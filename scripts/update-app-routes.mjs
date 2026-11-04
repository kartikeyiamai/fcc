import fs from "node:fs";
import path from "node:path";

const routes = [
  {
    file: "src/app/about/page.tsx",
    loader: "loadAbout",
    component: "AboutPage",
    active: "/about",
    title: "About Us — Fintech Convergence Council",
  },
  {
    file: "src/app/members/page.tsx",
    loader: "loadMembers",
    component: "MembersPage",
    active: "/members",
    title: "Our Members — Fintech Convergence Council",
  },
  {
    file: "src/app/committees/page.tsx",
    loader: "loadCommittees",
    component: "CommitteesPage",
    active: "/committees",
    title: "Committees — Fintech Convergence Council",
  },
  {
    file: "src/app/partners/page.tsx",
    loader: "loadPartners",
    component: "PartnersPage",
    active: "/partners",
    title: "Our Partners — Fintech Convergence Council",
  },
  {
    file: "src/app/live-events/page.tsx",
    loader: "loadLiveEvents",
    component: "LiveEventsPage",
    active: "/live-events",
    title: "Live Events — Fintech Convergence Council",
  },
  {
    file: "src/app/virtual-events/page.tsx",
    loader: "loadVirtualEvents",
    component: "VirtualEventsPage",
    active: "/virtual-events",
    title: "Virtual Events — Fintech Convergence Council",
  },
  {
    file: "src/app/research/page.tsx",
    loader: "loadPublications",
    component: "ResearchPage",
    active: "/research",
    title: "Research — Fintech Convergence Council",
  },
  {
    file: "src/app/annual-report/page.tsx",
    loader: "loadAnnualReports",
    component: "AnnualReportPage",
    active: "/annual-report",
    title: "Annual Reports — Fintech Convergence Council",
  },
  {
    file: "src/app/contact/page.tsx",
    loader: "loadContact",
    component: "ContactPage",
    active: "/contact",
    title: "Contact — Fintech Convergence Council",
  },
];

for (const route of routes) {
  const content = `import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ${route.component} } from "@/components/pages/${route.component}";
import { ${route.loader} } from "@/lib/cms";

export const metadata: Metadata = {
  title: "${route.title}",
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
};

export default async function Page() {
  const content = await ${route.loader}();

  return (
    <PageShell active="${route.active}">
      <${route.component} content={content} />
    </PageShell>
  );
}
`;
  fs.writeFileSync(path.resolve(route.file), content);
  console.log("updated", route.file);
}
