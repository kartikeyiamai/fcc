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
import type {
  AboutContent,
  AnnualReportsContent,
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
  const memberCount = Array.isArray(members?.items) ? members.items.length : 200;
  const navigation = siteSettings.navigation.map((item) => {
    if (!item.children) return item;
    return {
      ...item,
      children: (item.children as NavChild[]).map((child) => {
        if (child.href === "/members") {
          return {
            ...child,
            small: child.small
              ? child.small.replace(/\b\d+(\+)?\s*companies/i, `${memberCount}+ companies`)
              : `${memberCount}+ companies`,
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
  return homepage as HomepageContent;
}

export async function loadAbout(): Promise<AboutContent> {
  return about as AboutContent;
}

export async function loadCommittees(): Promise<CommitteesContent> {
  return committees as CommitteesContent;
}

export async function loadMembers(): Promise<MembersContent> {
  const memberCount = Array.isArray(members?.items) ? members.items.length : 200;
  const rawDesc = members.page?.description || "";
  const dynamicDescription = rawDesc
    ? rawDesc.replace(/\b\d+(\+)?\s*companies/i, `${memberCount}+ companies`)
    : `${memberCount}+ companies across lending, payments, insurance, investments, credit information and RegTech make up the council`;

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
