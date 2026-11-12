import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { CommitteeDetailPage } from "@/components/pages/CommitteeDetailPage";
import { loadCommitteePage, loadCommittees } from "@/lib/cms";
import type { CommitteeDetailPageContent } from "@/lib/cms-types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const committees = await loadCommittees();
  const committee = committees.items.find((c) => c.slug === slug);

  return {
    title: `${committee?.name || "Committee"} — Fintech Convergence Council`,
    description: committee?.description || "Fintech Convergence Council Committee",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageContent = await loadCommitteePage(slug);
  const committees = await loadCommittees();
  const committeeMeta = committees.items.find((c) => c.slug === slug);

  if (!pageContent && !committeeMeta) {
    notFound();
  }

  // If specific page json doesn't exist yet, synthesize one from committees.json
  const content: CommitteeDetailPageContent = pageContent || {
    hero: {
      title: committeeMeta?.name || "Committee",
      description: committeeMeta?.description || "",
      join_email: "mailto:swati.s@fintechcouncil.in",
      join_label: "Join this committee",
    },
    focus_areas: {
      heading: "What this committee works on",
      open_to: committeeMeta?.who_can_join || "Open to all relevant ecosystem stakeholders.",
      items: committeeMeta?.tags || ["Industry Advocacy", "Policy Inputs", "Representations"],
    },
    leadership: {
      heading: "Who leads it",
      leaders: committeeMeta?.chair_name
        ? [
            {
              name: committeeMeta.chair_name,
              tag: "Chair",
              org: committeeMeta.chair_role || "Committee Leadership",
            },
            ...(committeeMeta.co_chair_name
              ? [
                  {
                    name: committeeMeta.co_chair_name,
                    tag: "Co-Chair",
                    org: committeeMeta.co_chair_role || "Committee Leadership",
                  },
                ]
              : []),
          ]
        : [
            {
              name: "Leadership to be announced",
              tag: "Nominations Open",
              org: "Write to swati.s@fintechcouncil.in to get involved",
            },
          ],
    },
    policy_work: {
      heading: "Representations & sessions",
      lead: `Recent submissions and knowledge sessions linked to ${committeeMeta?.name || "this committee"}.`,
      items: [
        {
          regulator: "FCC",
          status: "Active",
          title: "Industry representation and policy formulation in progress",
        },
      ],
    },
    webinars: {
      heading: "Related webinars",
      items: [],
    },
    bottom_cta: {
      heading: `Bring your company's voice to the ${committeeMeta?.name || "Committee"}.`,
      description:
        "Members take part in working groups and regulatory representations based on their area of business.",
      primary_cta_label: "Apply for membership",
      primary_cta_href: "/apply-membership",
      secondary_cta_label: "Partner with us",
      secondary_cta_href: "/apply-partnership",
      benefits: [
        "Direct input into representations to regulators",
        "A seat on sector committees with industry peers",
        "Complimentary passes to FCC and IAMAI conferences",
        "Members-only roundtables and every FCC report",
      ],
    },
  };

  const heroArt = (
    <svg viewBox="0 0 300 240" aria-hidden="true">
      <circle
        cx="150"
        cy="120"
        r="110"
        stroke="rgba(255,255,255,.15)"
        fill="none"
        strokeDasharray="3 7"
      ></circle>
      <circle
        cx="150"
        cy="120"
        r="70"
        stroke="rgba(255,255,255,.25)"
        strokeWidth="2"
        fill="none"
      ></circle>
      <rect
        x="75"
        y="75"
        width="150"
        height="90"
        rx="14"
        fill="rgba(255,255,255,.15)"
        stroke="#fff"
        strokeWidth="2"
      ></rect>
      <text
        x="150"
        y="126"
        fill="#fff"
        fontFamily="JetBrains Mono, monospace"
        fontSize="18"
        fontWeight="700"
        letterSpacing="2"
        textAnchor="middle"
      >
        FCC
      </text>
      <text
        x="150"
        y="146"
        fill="rgba(255,255,255,.75)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        letterSpacing="1"
        textAnchor="middle"
      >
        COMMITTEE
      </text>
    </svg>
  );

  return (
    <PageShell active={`/committees/${slug}`}>
      <CommitteeDetailPage slug={slug} content={content} heroArt={heroArt} />
    </PageShell>
  );
}

