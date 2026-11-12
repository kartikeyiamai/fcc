import type { CommitteeItem, CommitteesContent } from "@/lib/cms-types";

function renderCommitteeArt(item: CommitteeItem, idx: number) {
  if (item.slug === "digital-lending") {
    return (
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
    );
  }

  if (item.slug === "regtech") {
    return (
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
    );
  }

  if (item.slug === "wealthtech") {
    return (
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
            fill="rgba(255,255,255,0.48)"
          ></rect>{" "}
          <rect
            x="210"
            y="80"
            width="24"
            height="120"
            rx="4"
            fill="rgba(255,255,255,0.58)"
          ></rect>{" "}
          <rect
            x="248"
            y="50"
            width="24"
            height="150"
            rx="4"
            fill="rgba(255,255,255,0.68)"
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
    );
  }

  if (item.slug === "insurtech") {
    return (
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
          <line
            x1="150"
            y1="40"
            x2="150"
            y2="30"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>{" "}
          <path
            d="M150 120v60a16 16 0 0 1-32 0"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M90 120a30 30 0 0 0 30 0 30 30 0 0 0 30 0 30 30 0 0 0 30 0 30 30 0 0 0 30 0"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          ></path>{" "}
          <line
            x1="80"
            y1="190"
            x2="70"
            y2="210"
            stroke="#fff"
            strokeOpacity=".5"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>{" "}
          <line
            x1="120"
            y1="200"
            x2="110"
            y2="220"
            stroke="#fff"
            strokeOpacity=".5"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>{" "}
          <line
            x1="190"
            y1="195"
            x2="180"
            y2="215"
            stroke="#fff"
            strokeOpacity=".5"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>{" "}
          <line
            x1="230"
            y1="190"
            x2="220"
            y2="210"
            stroke="#fff"
            strokeOpacity=".5"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
        </svg>
      </div>
    );
  }

  if (item.slug === "credit-bureau") {
    return (
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
            d="M60 170a90 90 0 0 1 144-48"
            stroke="#fff"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
          ></path>{" "}
          <line
            x1="150"
            y1="170"
            x2="204"
            y2="116"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinecap="round"
          ></line>{" "}
          <circle cx="150" cy="170" r="10" fill="#fff"></circle>{" "}
          <text
            x="150"
            y="200"
            fill="#fff"
            fontFamily="JetBrains Mono"
            fontSize="11"
            textAnchor="middle"
          >
            780
          </text>
        </svg>
      </div>
    );
  }

  // Default elegant badge illustration for newly added / custom committees
  const bg =
    idx % 2 === 0
      ? "linear-gradient(135deg,var(--red),var(--red-deep))"
      : "linear-gradient(135deg,#333,#111)";

  return (
    <div
      style={{
        background: bg,
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
        ></circle>
        <circle
          cx="150"
          cy="120"
          r="70"
          stroke="rgba(255,255,255,.25)"
          strokeWidth="2"
          fill="none"
        ></circle>
        <rect
          x="75"
          y="75"
          width="150"
          height="90"
          rx="14"
          fill="rgba(255,255,255,.15)"
          stroke="#fff"
          strokeWidth="2"
        ></rect>
        <text
          x="150"
          y="126"
          fill="#fff"
          fontFamily="JetBrains Mono, monospace"
          fontSize="18"
          fontWeight="700"
          letterSpacing="2"
          textAnchor="middle"
        >
          {item.code || "FCC"}
        </text>
        <text
          x="150"
          y="146"
          fill="rgba(255,255,255,.75)"
          fontFamily="JetBrains Mono, monospace"
          fontSize="9"
          letterSpacing="1"
          textAnchor="middle"
        >
          COMMITTEE
        </text>
      </svg>
    </div>
  );
}

function renderCommitteeIcon(item: CommitteeItem) {
  if (item.slug === "digital-lending") {
    return (
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
    );
  }

  if (item.slug === "regtech") {
    return (
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
        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
        <path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"></path>
      </svg>
    );
  }

  if (item.slug === "wealthtech") {
    return (
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
    );
  }

  if (item.slug === "insurtech") {
    return (
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
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    );
  }

  if (item.slug === "credit-bureau") {
    return (
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
        <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>
      </svg>
    );
  }

  // Generic fallback icon
  return (
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
  );
}

export function CommitteesPage({ content }: { content: CommitteesContent }) {
  const items = content.items || [];
  const joinBox = content.join_box;

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
            {items.map((item, idx) => {
              const targetHref =
                item.href && item.href !== "#"
                  ? item.href
                  : `/committees/${item.slug}`;

              return (
                <div
                  className="card reveal"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "260px 1fr",
                    gap: "32px",
                    padding: "0",
                    overflow: "hidden",
                  }}
                  id={item.slug}
                  key={`${item.slug}-${idx}`}
                >
                  {renderCommitteeArt(item, idx)}

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
                        {renderCommitteeIcon(item)}
                      </div>{" "}
                      <h3 style={{ fontSize: "1.4rem" }}>{item.name}</h3>
                    </div>

                    <p style={{ color: "var(--muted)" }}>{item.description}</p>

                    {item.who_can_join ? (
                      <p style={{ fontSize: ".88rem", marginTop: "8px" }}>
                        <b>Who can join:</b> {item.who_can_join}
                      </p>
                    ) : null}

                    {item.tags && item.tags.length > 0 ? (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "6px",
                          margin: "14px 0",
                        }}
                      >
                        {item.tags.map((tag, i) => (
                          <span className="tag g" key={i}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

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
                      {item.leaders && item.leaders.length > 0 ? (
                        item.leaders.map((ldr, i) => (
                          <div key={i}>
                            <b style={{ display: "block", color: "var(--charcoal)" }}>
                              {ldr.name}
                            </b>{" "}
                            <span>{ldr.role || ldr.org}</span>
                          </div>
                        ))
                      ) : (
                        <>
                          {item.chair_name ? (
                            <div>
                              <b style={{ display: "block", color: "var(--charcoal)" }}>
                                {item.chair_name}
                              </b>{" "}
                              {item.chair_role ? <span>{item.chair_role}</span> : null}
                            </div>
                          ) : null}

                          {item.co_chair_name ? (
                            <div>
                              <b style={{ display: "block", color: "var(--charcoal)" }}>
                                {item.co_chair_name}
                              </b>{" "}
                              {item.co_chair_role ? <span>{item.co_chair_role}</span> : null}
                            </div>
                          ) : null}
                        </>
                      )}
                    </div>

                    <a
                      href={targetHref}
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
              );
            })}
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
              <h3>{joinBox?.heading || "Want to join a committee?"}</h3>{" "}
              <p style={{ color: "var(--muted)" }}>
                {joinBox?.description ||
                  "Members can take part based on their area of business. Write to"}{" "}
                <a
                  href={`mailto:${joinBox?.email || "swati.s@fintechcouncil.in"}`}
                  style={{ color: "var(--red)", fontWeight: "700" }}
                >
                  {joinBox?.email || "swati.s@fintechcouncil.in"}
                </a>
              </p>
            </div>{" "}
            <a
              href={joinBox?.cta_href || "/apply-membership"}
              className="btn btn-primary"
            >
              {joinBox?.cta_label || "Become a member"}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .card[id]{grid-template-columns:1fr!important}
          .card[id] > div:last-child{padding:24px!important}
        }
      `}</style>
    </>
  );
}
