import fs from "node:fs";

function patchAbout() {
  const path = "src/components/pages/AboutPage.tsx";
  let src = fs.readFileSync(path, "utf8");
  if (!src.includes("AboutContent")) {
    src = src.replace(
      `export function AboutPage() {`,
      `import type { AboutContent } from "@/lib/cms-types";

export function AboutPage({ content }: { content: AboutContent }) {`,
    );
  }

  src = src.replace(
    `<h1>About FCC</h1>{" "}
            <p>
              An industry council that brings policymakers, regulators and fintech companies
              together to grow financial services and widen inclusion across India.
            </p>`,
    `<h1>{content.hero.title}</h1>{" "}
            <p>{content.hero.description}</p>`,
  );

  src = src.replace(
    `<span className="eyebrow">Who we are</span>{" "}
            <h2>One voice for India's converging financial ecosystem</h2>
            <p className="lead">
              FCC began in 2017 as the fintech committee of the Internet and Mobile Association of
              India (IAMAI) and launched as the Fintech Convergence Council in September 2018. It
              now represents more than 175 companies across lending, payments, insurance,
              investments, credit information and RegTech.
            </p>
            <p className="lead" style={{ marginTop: "14px" }}>
              We work with central and state government departments, regulators, law enforcement
              agencies and Digital Public Infrastructure providers, alongside other industry
              associations.
            </p>`,
    `<span className="eyebrow">{content.overview.eyebrow}</span>{" "}
            <h2>{content.overview.heading}</h2>
            {content.overview.paragraphs.map((paragraph, index) => (
              <p
                className="lead"
                key={paragraph.slice(0, 24)}
                style={index > 0 ? { marginTop: "14px" } : undefined}
              >
                {paragraph}
              </p>
            ))}`,
  );

  src = src.replace(
    `<h3 style={{ fontSize: "1.35rem", marginTop: "8px" }}>
                Grow fintech and expand financial services to support financial inclusion and a
                digitally empowered India.
              </h3>`,
    `<h3 style={{ fontSize: "1.35rem", marginTop: "8px" }}>{content.vision}</h3>`,
  );

  src = src.replace(
    `<h3 style={{ fontSize: "1.35rem", marginTop: "8px" }}>
                Find and build opportunities for collaboration and convergence among financial
                services players, and drive market expansion.
              </h3>`,
    `<h3 style={{ fontSize: "1.35rem", marginTop: "8px" }}>{content.mission}</h3>`,
  );

  src = src.replace(
    `<span className="eyebrow">Our journey</span> <h2>From a committee to the council</h2>{" "}`,
    `<span className="eyebrow">Our journey</span> <h2>{content.journey.heading}</h2>{" "}`,
  );

  src = src.replace(
    `<span className="eyebrow">Governing Council</span> <h2>Led by the industry</h2>{" "}`,
    `<span className="eyebrow">Governing Council</span> <h2>{content.council.heading}</h2>{" "}`,
  );

  fs.writeFileSync(path, src);
  console.log("AboutPage patched");
}

function patchMembers() {
  const path = "src/components/pages/MembersPage.tsx";
  let src = fs.readFileSync(path, "utf8");
  if (!src.includes("MembersContent")) {
    src = src.replace(
      `export function MembersPage() {`,
      `import type { MembersContent } from "@/lib/cms-types";

export function MembersPage({ content }: { content: MembersContent }) {`,
    );
  }
  src = src.replace(
    `<h1>Our Members</h1>{" "}
            <p>
              175+ companies across lending, payments, insurance, investments, credit information
              and RegTech make up the council.
            </p>`,
    `<h1>{content.page?.title || "Our Members"}</h1>{" "}
            <p>{content.page?.description}</p>`,
  );
  fs.writeFileSync(path, src);
  console.log("MembersPage patched");
}

function patchCommittees() {
  const path = "src/components/pages/CommitteesPage.tsx";
  let src = fs.readFileSync(path, "utf8");
  if (!src.includes("CommitteesContent")) {
    src = src.replace(
      `export function CommitteesPage() {`,
      `import type { CommitteesContent } from "@/lib/cms-types";

export function CommitteesPage({ content }: { content: CommitteesContent }) {`,
    );
  }
  src = src.replace(
    `<h1>Committees</h1>{" "}
            <p>
              Five sector committees lead FCC's work, each bringing together member companies to
              share best practice, discuss industry issues and shape representations.
            </p>`,
    `<h1>{content.page?.title || "Committees"}</h1>{" "}
            <p>{content.page?.description}</p>`,
  );
  fs.writeFileSync(path, src);
  console.log("CommitteesPage patched");
}

function patchLiveEvents() {
  const path = "src/components/pages/LiveEventsPage.tsx";
  let src = fs.readFileSync(path, "utf8");
  if (!src.includes("LiveEventsContent")) {
    src = src.replace(
      `export function LiveEventsPage() {`,
      `import type { LiveEventsContent } from "@/lib/cms-types";

export function LiveEventsPage({ content }: { content: LiveEventsContent }) {`,
    );
  }
  src = src.replace(
    `<h1>Live Events</h1>{" "}
            <p>
              The Global Fintech Fest, industry delegations and in-person moments that bring the
              ecosystem together.
            </p>`,
    `<h1>{content.page.title}</h1>{" "}
            <p>{content.page.description}</p>`,
  );
  fs.writeFileSync(path, src);
  console.log("LiveEventsPage patched");
}

function patchVirtualEvents() {
  const path = "src/components/pages/VirtualEventsPage.tsx";
  let src = fs.readFileSync(path, "utf8");
  if (!src.includes("VirtualEventsContent")) {
    src = src.replace(
      `export function VirtualEventsPage() {`,
      `import type { VirtualEventsContent } from "@/lib/cms-types";

export function VirtualEventsPage({ content }: { content: VirtualEventsContent }) {`,
    );
  }
  src = src.replace(
    /<h1>Virtual Events<\/h1>\s*\{\" \"\}\s*<p>[\s\S]*?<\/p>/,
    `<h1>{content.page.title}</h1>{" "}
            <p>{content.page.description}</p>`,
  );
  fs.writeFileSync(path, src);
  console.log("VirtualEventsPage patched");
}

function patchResearch() {
  const path = "src/components/pages/ResearchPage.tsx";
  let src = fs.readFileSync(path, "utf8");
  if (!src.includes("PublicationsContent")) {
    src = src.replace(
      `export function ResearchPage() {`,
      `import type { PublicationsContent } from "@/lib/cms-types";

export function ResearchPage({ content }: { content: PublicationsContent }) {`,
    );
  }
  src = src.replace(
    /<h1>Research<\/h1>\s*\{\" \"\}\s*<p>[\s\S]*?<\/p>/,
    `<h1>{content.page.title}</h1>{" "}
            <p>{content.page.description}</p>`,
  );
  fs.writeFileSync(path, src);
  console.log("ResearchPage patched");
}

function patchPartners() {
  const path = "src/components/pages/PartnersPage.tsx";
  let src = fs.readFileSync(path, "utf8");
  if (!src.includes("PartnersContent")) {
    src = src.replace(
      `export function PartnersPage() {`,
      `import type { PartnersContent } from "@/lib/cms-types";

export function PartnersPage({ content }: { content: PartnersContent }) {`,
    );
  }
  src = src.replace(
    `<h1>Our Partners</h1>{" "}
            <p>
              Organisations that work with FCC on events, programmes, research and knowledge
              exchange.
            </p>`,
    `<h1>{content.page.title}</h1>{" "}
            <p>{content.page.description}</p>`,
  );

  // Inject CMS partner tiles before the first placeholder tile
  if (!src.includes("content.items.map")) {
    src = src.replace(
      `<div className="mgrid reveal">`,
      `<div className="mgrid reveal">
            {content.items.map((partner) => (
              <a
                key={partner.name}
                className="mtile"
                href={partner.website || "#"}
                target={partner.website ? "_blank" : undefined}
                rel={partner.website ? "noopener" : undefined}
              >
                <div className="mono-av">{partner.name.slice(0, 2).toUpperCase()}</div>
                <span>{partner.name}</span>
              </a>
            ))}`,
    );
  }
  fs.writeFileSync(path, src);
  console.log("PartnersPage patched");
}

function patchAnnualReports() {
  const path = "src/components/pages/AnnualReportPage.tsx";
  let src = fs.readFileSync(path, "utf8");
  if (!src.includes("AnnualReportsContent")) {
    src = src.replace(
      `export function AnnualReportPage() {`,
      `import type { AnnualReportsContent } from "@/lib/cms-types";

export function AnnualReportPage({ content }: { content: AnnualReportsContent }) {`,
    );
  }
  src = src.replace(
    /<h1>Annual Reports<\/h1>\s*\{\" \"\}\s*<p>[\s\S]*?<\/p>/,
    `<h1>{content.page.title}</h1>{" "}
            <p>{content.page.description}</p>`,
  );
  fs.writeFileSync(path, src);
  console.log("AnnualReportPage patched");
}

function patchContact() {
  const path = "src/components/pages/ContactPage.tsx";
  let src = fs.readFileSync(path, "utf8");
  if (!src.includes("ContactContent")) {
    src = src.replace(
      `export function ContactPage() {`,
      `import type { ContactContent } from "@/lib/cms-types";

export function ContactPage({ content }: { content: ContactContent }) {`,
    );
  }
  src = src.replace(
    /<h1>Contact Us<\/h1>\s*\{\" \"\}\s*<p>[\s\S]*?<\/p>/,
    `<h1>{content.hero.title}</h1>{" "}
            <p>{content.hero.description}</p>`,
  );

  // Replace channels grid with CMS-driven version
  const start = src.indexOf('<div className="grid-4 reveal">');
  const end = src.indexOf("</div>\n        </div>\n      </section>", start);
  if (start !== -1 && end !== -1 && !src.includes("content.channels.map")) {
    const replacement = `<div className="grid-4 reveal">
            {content.channels.map((channel) => (
              <a
                key={channel.email}
                href={\`mailto:\${channel.email}\`}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
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
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="M3 7l9 6 9-6"></path>
                  </svg>
                </div>
                <div>
                  <b
                    style={{
                      fontSize: ".8rem",
                      color: "var(--muted)",
                      fontFamily: "var(--mono)",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                    }}
                  >
                    {channel.label}
                  </b>
                  <div style={{ fontWeight: "700", fontSize: ".92rem", wordBreak: "break-all" }}>
                    {channel.email}
                  </div>
                </div>
              </a>
            ))}
          `;
    src = src.slice(0, start) + replacement + src.slice(end);
  }
  fs.writeFileSync(path, src);
  console.log("ContactPage patched");
}

patchAbout();
patchMembers();
patchCommittees();
patchLiveEvents();
patchVirtualEvents();
patchResearch();
patchPartners();
patchAnnualReports();
patchContact();
