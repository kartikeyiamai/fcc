import fs from "node:fs";

const path = "src/components/pages/HomePage.tsx";
let src = fs.readFileSync(path, "utf8");

if (!src.includes("HomepageContent")) {
  src = src.replace(
    `import type React from "react";\nexport function HomePage() {`,
    `import type React from "react";
import type { CommitteeItem, HomepageContent } from "@/lib/cms-types";

export function HomePage({
  content,
  committees,
}: {
  content: HomepageContent;
  committees: CommitteeItem[];
}) {
  const hero = content.hero;
  const about = content.about_teaser;
  const committeesSection = content.committees_section;
  const howWeWork = content.how_we_work;
  const policy = content.policy_section;
  const events = content.events_section;
  const research = content.research_section;
  const membersSection = content.members_section;
  const cta = content.cta;
`,
  );
}

const heroBlock = `      <section className="hero grid-bg">
        <div className="wrap">
          <div>
            <span className="pill">
              <i></i>{hero.badge}
            </span>
            <h1>
              {hero.heading_before} <em>{hero.heading_emphasis}</em> {hero.heading_after}
            </h1>
            <p>{hero.description}</p>
            <div className="actions">
              <a href={hero.primary_cta_href} className="btn btn-light">
                {hero.primary_cta_label}{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>{" "}
              <a href={hero.secondary_cta_href} className="btn btn-ghost">
                {hero.secondary_cta_label}
              </a>
            </div>
            <div className="hero-trust">
              {hero.trust.map((item) => (
                <div key={item.label}>
                  <b>{item.value}</b>
                  {item.label}
                </div>
              ))}
            </div>
          </div>`;

src = src.replace(
  /      <section className="hero grid-bg">[\s\S]*?<div className="hero-art">/,
  `${heroBlock}
          <div className="hero-art">`,
);

const statsBlock = `      <div className="stats">
        <div className="wrap">
          <div className="grid">
            {content.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <b>
                  {stat.value}
                  {stat.suffix ? <sup>{stat.suffix}</sup> : null}
                </b>{" "}
                <span>{stat.label}</span>{" "}
                <i
                  className="bar"
                  style={{ ["--p" as any]: stat.bar } as React.CSSProperties}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </div>`;

src = src.replace(/      <div className="stats">[\s\S]*?<\/div>\n      <\/div>\n      <\/div>/, statsBlock);

src = src.replace(
  `            <span className="eyebrow">About FCC</span>{" "}
            <h2>The next phase of fintech growth comes from working together.</h2>
            <p className="lead">
              FCC started as IAMAI's fintech committee and launched as the Fintech Convergence
              Council in 2018. Today it brings banks, NBFCs, insurers, investment platforms and
              fintechs into one room, and carries their shared view to regulators.
            </p>
            <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/about" className="btn btn-outline">
                About us
              </a>{" "}
              <a href="/annual-report" className="btn btn-outline">
                Annual reports
              </a>
            </div>`,
  `            <span className="eyebrow">{about.eyebrow}</span>{" "}
            <h2>{about.heading}</h2>
            <p className="lead">{about.lead}</p>
            <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={about.primary_cta_href} className="btn btn-outline">
                {about.primary_cta_label}
              </a>{" "}
              <a href={about.secondary_cta_href} className="btn btn-outline">
                {about.secondary_cta_label}
              </a>
            </div>`,
);

src = src.replace(
  `              <span className="eyebrow">Committees</span>{" "}
              <h2>Five committees, one shared agenda</h2>{" "}
              <p className="lead">
                Each committee leads the council's work in a fast-moving part of financial services.
              </p>
            </div>{" "}
            <a href="/committees" className="btn btn-outline">
              All committees
            </a>`,
  `              <span className="eyebrow">{committeesSection.eyebrow}</span>{" "}
              <h2>{committeesSection.heading}</h2>{" "}
              <p className="lead">{committeesSection.lead}</p>
            </div>{" "}
            <a href={committeesSection.cta_href} className="btn btn-outline">
              {committeesSection.cta_label}
            </a>`,
);

// Replace committee cards block with CMS-driven cards (icons stay generic)
const committeeCardsStart = src.indexOf('<div className="cards5 reveal">');
const committeeCardsEnd = src.indexOf("</div>\n        </div>\n      </section>\n\n      <section>", committeeCardsStart);
if (committeeCardsStart !== -1 && committeeCardsEnd !== -1) {
  const replacement = `<div className="cards5 reveal">
            {committees.map((committee) => (
              <a href={committee.href} className="ccard" key={committee.slug}>
                <span className="code">{committee.code}</span>{" "}
                <div className="icon-box">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                    <path d="M3 10h18M7 15h3"></path>
                  </svg>
                </div>{" "}
                <h3>{committee.name}</h3>{" "}
                <p>{committee.description}</p>{" "}
                <div className="chair">
                  <b>{committee.chair_name}</b>
                  {committee.chair_role}
                </div>
              </a>
            ))}
          `;
  src = src.slice(0, committeeCardsStart) + replacement + src.slice(committeeCardsEnd);
}

src = src.replace(
  `              <span className="eyebrow">How we work</span>{" "}
            <h2>From member input to policy outcome</h2>`,
  `              <span className="eyebrow">{howWeWork.eyebrow}</span>{" "}
            <h2>{howWeWork.heading}</h2>`,
);

src = src.replace(
  `              <span className="eyebrow">What's happening</span> <h2>Our policy work</h2>{" "}`,
  `              <span className="eyebrow">{policy.eyebrow}</span> <h2>{policy.heading}</h2>{" "}`,
);

src = src.replace(
  `              <span className="eyebrow">Events</span> <h2>Where the ecosystem meets</h2>{" "}`,
  `              <span className="eyebrow">{events.eyebrow}</span> <h2>{events.heading}</h2>{" "}`,
);

src = src.replace(
  `              <h2>Reports that track India's fintech story</h2>`,
  `              <h2>{research.heading}</h2>`,
);

src = src.replace(
  `              <h2>Trusted across financial services</h2>{" "}`,
  `              <h2>{membersSection.heading}</h2>{" "}`,
);

src = src.replace(
  `              <span className="eyebrow">Membership &amp; partnership</span>{" "}
              <h2>Have a seat at the table where fintech policy is shaped.</h2>{" "}
              <p>
                Join FCC as a member, or partner with us on events, research and industry
                programmes.
              </p>
              <div className="cta-actions">
                <a href="/apply-membership" className="btn btn-light">
                  Apply for membership
                </a>{" "}
                <a href="/apply-partnership" className="btn btn-ghost">
                  Partner with us
                </a>
              </div>
            </div>
            <ul className="checks">
              <li>Direct input into representations to regulators</li>{" "}
              <li>A seat on sector committees with industry peers</li>{" "}
              <li>Complimentary passes to FCC and IAMAI conferences</li>{" "}
              <li>Members-only roundtables and every FCC report</li>
            </ul>`,
  `              <span className="eyebrow">{cta.eyebrow}</span>{" "}
              <h2>{cta.heading}</h2>{" "}
              <p>{cta.description}</p>
              <div className="cta-actions">
                <a href={cta.primary_cta_href} className="btn btn-light">
                  {cta.primary_cta_label}
                </a>{" "}
                <a href={cta.secondary_cta_href} className="btn btn-ghost">
                  {cta.secondary_cta_label}
                </a>
              </div>
            </div>
            <ul className="checks">
              {cta.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>`,
);

fs.writeFileSync(path, src);
console.log("HomePage wired to CMS content");
