import type React from "react";
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

  return (
    <>
      <section className="hero grid-bg">
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
          </div>
          <div className="hero-art">
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
                <circle cx="250.0" cy="85.0" r="34" stroke="#fff" strokeOpacity=".5">
                  <animate
                    attributeName="r"
                    values="34;44;34"
                    dur="4s"
                    begin="0.0s"
                    repeatCount="indefinite"
                  ></animate>{" "}
                  <animate
                    attributeName="stroke-opacity"
                    values=".5;0;.5"
                    dur="4s"
                    begin="0.0s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>{" "}
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
                <circle cx="392.9" cy="167.5" r="34" stroke="#fff" strokeOpacity=".5">
                  <animate
                    attributeName="r"
                    values="34;44;34"
                    dur="4s"
                    begin="0.6s"
                    repeatCount="indefinite"
                  ></animate>{" "}
                  <animate
                    attributeName="stroke-opacity"
                    values=".5;0;.5"
                    dur="4s"
                    begin="0.6s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>{" "}
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
                <circle cx="392.9" cy="332.5" r="34" stroke="#fff" strokeOpacity=".5">
                  <animate
                    attributeName="r"
                    values="34;44;34"
                    dur="4s"
                    begin="1.2s"
                    repeatCount="indefinite"
                  ></animate>{" "}
                  <animate
                    attributeName="stroke-opacity"
                    values=".5;0;.5"
                    dur="4s"
                    begin="1.2s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>{" "}
                <text
                  x="392.9"
                  y="336.5"
                  fill="#fff"
                  fontFamily="Plus Jakarta Sans,sans-serif"
                  fontSize="11.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  WealthTech
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
                <circle cx="250.0" cy="415.0" r="34" stroke="#fff" strokeOpacity=".5">
                  <animate
                    attributeName="r"
                    values="34;44;34"
                    dur="4s"
                    begin="1.8s"
                    repeatCount="indefinite"
                  ></animate>{" "}
                  <animate
                    attributeName="stroke-opacity"
                    values=".5;0;.5"
                    dur="4s"
                    begin="1.8s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>{" "}
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
                <circle cx="107.1" cy="332.5" r="34" stroke="#fff" strokeOpacity=".5">
                  <animate
                    attributeName="r"
                    values="34;44;34"
                    dur="4s"
                    begin="2.4s"
                    repeatCount="indefinite"
                  ></animate>{" "}
                  <animate
                    attributeName="stroke-opacity"
                    values=".5;0;.5"
                    dur="4s"
                    begin="2.4s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>{" "}
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
                <circle cx="107.1" cy="167.5" r="34" stroke="#fff" strokeOpacity=".5">
                  <animate
                    attributeName="r"
                    values="34;44;34"
                    dur="4s"
                    begin="3.0s"
                    repeatCount="indefinite"
                  ></animate>{" "}
                  <animate
                    attributeName="stroke-opacity"
                    values=".5;0;.5"
                    dur="4s"
                    begin="3.0s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>{" "}
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
            <div className="float f1">
              <div className="row">
                <span className="tick">✓</span>{" "}
                <div>
                  <div className="k">Representation</div> <b>Submitted to RBI</b>
                </div>
              </div>
            </div>
            <div className="float f2">
              <div className="k">Digital lending · trend</div> <b>Policy momentum</b>{" "}
              <svg className="spark" width="110" height="30" viewBox="0 0 110 30" fill="none">
                <polyline
                  points="0.0,28.0 13.8,23.3 27.5,25.6 41.2,18.5 55.0,20.9 68.8,13.8 82.5,9.1 96.2,11.5 110.0,2.0"
                  stroke="#BF1A1F"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></polyline>{" "}
                <polyline
                  points="0,30 0.0,28.0 13.8,23.3 27.5,25.6 41.2,18.5 55.0,20.9 68.8,13.8 82.5,9.1 96.2,11.5 110.0,2.0 110,30"
                  fill="#BF1A1F"
                  opacity=".08"
                ></polyline>
              </svg>
            </div>
            <div className="float f3">
              <div className="row">
                <span
                  className="tick"
                  style={{ background: "var(--red-soft)", color: "var(--red)" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="6" width="13" height="12" rx="2"></rect>{" "}
                    <path d="M16 10l5-3v10l-5-3"></path>
                  </svg>
                </span>{" "}
                <div>
                  <div className="k">Next session</div> <b>Knowledge webinar</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>UPI</span> <span>Account Aggregator</span> <span>OCEN</span> <span>ONDC</span>{" "}
          <span>DPDP Act</span> <span>CKYC</span> <span>Digital Lending</span>{" "}
          <span>Co-Lending</span> <span>e-KYC Setu</span> <span>Bima Sugam</span>{" "}
          <span>T+0 Settlement</span> <span>AML / CFT</span> <span>GIFT IFSC</span>{" "}
          <span>DIGIPIN</span> <span>Video-KYC</span> <span>FLDG</span> <span>UPI</span>{" "}
          <span>Account Aggregator</span> <span>OCEN</span> <span>ONDC</span> <span>DPDP Act</span>{" "}
          <span>CKYC</span> <span>Digital Lending</span> <span>Co-Lending</span>{" "}
          <span>e-KYC Setu</span> <span>Bima Sugam</span> <span>T+0 Settlement</span>{" "}
          <span>AML / CFT</span> <span>GIFT IFSC</span> <span>DIGIPIN</span> <span>Video-KYC</span>{" "}
          <span>FLDG</span>
        </div>
      </div>

      <div className="stats">
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
                  style={{ ["--p" as string]: stat.bar } as React.CSSProperties}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">{about.eyebrow}</span>{" "}
            <h2>{about.heading}</h2>
            <p className="lead">{about.lead}</p>
            <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={about.primary_cta_href} className="btn btn-outline">
                {about.primary_cta_label}
              </a>{" "}
              <a href={about.secondary_cta_href} className="btn btn-outline">
                {about.secondary_cta_label}
              </a>
            </div>
          </div>
          <div className="bridge reveal">
            <svg
              viewBox="0 0 760 360"
              fill="none"
              fontFamily="Plus Jakarta Sans,sans-serif"
              aria-label="FCC connects industry with regulators"
            >
              <text
                x="90"
                y="24"
                fill="#7B7D7C"
                fontFamily="JetBrains Mono"
                fontSize="11"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                INDUSTRY
              </text>{" "}
              <text
                x="670"
                y="24"
                fill="#7B7D7C"
                fontFamily="JetBrains Mono"
                fontSize="11"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                REGULATORS &amp; GOVT
              </text>{" "}
              <rect
                x="10"
                y="46"
                width="160"
                height="36"
                rx="18"
                fill="#F5F5F5"
                stroke="#E6E6E6"
              ></rect>{" "}
              <text x="90" y="69" fill="#222" fontSize="13" fontWeight="600" textAnchor="middle">
                Banks
              </text>{" "}
              <path
                id="bl0"
                d="M170 64 C 250 64, 250 180, 310 180"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#BF1A1F">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="-0.1s">
                  <mpath href="#bl0"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="10"
                y="96"
                width="160"
                height="36"
                rx="18"
                fill="#F5F5F5"
                stroke="#E6E6E6"
              ></rect>{" "}
              <text x="90" y="119" fill="#222" fontSize="13" fontWeight="600" textAnchor="middle">
                NBFCs
              </text>{" "}
              <path
                id="bl1"
                d="M170 114 C 250 114, 250 180, 310 180"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#BF1A1F">
                <animateMotion dur="2.6s" repeatCount="indefinite" begin="-0.4s">
                  <mpath href="#bl1"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="10"
                y="146"
                width="160"
                height="36"
                rx="18"
                fill="#F5F5F5"
                stroke="#E6E6E6"
              ></rect>{" "}
              <text x="90" y="169" fill="#222" fontSize="13" fontWeight="600" textAnchor="middle">
                Fintechs
              </text>{" "}
              <path
                id="bl2"
                d="M170 164 C 250 164, 250 180, 310 180"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#BF1A1F">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin="-0.7s">
                  <mpath href="#bl2"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="10"
                y="196"
                width="160"
                height="36"
                rx="18"
                fill="#F5F5F5"
                stroke="#E6E6E6"
              ></rect>{" "}
              <text x="90" y="219" fill="#222" fontSize="13" fontWeight="600" textAnchor="middle">
                Insurers
              </text>{" "}
              <path
                id="bl3"
                d="M170 214 C 250 214, 250 180, 310 180"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#BF1A1F">
                <animateMotion dur="3.0s" repeatCount="indefinite" begin="-1.0s">
                  <mpath href="#bl3"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="10"
                y="246"
                width="160"
                height="36"
                rx="18"
                fill="#F5F5F5"
                stroke="#E6E6E6"
              ></rect>{" "}
              <text x="90" y="269" fill="#222" fontSize="13" fontWeight="600" textAnchor="middle">
                AMCs & brokers
              </text>{" "}
              <path
                id="bl4"
                d="M170 264 C 250 264, 250 180, 310 180"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#BF1A1F">
                <animateMotion dur="3.2s" repeatCount="indefinite" begin="-1.3s">
                  <mpath href="#bl4"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="10"
                y="296"
                width="160"
                height="36"
                rx="18"
                fill="#F5F5F5"
                stroke="#E6E6E6"
              ></rect>{" "}
              <text x="90" y="319" fill="#222" fontSize="13" fontWeight="600" textAnchor="middle">
                Bureaus
              </text>{" "}
              <path
                id="bl5"
                d="M170 314 C 250 314, 250 180, 310 180"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#BF1A1F">
                <animateMotion dur="3.4s" repeatCount="indefinite" begin="-1.6s">
                  <mpath href="#bl5"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="590"
                y="40"
                width="160"
                height="32"
                rx="8"
                fill="#fff"
                stroke="#222"
                strokeWidth="1.5"
              ></rect>{" "}
              <text x="670" y="61" fill="#222" fontSize="13" fontWeight="700" textAnchor="middle">
                RBI
              </text>{" "}
              <path
                id="br0"
                d="M450 180 C 520 180, 520 56, 590 56"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#222">
                <animateMotion
                  dur="2.6s"
                  repeatCount="indefinite"
                  begin="-0.1s"
                  keyPoints="1;0"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#br0"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="590"
                y="84"
                width="160"
                height="32"
                rx="8"
                fill="#fff"
                stroke="#222"
                strokeWidth="1.5"
              ></rect>{" "}
              <text x="670" y="105" fill="#222" fontSize="13" fontWeight="700" textAnchor="middle">
                SEBI
              </text>{" "}
              <path
                id="br1"
                d="M450 180 C 520 180, 520 100, 590 100"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#222">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin="-0.3s"
                  keyPoints="1;0"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#br1"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="590"
                y="128"
                width="160"
                height="32"
                rx="8"
                fill="#fff"
                stroke="#222"
                strokeWidth="1.5"
              ></rect>{" "}
              <text x="670" y="149" fill="#222" fontSize="13" fontWeight="700" textAnchor="middle">
                IRDAI
              </text>{" "}
              <path
                id="br2"
                d="M450 180 C 520 180, 520 144, 590 144"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#222">
                <animateMotion
                  dur="3.0s"
                  repeatCount="indefinite"
                  begin="-0.6s"
                  keyPoints="1;0"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#br2"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="590"
                y="172"
                width="160"
                height="32"
                rx="8"
                fill="#fff"
                stroke="#222"
                strokeWidth="1.5"
              ></rect>{" "}
              <text x="670" y="193" fill="#222" fontSize="13" fontWeight="700" textAnchor="middle">
                NPCI
              </text>{" "}
              <path
                id="br3"
                d="M450 180 C 520 180, 520 188, 590 188"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#222">
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  begin="-0.8s"
                  keyPoints="1;0"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#br3"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="590"
                y="216"
                width="160"
                height="32"
                rx="8"
                fill="#fff"
                stroke="#222"
                strokeWidth="1.5"
              ></rect>{" "}
              <text x="670" y="237" fill="#222" fontSize="13" fontWeight="700" textAnchor="middle">
                MeitY
              </text>{" "}
              <path
                id="br4"
                d="M450 180 C 520 180, 520 232, 590 232"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#222">
                <animateMotion
                  dur="3.4s"
                  repeatCount="indefinite"
                  begin="-1.1s"
                  keyPoints="1;0"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#br4"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="590"
                y="260"
                width="160"
                height="32"
                rx="8"
                fill="#fff"
                stroke="#222"
                strokeWidth="1.5"
              ></rect>{" "}
              <text x="670" y="281" fill="#222" fontSize="13" fontWeight="700" textAnchor="middle">
                CERSAI
              </text>{" "}
              <path
                id="br5"
                d="M450 180 C 520 180, 520 276, 590 276"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#222">
                <animateMotion
                  dur="3.6s"
                  repeatCount="indefinite"
                  begin="-1.4s"
                  keyPoints="1;0"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#br5"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect
                x="590"
                y="304"
                width="160"
                height="32"
                rx="8"
                fill="#fff"
                stroke="#222"
                strokeWidth="1.5"
              ></rect>{" "}
              <text x="670" y="325" fill="#222" fontSize="13" fontWeight="700" textAnchor="middle">
                IBBI
              </text>{" "}
              <path
                id="br6"
                d="M450 180 C 520 180, 520 320, 590 320"
                stroke="#E5B9BA"
                strokeWidth="1.5"
              ></path>{" "}
              <circle r="3.5" fill="#222">
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  begin="-1.6s"
                  keyPoints="1;0"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#br6"></mpath>
                </animateMotion>
              </circle>{" "}
              <rect x="310" y="120" width="140" height="120" rx="20" fill="#BF1A1F"></rect>{" "}
              <text x="380" y="176" fill="#fff" fontSize="26" fontWeight="800" textAnchor="middle">
                FCC
              </text>{" "}
              <text
                x="380"
                y="198"
                fill="#FBE3E3"
                fontFamily="JetBrains Mono"
                fontSize="9.5"
                textAnchor="middle"
                letterSpacing="1"
              >
                ONE INDUSTRY VOICE
              </text>{" "}
              <text
                x="240"
                y="340"
                fill="#BF1A1F"
                fontFamily="JetBrains Mono"
                fontSize="11"
                textAnchor="middle"
              >
                ● inputs &amp; positions →
              </text>{" "}
              <text
                x="475"
                y="340"
                fill="#222"
                fontFamily="JetBrains Mono"
                fontSize="11"
                textAnchor="middle"
              >
                ← consultations &amp; clarity ●
              </text>
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">{committeesSection.eyebrow}</span>{" "}
              <h2>{committeesSection.heading}</h2>{" "}
              <p className="lead">{committeesSection.lead}</p>
            </div>{" "}
            <a href={committeesSection.cta_href} className="btn btn-outline">
              {committeesSection.cta_label}
            </a>
          </div>
          <div className="cards5 reveal">
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
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">{howWeWork.eyebrow}</span>{" "}
              <h2>{howWeWork.heading}</h2>
            </div>
          </div>
          <div className="flow reveal">
            <div className="step">
              <div className="dot">
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
                  <circle cx="9" cy="8" r="3"></circle> <circle cx="17" cy="10" r="2.5"></circle>{" "}
                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 1.5-4.5 3-4.5S21 17.5 21 20"></path>
                </svg>
              </div>{" "}
              <h4>Listen</h4> <p>Committees surface the issues members face on the ground.</p>
            </div>
            <div className="step">
              <div className="dot">
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
                  <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"></path>
                </svg>
              </div>{" "}
              <h4>Consolidate</h4> <p>We build one industry position from many voices.</p>
            </div>
            <div className="step">
              <div className="dot">
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
                  <path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2zM16 8a5 5 0 0 1 0 8"></path>
                </svg>
              </div>{" "}
              <h4>Represent</h4>{" "}
              <p>Submissions and consultations with regulators and government.</p>
            </div>
            <div className="step">
              <div className="dot">
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
                  <path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2zM8 7h6M8 11h6"></path>
                </svg>
              </div>{" "}
              <h4>Inform</h4> <p>Webinars and reports bring the outcome back to members.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">{policy.eyebrow}</span> <h2>{policy.heading}</h2>{" "}
              <p className="lead">
                Recent representations, industry feedback and knowledge sessions. Filter by
                regulator.
              </p>
            </div>{" "}
            <a href="/policy" className="btn btn-outline">
              Policy hub
            </a>
          </div>
          <div className="filters" data-filter-for="tracker">
            <button className="chip active" data-f="all">
              All <span className="n">32</span>
            </button>{" "}
            <button className="chip" data-f="RBI">
              RBI <span className="n">11</span>
            </button>{" "}
            <button className="chip" data-f="SEBI">
              SEBI <span className="n">3</span>
            </button>{" "}
            <button className="chip" data-f="IRDAI">
              IRDAI <span className="n">6</span>
            </button>{" "}
            <button className="chip" data-f="NPCI">
              NPCI <span className="n">2</span>
            </button>{" "}
            <button className="chip" data-f="MeitY">
              MeitY <span className="n">1</span>
            </button>{" "}
            <button className="chip" data-f="CERSAI">
              CERSAI <span className="n">1</span>
            </button>{" "}
            <button className="chip" data-f="IBBI">
              IBBI <span className="n">1</span>
            </button>{" "}
            <button className="chip" data-f="Session">
              Knowledge sessions <span className="n">7</span>
            </button>
          </div>{" "}
          <div className="tracker" id="tracker" data-limit="9">
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>PAN verification access for Lending Service Providers</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>
                Feedback on the draft omnibus framework for recognising SROs for regulated entities
              </h4>
            </div>{" "}
            <div className="sub" data-r="CERSAI reg">
              <div className="top">
                <span className="tag">CERSAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Improving the quality of KYC data in C-KYCR</h4>
            </div>{" "}
            <div className="sub" data-r="SEBI wealth">
              <div className="top">
                <span className="tag">SEBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Industry feedback on T+0 settlement</h4>
            </div>{" "}
            <div className="sub" data-r="IBBI lend">
              <div className="top">
                <span className="tag">IBBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Submission of information for unsecured loans</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Simplification of KYC for MSMEs</h4>
            </div>{" "}
            <div className="sub" data-r="NPCI lend">
              <div className="top">
                <span className="tag">NPCI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>UPI mandate and UPI AutoPay</h4>
            </div>{" "}
            <div className="sub" data-r="NPCI lend">
              <div className="top">
                <span className="tag">NPCI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Streamlining e-mandate registration for MSMEs</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Aggregation of loan products from multiple lenders</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Industry representation on insurance literacy</h4>
            </div>{" "}
            <div className="sub" data-r="SEBI wealth">
              <div className="top">
                <span className="tag">SEBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>New PAN verification system deadline</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Proposal to introduce Self-V-CIP</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Suggestions on gold loans</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Impact of recent regulations on the securitisation market</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Digital lending guidelines: direct disbursal of funds</h4>
            </div>{" "}
            <div className="sub" data-r="SEBI wealth">
              <div className="top">
                <span className="tag">SEBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Blocking of funds for trading in the secondary market (2023)</h4>
            </div>{" "}
            <div className="sub" data-r="MeitY reg">
              <div className="top">
                <span className="tag">MeitY</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Discussion on the Digital Personal Data Protection Bill, 2022</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Draft IRDAI (Bima Sugam Insurance E-Marketplace) Regulations, 2024</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Representation on Bima Vahak guidelines</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI bureau">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>
                Support for CICs on overlaps between the CIC (Regulation) Act, 2005 and the DPDPA
              </h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Cyber resilience and digital payment security controls for PSOs</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Access to IIB data for insurance intermediaries</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>ISNP: digital advertising</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>FLDG on KCC lending</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Access to data ecosystem for AgriFintech</h4>
            </div>{" "}
            <div className="sub" data-r="Session reg">
              <div className="top">
                <span className="tag g">Masterclass</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Masterclass: DPDP and its impact across the fintech ecosystem</h4>
            </div>{" "}
            <div className="sub" data-r="Session lend">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Empowering MSMEs: OCEN in lending&#x27;s digital transformation</h4>
            </div>{" "}
            <div className="sub" data-r="Session lend">
              <div className="top">
                <span className="tag g">Workshop</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Account Aggregator as a growth accelerator for lending, with Sahamati</h4>
            </div>{" "}
            <div className="sub" data-r="Session insur reg">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Impact of the DPDP Act, 2023 on the insurance sector</h4>
            </div>{" "}
            <div className="sub" data-r="Session wealth">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Financial services and gift cards on ONDC</h4>
            </div>{" "}
            <div className="sub" data-r="Session reg">
              <div className="top">
                <span className="tag g">Roundtable</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Roundtable on the proposed IFSCA (Payment Services) Regulations</h4>
            </div>{" "}
            <div className="sub" data-r="Session lend">
              <div className="top">
                <span className="tag g">Outreach</span> <span className="status">Held</span>
              </div>{" "}
              <h4>NPCI Fintech Outreach Programme, with PCI</h4>
            </div>
          </div>
          <div className="center mt-28">
            <button className="btn btn-outline" data-more-for="tracker">
              Show all
            </button>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">{events.eyebrow}</span> <h2>{events.heading}</h2>{" "}
              <p className="lead">
                FCC co-hosts the Global Fintech Fest and runs a year-round calendar of virtual
                knowledge sessions.
              </p>
            </div>{" "}
            <a href="/live-events" className="btn btn-ghost">
              All events
            </a>
          </div>
          <div className="ev-grid reveal">
            <a
              href="https://globalfintechfest.com/"
              target="_blank"
              rel="noopener"
              className="ev-feature"
            >
              <div className="bg-art">
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
                    <circle cx="250.0" cy="85.0" r="34" stroke="#fff" strokeOpacity=".5">
                      <animate
                        attributeName="r"
                        values="34;44;34"
                        dur="4s"
                        begin="0.0s"
                        repeatCount="indefinite"
                      ></animate>{" "}
                      <animate
                        attributeName="stroke-opacity"
                        values=".5;0;.5"
                        dur="4s"
                        begin="0.0s"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>{" "}
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
                    <circle cx="392.9" cy="167.5" r="34" stroke="#fff" strokeOpacity=".5">
                      <animate
                        attributeName="r"
                        values="34;44;34"
                        dur="4s"
                        begin="0.6s"
                        repeatCount="indefinite"
                      ></animate>{" "}
                      <animate
                        attributeName="stroke-opacity"
                        values=".5;0;.5"
                        dur="4s"
                        begin="0.6s"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>{" "}
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
                    <circle cx="392.9" cy="332.5" r="34" stroke="#fff" strokeOpacity=".5">
                      <animate
                        attributeName="r"
                        values="34;44;34"
                        dur="4s"
                        begin="1.2s"
                        repeatCount="indefinite"
                      ></animate>{" "}
                      <animate
                        attributeName="stroke-opacity"
                        values=".5;0;.5"
                        dur="4s"
                        begin="1.2s"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>{" "}
                    <text
                      x="392.9"
                      y="336.5"
                      fill="#fff"
                      fontFamily="Plus Jakarta Sans,sans-serif"
                      fontSize="11.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      WealthTech
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
                    <circle cx="250.0" cy="415.0" r="34" stroke="#fff" strokeOpacity=".5">
                      <animate
                        attributeName="r"
                        values="34;44;34"
                        dur="4s"
                        begin="1.8s"
                        repeatCount="indefinite"
                      ></animate>{" "}
                      <animate
                        attributeName="stroke-opacity"
                        values=".5;0;.5"
                        dur="4s"
                        begin="1.8s"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>{" "}
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
                    <circle cx="107.1" cy="332.5" r="34" stroke="#fff" strokeOpacity=".5">
                      <animate
                        attributeName="r"
                        values="34;44;34"
                        dur="4s"
                        begin="2.4s"
                        repeatCount="indefinite"
                      ></animate>{" "}
                      <animate
                        attributeName="stroke-opacity"
                        values=".5;0;.5"
                        dur="4s"
                        begin="2.4s"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>{" "}
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
                    <circle cx="107.1" cy="167.5" r="34" stroke="#fff" strokeOpacity=".5">
                      <animate
                        attributeName="r"
                        values="34;44;34"
                        dur="4s"
                        begin="3.0s"
                        repeatCount="indefinite"
                      ></animate>{" "}
                      <animate
                        attributeName="stroke-opacity"
                        values=".5;0;.5"
                        dur="4s"
                        begin="3.0s"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>{" "}
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
                <small>Flagship event</small> <h3>Global Fintech Fest</h3>{" "}
                <p style={{ maxWidth: "420px", opacity: ".92" }}>
                  One of the world's largest fintech gatherings, bringing regulators, banks,
                  fintechs and investors together in Mumbai every year.
                </p>
              </div>{" "}
              <div className="meta">
                <span>📍 Jio World Centre, Mumbai</span> <span>Visit website →</span>
              </div>
            </a>
            <div className="ev-list">
              <a href="https://globalfintechfest.com/" className="ev-item">
                <div className="ev-date">
                  <b>2025</b> <span>12–16 May</span>
                </div>{" "}
                <div>
                  <h4>Mission Trip to Japan</h4> <p>Tokyo, Japan</p>
                </div>
              </a>{" "}
              <a href="/live-events" className="ev-item">
                <div className="ev-date">
                  <b>2024</b> <span>19 Dec</span>
                </div>{" "}
                <div>
                  <h4>India&#x27;s Innovation for the World</h4> <p>India</p>
                </div>
              </a>{" "}
              <a href="https://globalfintechfest.com/" className="ev-item">
                <div className="ev-date">
                  <b>2024</b> <span>28–30 Aug</span>
                </div>{" "}
                <div>
                  <h4>Global Fintech Fest 2024</h4> <p>Jio World Centre, Mumbai</p>
                </div>
              </a>{" "}
              <a href="https://globalfintechfest.com/2023/" className="ev-item">
                <div className="ev-date">
                  <b>2023</b> <span>5–7 Sep</span>
                </div>{" "}
                <div>
                  <h4>Global Fintech Fest 2023</h4> <p>Jio World Centre, Mumbai</p>
                </div>
              </a>
            </div>
          </div>
          <div style={{ marginTop: "44px" }} className="sec-head">
            <div>
              <span className="eyebrow">Latest knowledge sessions</span>
            </div>{" "}
            <a href="/virtual-events" className="link-arrow" style={{ color: "#fff" }}>
              All 38 sessions{" "}
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
            </a>
          </div>
          <div className="web-grid reveal">
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">02</div> <div className="m">Apr 2026</div>
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
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>{" "}
                  <path d="M16 10l5-3v10l-5-3"></path>
                </svg>
              </div>{" "}
              <div className="wbody">
                <h4>Role of AI in transforming insurance processing</h4>{" "}
                <span className="time">3:30–4:30 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">17</div> <div className="m">Mar 2026</div>
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
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>{" "}
                  <path d="M16 10l5-3v10l-5-3"></path>
                </svg>
              </div>{" "}
              <div className="wbody">
                <h4>Alternative Investment Funds in India: FY 2025 in review</h4>{" "}
                <span className="time">3:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">16</div> <div className="m">Mar 2026</div>
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
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>{" "}
                  <path d="M16 10l5-3v10l-5-3"></path>
                </svg>
              </div>{" "}
              <div className="wbody">
                <h4>Evolving GST implementation: law and practice</h4>{" "}
                <span className="time">3:00–4:30 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">13</div> <div className="m">Mar 2026</div>
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
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>{" "}
                  <path d="M16 10l5-3v10l-5-3"></path>
                </svg>
              </div>{" "}
              <div className="wbody">
                <h4>RE–LSP compliance essentials</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Research</span>{" "}
              <h2>{research.heading}</h2>
            </div>{" "}
            <a href="/research" className="btn btn-outline">
              All research
            </a>
          </div>
          <div className="covers reveal">
            <a
              href="https://www.fintechcouncil.in/images/Building%20Bridges%20for%20the%20Next%20Decade%20of%20Finance.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
            >
              <div className="book b1">
                <span className="kind">FCC · Report</span>{" "}
                <h4>Building Bridges for the Next Decade of Finance</h4>{" "}
                <span className="yr">FCC × IAMAI</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 90 L30 60 L50 70 L75 30 L95 10"></path>{" "}
                  <circle cx="95" cy="10" r="4" fill="#fff"></circle>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report</span>{" "}
                <span className="link-arrow">
                  PDF{" "}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                  </svg>
                </span>
              </div>
            </a>{" "}
            <a
              href="https://www.fintechcouncil.in/images/UPI%20for%20Her.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
            >
              <div className="book b2">
                <span className="kind">FCC · Report</span> <h4>UPI for Her</h4>{" "}
                <span className="yr">FCC × IAMAI</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <circle cx="50" cy="50" r="40"></circle> <circle cx="50" cy="50" r="24"></circle>{" "}
                  <circle cx="50" cy="50" r="8" fill="#fff"></circle>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report</span>{" "}
                <span className="link-arrow">
                  PDF{" "}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                  </svg>
                </span>
              </div>
            </a>{" "}
            <a
              href="https://www.fintechcouncil.in/images/Mapping%20the%20FinTech%20Innovation%20Landscape%20in%20India%20and%20comparing%20it%20with%20global%20trends.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
            >
              <div className="book b3">
                <span className="kind">FCC · Report</span>{" "}
                <h4>Mapping the FinTech Innovation Landscape in India</h4>{" "}
                <span className="yr">FCC × IAMAI</span>{" "}
                <svg viewBox="0 0 100 100" fill="#fff">
                  <rect x="8" y="70" width="16" height="30"></rect>{" "}
                  <rect x="32" y="50" width="16" height="50"></rect>{" "}
                  <rect x="56" y="30" width="16" height="70"></rect>{" "}
                  <rect x="80" y="5" width="16" height="95"></rect>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report</span>{" "}
                <span className="link-arrow">
                  PDF{" "}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                  </svg>
                </span>
              </div>
            </a>{" "}
            <a
              href="https://www.fintechcouncil.in/images/4.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
            >
              <div className="book b4">
                <span className="kind">FCC · Report</span>{" "}
                <h4>SuperApps: Breaking down barriers, building bridges</h4>{" "}
                <span className="yr">FCC × IAMAI</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <polygon points="50,5 95,30 95,75 50,98 5,75 5,30"></polygon>{" "}
                  <polygon points="50,30 72,42 72,62 50,74 28,62 28,42"></polygon>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report</span>{" "}
                <span className="link-arrow">
                  PDF{" "}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Our members</span>{" "}
              <h2>{membersSection.heading}</h2>{" "}
              <p className="lead">
                Lenders, banks, insurers, investment platforms, bureaus and RegTech firms shape the
                council's work.
              </p>
            </div>{" "}
            <a href="/members" className="btn btn-outline">
              Member directory
            </a>
          </div>
          <div className="marquee" style={{ marginBottom: "12px" }}>
            <div className="marquee-track">
              <span className="mq">
                <i>A</i>ALT.DRX
              </span>{" "}
              <span className="mq">
                <i>AO</i>Angel One
              </span>{" "}
              <span className="mq">
                <i>A</i>Aska
              </span>{" "}
              <span className="mq">
                <i>A</i>Axio
              </span>{" "}
              <span className="mq">
                <i>B</i>Bankify
              </span>{" "}
              <span className="mq">
                <i>B</i>Bitsyyloan
              </span>{" "}
              <span className="mq">
                <i>B</i>Bondbazaar
              </span>{" "}
              <span className="mq">
                <i>B</i>Bureau.Id
              </span>{" "}
              <span className="mq">
                <i>CP</i>Care Pay
              </span>{" "}
              <span className="mq">
                <i>C</i>Castler
              </span>{" "}
              <span className="mq">
                <i>C</i>CIBIL
              </span>{" "}
              <span className="mq">
                <i>C</i>Credilio
              </span>{" "}
              <span className="mq">
                <i>CS</i>Credit Saison India
              </span>{" "}
              <span className="mq">
                <i>C</i>Credresolve
              </span>{" "}
              <span className="mq">
                <i>CM</i>Curie Money
              </span>{" "}
              <span className="mq">
                <i>D</i>Decentro
              </span>{" "}
              <span className="mq">
                <i>D</i>Dhan
              </span>{" "}
              <span className="mq">
                <i>D</i>Digiqt
              </span>{" "}
              <span className="mq">
                <i>D</i>Doqfy
              </span>{" "}
              <span className="mq">
                <i>E</i>Easemydeal
              </span>{" "}
              <span className="mq">
                <i>E</i>Emudhra
              </span>{" "}
              <span className="mq">
                <i>E</i>Equifax
              </span>{" "}
              <span className="mq">
                <i>E</i>Experian
              </span>{" "}
              <span className="mq">
                <i>F</i>Faircent
              </span>{" "}
              <span className="mq">
                <i>F</i>Fampay
              </span>{" "}
              <span className="mq">
                <i>F</i>Finart
              </span>{" "}
              <span className="mq">
                <i>F</i>Finbox
              </span>{" "}
              <span className="mq">
                <i>F</i>Finsall
              </span>{" "}
              <span className="mq">
                <i>F</i>Fios
              </span>{" "}
              <span className="mq">
                <i>F</i>Flexpay
              </span>{" "}
              <span className="mq">
                <i>F</i>FPL
              </span>{" "}
              <span className="mq">
                <i>G</i>Ginteja
              </span>{" "}
              <span className="mq">
                <i>G</i>Gridlines
              </span>{" "}
              <span className="mq">
                <i>G</i>Gromo
              </span>{" "}
              <span className="mq">
                <i>HT</i>Huey Tech
              </span>{" "}
              <span className="mq">
                <i>IL</i>ICICI Lombard
              </span>{" "}
              <span className="mq">
                <i>I</i>IDfy
              </span>{" "}
              <span className="mq">
                <i>IP</i>India P2P
              </span>{" "}
              <span className="mq">
                <i>I</i>Indifi
              </span>{" "}
              <span className="mq">
                <i>IN</i>Indus Net Technologies
              </span>{" "}
              <span className="mq">
                <i>A</i>ALT.DRX
              </span>{" "}
              <span className="mq">
                <i>AO</i>Angel One
              </span>{" "}
              <span className="mq">
                <i>A</i>Aska
              </span>{" "}
              <span className="mq">
                <i>A</i>Axio
              </span>{" "}
              <span className="mq">
                <i>B</i>Bankify
              </span>{" "}
              <span className="mq">
                <i>B</i>Bitsyyloan
              </span>{" "}
              <span className="mq">
                <i>B</i>Bondbazaar
              </span>{" "}
              <span className="mq">
                <i>B</i>Bureau.Id
              </span>{" "}
              <span className="mq">
                <i>CP</i>Care Pay
              </span>{" "}
              <span className="mq">
                <i>C</i>Castler
              </span>{" "}
              <span className="mq">
                <i>C</i>CIBIL
              </span>{" "}
              <span className="mq">
                <i>C</i>Credilio
              </span>{" "}
              <span className="mq">
                <i>CS</i>Credit Saison India
              </span>{" "}
              <span className="mq">
                <i>C</i>Credresolve
              </span>{" "}
              <span className="mq">
                <i>CM</i>Curie Money
              </span>{" "}
              <span className="mq">
                <i>D</i>Decentro
              </span>{" "}
              <span className="mq">
                <i>D</i>Dhan
              </span>{" "}
              <span className="mq">
                <i>D</i>Digiqt
              </span>{" "}
              <span className="mq">
                <i>D</i>Doqfy
              </span>{" "}
              <span className="mq">
                <i>E</i>Easemydeal
              </span>{" "}
              <span className="mq">
                <i>E</i>Emudhra
              </span>{" "}
              <span className="mq">
                <i>E</i>Equifax
              </span>{" "}
              <span className="mq">
                <i>E</i>Experian
              </span>{" "}
              <span className="mq">
                <i>F</i>Faircent
              </span>{" "}
              <span className="mq">
                <i>F</i>Fampay
              </span>{" "}
              <span className="mq">
                <i>F</i>Finart
              </span>{" "}
              <span className="mq">
                <i>F</i>Finbox
              </span>{" "}
              <span className="mq">
                <i>F</i>Finsall
              </span>{" "}
              <span className="mq">
                <i>F</i>Fios
              </span>{" "}
              <span className="mq">
                <i>F</i>Flexpay
              </span>{" "}
              <span className="mq">
                <i>F</i>FPL
              </span>{" "}
              <span className="mq">
                <i>G</i>Ginteja
              </span>{" "}
              <span className="mq">
                <i>G</i>Gridlines
              </span>{" "}
              <span className="mq">
                <i>G</i>Gromo
              </span>{" "}
              <span className="mq">
                <i>HT</i>Huey Tech
              </span>{" "}
              <span className="mq">
                <i>IL</i>ICICI Lombard
              </span>{" "}
              <span className="mq">
                <i>I</i>IDfy
              </span>{" "}
              <span className="mq">
                <i>IP</i>India P2P
              </span>{" "}
              <span className="mq">
                <i>I</i>Indifi
              </span>{" "}
              <span className="mq">
                <i>IN</i>Indus Net Technologies
              </span>
            </div>
          </div>{" "}
          <div className="marquee rev" style={{ marginBottom: "12px" }}>
            <div className="marquee-track">
              <span className="mq">
                <i>A</i>Ambak
              </span>{" "}
              <span className="mq">
                <i>A</i>Arya.ai
              </span>{" "}
              <span className="mq">
                <i>A</i>Assetgro
              </span>{" "}
              <span className="mq">
                <i>BT</i>Backspace Tech
              </span>{" "}
              <span className="mq">
                <i>BP</i>Bima Plan
              </span>{" "}
              <span className="mq">
                <i>B</i>Biz2x
              </span>{" "}
              <span className="mq">
                <i>B</i>BuddyLoan
              </span>{" "}
              <span className="mq">
                <i>BM</i>Butter Money
              </span>{" "}
              <span className="mq">
                <i>C</i>Cashe
              </span>{" "}
              <span className="mq">
                <i>C</i>Cherry
              </span>{" "}
              <span className="mq">
                <i>C</i>Ckers
              </span>{" "}
              <span className="mq">
                <i>CM</i>Credit Mantri
              </span>{" "}
              <span className="mq">
                <i>C</i>Creditt
              </span>{" "}
              <span className="mq">
                <i>CH</i>CRIF High Mark
              </span>{" "}
              <span className="mq">
                <i>DS</i>Data Science Wizard
              </span>{" "}
              <span className="mq">
                <i>D</i>Deepvue
              </span>{" "}
              <span className="mq">
                <i>D</i>Digio
              </span>{" "}
              <span className="mq">
                <i>DF</i>DMI Finance
              </span>{" "}
              <span className="mq">
                <i>DC</i>Drip Capital
              </span>{" "}
              <span className="mq">
                <i>EC</i>Eliteeye Consulting
              </span>{" "}
              <span className="mq">
                <i>E</i>EnKash
              </span>{" "}
              <span className="mq">
                <i>EM</i>ET Money
              </span>{" "}
              <span className="mq">
                <i>F</i>Facctum
              </span>{" "}
              <span className="mq">
                <i>F</i>Falcon
              </span>{" "}
              <span className="mq">
                <i>F</i>Fatakpay
              </span>{" "}
              <span className="mq">
                <i>F</i>FINB
              </span>{" "}
              <span className="mq">
                <i>FS</i>Finnup Solutions
              </span>{" "}
              <span className="mq">
                <i>F</i>Fintoo
              </span>{" "}
              <span className="mq">
                <i>F</i>Flexiloans
              </span>{" "}
              <span className="mq">
                <i>F</i>Flywire
              </span>{" "}
              <span className="mq">
                <i>F</i>Freo
              </span>{" "}
              <span className="mq">
                <i>G</i>GoCredit
              </span>{" "}
              <span className="mq">
                <i>G</i>Grip
              </span>{" "}
              <span className="mq">
                <i>G</i>Groww
              </span>{" "}
              <span className="mq">
                <i>H</i>Hyperverge
              </span>{" "}
              <span className="mq">
                <i>IS</i>ICICI Securities
              </span>{" "}
              <span className="mq">
                <i>I</i>IDIGICLOUD
              </span>{" "}
              <span className="mq">
                <i>I</i>Indiagold
              </span>{" "}
              <span className="mq">
                <i>I</i>INDMoney
              </span>{" "}
              <span className="mq">
                <i>ID</i>Insurance Dekho
              </span>{" "}
              <span className="mq">
                <i>A</i>Ambak
              </span>{" "}
              <span className="mq">
                <i>A</i>Arya.ai
              </span>{" "}
              <span className="mq">
                <i>A</i>Assetgro
              </span>{" "}
              <span className="mq">
                <i>BT</i>Backspace Tech
              </span>{" "}
              <span className="mq">
                <i>BP</i>Bima Plan
              </span>{" "}
              <span className="mq">
                <i>B</i>Biz2x
              </span>{" "}
              <span className="mq">
                <i>B</i>BuddyLoan
              </span>{" "}
              <span className="mq">
                <i>BM</i>Butter Money
              </span>{" "}
              <span className="mq">
                <i>C</i>Cashe
              </span>{" "}
              <span className="mq">
                <i>C</i>Cherry
              </span>{" "}
              <span className="mq">
                <i>C</i>Ckers
              </span>{" "}
              <span className="mq">
                <i>CM</i>Credit Mantri
              </span>{" "}
              <span className="mq">
                <i>C</i>Creditt
              </span>{" "}
              <span className="mq">
                <i>CH</i>CRIF High Mark
              </span>{" "}
              <span className="mq">
                <i>DS</i>Data Science Wizard
              </span>{" "}
              <span className="mq">
                <i>D</i>Deepvue
              </span>{" "}
              <span className="mq">
                <i>D</i>Digio
              </span>{" "}
              <span className="mq">
                <i>DF</i>DMI Finance
              </span>{" "}
              <span className="mq">
                <i>DC</i>Drip Capital
              </span>{" "}
              <span className="mq">
                <i>EC</i>Eliteeye Consulting
              </span>{" "}
              <span className="mq">
                <i>E</i>EnKash
              </span>{" "}
              <span className="mq">
                <i>EM</i>ET Money
              </span>{" "}
              <span className="mq">
                <i>F</i>Facctum
              </span>{" "}
              <span className="mq">
                <i>F</i>Falcon
              </span>{" "}
              <span className="mq">
                <i>F</i>Fatakpay
              </span>{" "}
              <span className="mq">
                <i>F</i>FINB
              </span>{" "}
              <span className="mq">
                <i>FS</i>Finnup Solutions
              </span>{" "}
              <span className="mq">
                <i>F</i>Fintoo
              </span>{" "}
              <span className="mq">
                <i>F</i>Flexiloans
              </span>{" "}
              <span className="mq">
                <i>F</i>Flywire
              </span>{" "}
              <span className="mq">
                <i>F</i>Freo
              </span>{" "}
              <span className="mq">
                <i>G</i>GoCredit
              </span>{" "}
              <span className="mq">
                <i>G</i>Grip
              </span>{" "}
              <span className="mq">
                <i>G</i>Groww
              </span>{" "}
              <span className="mq">
                <i>H</i>Hyperverge
              </span>{" "}
              <span className="mq">
                <i>IS</i>ICICI Securities
              </span>{" "}
              <span className="mq">
                <i>I</i>IDIGICLOUD
              </span>{" "}
              <span className="mq">
                <i>I</i>Indiagold
              </span>{" "}
              <span className="mq">
                <i>I</i>INDMoney
              </span>{" "}
              <span className="mq">
                <i>ID</i>Insurance Dekho
              </span>
            </div>
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
                  <circle cx="250.0" cy="85.0" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="0.0s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="0.0s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
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
                  <circle cx="392.9" cy="167.5" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="0.6s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="0.6s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
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
                  <circle cx="392.9" cy="332.5" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="1.2s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="1.2s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
                  <text
                    x="392.9"
                    y="336.5"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    WealthTech
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
                  <circle cx="250.0" cy="415.0" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="1.8s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="1.8s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
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
                  <circle cx="107.1" cy="332.5" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="2.4s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="2.4s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
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
                  <circle cx="107.1" cy="167.5" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="3.0s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="3.0s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
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
              <span className="eyebrow">{cta.eyebrow}</span>{" "}
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
