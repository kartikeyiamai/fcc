"use client";

import { useState } from "react";
import type { PublicationsContent } from "@/lib/cms-types";

function renderBookSvg(variant: string) {
  if (variant === "b2") {
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
        <circle cx="50" cy="50" r="40"></circle> <circle cx="50" cy="50" r="24"></circle>{" "}
        <circle cx="50" cy="50" r="8" fill="#fff"></circle>
      </svg>
    );
  }
  if (variant === "b3") {
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
        <rect x="15" y="55" width="14" height="35" rx="3" fill="rgba(255,255,255,.3)"></rect>{" "}
        <rect x="37" y="40" width="14" height="50" rx="3" fill="rgba(255,255,255,.45)"></rect>{" "}
        <rect x="59" y="25" width="14" height="65" rx="3" fill="rgba(255,255,255,.6)"></rect>
      </svg>
    );
  }
  if (variant === "b4") {
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
        <path d="M50 15 L80 32 L80 68 L50 85 L20 68 L20 32 Z"></path>{" "}
        <path d="M50 30 L68 40 L68 60 L50 70 L32 60 L32 40 Z"></path>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
      <path d="M5 90 L30 60 L50 70 L75 30 L95 10"></path>{" "}
      <circle cx="95" cy="10" r="4" fill="#fff"></circle>
    </svg>
  );
}

export function ResearchPage({ content }: { content: PublicationsContent }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const items = content.items || [];

  // Compute categories and counts
  const categoryCounts: Record<string, number> = { all: items.length };
  items.forEach((item) => {
    const cat = item.category || (item.kind || "").replace(/^FCC\s*·\s*/i, "").trim() || "Report";
    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  });

  const categories = Object.keys(categoryCounts).filter((c) => c !== "all");

  const filteredItems = items.filter((item) => {
    if (selectedFilter === "all") return true;
    const cat = item.category || (item.kind || "").replace(/^FCC\s*·\s*/i, "").trim() || "Report";
    return cat.toLowerCase() === selectedFilter.toLowerCase();
  });

  const featured = content.featured;

  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/policy">Policy &amp; Research</a>{" "}
              <span>/</span>Research
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
              <path
                d="M40 200h220"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <rect
                x="60"
                y="150"
                width="24"
                height="50"
                rx="4"
                fill="rgba(255,255,255,0.2)"
              ></rect>{" "}
              <rect
                x="100"
                y="120"
                width="24"
                height="80"
                rx="4"
                fill="rgba(255,255,255,0.32)"
              ></rect>{" "}
              <rect
                x="140"
                y="130"
                width="24"
                height="70"
                rx="4"
                fill="rgba(255,255,255,0.44)"
              ></rect>{" "}
              <rect
                x="180"
                y="80"
                width="24"
                height="120"
                rx="4"
                fill="rgba(255,255,255,0.56)"
              ></rect>{" "}
              <rect
                x="220"
                y="50"
                width="24"
                height="150"
                rx="4"
                fill="rgba(255,255,255,0.6799999999999999)"
              ></rect>{" "}
              <path
                d="M60 140 L112 110 L150 122 L190 70 L240 40"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <circle cx="240" cy="40" r="6" fill="#fff"></circle>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/policy">Policy</a>{" "}
          <a href="/research" className="on">
            Research
          </a>
        </div>
      </nav>
      <section>
        <div className="wrap">
          {featured && (
            <div
              className="card reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "240px 1fr",
                gap: "36px",
                alignItems: "center",
                marginBottom: "56px",
                background: "var(--bg)",
                border: "0",
              }}
              id="featured"
            >
              <a
                href={featured.href}
                target="_blank"
                rel="noopener"
                className="cover"
              >
                <div className={`book ${featured.cover_variant || "b1"}`}>
                  <span className="kind">{featured.badge || "FCC · Featured"}</span>{" "}
                  <h4>{featured.title}</h4>{" "}
                  <span className="yr">{featured.year_label || "Latest"}</span>{" "}
                  {renderBookSvg(featured.cover_variant || "b1")}
                </div>
              </a>
              <div>
                <span className="eyebrow">{featured.eyebrow || "Featured report"}</span>{" "}
                <h2>{featured.title}</h2>{" "}
                <p className="lead">{featured.lead}</p>{" "}
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                  style={{ marginTop: "20px" }}
                >
                  {featured.cta_label || "Download PDF"}{" "}
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
                    <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                  </svg>
                </a>
              </div>
            </div>
          )}

          <div className="sec-head">
            <div>
              <span className="eyebrow">Library</span> <h2>All publications</h2>
            </div>
          </div>
          <div className="filters">
            <button
              className={`chip ${selectedFilter === "all" ? "active" : ""}`}
              onClick={() => setSelectedFilter("all")}
            >
              All <span className="n">{categoryCounts.all || items.length}</span>
            </button>{" "}
            {categories.map((cat) => (
              <button
                key={cat}
                className={`chip ${selectedFilter.toLowerCase() === cat.toLowerCase() ? "active" : ""}`}
                onClick={() => setSelectedFilter(cat)}
              >
                {cat} <span className="n">{categoryCounts[cat]}</span>
              </button>
            ))}
          </div>

          <div className="covers" id="covers">
            {filteredItems.map((pub, idx) => (
              <a
                key={idx}
                href={pub.href}
                target="_blank"
                rel="noopener"
                className="cover"
                data-r={pub.category || "Report"}
              >
                <div className={`book ${pub.cover_variant || "b1"}`}>
                  <span className="kind">{pub.kind}</span>{" "}
                  <h4>{pub.title}</h4>{" "}
                  <span className="yr">{pub.year_label}</span>{" "}
                  {renderBookSvg(pub.cover_variant || "b1")}
                </div>{" "}
                <div className="meta">
                  <span>{pub.category || "Report"}</span>{" "}
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
            ))}
          </div>

          {content.bottom_cta && (
            <div
              className="card reveal"
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h3>{content.bottom_cta.heading || "Looking for more?"}</h3>{" "}
                <p style={{ color: "var(--muted)" }}>
                  {content.bottom_cta.lead || "Browse IAMAI's wider research library and FCC's annual reports."}
                </p>
              </div>{" "}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={content.bottom_cta.primary_cta_href || "/annual-report"}
                  className="btn btn-outline"
                >
                  {content.bottom_cta.primary_cta_label || "All annual reports"}
                </a>{" "}
                <a
                  href={content.bottom_cta.secondary_cta_href || "/policy"}
                  className="btn btn-primary"
                >
                  {content.bottom_cta.secondary_cta_label || "Policy representations"}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
      <style>{`@media(max-width:700px){#featured{grid-template-columns:1fr!important}#featured .cover{max-width:220px}}`}</style>
    </>
  );
}
