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
  cta?: {
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

export type CommitteeLeader = {
  name: string;
  role?: string;
  org?: string;
  tag?: string;
  avatar?: string;
};

export type CommitteeItem = {
  slug: string;
  name: string;
  href?: string;
  description: string;
  who_can_join?: string;
  tags?: string[];
  chair_name?: string;
  chair_role?: string;
  co_chair_name?: string;
  co_chair_role?: string;
  leaders?: CommitteeLeader[];
  accent_color?: string;
};

export type CommitteesContent = {
  page?: { title: string; description: string };
  items: CommitteeItem[];
  join_box?: {
    heading: string;
    description: string;
    email: string;
    cta_label: string;
    cta_href: string;
  };
};

export type CommitteePolicyItem = {
  regulator: string;
  status: string;
  title: string;
};

export type CommitteeWebinarItem = {
  day: string;
  month: string;
  year_tag?: string;
  title: string;
  time: string;
};

export type CommitteeDetailPageContent = {
  hero: {
    code?: string;
    title: string;
    description: string;
    join_email?: string;
    join_label?: string;
  };
  focus_areas: {
    heading: string;
    open_to: string;
    items: string[];
  };
  leadership: {
    heading: string;
    leaders: CommitteeLeader[];
  };
  policy_work: {
    heading: string;
    lead: string;
    items: CommitteePolicyItem[];
  };
  webinars: {
    heading: string;
    items: CommitteeWebinarItem[];
  };
  bottom_cta: {
    heading: string;
    description: string;
    primary_cta_label: string;
    primary_cta_href: string;
    secondary_cta_label: string;
    secondary_cta_href: string;
    benefits: string[];
  };
};

export type MemberItem = {
  name: string;
  logo?: string;
  logo_filename?: string;
  website?: string;
  category?: string;
  description?: string;
};

export type MembersContent = {
  page?: { title: string; description: string };
  items: MemberItem[];
};

export type PartnerItem = {
  name: string;
  description?: string;
  website?: string;
  category?: string;
  logo?: string;
};

export type PartnersContent = {
  page: { title: string; description?: string };
  partner_network?: {
    eyebrow?: string;
    heading: string;
    lead?: string;
    cta_label?: string;
    cta_href?: string;
  };
  items: PartnerItem[];
  what_we_do?: {
    eyebrow?: string;
    heading: string;
    see_all_label?: string;
    see_all_href?: string;
    items: { title: string }[];
  };
  bottom_cta?: {
    eyebrow?: string;
    heading: string;
    description: string;
    primary_cta_label: string;
    primary_cta_href: string;
    secondary_cta_label: string;
    secondary_cta_href: string;
    benefits: string[];
  };
};

export type MembershipBenefitsContent = {
  hero: {
    title: string;
    description: string;
  };
  why_join: {
    eyebrow: string;
    heading: string;
    lead: string;
    primary_cta_label: string;
    primary_cta_href: string;
    secondary_cta_label: string;
    secondary_cta_href: string;
    card_title?: string;
    card_member_tag?: string;
    card_member_of?: string;
    card_sub_note?: string;
  };
  benefits_section: {
    eyebrow: string;
    heading: string;
    items: {
      num: string;
      title: string;
      description: string;
    }[];
    ready_card: {
      title: string;
      subtitle: string;
      href: string;
    };
  };
  process_section: {
    eyebrow: string;
    heading: string;
    lead: string;
    steps: {
      num: string;
      title: string;
      description: string;
    }[];
  };
};

export type ApplyMembershipContent = {
  hero: {
    title: string;
    description: string;
  };
  sidebar: {
    what_happens_next: {
      eyebrow: string;
      steps: {
        num: string;
        title: string;
        description: string;
      }[];
    };
    need_help: {
      heading: string;
      lead?: string;
      phone: string;
      phone_href: string;
      email: string;
    };
  };
};

export type PartnershipBenefitsContent = {
  hero: {
    title: string;
    description: string;
  };
  reach: {
    eyebrow: string;
    heading: string;
    lead: string;
    cta_label: string;
    cta_href: string;
  };
  benefits_section: {
    eyebrow: string;
    heading: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  bottom_cta: {
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

export type ApplyPartnershipContent = {
  hero: {
    title: string;
    description: string;
  };
  sidebar: {
    how_it_works: {
      eyebrow: string;
      steps: {
        num: string;
        title: string;
        description: string;
      }[];
    };
    need_help: {
      heading: string;
      lead?: string;
      phone: string;
      phone_href: string;
      email: string;
    };
  };
};

export type LiveEventItem = {
  year: string;
  tag?: string;
  tag_style?: string;
  title: string;
  date_venue?: string;
  date_label?: string;
  location?: string;
  href?: string;
};

export type LiveEventsContent = {
  page: { title: string; description: string };
  flagship: HomepageContent["events_section"]["flagship"];
  items: LiveEventItem[];
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
