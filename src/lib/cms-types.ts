export type NavChild = {
  label: string;
  href: string;
  small?: string;
};

export type NavItem = {
  label: string;
  href: string;
  match?: string[];
  children?: NavChild[];
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type SiteSettings = {
  site_title: string;
  site_description: string;
  brand_name: string;
  brand_tagline: string;
  brand_mark: string;
  contact_email: string;
  contact_phone: string;
  contact_phone_href: string;
  address_lines: string[];
  member_cta_label: string;
  member_cta_href: string;
  social: SocialLink[];
  footer_blurb: string;
  footer_copyright: string;
  footer_note: string;
  newsletter_placeholder: string;
  navigation: NavItem[];
  footer_columns: FooterColumn[];
};

export type HomepageContent = {
  hero: {
    badge: string;
    heading_before: string;
    heading_emphasis: string;
    heading_after: string;
    description: string;
    primary_cta_label: string;
    primary_cta_href: string;
    secondary_cta_label: string;
    secondary_cta_href: string;
    trust: { value: string; label: string }[];
  };
  stats: { value: string; suffix: string; label: string; bar: string }[];
  about_teaser: {
    eyebrow: string;
    heading: string;
    lead: string;
    primary_cta_label: string;
    primary_cta_href: string;
    secondary_cta_label: string;
    secondary_cta_href: string;
  };
  committees_section: {
    eyebrow: string;
    heading: string;
    lead: string;
    cta_label: string;
    cta_href: string;
  };
  how_we_work: {
    eyebrow: string;
    heading: string;
    steps: { title: string; description: string }[];
  };
  policy_section: {
    eyebrow: string;
    heading: string;
    lead: string;
    cta_label: string;
    cta_href: string;
  };
  events_section: {
    eyebrow: string;
    heading: string;
    lead: string;
    cta_label: string;
    cta_href: string;
    flagship: {
      label: string;
      title: string;
      description: string;
      location: string;
      href: string;
      cta_label: string;
    };
  };
  research_section: {
    eyebrow: string;
    heading: string;
    cta_label: string;
    cta_href: string;
  };
  members_section: {
    eyebrow: string;
    heading: string;
    lead: string;
    cta_label: string;
    cta_href: string;
  };
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
    primary_cta_label: string;
    primary_cta_href: string;
    secondary_cta_label: string;
    secondary_cta_href: string;
    benefits: string[];
  };
};

export type AboutContent = {
  hero: { title: string; description: string };
  overview: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  vision: string;
  mission: string;
  pillars: {
    title: string;
    description?: string;
    items?: string[];
  }[];
  journey: {
    heading: string;
    lead: string;
    milestones: { year: string; title: string; description: string }[];
  };
  council: {
    heading: string;
    lead: string;
    members: { name: string; role: string }[];
  };
};

export type CommitteeItem = {
  slug: string;
  code: string;
  name: string;
  href: string;
  description: string;
  chair_name: string;
  chair_role: string;
};

export type CommitteesContent = {
  page?: { title: string; description: string };
  items: CommitteeItem[];
};

export type MemberItem = {
  name: string;
  logo_filename: string;
  website?: string;
  category?: string;
  description?: string;
};

export type MembersContent = {
  page?: { title: string; description: string };
  items: MemberItem[];
};

export type PartnersContent = {
  page: { title: string; description: string };
  items: {
    name: string;
    description: string;
    website: string;
    category: string;
    logo?: string;
  }[];
};

export type LiveEventsContent = {
  page: { title: string; description: string };
  flagship: HomepageContent["events_section"]["flagship"];
  items: {
    title: string;
    year: string;
    date_label: string;
    location: string;
    href: string;
  }[];
};

export type VirtualEventsContent = {
  page: { title: string; description: string };
  items: {
    title: string;
    day: string;
    month: string;
    time: string;
    year_tag: string;
  }[];
};

export type PublicationsContent = {
  page: { title: string; description: string };
  items: {
    title: string;
    kind: string;
    year_label: string;
    href: string;
    cover_variant?: string;
  }[];
};

export type AnnualReportsContent = {
  page: { title: string; description: string };
  items: {
    title: string;
    year: string;
    description: string;
    document_url?: string;
    cover_image?: string;
    featured?: boolean;
  }[];
};

export type ContactContent = {
  hero: { title: string; description: string };
  channels: { label: string; email: string }[];
  office: {
    title: string;
    lines: string[];
    phone: string;
    phone_href: string;
    contact_person: string;
    contact_email: string;
    maps_url: string;
  };
};
