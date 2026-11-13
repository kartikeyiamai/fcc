"use client";

import { useState } from "react";
import type { PolicyContent } from "@/lib/cms-types";

export function PolicyPage({ content }: { content: PolicyContent }) {
  const [repFilter, setRepFilter] = useState("all");
  const [expandedReps, setExpandedReps] = useState<Record<string, boolean>>({});
  const [subFilter, setSubFilter] = useState("all");
  const [showAllSubs, setShowAllSubs] = useState(false);
  const [expandedSubs, setExpandedSubs] = useState<Record<string, boolean>>({});

  const toggleRep = (id: string) => {
    setExpandedReps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSub = (key: string) => {
    setExpandedSubs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const keyReps = content.key_representations || [];
  const filteredReps = keyReps.filter((rep) => {
    if (repFilter === "all") return true;
    return (rep.regulator || "").toLowerCase() === repFilter.toLowerCase() ||
      (rep.data_r || "").toLowerCase().includes(repFilter.toLowerCase());
  });

  const allSubs = content.recent_submissions || [];
  const filteredSubs = allSubs.filter((sub) => {
    if (subFilter === "all") return true;
    if (subFilter.toLowerCase() === "session") {
      return (sub.tag || "").toLowerCase().includes("session") || (sub.data_r || "").toLowerCase().includes("session");
    }
    return (sub.tag || "").toLowerCase().includes(subFilter.toLowerCase()) ||
      (sub.data_r || "").toLowerCase().includes(subFilter.toLowerCase());
  });

  const displayedSubs = showAllSubs ? filteredSubs : filteredSubs.slice(0, 12);

  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/policy">Policy &amp; Research</a>{" "}
              <span>/</span>Policy
            </div>{" "}
            <h1>{content.page.title}</h1>{" "}
            <p>{content.page.description}</p>
          </div>{" "}
          <div className="ph-art">
            <svg viewBox="0 0 300 240" aria-hidden="true">
              <circle
                cx="150"
                cy="120"
                r="110"
                stroke="rgba(255,255,255,.15)"
                fill="none"
                strokeDasharray="3 7"
              ></circle>{" "}
              <rect
                x="80"
                y="34"
                width="140"
                height="176"
                rx="12"
                fill="rgba(255,255,255,.12)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <path
                d="M104 74h92M104 102h92M104 130h60"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <circle cx="218" cy="190" r="26" fill="#fff"></circle>{" "}
              <text
                x="218"
                y="196"
                fill="#BF1A1F"
                fontFamily="Plus Jakarta Sans"
                fontWeight="800"
                fontSize="18"
                textAnchor="middle"
              >
                FCC
              </text>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/policy" className="on">
            Policy
          </a>{" "}
          <a href="/research">Research</a>
        </div>
      </nav>
      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">{content.at_a_glance?.eyebrow || "At a glance"}</span>{" "}
            <h2>{content.at_a_glance?.heading || "Where our representations go"}</h2>{" "}
            <p className="lead">
              {content.at_a_glance?.lead ||
                "Count of representations listed on this page, by regulator or government body."}
            </p>
            <div style={{ marginTop: "22px", display: "flex", gap: "28px", flexWrap: "wrap" }}>
              {(content.at_a_glance?.stats || [
                { value: "36", label: "representations" },
                { value: "7", label: "bodies engaged" },
                { value: "7", label: "policy sessions" },
              ]).map((st, i) => (
                <div key={i}>
                  <b style={{ fontSize: "2rem", fontWeight: "800" }}>{st.value}</b>{" "}
                  <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card reveal">
            <div className="hbar">
              {(content.at_a_glance?.breakdown || [
                { regulator: "RBI", count: "18", width: "100%" },
                { regulator: "IRDAI", count: "7", width: "39%" },
                { regulator: "SEBI", count: "4", width: "22%" },
                { regulator: "NPCI", count: "3", width: "17%" },
                { regulator: "MeitY", count: "2", width: "11%" },
                { regulator: "CERSAI", count: "1", width: "6%" },
                { regulator: "IBBI", count: "1", width: "6%" },
              ]).map((b, i) => (
                <div className="r" key={i}>
                  <b>{b.regulator}</b>{" "}
                  <div className="track">
                    <div className="fill" style={{ width: b.width }}></div>
                  </div>{" "}
                  <span className="v">{b.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Concept notes</span> <h2>Key representations</h2>{" "}
              <p className="lead">
                In-depth notes setting out the industry&apos;s position on major regulatory questions.
              </p>
            </div>
          </div>
          <div className="filters">
            {["all", "RBI", "SEBI", "IRDAI"].map((f) => (
              <button
                key={f}
                className={`chip ${repFilter.toLowerCase() === f.toLowerCase() ? "active" : ""}`}
                onClick={() => setRepFilter(f)}
              >
                {f === "all" ? "All" : f}
              </button>
            ))}
          </div>
          <div id="notes" style={{ display: "grid", gap: "12px" }}>
            {filteredReps.map((rep, idx) => {
              const repKey = rep.id || `rep-${idx}`;
              const isExpanded = !!expandedReps[repKey];
              return (
                <div className="rep" data-r={rep.data_r} key={repKey}>
                  <div className="doc">{rep.regulator}</div>{" "}
                  <div className="rep-main">
                    <h4>{rep.title}</h4>{" "}
                    <p>{rep.tag}</p>
                    <div
                      className="rep-details"
                      style={{ display: isExpanded ? "block" : "none", marginTop: "12px" }}
                    >
                      {(rep.paragraphs || []).map((p, i) => (
                        <p key={i} style={{ marginBottom: "8px", color: "var(--muted)", lineHeight: 1.6 }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>{" "}
                  <button
                    type="button"
                    className="go rep-toggle"
                    aria-expanded={isExpanded}
                    aria-label={`Read more about ${rep.title}`}
                    onClick={() => toggleRep(repKey)}
                    style={{ background: "transparent", border: "0", cursor: "pointer" }}
                  >
                    <span className="rep-toggle-label">{isExpanded ? "Read Less" : "Read More"}</span>{" "}
                    <svg
                      className="rep-chevron"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Activity log</span>{" "}
              <h2>Recent submissions &amp; sessions</h2>
            </div>
          </div>
          <div className="filters">
            {["all", "RBI", "SEBI", "IRDAI", "NPCI", "MeitY", "CERSAI", "IBBI", "Session"].map((f) => (
              <button
                key={f}
                className={`chip ${subFilter.toLowerCase() === f.toLowerCase() ? "active" : ""}`}
                onClick={() => setSubFilter(f)}
              >
                {f === "all" ? "All" : f === "Session" ? "Knowledge sessions" : f}
              </button>
            ))}
          </div>{" "}
          <div className="tracker" id="tracker">
            {displayedSubs.map((sub, i) => {
              const subKey = sub.title ? `sub-${sub.title}-${i}` : `sub-${i}`;
              const isExpanded = !!expandedSubs[subKey];
              const hasDesc = Boolean(sub.description && sub.description.trim());

              return (
                <div className="sub" data-r={sub.data_r} key={subKey}>
                  <div className="top">
                    <span className="tag">{sub.tag}</span> <span className="status">{sub.status}</span>
                  </div>{" "}
                  <h4>{sub.title}</h4>
                  {hasDesc && isExpanded && (
                    <p className="sub-desc">{sub.description}</p>
                  )}
                  {hasDesc && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "auto",
                        paddingTop: "4px",
                      }}
                    >
                      <button
                        type="button"
                        className="sub-toggle"
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? "Collapse description" : "Expand description"}
                        onClick={() => toggleSub(subKey)}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          style={{
                            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {filteredSubs.length > 12 && (
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowAllSubs(!showAllSubs)}
              >
                {showAllSubs ? "Show less" : `Show all ${filteredSubs.length}`}
              </button>
            </div>
          )}
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
              <span className="eyebrow">
                {content.bottom_cta?.eyebrow || "Membership & partnership"}
              </span>{" "}
              <h2>{content.bottom_cta?.heading || "Have a seat at the table where fintech policy is shaped."}</h2>{" "}
              <p>
                {content.bottom_cta?.description ||
                  "Join FCC as a member, or partner with us on events, research and industry programmes."}
              </p>
              <div className="cta-actions">
                <a
                  href={content.bottom_cta?.primary_cta_href || "/apply-membership"}
                  className="btn btn-light"
                >
                  {content.bottom_cta?.primary_cta_label || "Apply for membership"}
                </a>{" "}
                <a
                  href={content.bottom_cta?.secondary_cta_href || "/apply-partnership"}
                  className="btn btn-ghost"
                >
                  {content.bottom_cta?.secondary_cta_label || "Partner with us"}
                </a>
              </div>
            </div>
            <ul className="checks">
              {(content.bottom_cta?.benefits || [
                "Direct input into representations to regulators",
                "A seat on sector committees with industry peers",
                "Complimentary passes to FCC and IAMAI conferences",
                "Members-only roundtables and every FCC report",
              ]).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
