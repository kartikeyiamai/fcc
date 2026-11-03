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
  PartnersContent,
  PublicationsContent,
  SiteSettings,
  VirtualEventsContent,
} from "@/lib/cms-types";

export async function loadSiteSettings(): Promise<SiteSettings> {
  return siteSettings as SiteSettings;
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
  return members as MembersContent;
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
