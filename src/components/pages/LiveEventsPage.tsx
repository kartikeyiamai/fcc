import type { LiveEventsContent } from "@/lib/cms-types";

export function LiveEventsPage({ content }: { content: LiveEventsContent }) {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/live-events">Events</a> <span>/</span>
              Live Events
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
                x="60"
                y="50"
                width="180"
                height="150"
                rx="14"
                fill="rgba(255,255,255,.12)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <path
                d="M60 92h180M100 36v28M200 36v28"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <rect
                x="80"
                y="108"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect
                x="118"
                y="108"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect
                x="156"
                y="108"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect
                x="194"
                y="108"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect
                x="80"
                y="138"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect
                x="118"
                y="138"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect x="156" y="138" width="24" height="18" rx="4" fill="#fff"></rect>{" "}
              <rect
                x="194"
                y="138"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect
                x="80"
                y="168"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect
                x="118"
                y="168"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect
                x="156"
                y="168"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>{" "}
              <rect
                x="194"
                y="168"
                width="24"
                height="18"
                rx="4"
                fill="rgba(255,255,255,.25)"
              ></rect>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/live-events" className="on">
            Live Events
          </a>{" "}
          <a href="/virtual-events">Virtual Events</a>
        </div>
      </nav>
      <section>
        <div className="wrap">
          <div className="ev-grid reveal">
            <a
              href="https://globalfintechfest.com/"
              target="_blank"
              rel="noopener"
              className="ev-feature"
              style={{ minHeight: "380px" }}
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
                <small>Flagship · Co-hosted by FCC</small> <h3>Global Fintech Fest</h3>{" "}
                <p style={{ maxWidth: "440px", opacity: ".92" }}>
                  Since its first edition in 2020, GFF has grown into one of the world's largest
                  fintech gatherings, bringing regulators, banks, fintechs and investors together in
                  Mumbai.
                </p>
              </div>{" "}
              <div className="meta">
                <span>📍 Jio World Centre, Mumbai</span> <span>globalfintechfest.com →</span>
              </div>
            </a>
            <div
              className="card"
              style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <span className="eyebrow">GFF editions</span>{" "}
              <div className="hbar" style={{ marginTop: "18px" }}>
                <div className="r">
                  <b>2020</b>{" "}
                  <div className="track">
                    <div className="fill" data-w="40%"></div>
                  </div>{" "}
                  <span className="v" style={{ width: "auto" }}>
                    Virtual
                  </span>
                </div>{" "}
                <div className="r">
                  <b>2021</b>{" "}
                  <div className="track">
                    <div className="fill" data-w="55%"></div>
                  </div>{" "}
                  <span className="v" style={{ width: "auto" }}>
                    Virtual
                  </span>
                </div>{" "}
                <div className="r">
                  <b>2022</b>{" "}
                  <div className="track">
                    <div className="fill" data-w="70%"></div>
                  </div>{" "}
                  <span className="v" style={{ width: "auto" }}>
                    Mumbai
                  </span>
                </div>{" "}
                <div className="r">
                  <b>2023</b>{" "}
                  <div className="track">
                    <div className="fill" data-w="85%"></div>
                  </div>{" "}
                  <span className="v" style={{ width: "auto" }}>
                    Mumbai
                  </span>
                </div>{" "}
                <div className="r">
                  <b>2024</b>{" "}
                  <div className="track">
                    <div className="fill" data-w="100%"></div>
                  </div>{" "}
                  <span className="v" style={{ width: "auto" }}>
                    Mumbai
                  </span>
                </div>
              </div>{" "}
              <p className="form-note">From a virtual debut to a full in-person festival.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">Timeline</span> <h2>Every live event</h2>{" "}
            <p className="lead">From FCC's launch in 2018 to its latest delegations abroad.</p>
          </div>
          <div className="timeline reveal">
            <div className="tl">
              <div className="yr">2025</div>{" "}
              <div className="body">
                <span className="tag g" style={{ marginBottom: "6px", display: "inline-block" }}>
                  Industry delegation
                </span>{" "}
                <h4>
                  <a href="https://globalfintechfest.com/" target="_blank" rel="noopener">
                    Mission Trip to Japan ↗
                  </a>
                </h4>{" "}
                <p>12–16 May 2025 · Tokyo, Japan</p>
              </div>
            </div>{" "}
            <div className="tl">
              <div className="yr">2024</div>{" "}
              <div className="body">
                <span className="tag g" style={{ marginBottom: "6px", display: "inline-block" }}>
                  Showcase
                </span>{" "}
                <h4>India&#x27;s Innovation for the World</h4> <p>19 Dec 2024 · India</p>
              </div>
            </div>{" "}
            <div className="tl">
              <div className="yr">2024</div>{" "}
              <div className="body">
                <span className="tag" style={{ marginBottom: "6px", display: "inline-block" }}>
                  Flagship
                </span>{" "}
                <h4>
                  <a href="https://globalfintechfest.com/" target="_blank" rel="noopener">
                    Global Fintech Fest 2024 ↗
                  </a>
                </h4>{" "}
                <p>28–30 Aug 2024 · Jio World Centre, Mumbai</p>
              </div>
            </div>{" "}
            <div className="tl">
              <div className="yr">2023</div>{" "}
              <div className="body">
                <span className="tag" style={{ marginBottom: "6px", display: "inline-block" }}>
                  Flagship
                </span>{" "}
                <h4>
                  <a href="https://globalfintechfest.com/2023/" target="_blank" rel="noopener">
                    Global Fintech Fest 2023 ↗
                  </a>
                </h4>{" "}
                <p>5–7 Sep 2023 · Jio World Centre, Mumbai</p>
              </div>
            </div>{" "}
            <div className="tl">
              <div className="yr">2022</div>{" "}
              <div className="body">
                <span className="tag" style={{ marginBottom: "6px", display: "inline-block" }}>
                  Flagship
                </span>{" "}
                <h4>
                  <a href="https://www.globalfintechfest.com/2022/" target="_blank" rel="noopener">
                    Global Fintech Fest 2022 ↗
                  </a>
                </h4>{" "}
                <p>20–22 Sep 2022 · Mumbai</p>
              </div>
            </div>{" "}
            <div className="tl">
              <div className="yr">2021</div>{" "}
              <div className="body">
                <span className="tag" style={{ marginBottom: "6px", display: "inline-block" }}>
                  Flagship
                </span>{" "}
                <h4>
                  <a href="https://www.globalfintechfest.com/2021/" target="_blank" rel="noopener">
                    Global Fintech Fest 2021 ↗
                  </a>
                </h4>{" "}
                <p>28–30 Sep 2021 · Virtual</p>
              </div>
            </div>{" "}
            <div className="tl">
              <div className="yr">2020</div>{" "}
              <div className="body">
                <span className="tag" style={{ marginBottom: "6px", display: "inline-block" }}>
                  Flagship · First edition
                </span>{" "}
                <h4>Global Fintech Fest 2020</h4> <p>22–23 Jul 2020 · Virtual</p>
              </div>
            </div>{" "}
            <div className="tl">
              <div className="yr">2018</div>{" "}
              <div className="body">
                <span className="tag g" style={{ marginBottom: "6px", display: "inline-block" }}>
                  Milestone
                </span>{" "}
                <h4>Launch of Fintech Convergence Council</h4>{" "}
                <p>19 Sep 2018 · The St. Regis, Mumbai</p>
              </div>
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
              <span className="eyebrow">Membership &amp; partnership</span>{" "}
              <h2>Meet the ecosystem in person.</h2>{" "}
              <p>Members receive complimentary passes to FCC and IAMAI conferences.</p>
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
