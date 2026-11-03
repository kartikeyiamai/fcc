import type { ContactContent } from "@/lib/cms-types";

export function ContactPage({ content }: { content: ContactContent }) {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span>Contact
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
              <path
                d="M150 210s-56-50-56-96a56 56 0 0 1 112 0c0 46-56 96-56 96z"
                fill="rgba(255,255,255,.18)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <circle cx="150" cy="112" r="20" fill="#fff"></circle>{" "}
              <ellipse
                cx="150"
                cy="214"
                rx="60"
                ry="10"
                stroke="rgba(255,255,255,.4)"
                fill="none"
              ></ellipse>
            </svg>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="grid-4 reveal">
            {content.channels.map((channel) => (
              <a
                key={channel.email}
                href={`mailto:${channel.email}`}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
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
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="M3 7l9 6 9-6"></path>
                  </svg>
                </div>
                <div>
                  <b
                    style={{
                      fontSize: ".8rem",
                      color: "var(--muted)",
                      fontFamily: "var(--mono)",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                    }}
                  >
                    {channel.label}
                  </b>
                  <div style={{ fontWeight: "700", fontSize: ".92rem", wordBreak: "break-all" }}>
                    {channel.email}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-soft"
        style={{
          paddingTop: "0",
          background: "linear-gradient(#fff 0,#fff 0) top/100% 0 no-repeat,var(--bg)",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr .9fr",
            gap: "40px",
            alignItems: "start",
            paddingTop: "64px",
          }}
          id="cwrap"
        >
          <form className="form-card reveal" data-preview="">
            <span className="eyebrow">Send a query</span>{" "}
            <h2 style={{ fontSize: "1.6rem" }}>How can we help?</h2>
            <div className="form-grid" style={{ marginTop: "16px" }}>
              <div className="field">
                <label>
                  First name <i>*</i>
                </label>{" "}
                <input required />
              </div>{" "}
              <div className="field">
                <label>
                  Last name <i>*</i>
                </label>{" "}
                <input required />
              </div>
              <div className="field">
                <label>
                  Email <i>*</i>
                </label>{" "}
                <input type="email" required />
              </div>{" "}
              <div className="field">
                <label>
                  Phone <i>*</i>
                </label>{" "}
                <input type="tel" required minLength={6} />
              </div>
              <div className="field">
                <label>City</label> <input />
              </div>{" "}
              <div className="field">
                <label>Topic</label>{" "}
                <select>
                  <option>General</option> <option>Membership</option> <option>Committees</option>{" "}
                  <option>Partnership</option> <option>Events</option> <option>Media</option>
                </select>
              </div>
              <div className="field full">
                <label>
                  Your query <i>*</i>
                </label>{" "}
                <textarea required></textarea>
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: "20px" }} type="submit">
              Send query{" "}
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
            </button>{" "}
            <div className="form-ok">
              <span className="tick">✓</span>Thanks! We'll get back to you soon.
            </div>
          </form>
          <aside className="reveal">
            <div className="card">
              <div className="contact-line">
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
                    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"></path>{" "}
                    <circle cx="12" cy="9" r="2.5"></circle>
                  </svg>
                </div>{" "}
                <div>
                  <b>Office</b>Fintech Convergence Council <br />
                  301-A, Godrej Two, Pirojshanagar, <br />
                  Vikhroli, Mumbai, Maharashtra 400079
                </div>
              </div>
              <div className="contact-line">
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
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path>
                  </svg>
                </div>{" "}
                <div>
                  <b>Phone</b> <a href="tel:02261766666">022-61766666</a>
                </div>
              </div>
              <div className="contact-line">
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
                    <circle cx="9" cy="8" r="3"></circle> <circle cx="17" cy="10" r="2.5"></circle>{" "}
                    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 1.5-4.5 3-4.5S21 17.5 21 20"></path>
                  </svg>
                </div>{" "}
                <div>
                  <b>Contact person</b>Sandeep Jhingran <br />{" "}
                  <a href="mailto:sandeep@fintechcouncil.in" style={{ color: "var(--red)" }}>
                    sandeep@fintechcouncil.in
                  </a>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                marginTop: "16px",
                padding: "0",
                overflow: "hidden",
                height: "220px",
                position: "relative",
                background: "var(--charcoal)",
              }}
            >
              <svg
                viewBox="0 0 400 220"
                style={{ width: "100%", height: "100%" }}
                aria-label="Map pin for Vikhroli, Mumbai"
              >
                <defs>
                  <pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20 0H0V20" fill="none" stroke="#333"></path>
                  </pattern>
                </defs>{" "}
                <rect width="400" height="220" fill="url(#g)"></rect>
                <path
                  d="M0 150 Q 120 120 200 140 T 400 110"
                  stroke="#444"
                  strokeWidth="10"
                  fill="none"
                ></path>{" "}
                <path d="M140 0 Q 160 110 230 220" stroke="#444" strokeWidth="7" fill="none"></path>
                <circle cx="200" cy="110" r="30" fill="#BF1A1F" opacity=".2">
                  <animate
                    attributeName="r"
                    values="14;40;14"
                    dur="3s"
                    repeatCount="indefinite"
                  ></animate>{" "}
                  <animate
                    attributeName="opacity"
                    values=".4;0;.4"
                    dur="3s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
                <path
                  d="M200 118s-16-14-16-27a16 16 0 0 1 32 0c0 13-16 27-16 27z"
                  fill="#BF1A1F"
                ></path>{" "}
                <circle cx="200" cy="91" r="6" fill="#fff"></circle>
                <text
                  x="200"
                  y="150"
                  fill="#fff"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight="700"
                  fontSize="13"
                  textAnchor="middle"
                >
                  Godrej Two, Vikhroli
                </text>
              </svg>
              <a
                href="https://maps.google.com/?q=Godrej+Two+Pirojshanagar+Vikhroli+Mumbai"
                target="_blank"
                rel="noopener"
                className="btn btn-light btn-sm"
                style={{ position: "absolute", right: "12px", bottom: "12px" }}
              >
                Open in Maps
              </a>
            </div>
          </aside>
        </div>
      </section>
      <style>{`@media(max-width:900px){#cwrap{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
