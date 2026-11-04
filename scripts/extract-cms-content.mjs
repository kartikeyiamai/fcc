/**
 * Extract CMS seed content from existing FCC page components.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function stripTags(s) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function firstMatch(src, re) {
  const m = src.match(re);
  return m ? stripTags(m[1]) : "";
}

const about = read("src/components/pages/AboutPage.tsx");
const membersTs = read("src/data/members.ts");

const membersMatch = membersTs.match(/export const FCC_MEMBERS[^=]*=\s*(\[[\s\S]*\]);?/);
const membersArr = membersMatch ? JSON.parse(membersMatch[1].replace(/'/g, '"')) : [];

const homepage = {
  hero: {
    badge: "The industry voice of Indian fintech",
    heading_before: "Where finance and technology",
    heading_emphasis: "converge",
    heading_after: "to shape policy.",
    description:
      "FCC brings together policymakers, regulators and 175+ fintech companies to build a fair policy environment and widen access to financial services across India.",
    primary_cta_label: "Join the Council",
    primary_cta_href: "/apply-membership",
    secondary_cta_label: "See our policy work",
    secondary_cta_href: "/policy",
    trust: [
      { value: "175+", label: "member companies" },
      { value: "5", label: "sector committees" },
      { value: "7", label: "regulators engaged" },
    ],
  },
  stats: [
    { value: "175", suffix: "+", label: "Member companies", bar: "88%" },
    { value: "5", suffix: "", label: "Sector committees", bar: "50%" },
    { value: "43", suffix: "+", label: "Representations & sessions", bar: "70%" },
    { value: "38", suffix: "", label: "Virtual sessions since 2024", bar: "62%" },
  ],
  about_teaser: {
    eyebrow: "About FCC",
    heading: "The next phase of fintech growth comes from working together.",
    lead:
      "FCC started as IAMAI's fintech committee and launched as the Fintech Convergence Council in 2018. Today it brings banks, NBFCs, insurers, investment platforms and fintechs into one room, and carries their shared view to regulators.",
    primary_cta_label: "About us",
    primary_cta_href: "/about",
    secondary_cta_label: "Annual reports",
    secondary_cta_href: "/annual-report",
  },
  committees_section: {
    eyebrow: "Committees",
    heading: "Five committees, one shared agenda",
    lead: "Each committee leads the council's work in a fast-moving part of financial services.",
    cta_label: "All committees",
    cta_href: "/committees",
  },
  how_we_work: {
    eyebrow: "How we work",
    heading: "From member input to policy outcome",
    steps: [
      {
        title: "Listen",
        description: "Committees surface the issues members face on the ground.",
      },
      {
        title: "Consolidate",
        description: "We build one industry position from many voices.",
      },
      {
        title: "Represent",
        description: "Submissions and consultations with regulators and government.",
      },
      {
        title: "Inform",
        description: "Webinars and reports bring the outcome back to members.",
      },
    ],
  },
  policy_section: {
    eyebrow: "What's happening",
    heading: "Our policy work",
    lead: "Recent representations, industry feedback and knowledge sessions. Filter by regulator.",
    cta_label: "Policy hub",
    cta_href: "/policy",
  },
  events_section: {
    eyebrow: "Events",
    heading: "Where the ecosystem meets",
    lead: "FCC co-hosts the Global Fintech Fest and runs a year-round calendar of virtual knowledge sessions.",
    cta_label: "All events",
    cta_href: "/live-events",
    flagship: {
      label: "Flagship event",
      title: "Global Fintech Fest",
      description:
        "One of the world's largest fintech gatherings, bringing regulators, banks, fintechs and investors together in Mumbai every year.",
      location: "Jio World Centre, Mumbai",
      href: "https://globalfintechfest.com/",
      cta_label: "Visit website →",
    },
  },
  research_section: {
    eyebrow: "Research",
    heading: "Reports that track India's fintech story",
    cta_label: "All research",
    cta_href: "/research",
  },
  members_section: {
    eyebrow: "Our members",
    heading: "Trusted across financial services",
    lead: "Lenders, banks, insurers, investment platforms, bureaus and RegTech firms shape the council's work.",
    cta_label: "Member directory",
    cta_href: "/members",
  },
  cta: {
    eyebrow: "Membership & partnership",
    heading: "Have a seat at the table where fintech policy is shaped.",
    description:
      "Join FCC as a member, or partner with us on events, research and industry programmes.",
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

const siteSettings = {
  site_title: "FCC — Fintech Convergence Council",
  site_description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
  brand_name: "Fintech Convergence Council",
  brand_tagline: "An IAMAI initiative · Since 2018",
  brand_mark: "FCC",
  contact_email: "info@fintechcouncil.in",
  contact_phone: "022-61766666",
  contact_phone_href: "tel:02261766666",
  address_lines: [
    "301-A, Godrej Two, Pirojshanagar,",
    "Vikhroli, Mumbai 400079",
  ],
  member_cta_label: "Become a Member",
  member_cta_href: "/apply-membership",
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/69219060/", icon: "in" },
    { label: "X", href: "https://twitter.com/FCCUpdates", icon: "𝕏" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/Fintech-Convergence-Council-FCC-442712016473770/",
      icon: "f",
    },
  ],
  footer_blurb:
    "Bringing policymakers, regulators and the fintech industry together to grow financial services across India.",
  footer_copyright: "© 2026 Fintech Convergence Council. All rights reserved.",
  footer_note: "An initiative of the Internet and Mobile Association of India",
  newsletter_placeholder: "Get FCC updates",
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "About Us", href: "/about", small: "Who we are and how we work" },
        { label: "Governing Council", href: "/about#council", small: "Leadership of FCC" },
        { label: "Annual Reports", href: "/annual-report", small: "Our year in review" },
      ],
    },
    {
      label: "Committees",
      href: "/committees",
      children: [
        { label: "Digital Lending", href: "/committees/digital-lending", small: "DL-01" },
        { label: "RegTech", href: "/committees/regtech", small: "RT-02" },
        { label: "WealthTech", href: "/committees/wealthtech", small: "WT-03" },
        { label: "InsurTech", href: "/committees/insurtech", small: "IT-04" },
        { label: "Credit Bureau", href: "/committees/credit-bureau", small: "CB-05" },
      ],
    },
    {
      label: "Membership",
      href: "/members",
      children: [
        { label: "Our Members", href: "/members", small: "175+ companies" },
        { label: "Membership Benefits", href: "/membership-benefits", small: "What you get" },
        { label: "Apply for Membership", href: "/apply-membership", small: "Join the council" },
      ],
    },
    {
      label: "Partnership",
      href: "/partners",
      children: [
        { label: "Our Partners", href: "/partners", small: "Who we work with" },
        {
          label: "Partnership Benefits",
          href: "/partnership-benefits",
          small: "Why partner with FCC",
        },
        {
          label: "Apply for Partnership",
          href: "/apply-partnership",
          small: "Start a conversation",
        },
      ],
    },
    {
      label: "Policy & Research",
      href: "/policy",
      children: [
        { label: "Policy", href: "/policy", small: "Representations to regulators" },
        { label: "Research", href: "/research", small: "Reports and whitepapers" },
      ],
    },
    {
      label: "Events",
      href: "/live-events",
      children: [
        { label: "Live Events", href: "/live-events", small: "GFF and in-person events" },
        {
          label: "Virtual Events",
          href: "/virtual-events",
          small: "Webinars and knowledge sessions",
        },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
  footer_columns: [
    {
      title: "About",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Governing Council", href: "/about#council" },
        { label: "Annual Reports", href: "/annual-report" },
        { label: "Committees", href: "/committees" },
      ],
    },
    {
      title: "Work",
      links: [
        { label: "Policy", href: "/policy" },
        { label: "Research", href: "/research" },
        { label: "Live Events", href: "/live-events" },
        { label: "Virtual Events", href: "/virtual-events" },
      ],
    },
    {
      title: "Join",
      links: [
        { label: "Our Members", href: "/members" },
        { label: "Membership Benefits", href: "/membership-benefits" },
        { label: "Apply for Membership", href: "/apply-membership" },
        { label: "Partnerships", href: "/partners" },
      ],
    },
  ],
};

const aboutPage = {
  hero: {
    title: firstMatch(about, /<h1[^>]*>([\s\S]*?)<\/h1>/) || "About FCC",
    description:
      "An industry council that brings policymakers, regulators and fintech companies together to grow financial services and widen inclusion across India.",
  },
  overview: {
    eyebrow: "Overview",
    heading: "One voice for India's converging financial ecosystem",
    paragraphs: [
      "FCC began in 2017 as the fintech committee of the Internet and Mobile Association of India (IAMAI) and launched as the Fintech Convergence Council in September 2018. It now represents more than 175 companies across lending, payments, insurance, investments, credit information and RegTech.",
      "We work with central and state government departments, regulators, law enforcement agencies and Digital Public Infrastructure providers, alongside other industry associations.",
    ],
  },
  vision:
    "Grow fintech and expand financial services to support financial inclusion and a digitally empowered India.",
  mission:
    "Find and build opportunities for collaboration and convergence among financial services players, and drive market expansion.",
  pillars: [
    {
      title: "Advocacy",
      items: [
        "Review regulatory, legal and policy developments, including drafts",
        "Submit feedback on papers released for public comment",
        "Share proactive opinions with lawmakers",
        "Work with government and regulators on a fair policy environment",
        "Collaborate with other associations",
      ],
    },
    {
      title: "Convergence & collaboration",
      description:
        "We find opportunities for large financial institutions in banking, payments, insurance and investments to work with fintech companies, so both sides grow faster.",
    },
    {
      title: "Development",
      description:
        "Through committees, best-practice sharing, industry discussions and knowledge sessions, we help the sector mature and reach more people.",
    },
  ],
  journey: {
    heading: "From a committee to the council",
    lead: "Key moments in FCC's story so far.",
    milestones: [
      {
        year: "2017",
        title: "Fintech committee at IAMAI",
        description: "Industry members come together under IAMAI to discuss fintech policy.",
      },
      {
        year: "2018",
        title: "FCC launches",
        description:
          "The Fintech Convergence Council is launched on 19 September at The St. Regis, Mumbai.",
      },
      {
        year: "2020",
        title: "First Global Fintech Fest",
        description:
          "GFF debuts as a virtual event and becomes the flagship of India's fintech calendar.",
      },
      {
        year: "2022",
        title: "GFF moves to Jio World Centre",
        description: "The festival grows into one of the world's largest fintech gatherings.",
      },
      {
        year: "2025",
        title: "Mission trip to Japan",
        description: "An industry delegation visits Tokyo to build cross-border fintech ties.",
      },
      {
        year: "2026",
        title: "175+ members, 5 committees",
        description: "A regular calendar of representations, webinars and research.",
      },
    ],
  },
  council: {
    heading: "Led by the industry",
    lead: "FCC is governed by a seven-member Executive Council drawn from its member companies.",
    members: [
      { name: "Vibhav Hathi", role: "Chair · Co-Founder, OneCard" },
      { name: "Praveena Rai", role: "Council Member" },
      { name: "Ajay Rajan", role: "MD & CEO, Protean e-Gov" },
      { name: "Miten Sampat", role: "Council Member" },
      { name: "Srinivas Jain", role: "Executive Director, SBI Funds" },
      { name: "Deval Sheth", role: "Council Member" },
      { name: "Sarbvir Singh", role: "Joint Group CEO, PB Fintech" },
    ],
  },
};

const committees = [
  {
    slug: "digital-lending",
    code: "DL-01",
    name: "Digital Lending",
    href: "/committees/digital-lending",
    description:
      "Growth and fair regulation for P2P, SME, personal and other digital lending.",
    chair_name: "Vibhav Hathi",
    chair_role: "Chair · Co-Founder, OneCard",
  },
  {
    slug: "regtech",
    code: "RT-02",
    name: "RegTech",
    href: "/committees/regtech",
    description:
      "KYC, AML, data protection and cyber resilience for the compliance tech ecosystem.",
    chair_name: "Ajay Rajan",
    chair_role: "Chair · MD & CEO, Protean e-Gov",
  },
  {
    slug: "wealthtech",
    code: "WT-03",
    name: "WealthTech",
    href: "/committees/wealthtech",
    description:
      "Investor access, mutual funds, settlement and onboarding across India's investments ecosystem.",
    chair_name: "Srinivas Jain",
    chair_role: "Chair · Executive Director, SBI Funds",
  },
  {
    slug: "insurtech",
    code: "IT-04",
    name: "InsurTech",
    href: "/committees/insurtech",
    description:
      "Life, general and health insurance, and aggregators, in a digital-first market.",
    chair_name: "Sarbvir Singh",
    chair_role: "Chair · Joint Group CEO, PB Fintech",
  },
  {
    slug: "credit-bureau",
    code: "CB-05",
    name: "Credit Bureau",
    href: "/committees/credit-bureau",
    description: "Credit information, inclusion and prudent lending through advocacy.",
    chair_name: "Open for nominations",
    chair_role: "Chair to be announced",
  },
];

const liveEvents = [
  {
    title: "Mission Trip to Japan",
    year: "2025",
    date_label: "12–16 May",
    location: "Tokyo, Japan",
    href: "https://globalfintechfest.com/",
  },
  {
    title: "India's Innovation for the World",
    year: "2024",
    date_label: "19 Dec",
    location: "India",
    href: "/live-events",
  },
  {
    title: "Global Fintech Fest 2024",
    year: "2024",
    date_label: "28–30 Aug",
    location: "Jio World Centre, Mumbai",
    href: "https://globalfintechfest.com/",
  },
  {
    title: "Global Fintech Fest 2023",
    year: "2023",
    date_label: "5–7 Sep",
    location: "Jio World Centre, Mumbai",
    href: "https://globalfintechfest.com/2023/",
  },
];

const virtualEvents = [
  {
    title: "Role of AI in transforming insurance processing",
    day: "02",
    month: "Apr 2026",
    time: "3:30–4:30 PM IST · Virtual",
    year_tag: "y2026",
  },
  {
    title: "Alternative Investment Funds in India: FY 2025 in review",
    day: "17",
    month: "Mar 2026",
    time: "3:00 PM IST · Virtual",
    year_tag: "y2026",
  },
  {
    title: "Evolving GST implementation: law and practice",
    day: "16",
    month: "Mar 2026",
    time: "3:00–4:30 PM IST · Virtual",
    year_tag: "y2026",
  },
  {
    title: "RE–LSP compliance essentials",
    day: "13",
    month: "Mar 2026",
    time: "3:00–4:00 PM IST · Virtual",
    year_tag: "y2026",
  },
];

const publications = [
  {
    title: "Building Bridges for the Next Decade of Finance",
    kind: "FCC · Report",
    year_label: "FCC × IAMAI",
    href: "https://www.fintechcouncil.in/images/Building%20Bridges%20for%20the%20Next%20Decade%20of%20Finance.pdf",
    cover_variant: "b1",
  },
  {
    title: "UPI for Her",
    kind: "FCC · Report",
    year_label: "FCC × IAMAI",
    href: "https://www.fintechcouncil.in/images/UPI%20for%20Her.pdf",
    cover_variant: "b2",
  },
  {
    title: "Mapping the FinTech Innovation Landscape in India",
    kind: "FCC · Report",
    year_label: "FCC × IAMAI",
    href: "https://www.fintechcouncil.in/images/Mapping%20the%20FinTech%20Innovation%20Landscape%20in%20India%20and%20comparing%20it%20with%20global%20trends.pdf",
    cover_variant: "b3",
  },
  {
    title: "SuperApps: Breaking down barriers, building bridges",
    kind: "FCC · Report",
    year_label: "FCC × IAMAI",
    href: "https://www.fintechcouncil.in/images/4.pdf",
    cover_variant: "b4",
  },
];

const members = membersArr.map(([name, logo]) => ({
  name,
  logo_filename: logo || "",
  website: "",
  category: "",
  description: "",
}));

const partners = {
  page: {
    title: "Our Partners",
    description:
      "Organisations that work with FCC on events, programmes, research and knowledge exchange.",
  },
  items: [
    {
      name: "Global Fintech Fest",
      description: "Flagship industry gathering co-hosted with FCC.",
      website: "https://globalfintechfest.com/",
      category: "Events",
    },
    {
      name: "IAMAI",
      description: "Internet and Mobile Association of India — parent initiative of FCC.",
      website: "https://www.iamai.in/",
      category: "Association",
    },
  ],
};

const annualReports = {
  page: {
    title: "Annual Reports",
    description: "A yearly look at FCC's representations, events, research and member activity.",
  },
  items: [
    {
      title: "FCC Annual Report",
      year: "2024",
      description: "Year in review covering policy work, events and membership growth.",
      document_url: "",
    },
  ],
};

const contactPage = {
  hero: {
    title: "Contact Us",
    description:
      "Questions about membership, committees, events or partnerships? We'd love to hear from you.",
  },
  channels: [
    {
      label: "General enquiries",
      email: "info@fintechcouncil.in",
    },
    {
      label: "Membership & committees",
      email: "swati.s@fintechcouncil.in",
    },
    {
      label: "Partnerships",
      email: "s.yashaswi@fintechcouncil.in",
    },
    {
      label: "Event registrations",
      email: "register@fintechcouncil.in",
    },
  ],
  office: {
    title: "Office",
    lines: [
      "Fintech Convergence Council",
      "301-A, Godrej Two, Pirojshanagar,",
      "Vikhroli, Mumbai, Maharashtra 400079",
    ],
    phone: "022-61766666",
    phone_href: "tel:02261766666",
    contact_person: "Sandeep Jhingran",
    contact_email: "sandeep@fintechcouncil.in",
    maps_url: "https://maps.google.com/?q=Godrej+Two+Pirojshanagar+Vikhroli+Mumbai",
  },
};

const outDir = path.join(root, "public", "data");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.join(root, "public", "uploads"), { recursive: true });

const files = {
  "site-settings.json": siteSettings,
  "homepage.json": homepage,
  "about.json": aboutPage,
  "committees.json": { items: committees },
  "members.json": { items: members },
  "partners.json": partners,
  "live-events.json": {
    page: {
      title: "Live Events",
      description:
        "The Global Fintech Fest, industry delegations and in-person moments that bring the ecosystem together.",
    },
    flagship: homepage.events_section.flagship,
    items: liveEvents,
  },
  "virtual-events.json": {
    page: {
      title: "Virtual Events",
      description:
        "Webinars and knowledge sessions where members hear directly from regulators, experts and peers on the rules that shape their business.",
    },
    items: virtualEvents,
  },
  "publications.json": {
    page: {
      title: "Research",
      description:
        "Reports, whitepapers and event reports that track how India's fintech sector is growing.",
    },
    items: publications,
  },
  "annual-reports.json": annualReports,
  "contact.json": contactPage,
};

for (const [name, data] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, name), JSON.stringify(data, null, 2) + "\n");
  console.log("wrote", name);
}

console.log("members count", members.length);
