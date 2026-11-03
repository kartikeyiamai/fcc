import type { PublicationsContent } from "@/lib/cms-types";

export function ResearchPage({ content }: { content: PublicationsContent }) {
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
              href="https://www.fintechcouncil.in/images/Building%20Bridges%20for%20the%20Next%20Decade%20of%20Finance.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
            >
              <div className="book b1">
                <span className="kind">FCC · Featured</span>{" "}
                <h4>Building Bridges for the Next Decade of Finance</h4>{" "}
                <span className="yr">Latest</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 90 L30 60 L50 70 L75 30 L95 10"></path>{" "}
                  <circle cx="95" cy="10" r="4" fill="#fff"></circle>
                </svg>
              </div>
            </a>
            <div>
              <span className="eyebrow">Featured report</span>{" "}
              <h2>Building Bridges for the Next Decade of Finance</h2>{" "}
              <p className="lead">
                The latest FCC publication on where Indian finance is heading next.
              </p>{" "}
              <a
                href="https://www.fintechcouncil.in/images/Building%20Bridges%20for%20the%20Next%20Decade%20of%20Finance.pdf"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
                style={{ marginTop: "20px" }}
              >
                Download PDF{" "}
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
          <div className="sec-head">
            <div>
              <span className="eyebrow">Library</span> <h2>All publications</h2>
            </div>
          </div>
          <div className="filters" data-filter-for="covers">
            <button className="chip active" data-f="all">
              All <span className="n">20</span>
            </button>{" "}
            <button className="chip" data-f="Event-report">
              Event report <span className="n">2</span>
            </button>{" "}
            <button className="chip" data-f="Handbook">
              Handbook <span className="n">1</span>
            </button>{" "}
            <button className="chip" data-f="Report">
              Report <span className="n">15</span>
            </button>{" "}
            <button className="chip" data-f="Whitepaper">
              Whitepaper <span className="n">2</span>
            </button>
          </div>
          <div className="covers" id="covers">
            <a
              href="https://www.fintechcouncil.in/images/Building%20Bridges%20for%20the%20Next%20Decade%20of%20Finance.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
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
              data-r="Report"
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
              data-r="Report"
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
              data-r="Report"
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
            </a>{" "}
            <a
              href="https://www.fintechcouncil.in/images/5.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Handbook"
            >
              <div className="book b1">
                <span className="kind">FCC · Handbook</span>{" "}
                <h4>Indian Payment Handbook 2024–2029</h4> <span className="yr">2024</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 90 L30 60 L50 70 L75 30 L95 10"></path>{" "}
                  <circle cx="95" cy="10" r="4" fill="#fff"></circle>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Handbook · 2024</span>{" "}
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
              href="https://www.fintechcouncil.in/images/6.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b2">
                <span className="kind">FCC · Report</span>{" "}
                <h4>Fast Forward, Rewind: India&#x27;s Golden Decade in Fintech</h4>{" "}
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
              href="https://www.fintechcouncil.in/pdf/Fabric%20of%20Fintech%20-%20Heavy_compressed.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b3">
                <span className="kind">FCC · Report</span> <h4>Fabric of Fintech 3.0</h4>{" "}
                <span className="yr">2023</span>{" "}
                <svg viewBox="0 0 100 100" fill="#fff">
                  <rect x="8" y="70" width="16" height="30"></rect>{" "}
                  <rect x="32" y="50" width="16" height="50"></rect>{" "}
                  <rect x="56" y="30" width="16" height="70"></rect>{" "}
                  <rect x="80" y="5" width="16" height="95"></rect>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report · 2023</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/Growing%20inclusion%20in%20India%20-%20Unveiled%20at%20GFF%202023_compressed.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b4">
                <span className="kind">FCC · Report</span> <h4>Growing Inclusion in India</h4>{" "}
                <span className="yr">2023</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <polygon points="50,5 95,30 95,75 50,98 5,75 5,30"></polygon>{" "}
                  <polygon points="50,30 72,42 72,62 50,74 28,62 28,42"></polygon>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report · 2023</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/State%20of%20the%20Fintech%20Union%20-%20Unveilled%20at%20GFF%202023.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b1">
                <span className="kind">FCC · Report</span> <h4>State of the Fintech Union</h4>{" "}
                <span className="yr">2023</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 90 L30 60 L50 70 L75 30 L95 10"></path>{" "}
                  <circle cx="95" cy="10" r="4" fill="#fff"></circle>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report · 2023</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/The%20Rise%20and%20Evolution%20of%20India%27s%20Digital%20Finance%2020th%20Oct%202023.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b2">
                <span className="kind">FCC · Report</span>{" "}
                <h4>The Rise and Evolution of India&#x27;s Digital Finance</h4>{" "}
                <span className="yr">2023</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <circle cx="50" cy="50" r="40"></circle> <circle cx="50" cy="50" r="24"></circle>{" "}
                  <circle cx="50" cy="50" r="8" fill="#fff"></circle>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report · 2023</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/The%20Second%20Wave_Resilient%2C%20Inclusive%2C%20Exponential%20Fintechs.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b3">
                <span className="kind">FCC · Report</span>{" "}
                <h4>The Second Wave: Resilient, Inclusive, Exponential Fintechs</h4>{" "}
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
              href="https://www.fintechcouncil.in/pdf/The%20Winds%20of%20Change-%20Edition%20II.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b4">
                <span className="kind">FCC · Report</span> <h4>The Winds of Change, Edition II</h4>{" "}
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
            </a>{" "}
            <a
              href="https://www.fintechcouncil.in/pdf/Empowering_payments.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b1">
                <span className="kind">FCC · Report</span>{" "}
                <h4>Empowering Payments: Digital India on the Path of Revolution</h4>{" "}
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
              href="https://www.fintechcouncil.in/pdf/India-Fintech-Report-2020-Executive-Summary.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b2">
                <span className="kind">FCC · Report</span>{" "}
                <h4>India Fintech Report 2020 — Executive Summary</h4>{" "}
                <span className="yr">2020</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <circle cx="50" cy="50" r="40"></circle> <circle cx="50" cy="50" r="24"></circle>{" "}
                  <circle cx="50" cy="50" r="8" fill="#fff"></circle>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report · 2020</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/GFF21-Event-report.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Event-report"
            >
              <div className="book b3">
                <span className="kind">FCC · Event report</span>{" "}
                <h4>Global Fintech Fest 2021 — Event Report</h4> <span className="yr">2021</span>{" "}
                <svg viewBox="0 0 100 100" fill="#fff">
                  <rect x="8" y="70" width="16" height="30"></rect>{" "}
                  <rect x="32" y="50" width="16" height="50"></rect>{" "}
                  <rect x="56" y="30" width="16" height="70"></rect>{" "}
                  <rect x="80" y="5" width="16" height="95"></rect>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Event report · 2021</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/GFF20-Event-report.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Event-report"
            >
              <div className="book b4">
                <span className="kind">FCC · Event report</span>{" "}
                <h4>Global Fintech Fest 2020 — Event Report</h4> <span className="yr">2020</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <polygon points="50,5 95,30 95,75 50,98 5,75 5,30"></polygon>{" "}
                  <polygon points="50,30 72,42 72,62 50,74 28,62 28,42"></polygon>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Event report · 2020</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/Whitepaper-KYC-Bureau.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Whitepaper"
            >
              <div className="book b1">
                <span className="kind">FCC · Whitepaper</span>{" "}
                <h4>KYC Bureau: A Centralised Repository for KYC Data</h4>{" "}
                <span className="yr">FCC × IAMAI</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <path d="M5 90 L30 60 L50 70 L75 30 L95 10"></path>{" "}
                  <circle cx="95" cy="10" r="4" fill="#fff"></circle>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Whitepaper</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/White-Paper-on-Digital-KYC-Solutions.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Whitepaper"
            >
              <div className="book b2">
                <span className="kind">FCC · Whitepaper</span>{" "}
                <h4>Whitepaper on Digital KYC Solutions</h4> <span className="yr">FCC × IAMAI</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <circle cx="50" cy="50" r="40"></circle> <circle cx="50" cy="50" r="24"></circle>{" "}
                  <circle cx="50" cy="50" r="8" fill="#fff"></circle>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Whitepaper</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/Neobanking-Final-report.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b3">
                <span className="kind">FCC · Report</span>{" "}
                <h4>The Evolution of Neobanks in India</h4> <span className="yr">FCC × IAMAI</span>{" "}
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
              href="https://www.fintechcouncil.in/pdf/IAMAI-Deloitte-Fintech-Report-July-17.pdf"
              target="_blank"
              rel="noopener"
              className="cover"
              data-r="Report"
            >
              <div className="book b4">
                <span className="kind">FCC · Report</span>{" "}
                <h4>Fintech in India: Ready for Breakout</h4> <span className="yr">2017</span>{" "}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="3">
                  <polygon points="50,5 95,30 95,75 50,98 5,75 5,30"></polygon>{" "}
                  <polygon points="50,30 72,42 72,62 50,74 28,62 28,42"></polygon>
                </svg>
              </div>{" "}
              <div className="meta">
                <span>Report · 2017</span>{" "}
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
              <h3>Looking for more?</h3>{" "}
              <p style={{ color: "var(--muted)" }}>
                Browse IAMAI's wider research library and FCC's annual reports.
              </p>
            </div>{" "}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/annual-report" className="btn btn-outline">
                Annual reports
              </a>{" "}
              <a
                href="http://iamai.in/introductionres"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                IAMAI research
              </a>
            </div>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:700px){#featured{grid-template-columns:1fr!important}#featured .cover{max-width:220px}}`}</style>
    </>
  );
}
