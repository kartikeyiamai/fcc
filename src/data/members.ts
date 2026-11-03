import membersData from "../../public/data/members.json";

/** CMS-managed members as [name, logo_filename] tuples for the member directory UI. */
export const FCC_MEMBERS: [string, string][] = membersData.items.map((m) => [
  m.name,
  m.logo_filename || "",
]);
