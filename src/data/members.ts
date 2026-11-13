import membersData from "../../public/data/members.json";
import type { MemberItem } from "@/lib/cms-types";

export interface MemberDirectoryItem {
  name: string;
  link?: string;
  website?: string;
  logo?: string;
  logo_filename?: string;
}

/** CMS-managed members for the member directory UI. */
export const FCC_MEMBERS: MemberDirectoryItem[] = (
  membersData.items as MemberItem[]
).map((m) => ({
  name: m.name,
  link: m.link || m.website || "",
  logo: m.logo || "",
  logo_filename: m.logo_filename || "",
}));
