import type { MembershipBenefitsContent } from "@/lib/cms-types";

const benefitIcons = [
  // 01 Shape regulation
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"></path></svg>,
  // 02 Conference passes
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"></path><path d="M13 6v12" strokeDasharray="2 2"></path></svg>,
  // 03 Every report
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2zM8 7h6M8 11h6"></path></svg>,
  // 04 Share your views
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2zM16 8a5 5 0 0 1 0 8"></path></svg>,
  // 05 Closed-door roundtables
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3"></circle><circle cx="17" cy="10" r="2.5"></circle><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 1.5-4.5 3-4.5S21 17.5 21 20"></path></svg>,
  // 06 Network & grow
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 13l3 3 7-7M3 12l5 5M21 7l-3-3"></path><path d="M2 12l4-4 4 4M22 8l-4 4"></path></svg>,
  // 07 IAMAI membership
  <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"></path></svg>,
];

export function MembershipBenefitsPage({ content }: { content: MembershipBenefitsContent }) {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/members">Membership</a> <span>/</span>
              Benefits
            </div>{" "}
            <h1>{content.hero?.title || "Membership Benefits"}</h1>{" "}
            <p>{content.hero?.description || "What your company gets as a member of the Fintech Convergence Council."}</p>
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
                y="62"
                width="180"
                height="114"
                rx="14"
                fill="rgba(255,255,255,.15)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <rect x="80" y="86" width="30" height="22" rx="4" fill="#f1d79a"></rect>{" "}
              <path
                d="M80 140h70M80 154h40"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <circle cx="210" cy="148" r="12" fill="rgba(255,255,255,.4)"></circle>{" "}
              <circle cx="196" cy="148" r="12" fill="rgba(255,255,255,.25)"></circle>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/members">Our Members</a>{" "}
          <a href="/membership-benefits" className="on">
            Membership Benefits
          </a>{" "}
          <a href="/apply-membership">Apply for Membership</a>
        </div>
      </nav>
      <section>
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">{content.why_join?.eyebrow || "Why join"}</span>{" "}
            <h2>{content.why_join?.heading || "A seat at the table, and everything around it"}</h2>{" "}
            <p className="lead">
              {content.why_join?.lead ||
                "Members get a direct line into policy conversations, plus the events, research and network that come with being part of IAMAI."}
            </p>
            <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={content.why_join?.primary_cta_href || "/apply-membership"} className="btn btn-primary">
                {content.why_join?.primary_cta_label || "Apply now"}
              </a>{" "}
              <a href={content.why_join?.secondary_cta_href || "/members"} className="btn btn-outline">
                {content.why_join?.secondary_cta_label || "See our members"}
              </a>
            </div>
          </div>
          <div className="mcard-wrap reveal">
            <div className="mcard-back"></div>{" "}
            <div className="mcard">
              <div className="row">
                <div className="chip-ic"></div> <b style={{ fontSize: "1.1rem" }}>{content.why_join?.card_title || "FCC"}</b>
              </div>{" "}
              <div className="num">{content.why_join?.card_member_tag || "MEMBER · 2026"}</div>{" "}
              <div className="row">
                <div>
                  <small>MEMBER OF</small> <b>{content.why_join?.card_member_of || "Fintech Convergence Council"}</b>
                </div>{" "}
                <small style={{ textAlign: "right" }}>
                  {content.why_join?.card_sub_note ? (
                    content.why_join.card_sub_note.includes("\n") ? (
                      content.why_join.card_sub_note.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i === 0 && <br />}
                        </span>
                      ))
                    ) : (
                      content.why_join.card_sub_note
                    )
                  ) : (
                    <>
                      IAMAI <br />
                      INCLUDED
                    </>
                  )}
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">{content.benefits_section?.eyebrow || "Benefits"}</span>{" "}
              <h2>{content.benefits_section?.heading || "Seven reasons members join"}</h2>
            </div>
          </div>
          <div className="grid-3 reveal">
            {(content.benefits_section?.items || []).map((b, idx) => (
              <div className="benefit" key={idx}>
                <div className="icon-box">
                  {benefitIcons[idx] || (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"></path>
                    </svg>
                  )}
                </div>{" "}
                <div>
                  <span className="mono" style={{ fontSize: ".7rem", color: "var(--red)" }}>
                    {typeof b.num === "number" ? String(b.num).padStart(2, "0") : (b.num || `0${idx + 1}`)}
                  </span>{" "}
                  <h4>{b.title}</h4>{" "}
                  <p>{b.description}</p>
                </div>
              </div>
            ))}
            {content.benefits_section?.ready_card && (
              <a
                href={content.benefits_section.ready_card.href || "/apply-membership"}
                className="benefit"
                style={{
                  background: "var(--red)",
                  color: "#fff",
                  borderColor: "var(--red)",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1.15rem" }}>{content.benefits_section.ready_card.title}</h4>{" "}
                  <p style={{ color: "#FBE3E3" }}>{content.benefits_section.ready_card.subtitle}</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">{content.process_section?.eyebrow || "Process"}</span>{" "}
            <h2>{content.process_section?.heading || "How membership works"}</h2>{" "}
            <p className="lead">
              {content.process_section?.lead ||
                "Questions? Call 022-61766666 or write to swati.s@fintechcouncil.in"}
            </p>
          </div>
          <div className="steps-v reveal">
            {(content.process_section?.steps || []).map((step, idx) => (
              <div className="s" key={idx}>
                <span className="n">{step.num || `0${idx + 1}`}</span>{" "}
                <div>
                  <h4>{step.title}</h4> <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
