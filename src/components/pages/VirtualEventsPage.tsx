"use client";

import { useState } from "react";
import type { VirtualEventsContent } from "@/lib/cms-types";

export function VirtualEventsPage({ content }: { content: VirtualEventsContent }) {
  const [selectedYear, setSelectedYear] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const items = content.items || [];

  // Filter items
  const filteredItems = items.filter((item) => {
    if (selectedYear === "all") return true;
    const tag = (item.year_tag || "").toLowerCase();
    const month = (item.month || "").toLowerCase();
    return tag.includes(selectedYear.toLowerCase()) || month.includes(selectedYear.toLowerCase());
  });

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 12);

  // Compute year counts
  const count2026 = items.filter((i) => (i.year_tag || "").includes("2026") || (i.month || "").includes("2026")).length;
  const count2025 = items.filter((i) => (i.year_tag || "").includes("2025") || (i.month || "").includes("2025")).length;
  const count2024 = items.filter((i) => (i.year_tag || "").includes("2024") || (i.month || "").includes("2024")).length;

  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/live-events">Events</a> <span>/</span>
              Virtual Events
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
                x="40"
                y="46"
                width="220"
                height="140"
                rx="12"
                fill="rgba(255,255,255,.12)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <path
                d="M120 210h60M150 186v24"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <rect x="56" y="62" width="60" height="48" rx="6" fill="rgba(255,255,255,0.3)"></rect>{" "}
              <rect
                x="126"
                y="62"
                width="60"
                height="48"
                rx="6"
                fill="rgba(255,255,255,0.18)"
              ></rect>{" "}
              <rect
                x="196"
                y="62"
                width="60"
                height="48"
                rx="6"
                fill="rgba(255,255,255,0.3)"
              ></rect>{" "}
              <rect
                x="56"
                y="120"
                width="60"
                height="48"
                rx="6"
                fill="rgba(255,255,255,0.18)"
              ></rect>{" "}
              <rect
                x="126"
                y="120"
                width="60"
                height="48"
                rx="6"
                fill="rgba(255,255,255,0.3)"
              ></rect>{" "}
              <rect
                x="196"
                y="120"
                width="60"
                height="48"
                rx="6"
                fill="rgba(255,255,255,0.18)"
              ></rect>{" "}
              <circle cx="150" cy="110" r="14" fill="#fff"></circle>{" "}
              <path d="M146 103l10 7-10 7z" fill="#BF1A1F"></path>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/live-events">Live Events</a>{" "}
          <a href="/virtual-events" className="on">
            Virtual Events
          </a>
        </div>
      </nav>

      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">{content.summary?.eyebrow || "Knowledge sessions"}</span>{" "}
            <h2>{content.summary?.heading || `${items.length} sessions since 2024`}</h2>{" "}
            <p className="lead">
              {content.summary?.lead ||
                "Most sessions run as one-hour virtual panels in the afternoon (IST), open to members and the wider ecosystem. Registrations: "}{" "}
              <a
                href={`mailto:${content.summary?.email || "register@fintechcouncil.in"}`}
                style={{ color: "var(--red)", fontWeight: "700" }}
              >
                {content.summary?.email || "register@fintechcouncil.in"}
              </a>
            </p>
            <div style={{ display: "flex", gap: "28px", marginTop: "22px", flexWrap: "wrap" }}>
              {(content.summary?.year_counts || [
                { count: String(count2026 || 11), year: "in 2026" },
                { count: String(count2025 || 14), year: "in 2025" },
                { count: String(count2024 || 13), year: "in 2024" },
              ]).map((yc, idx) => (
                <div key={idx}>
                  <b style={{ fontSize: "1.8rem", fontWeight: "800" }}>{yc.count}</b>{" "}
                  <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>{yc.year}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card reveal">
            <span className="eyebrow">Topics covered</span>{" "}
            <div className="hbar" style={{ marginTop: "18px" }}>
              {(content.topics || [
                { topic: "RegTech & compliance", count: "19", width: "100%" },
                { topic: "Lending", count: "6", width: "32%" },
                { topic: "Insurance", count: "5", width: "26%" },
                { topic: "Investments", count: "4", width: "21%" },
                { topic: "Credit", count: "1", width: "5%" },
              ]).map((top, idx) => (
                <div className="r" style={{ gridTemplateColumns: "150px 1fr 30px" }} key={idx}>
                  <b style={{ fontFamily: "var(--sans)", fontWeight: "600" }}>{top.topic}</b>{" "}
                  <div className="track">
                    <div className="fill" style={{ width: top.width }}></div>
                  </div>{" "}
                  <span className="v">{top.count}</span>
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
              <span className="eyebrow">Archive</span> <h2>All sessions</h2>
            </div>
          </div>
          <div className="filters">
            <button
              className={`chip ${selectedYear === "all" ? "active" : ""}`}
              onClick={() => setSelectedYear("all")}
            >
              All <span className="n">{items.length}</span>
            </button>{" "}
            <button
              className={`chip ${selectedYear === "2026" ? "active" : ""}`}
              onClick={() => setSelectedYear("2026")}
            >
              2026 <span className="n">{count2026}</span>
            </button>{" "}
            <button
              className={`chip ${selectedYear === "2025" ? "active" : ""}`}
              onClick={() => setSelectedYear("2025")}
            >
              2025 <span className="n">{count2025}</span>
            </button>{" "}
            <button
              className={`chip ${selectedYear === "2024" ? "active" : ""}`}
              onClick={() => setSelectedYear("2024")}
            >
              2024 <span className="n">{count2024}</span>
            </button>
          </div>
          <div className="web-grid" id="webs">
            {displayedItems.map((event, idx) => {
              const dayStr =
                typeof event.day === "number"
                  ? String(event.day).padStart(2, "0")
                  : String(event.day || "");

              return (
                <div className="web" data-r={event.year_tag} key={idx}>
                  <div className="wtop">
                    <div>
                      <div className="d">{dayStr}</div> <div className="m">{event.month}</div>
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
                    <h4>{event.title}</h4>{" "}
                    <span className="time">{event.time}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length > 12 && (
            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show less" : `Show all ${filteredItems.length}`}
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
              <h2>{content.bottom_cta?.heading || "Want to host a session with FCC?"}</h2>{" "}
              <p>
                {content.bottom_cta?.description ||
                  "Partners can run knowledge sessions, workshops and think tanks with FCC members."}
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
              ]).map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
