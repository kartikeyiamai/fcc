import type { VirtualEventsContent } from "@/lib/cms-types";

export function VirtualEventsPage({ content }: { content: VirtualEventsContent }) {
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
            <span className="eyebrow">Knowledge sessions</span> <h2>38 sessions since 2024</h2>{" "}
            <p className="lead">
              Most sessions run as one-hour virtual panels in the afternoon (IST), open to members
              and the wider ecosystem. Registrations:{" "}
              <a
                href="mailto:register@fintechcouncil.in"
                style={{ color: "var(--red)", fontWeight: "700" }}
              >
                register@fintechcouncil.in
              </a>
            </p>
            <div style={{ display: "flex", gap: "28px", marginTop: "22px", flexWrap: "wrap" }}>
              <div>
                <b style={{ fontSize: "1.8rem", fontWeight: "800" }}>11</b>{" "}
                <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>in 2026</div>
              </div>{" "}
              <div>
                <b style={{ fontSize: "1.8rem", fontWeight: "800" }}>14</b>{" "}
                <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>in 2025</div>
              </div>{" "}
              <div>
                <b style={{ fontSize: "1.8rem", fontWeight: "800" }}>13</b>{" "}
                <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>in 2024</div>
              </div>
            </div>
          </div>
          <div className="card reveal">
            <span className="eyebrow">Topics covered</span>{" "}
            <div className="hbar" style={{ marginTop: "18px" }}>
              <div className="r" style={{ gridTemplateColumns: "150px 1fr 30px" }}>
                <b style={{ fontFamily: "var(--sans)", fontWeight: "600" }}>RegTech & compliance</b>{" "}
                <div className="track">
                  <div className="fill" data-w="100%"></div>
                </div>{" "}
                <span className="v">19</span>
              </div>{" "}
              <div className="r" style={{ gridTemplateColumns: "150px 1fr 30px" }}>
                <b style={{ fontFamily: "var(--sans)", fontWeight: "600" }}>Lending</b>{" "}
                <div className="track">
                  <div className="fill" data-w="32%"></div>
                </div>{" "}
                <span className="v">6</span>
              </div>{" "}
              <div className="r" style={{ gridTemplateColumns: "150px 1fr 30px" }}>
                <b style={{ fontFamily: "var(--sans)", fontWeight: "600" }}>Insurance</b>{" "}
                <div className="track">
                  <div className="fill" data-w="26%"></div>
                </div>{" "}
                <span className="v">5</span>
              </div>{" "}
              <div className="r" style={{ gridTemplateColumns: "150px 1fr 30px" }}>
                <b style={{ fontFamily: "var(--sans)", fontWeight: "600" }}>Investments</b>{" "}
                <div className="track">
                  <div className="fill" data-w="21%"></div>
                </div>{" "}
                <span className="v">4</span>
              </div>{" "}
              <div className="r" style={{ gridTemplateColumns: "150px 1fr 30px" }}>
                <b style={{ fontFamily: "var(--sans)", fontWeight: "600" }}>Credit</b>{" "}
                <div className="track">
                  <div className="fill" data-w="5%"></div>
                </div>{" "}
                <span className="v">1</span>
              </div>
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
          <div className="filters" data-filter-for="webs">
            <button className="chip active" data-f="all">
              All <span className="n">38</span>
            </button>{" "}
            <button className="chip" data-f="y2026">
              2026 <span className="n">11</span>
            </button>{" "}
            <button className="chip" data-f="y2025">
              2025 <span className="n">14</span>
            </button>{" "}
            <button className="chip" data-f="y2024">
              2024 <span className="n">13</span>
            </button>
          </div>
          <div className="web-grid" id="webs" data-limit="12">
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
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">02</div> <div className="m">Mar 2026</div>
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
                <h4>Why healthcare in India remains a push market</h4>{" "}
                <span className="time">2:00–3:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">24</div> <div className="m">Feb 2026</div>
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
                <h4>Legal architecture of the digital lending process</h4>{" "}
                <span className="time">12:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">20</div> <div className="m">Feb 2026</div>
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
                <h4>Practical applications of AI in AML &amp; fraud monitoring</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">13</div> <div className="m">Feb 2026</div>
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
                <h4>Redrawing the boundaries of insurance in India</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">12</div> <div className="m">Feb 2026</div>
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
                <h4>Implementing RBI&#x27;s Digital Lending Guidelines</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">06</div> <div className="m">Feb 2026</div>
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
                <h4>Budget 2026 unpacked</h4>{" "}
                <span className="time">4:30–5:30 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">29</div> <div className="m">Jan 2026</div>
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
                <h4>Simplification of client onboarding with KRAs</h4>{" "}
                <span className="time">3:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">28</div> <div className="m">May 2025</div>
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
                <h4>Updation and periodic updation of KYC</h4>{" "}
                <span className="time">3:30–4:30 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">28</div> <div className="m">May 2025</div>
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
                <h4>Union Budget session</h4>{" "}
                <span className="time">5:00–6:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">24</div> <div className="m">Apr 2025</div>
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
                <h4>Credit trends unveiled</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">21</div> <div className="m">Apr 2025</div>
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
                <h4>Co-lending and lending against gold collateral</h4>{" "}
                <span className="time">4:00–5:30 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">17</div> <div className="m">Apr 2025</div>
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
                <h4>Transaction monitoring and red-flag monitoring</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">15</div> <div className="m">Apr 2025</div>
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
                <h4>Cyber resilience strategies</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">24</div> <div className="m">Mar 2025</div>
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
                <h4>Impact of the DPDP Rules</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">20</div> <div className="m">Mar 2025</div>
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
                <h4>Data security &amp; compliance in IT asset disposal</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">26</div> <div className="m">Feb 2025</div>
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
                <h4>Impact of the DPDP Act and Rules</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">20</div> <div className="m">Feb 2025</div>
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
                <h4>Budget 2025 and the Insurance Amendment Bill</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">05</div> <div className="m">Feb 2025</div>
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
                <h4>Union Budget 2025–26</h4>{" "}
                <span className="time">11:00 AM–12:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">05</div> <div className="m">Feb 2025</div>
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
                <h4>DPDP Rules 2025</h4> <span className="time">4:00–5:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">09</div> <div className="m">Jan 2025</div>
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
                <h4>Banning of unregulated lending activities</h4>{" "}
                <span className="time">3:30–4:30 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">08</div> <div className="m">Jan 2025</div>
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
                <h4>Digital Personal Data Protection Rules</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">20</div> <div className="m">Dec 2024</div>
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
                <h4>Unlocking opportunities in GIFT IFSC</h4>{" "}
                <span className="time">4:00–5:30 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">16</div> <div className="m">Dec 2024</div>
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
                <h4>Navigating cyber and fraud risk in the fintech ecosystem</h4>{" "}
                <span className="time">3:30–4:30 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">13</div> <div className="m">Dec 2024</div>
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
                <h4>Legal Entity Identifier</h4>{" "}
                <span className="time">4:00–5:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">10</div> <div className="m">Dec 2024</div>
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
                <h4>Ministry of Communications on DIGIPIN</h4>{" "}
                <span className="time">10:30–11:30 AM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">18</div> <div className="m">Nov 2024</div>
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
                <h4>Amendments to the KYC Master Direction</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">01</div> <div className="m">Oct 2024</div>
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
                <h4>NPCI on e-KYC Setu</h4>{" "}
                <span className="time">12:00–1:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">28</div> <div className="m">Jun 2024</div>
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
                <h4>Webinar on health insurance</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">20</div> <div className="m">Jun 2024</div>
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
                <h4>Investing in fixed income</h4>{" "}
                <span className="time">4:00–5:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">02</div> <div className="m">May 2024</div>
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
                <h4>Common tax issues for fintech entities</h4>{" "}
                <span className="time">2:00–3:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">20</div> <div className="m">Mar 2024</div>
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
                <h4>Regulatory compliance solutions</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">23</div> <div className="m">Feb 2024</div>
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
                <h4>Managing risk and compliance</h4>{" "}
                <span className="time">3:30–4:30 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">20</div> <div className="m">Feb 2024</div>
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
                <h4>The future of remote onboarding</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2024">
              <div className="wtop">
                <div>
                  <div className="d">14</div> <div className="m">Feb 2024</div>
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
                <h4>A wake-up call for the fintech industry</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>
          </div>
          <div className="center mt-28">
            <button className="btn btn-outline" data-more-for="webs">
              Show all
            </button>
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
              <span className="eyebrow">Membership &amp; partnership</span>{" "}
              <h2>Want to host a session with FCC?</h2>{" "}
              <p>
                Partners can run knowledge sessions, workshops and think tanks with FCC members.
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
