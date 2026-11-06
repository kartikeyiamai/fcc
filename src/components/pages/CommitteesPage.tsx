import type { CommitteesContent } from "@/lib/cms-types";

export function CommitteesPage({ content }: { content: CommitteesContent }) {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span>Committees
            </div>{" "}
            <h1>{content.page?.title || "Committees"}</h1>{" "}
            <p>{content.page?.description}</p>
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
              <polygon
                points="150,90 176,105 176,135 150,150 124,135 124,105"
                stroke="#fff"
                strokeWidth="2"
                fill="rgba(255,255,255,.25)"
              ></polygon>{" "}
              <polygon
                points="98,60 124,75 124,105 98,120 72,105 72,75"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              ></polygon>{" "}
              <polygon
                points="202,60 228,75 228,105 202,120 176,105 176,75"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              ></polygon>{" "}
              <polygon
                points="98,120 124,135 124,165 98,180 72,165 72,135"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              ></polygon>{" "}
              <polygon
                points="202,120 228,135 228,165 202,180 176,165 176,135"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              ></polygon>{" "}
              <polygon
                points="150,30 176,45 176,75 150,90 124,75 124,45"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              ></polygon>{" "}
              <polygon
                points="150,150 176,165 176,195 150,210 124,195 124,165"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              ></polygon>
            </svg>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div style={{ display: "grid", gap: "22px" }}>
            <div
              className="card reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "260px 1fr",
                gap: "32px",
                padding: "0",
                overflow: "hidden",
              }}
              id="digital-lending"
            >
              <div
                style={{
                  background: "linear-gradient(135deg,var(--red),var(--red-deep))",
                  display: "grid",
                  placeItems: "center",
                  padding: "24px",
                  position: "relative",
                }}
              >
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
                    x="50"
                    y="60"
                    width="200"
                    height="124"
                    rx="16"
                    fill="rgba(255,255,255,.15)"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>{" "}
                  <rect x="72" y="84" width="34" height="26" rx="5" fill="#f1d79a"></rect>{" "}
                  <text
                    x="72"
                    y="140"
                    fill="#fff"
                    fontFamily="JetBrains Mono"
                    fontSize="13"
                    letterSpacing="2"
                  >
                    ₹ 2,50,000
                  </text>{" "}
                  <rect
                    x="72"
                    y="154"
                    width="156"
                    height="8"
                    rx="4"
                    fill="rgba(255,255,255,.25)"
                  ></rect>{" "}
                  <rect x="72" y="154" width="104" height="8" rx="4" fill="#fff"></rect>{" "}
                  <text
                    x="228"
                    y="102"
                    fill="#fff"
                    fontFamily="JetBrains Mono"
                    fontSize="10"
                    textAnchor="end"
                  >
                    APPROVED
                  </text>
                </svg>
              </div>
              <div style={{ padding: "30px 30px 30px 0" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
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
                      <rect x="3" y="6" width="18" height="12" rx="2"></rect>{" "}
                      <path d="M3 10h18M7 15h3"></path>
                    </svg>
                  </div>{" "}
                  <h3 style={{ fontSize: "1.4rem" }}>Digital Lending Committee</h3>
                </div>
                <p style={{ color: "var(--muted)" }}>
                  Works on industry issues, representation and growth of the lending industry in
                  India.
                </p>{" "}
                <p style={{ fontSize: ".88rem", marginTop: "8px" }}>
                  <b>Who can join:</b> Entities in P2P, SME, personal and other lending.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "14px 0" }}>
                  <span className="tag g">Digital lending guidelines</span>{" "}
                  <span className="tag g">Lending Service Providers (LSPs)</span>{" "}
                  <span className="tag g">Co-lending &amp; FLDG</span>{" "}
                  <span className="tag g">MSME credit</span>
                </div>
                <div
                  className="lead-row"
                  style={{
                    display: "flex",
                    gap: "28px",
                    flexWrap: "wrap",
                    fontSize: ".84rem",
                    color: "var(--muted)",
                    borderTop: "1px dashed var(--line)",
                    paddingTop: "14px",
                  }}
                >
                  <div>
                    <b style={{ display: "block", color: "var(--charcoal)" }}>Vibhav Hathi</b>{" "}
                    <span>Chair · Co-Founder, OneCard</span>
                  </div>{" "}
                  <div>
                    <b style={{ display: "block", color: "var(--charcoal)" }}>Miten Sampat</b>{" "}
                    <span>Co-Chair · Interim CEO, CRED</span>
                  </div>
                </div>
                <a
                  href="/committees/digital-lending"
                  className="link-arrow"
                  style={{ marginTop: "16px" }}
                >
                  Explore the committee{" "}
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
            </div>{" "}
            <div
              className="card reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "260px 1fr",
                gap: "32px",
                padding: "0",
                overflow: "hidden",
              }}
              id="regtech"
            >
              <div
                style={{
                  background: "linear-gradient(135deg,#333,#111)",
                  display: "grid",
                  placeItems: "center",
                  padding: "24px",
                  position: "relative",
                }}
              >
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
                    d="M150 40l70 26v52c0 44-30 70-70 82-40-12-70-38-70-82V66z"
                    fill="rgba(255,255,255,.15)"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M118 122l22 22 42-44"
                    stroke="#fff"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <line x1="60" y1="100" x2="240" y2="100" stroke="#fff" strokeOpacity=".6">
                    <animate
                      attributeName="y1"
                      values="60;190;60"
                      dur="3s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="y2"
                      values="60;190;60"
                      dur="3s"
                      repeatCount="indefinite"
                    ></animate>
                  </line>
                </svg>
              </div>
              <div style={{ padding: "30px 30px 30px 0" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
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
                      <rect x="5" y="11" width="14" height="10" rx="2"></rect>{" "}
                      <path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"></path>
                    </svg>
                  </div>{" "}
                  <h3 style={{ fontSize: "1.4rem" }}>RegTech Committee</h3>
                </div>
                <p style={{ color: "var(--muted)" }}>
                  Works on industry issues, representation and growth of the regulatory technology
                  ecosystem in India.
                </p>{" "}
                <p style={{ fontSize: ".88rem", marginTop: "8px" }}>
                  <b>Who can join:</b> Security, compliance and regulatory technology companies.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "14px 0" }}>
                  <span className="tag g">KYC &amp; CKYC</span>{" "}
                  <span className="tag g">AML / CFT</span> <span className="tag g">Video-KYC</span>{" "}
                  <span className="tag g">Data protection (DPDP)</span>
                </div>
                <div
                  className="lead-row"
                  style={{
                    display: "flex",
                    gap: "28px",
                    flexWrap: "wrap",
                    fontSize: ".84rem",
                    color: "var(--muted)",
                    borderTop: "1px dashed var(--line)",
                    paddingTop: "14px",
                  }}
                >
                  <div>
                    <b style={{ display: "block", color: "var(--charcoal)" }}>Ajay Rajan</b>{" "}
                    <span>Chair · MD &amp; CEO, Protean e-Gov</span>
                  </div>{" "}
                  <div>
                    <b style={{ display: "block", color: "var(--charcoal)" }}>Deval Sheth</b>{" "}
                    <span>Co-Chair · Managing Director, Asia Pacific, Utimaco</span>
                  </div>
                </div>
                <a href="/committees/regtech" className="link-arrow" style={{ marginTop: "16px" }}>
                  Explore the committee{" "}
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
            </div>{" "}
            <div
              className="card reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "260px 1fr",
                gap: "32px",
                padding: "0",
                overflow: "hidden",
              }}
              id="wealthtech"
            >
              <div
                style={{
                  background: "linear-gradient(135deg,var(--red),var(--red-deep))",
                  display: "grid",
                  placeItems: "center",
                  padding: "24px",
                  position: "relative",
                }}
              >
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
                    x="58"
                    y="160"
                    width="24"
                    height="40"
                    rx="4"
                    fill="rgba(255,255,255,0.18)"
                  ></rect>{" "}
                  <rect
                    x="96"
                    y="138"
                    width="24"
                    height="62"
                    rx="4"
                    fill="rgba(255,255,255,0.28)"
                  ></rect>{" "}
                  <rect
                    x="134"
                    y="144"
                    width="24"
                    height="56"
                    rx="4"
                    fill="rgba(255,255,255,0.38)"
                  ></rect>{" "}
                  <rect
                    x="172"
                    y="104"
                    width="24"
                    height="96"
                    rx="4"
                    fill="rgba(255,255,255,0.48000000000000004)"
                  ></rect>{" "}
                  <rect
                    x="210"
                    y="80"
                    width="24"
                    height="120"
                    rx="4"
                    fill="rgba(255,255,255,0.5800000000000001)"
                  ></rect>{" "}
                  <rect
                    x="248"
                    y="50"
                    width="24"
                    height="150"
                    rx="4"
                    fill="rgba(255,255,255,0.6799999999999999)"
                  ></rect>{" "}
                  <path
                    d="M58 150 L100 128 L138 136 L176 92 L214 70 L250 40"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M232 40h18v18"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div style={{ padding: "30px 30px 30px 0" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
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
                      <path d="M3 17l6-6 4 4 8-8M15 7h6v6"></path>
                    </svg>
                  </div>{" "}
                  <h3 style={{ fontSize: "1.4rem" }}>WealthTech Committee</h3>
                </div>
                <p style={{ color: "var(--muted)" }}>
                  Works on industry issues, representation and growth of India&#x27;s investments
                  ecosystem.
                </p>{" "}
                <p style={{ fontSize: ".88rem", marginTop: "8px" }}>
                  <b>Who can join:</b> Investment entities, including personal financial management
                  platforms.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "14px 0" }}>
                  <span className="tag g">Mutual fund distribution</span>{" "}
                  <span className="tag g">Settlement cycles (T+0)</span>{" "}
                  <span className="tag g">Investor onboarding &amp; KRAs</span>{" "}
                  <span className="tag g">PAN verification</span>
                </div>
                <div
                  className="lead-row"
                  style={{
                    display: "flex",
                    gap: "28px",
                    flexWrap: "wrap",
                    fontSize: ".84rem",
                    color: "var(--muted)",
                    borderTop: "1px dashed var(--line)",
                    paddingTop: "14px",
                  }}
                >
                  <div>
                    <b style={{ display: "block", color: "var(--charcoal)" }}>Srinivas Jain</b>{" "}
                    <span>Chair · Executive Director, SBI Funds</span>
                  </div>{" "}
                  <div>
                    <b style={{ display: "block", color: "var(--charcoal)" }}>Praveena Rai</b>{" "}
                    <span>Co-Chair · MD &amp; CEO, MCX India</span>
                  </div>
                </div>
                <a
                  href="/committees/wealthtech"
                  className="link-arrow"
                  style={{ marginTop: "16px" }}
                >
                  Explore the committee{" "}
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
            </div>{" "}
            <div
              className="card reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "260px 1fr",
                gap: "32px",
                padding: "0",
                overflow: "hidden",
              }}
              id="insurtech"
            >
              <div
                style={{
                  background: "linear-gradient(135deg,#333,#111)",
                  display: "grid",
                  placeItems: "center",
                  padding: "24px",
                  position: "relative",
                }}
              >
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
                    d="M60 120a90 90 0 0 1 180 0"
                    fill="rgba(255,255,255,.18)"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M60 120q22-16 45 0q22-16 45 0q23-16 45 0q22-16 45 0"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M150 120v66a14 14 0 0 1-28 0"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M150 30v14"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div style={{ padding: "30px 30px 30px 0" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
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
                      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>{" "}
                      <path d="M9 12l2 2 4-4"></path>
                    </svg>
                  </div>{" "}
                  <h3 style={{ fontSize: "1.4rem" }}>InsurTech Committee</h3>
                </div>
                <p style={{ color: "var(--muted)" }}>
                  Works on industry issues, representation and growth of India&#x27;s insurance
                  industry.
                </p>{" "}
                <p style={{ fontSize: ".88rem", marginTop: "8px" }}>
                  <b>Who can join:</b> All segments, including life, general and health insurance,
                  and aggregators.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "14px 0" }}>
                  <span className="tag g">Bima Sugam</span>{" "}
                  <span className="tag g">Bima Vahak</span>{" "}
                  <span className="tag g">Insurance literacy</span>{" "}
                  <span className="tag g">IIB data access</span>
                </div>
                <div
                  className="lead-row"
                  style={{
                    display: "flex",
                    gap: "28px",
                    flexWrap: "wrap",
                    fontSize: ".84rem",
                    color: "var(--muted)",
                    borderTop: "1px dashed var(--line)",
                    paddingTop: "14px",
                  }}
                >
                  <div>
                    <b style={{ display: "block", color: "var(--charcoal)" }}>Sarbvir Singh</b>{" "}
                    <span>Chair · Joint Group CEO, PB Fintech</span>
                  </div>
                </div>
                <a
                  href="/committees/insurtech"
                  className="link-arrow"
                  style={{ marginTop: "16px" }}
                >
                  Explore the committee{" "}
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
            </div>{" "}
            <div
              className="card reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "260px 1fr",
                gap: "32px",
                padding: "0",
                overflow: "hidden",
              }}
              id="credit-bureau"
            >
              <div
                style={{
                  background: "linear-gradient(135deg,var(--red),var(--red-deep))",
                  display: "grid",
                  placeItems: "center",
                  padding: "24px",
                  position: "relative",
                }}
              >
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
                    d="M60 170a90 90 0 0 1 180 0"
                    stroke="rgba(255,255,255,.3)"
                    strokeWidth="16"
                    fill="none"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M60 170a90 90 0 0 1 150-67"
                    stroke="#fff"
                    strokeWidth="16"
                    fill="none"
                    strokeLinecap="round"
                  ></path>{" "}
                  <line
                    x1="150"
                    y1="170"
                    x2="206"
                    y2="118"
                    stroke="#fff"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></line>{" "}
                  <circle cx="150" cy="170" r="10" fill="#fff"></circle>{" "}
                  <text
                    x="150"
                    y="210"
                    fill="#fff"
                    fontFamily="JetBrains Mono"
                    fontSize="16"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    782
                  </text>
                </svg>
              </div>
              <div style={{ padding: "30px 30px 30px 0" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
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
                      <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>{" "}
                      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>
                    </svg>
                  </div>{" "}
                  <h3 style={{ fontSize: "1.4rem" }}>Credit Bureau Committee</h3>
                </div>
                <p style={{ color: "var(--muted)" }}>
                  Addresses industry issues through advocacy, with a charter covering financial
                  inclusion, digitisation, prudent lending, compliance and access to information.
                </p>{" "}
                <p style={{ fontSize: ".88rem", marginTop: "8px" }}>
                  <b>Who can join:</b> Credit information companies and the wider credit-data
                  ecosystem.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "14px 0" }}>
                  <span className="tag g">Financial inclusion</span>{" "}
                  <span className="tag g">Driving digitisation</span>{" "}
                  <span className="tag g">Prudent lending</span>{" "}
                  <span className="tag g">Compliance</span>
                </div>
                <div
                  className="lead-row"
                  style={{
                    display: "flex",
                    gap: "28px",
                    flexWrap: "wrap",
                    fontSize: ".84rem",
                    color: "var(--muted)",
                    borderTop: "1px dashed var(--line)",
                    paddingTop: "14px",
                  }}
                >
                  <div>
                    <b style={{ display: "block", color: "var(--charcoal)" }}>
                      Leadership to be announced
                    </b>{" "}
                    <span>Write to us to get involved</span>
                  </div>
                </div>
                <a
                  href="/committees/credit-bureau"
                  className="link-arrow"
                  style={{ marginTop: "16px" }}
                >
                  Explore the committee{" "}
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
            </div>
          </div>
          <div
            className="card reveal"
            style={{
              marginTop: "28px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              background: "var(--bg)",
            }}
          >
            <div>
              <h3>Want to join a committee?</h3>{" "}
              <p style={{ color: "var(--muted)" }}>
                Members can take part based on their area of business. Write to{" "}
                <a
                  href="mailto:swati.s@fintechcouncil.in"
                  style={{ color: "var(--red)", fontWeight: "700" }}
                >
                  swati.s@fintechcouncil.in
                </a>
              </p>
            </div>{" "}
            <a href="/apply-membership" className="btn btn-primary">
              Become a member
            </a>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:900px){#digital-lending,#regtech,#wealthtech,#insurtech,#credit-bureau{grid-template-columns:1fr!important}#digital-lending > div:last-child,#regtech > div:last-child,#wealthtech > div:last-child,#insurtech > div:last-child,#credit-bureau > div:last-child{padding:24px!important}}`}</style>
    </>
  );
}
