import type { AboutContent } from "@/lib/cms-types";

export function AboutPage({ content }: { content: AboutContent }) {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span>About
            </div>{" "}
            <h1>{content.hero.title}</h1>{" "}
            <p>{content.hero.description}</p>
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
              <circle cx="150" cy="120" r="34" fill="#fff"></circle>{" "}
              <text
                x="150"
                y="126"
                fill="#BF1A1F"
                fontWeight="800"
                fontSize="16"
                textAnchor="middle"
                fontFamily="Plus Jakarta Sans"
              >
                FCC
              </text>
              <line x1="150" y1="120" x2="60" y2="60" stroke="rgba(255,255,255,.4)"></line>{" "}
              <circle cx="60" cy="60" r="14" fill="rgba(255,255,255,.15)" stroke="#fff"></circle>{" "}
              <line x1="150" y1="120" x2="240" y2="60" stroke="rgba(255,255,255,.4)"></line>{" "}
              <circle cx="240" cy="60" r="14" fill="rgba(255,255,255,.15)" stroke="#fff"></circle>{" "}
              <line x1="150" y1="120" x2="40" y2="150" stroke="rgba(255,255,255,.4)"></line>{" "}
              <circle cx="40" cy="150" r="14" fill="rgba(255,255,255,.15)" stroke="#fff"></circle>{" "}
              <line x1="150" y1="120" x2="260" y2="150" stroke="rgba(255,255,255,.4)"></line>{" "}
              <circle cx="260" cy="150" r="14" fill="rgba(255,255,255,.15)" stroke="#fff"></circle>{" "}
              <line x1="150" y1="120" x2="110" y2="215" stroke="rgba(255,255,255,.4)"></line>{" "}
              <circle cx="110" cy="215" r="14" fill="rgba(255,255,255,.15)" stroke="#fff"></circle>{" "}
              <line x1="150" y1="120" x2="190" y2="215" stroke="rgba(255,255,255,.4)"></line>{" "}
              <circle cx="190" cy="215" r="14" fill="rgba(255,255,255,.15)" stroke="#fff"></circle>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="#overview" className="on">
            Overview
          </a>{" "}
          <a href="#vision">Vision &amp; mission</a> <a href="#work">What we do</a>{" "}
          <a href="#journey">Journey</a> <a href="#council">Governing Council</a>{" "}
          <a href="/annual-report">Annual Reports</a>
        </div>
      </nav>

      <section id="overview">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">{content.overview.eyebrow}</span>{" "}
            <h2>{content.overview.heading}</h2>
            {content.overview.paragraphs.map((paragraph, index) => (
              <p
                className="lead"
                key={paragraph.slice(0, 24)}
                style={index > 0 ? { marginTop: "14px" } : undefined}
              >
                {paragraph}
              </p>
            ))}
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

      <section className="bg-soft" id="vision">
        <div className="wrap">
          <div className="grid-2 reveal">
            <div className="card" style={{ borderTop: "4px solid var(--red)" }}>
              <div className="icon-box" style={{ marginBottom: "16px" }}>
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
                  <circle cx="12" cy="12" r="9"></circle>{" "}
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>
                </svg>
              </div>{" "}
              <span className="eyebrow">Vision</span>{" "}
              <h3 style={{ fontSize: "1.35rem", marginTop: "8px" }}>{content.vision}</h3>
            </div>
            <div className="card" style={{ borderTop: "4px solid var(--charcoal)" }}>
              <div className="icon-box dark" style={{ marginBottom: "16px" }}>
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
                  <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"></path>
                </svg>
              </div>{" "}
              <span className="eyebrow" style={{ color: "var(--charcoal)" }}>
                Mission
              </span>{" "}
              <h3 style={{ fontSize: "1.35rem", marginTop: "8px" }}>{content.mission}</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">What we do</span> <h2>Three pillars of our work</h2>
            </div>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="icon-box" style={{ marginBottom: "16px" }}>
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
              <h3 style={{ marginBottom: "12px" }}>Advocacy</h3>{" "}
              <ul className="checks dark-txt" style={{ fontSize: ".9rem", gap: "8px" }}>
                <li>Review regulatory, legal and policy developments, including drafts</li>{" "}
                <li>Submit feedback on papers released for public comment</li>{" "}
                <li>Share proactive opinions with lawmakers</li>{" "}
                <li>Work with government and regulators on a fair policy environment</li>{" "}
                <li>Collaborate with other associations</li>
              </ul>
            </div>
            <div className="card">
              <div className="icon-box" style={{ marginBottom: "16px" }}>
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
                  <path d="M8 13l3 3 7-7M3 12l5 5M21 7l-3-3"></path>{" "}
                  <path d="M2 12l4-4 4 4M22 8l-4 4"></path>
                </svg>
              </div>{" "}
              <h3 style={{ marginBottom: "12px" }}>Convergence &amp; collaboration</h3>{" "}
              <p style={{ color: "var(--muted)", fontSize: ".92rem" }}>
                We find opportunities for large financial institutions in banking, payments,
                insurance and investments to work with fintech companies, so both sides grow faster.
              </p>
            </div>
            <div className="card">
              <div className="icon-box" style={{ marginBottom: "16px" }}>
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
                  <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
                </svg>
              </div>{" "}
              <h3 style={{ marginBottom: "12px" }}>Development</h3>{" "}
              <p style={{ color: "var(--muted)", fontSize: ".92rem" }}>
                Through committees, best-practice sharing, industry discussions and knowledge
                sessions, we help the sector mature and reach more people.
              </p>
              <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="tag g">Digital Lending</span>{" "}
                <span className="tag g">WealthTech</span> <span className="tag g">InsurTech</span>{" "}
                <span className="tag g">DFSP</span> <span className="tag g">RegTech</span>{" "}
                <span className="tag g">AgriFintech</span> <span className="tag g">Bureaus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft" id="journey">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">Our journey</span> <h2>{content.journey.heading}</h2>{" "}
            <p className="lead">Key moments in FCC's story so far.</p>
          </div>
          <div className="timeline reveal">
            <div className="tl">
              <div className="yr">2017</div>{" "}
              <div className="body">
                <h4>Fintech committee at IAMAI</h4>{" "}
                <p>Industry members come together under IAMAI to discuss fintech policy.</p>
              </div>
            </div>
            <div className="tl">
              <div className="yr">2018</div>{" "}
              <div className="body">
                <h4>FCC launches</h4>{" "}
                <p>
                  The Fintech Convergence Council is launched on 19 September at The St. Regis,
                  Mumbai.
                </p>
              </div>
            </div>
            <div className="tl">
              <div className="yr">2020</div>{" "}
              <div className="body">
                <h4>First Global Fintech Fest</h4>{" "}
                <p>
                  GFF debuts as a virtual event and becomes the flagship of India's fintech
                  calendar.
                </p>
              </div>
            </div>
            <div className="tl">
              <div className="yr">2023</div>{" "}
              <div className="body">
                <h4>GFF moves to Jio World Centre</h4>{" "}
                <p>The festival grows into one of the world's largest fintech gatherings.</p>
              </div>
            </div>
            <div className="tl">
              <div className="yr">2025</div>{" "}
              <div className="body">
                <h4>Mission trip to Japan</h4>{" "}
                <p>An industry delegation visits Tokyo to build cross-border fintech ties.</p>
              </div>
            </div>
            <div className="tl">
              <div className="yr">Today</div>{" "}
              <div className="body">
                <h4>175+ members, 5 committees</h4>{" "}
                <p>A regular calendar of representations, webinars and research.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="council">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Governing Council</span> <h2>{content.council.heading}</h2>{" "}
              <p className="lead">
                FCC is governed by a seven-member Executive Council drawn from its member companies.
              </p>
            </div>
          </div>
          <div className="people reveal">
            <div className="person lead-card">
              <div className="avatar">VH</div> <h4>Vibhav Hathi</h4>{" "}
              <div className="org">Co-Founder, OneCard</div>{" "}
              <div className="role">
                <span className="tag">Chair, FCC</span>{" "}
                <span className="tag">Chair, Digital Lending</span>
              </div>
            </div>{" "}
            <div className="person">
              <div className="avatar">PR</div> <h4>Praveena Rai</h4>{" "}
              <div className="org">MD &amp; CEO, MCX India</div>{" "}
              <div className="role">
                <span className="tag">Co-Chair, FCC</span>{" "}
                <span className="tag">Co-Chair, WealthTech</span>
              </div>
            </div>{" "}
            <div className="person">
              <div className="avatar">AR</div> <h4>Ajay Rajan</h4>{" "}
              <div className="org">MD &amp; CEO, Protean e-Gov</div>{" "}
              <div className="role">
                <span className="tag">Co-Chair, FCC</span>{" "}
                <span className="tag">Chair, RegTech</span>
              </div>
            </div>{" "}
            <div className="person">
              <div className="avatar">MS</div> <h4>Miten Sampat</h4>{" "}
              <div className="org">Interim CEO, CRED</div>{" "}
              <div className="role">
                <span className="tag">Co-Chair, Digital Lending</span>
              </div>
            </div>{" "}
            <div className="person">
              <div className="avatar">SJ</div> <h4>Srinivas Jain</h4>{" "}
              <div className="org">Executive Director, SBI Funds</div>{" "}
              <div className="role">
                <span className="tag">Chair, WealthTech</span>
              </div>
            </div>{" "}
            <div className="person">
              <div className="avatar">DS</div> <h4>Deval Sheth</h4>{" "}
              <div className="org">MD, Asia Pacific, Utimaco</div>{" "}
              <div className="role">
                <span className="tag">Co-Chair, RegTech</span>
              </div>
            </div>{" "}
            <div className="person">
              <div className="avatar">SS</div> <h4>Sarbvir Singh</h4>{" "}
              <div className="org">Joint Group CEO, PB Fintech</div>{" "}
              <div className="role">
                <span className="tag">Chair, InsurTech</span>
              </div>
            </div>
            <a
              href="/committees"
              className="person"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: "var(--bg)",
                borderStyle: "dashed",
              }}
            >
              <div className="icon-box" style={{ marginBottom: "14px" }}>
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
              <h4>Meet the committees</h4> <div className="org">See who leads each sector →</div>
            </a>
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
