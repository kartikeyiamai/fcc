import React from "react";
import type { CommitteeDetailPageContent, CommitteeItem } from "@/lib/cms-types";
import committeesData from "../../../public/data/committees.json";

export function CommitteeDetailPage({
  slug,
  content,
  heroArt,
  focusIcon,
  allCommittees,
}: {
  slug: string;
  content: CommitteeDetailPageContent;
  heroArt: React.ReactNode;
  focusIcon?: React.ReactNode;
  allCommittees?: CommitteeItem[];
}) {
  const committeeList = allCommittees || committeesData.items || [];
  const otherCommittees = committeeList.filter(
    (c) => c.slug !== slug
  );

  const fallbackFocusIcon = focusIcon || (
    <svg
      width="18"
      height="18"
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
  );

  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/committees">Committees</a>{" "}
              <span>/</span>
              {content.hero.title.replace(/\s*Committee\s*$/i, "")}
            </div>
            <h1>{content.hero.title}</h1> <p>{content.hero.description}</p>
            <div
              className="actions"
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "24px",
                flexWrap: "wrap",
              }}
            >
              <a
                href={
                  content.hero.join_email ||
                  `mailto:swati.s@fintechcouncil.in?subject=Joining%20the%20${encodeURIComponent(
                    content.hero.title
                  )}`
                }
                className="btn btn-light"
              >
                {content.hero.join_label || "Join this committee"}
              </a>{" "}
              <a href="#work" className="btn btn-ghost">
                See our work
              </a>
            </div>
          </div>
          <div className="ph-art" style={{ maxWidth: "340px" }}>
            {heroArt}
          </div>
        </div>
      </section>

      <nav className="subnav">
        <div className="wrap">
          {committeeList.map((c) => (
            <a
              key={c.slug}
              href={`/committees/${c.slug}`}
              className={c.slug === slug ? "on" : ""}
            >
              {c.name.replace(/\s*Committee\s*$/i, "")}
            </a>
          ))}
        </div>
      </nav>

      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Focus areas</span>{" "}
            <h2>{content.focus_areas.heading || "What this committee works on"}</h2>{" "}
            {content.focus_areas.open_to ? (
              <p className="lead">
                <b style={{ color: "var(--charcoal)" }}>Open to:</b>{" "}
                {content.focus_areas.open_to.replace(/^Open to:\s*/i, "")}
              </p>
            ) : null}
            <div className="grid-2" style={{ marginTop: "24px", gap: "12px" }}>
              {content.focus_areas.items?.map((item, idx) => (
                <div
                  className="benefit"
                  style={{ padding: "16px", alignItems: "center" }}
                  key={idx}
                >
                  <div className="icon-box" style={{ width: "36px", height: "36px" }}>
                    {fallbackFocusIcon}
                  </div>{" "}
                  <h4 style={{ margin: "0", fontSize: ".92rem" }}>{item}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <span className="eyebrow">Leadership</span>{" "}
            <h2>{content.leadership.heading || "Who leads it"}</h2>{" "}
            <div className="grid-2" style={{ marginTop: "20px" }}>
              {content.leadership.leaders?.map((ldr, idx) => {
                const words = (ldr.name || "").trim().split(/\s+/).filter(Boolean);
                const initials =
                  ldr.avatar ||
                  (words.length > 1
                    ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
                    : (words[0] || "").slice(0, 2).toUpperCase() || "FC");

                return (
                  <div className="person" key={idx}>
                    <div className="avatar">{initials}</div>{" "}
                    {ldr.tag ? (
                      <span
                        className="tag"
                        style={{ marginBottom: "10px", display: "inline-block" }}
                      >
                        {ldr.tag}
                      </span>
                    ) : null}{" "}
                    <h4>{ldr.name}</h4> <div className="org">{ldr.org}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft" id="work">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Policy work</span>{" "}
              <h2>{content.policy_work.heading || "Representations & sessions"}</h2>{" "}
              <p className="lead">
                {content.policy_work.lead ||
                  "Recent submissions and knowledge sessions linked to this committee."}
              </p>
            </div>{" "}
            <a href="/policy" className="btn btn-outline">
              Full policy hub
            </a>
          </div>

          <div className="tracker" id="tracker" data-limit="0">
            {content.policy_work.items?.map((rep, idx) => {
              const isSession =
                rep.regulator.toLowerCase().includes("session") ||
                rep.status.toLowerCase().includes("held");

              return (
                <div className="sub" key={idx}>
                  <div className="top">
                    <span className={`tag ${isSession ? "g" : ""}`}>
                      {rep.regulator}
                    </span>{" "}
                    <span className="status">{rep.status}</span>
                  </div>{" "}
                  <h4>{rep.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {content.webinars?.items && content.webinars.items.length > 0 ? (
        <section className="dark">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="eyebrow">Knowledge sessions</span>{" "}
                <h2>{content.webinars.heading || "Related webinars"}</h2>
              </div>{" "}
              <a href="/virtual-events" className="btn btn-ghost">
                All sessions
              </a>
            </div>{" "}
            <div className="web-grid reveal">
              {content.webinars.items.map((web, idx) => {
                const dayStr =
                  typeof web.day === "number"
                    ? String(web.day).padStart(2, "0")
                    : String(web.day || "");

                return (
                  <div className="web" key={idx}>
                    <div className="wtop">
                      <div>
                        <div className="d">{dayStr}</div>{" "}
                        <div className="m">{web.month}</div>
                      </div>{" "}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="6" width="13" height="12" rx="2"></rect>
                        <path d="M16 10l5-3v10l-5-3"></path>
                      </svg>
                    </div>{" "}
                    <div className="wbody">
                      <h4>{web.title}</h4>{" "}
                      <span className="time">{web.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Other committees</span>{" "}
              <h2>Explore the council</h2>
            </div>
          </div>
          <div className="grid-4 reveal">
            {otherCommittees.slice(0, 4).map((c) => (
              <a
                href={c.href || `/committees/${c.slug}`}
                className="ccard"
                key={c.slug}
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>{" "}
                <h3>{c.name.replace(/\s*Committee\s*$/i, "")}</h3>{" "}
                <p>{c.description}</p>{" "}
                <div className="chair">
                  <b>{c.chair_name || "Chair"}</b>
                  {c.chair_role || ""}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="cta-box reveal">
            <div className="art">
              <svg className="net" viewBox="0 0 500 500" fill="none" aria-hidden="true">
                <circle
                  cx="250"
                  cy="250"
                  r="232"
                  stroke="rgba(255,255,255,.12)"
                  strokeDasharray="2 8"
                ></circle>{" "}
                <circle
                  cx="250"
                  cy="250"
                  r="165"
                  stroke="rgba(255,255,255,.28)"
                  strokeDasharray="4 6"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    dur="80s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </circle>{" "}
                <circle cx="250" cy="250" r="96" stroke="rgba(255,255,255,.18)"></circle>{" "}
                <circle cx="307.4" cy="25.2" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="312.3"
                  y="9.8"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="start"
                >
                  RBI
                </text>{" "}
                <circle cx="461.5" cy="154.7" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="479.8"
                  y="150.5"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="start"
                >
                  SEBI
                </text>{" "}
                <circle cx="456.4" cy="356.0" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="474.2"
                  y="369.1"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="start"
                >
                  IRDAI
                </text>{" "}
                <circle cx="295.8" cy="477.4" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="299.8"
                  y="501.0"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="middle"
                >
                  NPCI
                </text>{" "}
                <circle cx="100.8" cy="427.6" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="87.9"
                  y="446.9"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="end"
                >
                  MeitY
                </text>{" "}
                <circle cx="18.1" cy="244.1" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="-1.9"
                  y="247.5"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="end"
                >
                  CERSAI
                </text>{" "}
                <circle cx="110.0" cy="65.0" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="98.0"
                  y="53.0"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="end"
                >
                  IBBI
                </text>{" "}
                <path
                  id="p0"
                  d="M250.0 85.0 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="2.60s" repeatCount="indefinite" begin="-0.1s">
                    <mpath href="#p0"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="250.0"
                    cy="85.0"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <text
                    x="250.0"
                    y="89.0"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    Lending
                  </text>
                </g>{" "}
                <path
                  id="p1"
                  d="M392.9 167.5 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="2.95s" repeatCount="indefinite" begin="-0.5s">
                    <mpath href="#p1"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="392.9"
                    cy="167.5"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <text
                    x="392.9"
                    y="171.5"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    InsurTech
                  </text>
                </g>{" "}
                <path
                  id="p2"
                  d="M392.9 332.5 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="3.30s" repeatCount="indefinite" begin="-0.9s">
                    <mpath href="#p2"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="392.9"
                    cy="332.5"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <text
                    x="392.9"
                    y="336.5"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    Wealth
                  </text>
                </g>{" "}
                <path
                  id="p3"
                  d="M250.0 415.0 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="3.65s" repeatCount="indefinite" begin="-1.3s">
                    <mpath href="#p3"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="250.0"
                    cy="415.0"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <text
                    x="250.0"
                    y="419.0"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    RegTech
                  </text>
                </g>{" "}
                <path
                  id="p4"
                  d="M107.1 332.5 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="4.00s" repeatCount="indefinite" begin="-1.7s">
                    <mpath href="#p4"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="107.1"
                    cy="332.5"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <text
                    x="107.1"
                    y="336.5"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    Bureaus
                  </text>
                </g>{" "}
                <path
                  id="p5"
                  d="M107.1 167.5 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="4.35s" repeatCount="indefinite" begin="-2.1s">
                    <mpath href="#p5"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="107.1"
                    cy="167.5"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <text
                    x="107.1"
                    y="171.5"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    Payments
                  </text>
                </g>{" "}
                <circle cx="250" cy="250" r="62" fill="#fff"></circle>{" "}
                <circle cx="250" cy="250" r="70" stroke="#fff" strokeOpacity=".4"></circle>{" "}
                <text
                  x="250"
                  y="248"
                  fill="#BF1A1F"
                  fontFamily="Plus Jakarta Sans,sans-serif"
                  fontSize="26"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  FCC
                </text>{" "}
                <text
                  x="250"
                  y="268"
                  fill="#7B7D7C"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="8.5"
                  textAnchor="middle"
                  letterSpacing="1.5"
                >
                  CONVERGENCE
                </text>
              </svg>
            </div>{" "}
            <div style={{ position: "relative" }}>
              <span className="eyebrow">Membership &amp; partnership</span>{" "}
              <h2>{content.bottom_cta.heading}</h2>{" "}
              <p>{content.bottom_cta.description}</p>
              <div className="cta-actions">
                <a
                  href={content.bottom_cta.primary_cta_href || "/apply-membership"}
                  className="btn btn-light"
                >
                  {content.bottom_cta.primary_cta_label || "Apply for membership"}
                </a>{" "}
                <a
                  href={content.bottom_cta.secondary_cta_href || "/apply-partnership"}
                  className="btn btn-ghost"
                >
                  {content.bottom_cta.secondary_cta_label || "Partner with us"}
                </a>
              </div>
            </div>
            <ul className="checks">
              {content.bottom_cta.benefits?.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

