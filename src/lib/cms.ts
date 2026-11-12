import about from "../../public/data/about.json";
import annualReports from "../../public/data/annual-reports.json";
import committees from "../../public/data/committees.json";
import contact from "../../public/data/contact.json";
import homepage from "../../public/data/homepage.json";
import liveEvents from "../../public/data/live-events.json";
import members from "../../public/data/members.json";
import partners from "../../public/data/partners.json";
import publications from "../../public/data/publications.json";
import siteSettings from "../../public/data/site-settings.json";
import virtualEvents from "../../public/data/virtual-events.json";

import digitalLendingCommittee from "../../public/data/committees/digital-lending.json";
import regtechCommittee from "../../public/data/committees/regtech.json";
import wealthtechCommittee from "../../public/data/committees/wealthtech.json";
import insurtechCommittee from "../../public/data/committees/insurtech.json";
import creditBureauCommittee from "../../public/data/committees/credit-bureau.json";

import type {
  AboutContent,
  AnnualReportsContent,
  CommitteeDetailPageContent,
  CommitteesContent,
  ContactContent,
  HomepageContent,
  LiveEventsContent,
  MembersContent,
  NavChild,
  PartnersContent,
  PublicationsContent,
  SiteSettings,
  VirtualEventsContent,
} from "@/lib/cms-types";

export async function loadSiteSettings(): Promise<SiteSettings> {
  const memberCount = Array.isArray(members?.items) ? members.items.length : 201;
  const navigation = siteSettings.navigation.map((item) => {
    if (!item.children) return item;
    return {
      ...item,
      children: (item.children as NavChild[]).map((child) => {
        if (child.href === "/members") {
          return {
            ...child,
            small: child.small
              ? child.small.replace(/\b\d+(\+)?\s*companies/i, `${memberCount} companies`)
              : `${memberCount} companies`,
          };
        }
        return child;
      }),
    };
  });

  return {
    ...siteSettings,
    navigation,
  } as SiteSettings;
}

export async function loadHomepage(): Promise<HomepageContent> {
  const memberCount = Array.isArray(members?.items) ? members.items.length : 201;

  // 1. Dynamic Hero Description: e.g. "201 fintech companies" (exact number, no +)
  const rawHeroDesc = homepage.hero?.description || "";
  const dynamicHeroDesc = rawHeroDesc
    ? rawHeroDesc.replace(/\b\d+(\+)?\s*fintech companies/i, `${memberCount} fintech companies`)
    : rawHeroDesc;

  // 2. Dynamic Hero Trust: "201" for "member companies" (exact number, no +)
  const heroTrust = (homepage.hero?.trust || []).map((item) => {
    if (/member\s*companies/i.test(item.label) || /companies/i.test(item.label)) {
      return {
        ...item,
        value: String(memberCount),
      };
    }
    return item;
  });

  // 3. Dynamic Stats Bar: "201" for "Member companies", suffix "" (no +)
  const stats = (homepage.stats || []).map((stat) => {
    if (/member\s*companies/i.test(stat.label) || /companies/i.test(stat.label)) {
      return {
        ...stat,
        value: String(memberCount),
        suffix: "",
      };
    }
    return stat;
  });

  return {
    ...homepage,
    hero: {
      ...homepage.hero,
      description: dynamicHeroDesc,
      trust: heroTrust,
    },
    stats,
  } as HomepageContent;
}

export async function loadAbout(): Promise<AboutContent> {
  const memberCount = Array.isArray(members?.items) ? members.items.length : 201;

  const rawParagraphs = about.overview?.paragraphs || [];
  const dynamicParagraphs = rawParagraphs.map((p) =>
    p.replace(/\b(more than\s+)?\d+(\+)?\s*companies\b/i, `more than ${memberCount} companies`)
  );

  const dynamicMilestones = (about.journey?.milestones || []).map((m) => {
    if (m.title && /\b\d+(\+)?\s*members\b/i.test(m.title)) {
      return {
        ...m,
        title: m.title.replace(/\b\d+(\+)?\s*members\b/i, `${memberCount} members`),
      };
    }
    return m;
  });

  return {
    ...about,
    overview: {
      ...about.overview,
      paragraphs: dynamicParagraphs,
    },
    journey: {
      ...about.journey,
      milestones: dynamicMilestones,
    },
  } as AboutContent;
}

export async function loadCommittees(): Promise<CommitteesContent> {
  return committees as CommitteesContent;
}

const committeePagesMap: Record<string, CommitteeDetailPageContent> = {
  "digital-lending": digitalLendingCommittee as CommitteeDetailPageContent,
  regtech: regtechCommittee as CommitteeDetailPageContent,
  wealthtech: wealthtechCommittee as CommitteeDetailPageContent,
  insurtech: insurtechCommittee as CommitteeDetailPageContent,
  "credit-bureau": creditBureauCommittee as CommitteeDetailPageContent,
};

export async function loadCommitteePage(slug: string): Promise<CommitteeDetailPageContent | null> {
  if (committeePagesMap[slug]) {
    return committeePagesMap[slug];
  }
  try {
    const fs = await import("fs/promises");
    const path = await import("path");
    const filePath = path.join(process.cwd(), "public", "data", "committees", `${slug}.json`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent) as CommitteeDetailPageContent;
  } catch {
    return null;
  }
}

export async function loadMembers(): Promise<MembersContent> {
  const memberCount = Array.isArray(members?.items) ? members.items.length : 201;
  const rawDesc = members.page?.description || "";
  const dynamicDescription = rawDesc
    ? rawDesc.replace(/\b\d+(\+)?\s*companies/i, `${memberCount} companies`)
    : `${memberCount} companies across lending, payments, insurance, investments, credit information and RegTech make up the council`;

  return {
    ...members,
    page: {
      ...members.page,
      description: dynamicDescription,
    },
  } as MembersContent;
}

export async function loadPartners(): Promise<PartnersContent> {
  return partners as PartnersContent;
}

export async function loadLiveEvents(): Promise<LiveEventsContent> {
  return liveEvents as LiveEventsContent;
}

export async function loadVirtualEvents(): Promise<VirtualEventsContent> {
  return virtualEvents as VirtualEventsContent;
}

export async function loadPublications(): Promise<PublicationsContent> {
  return publications as PublicationsContent;
}

export async function loadAnnualReports(): Promise<AnnualReportsContent> {
  return annualReports as AnnualReportsContent;
}

export async function loadContact(): Promise<ContactContent> {
  return contact as ContactContent;
}
