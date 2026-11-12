"use client";

import { useEffect } from "react";
import Script from "next/script";
import type { ApplyPartnershipContent } from "@/lib/cms-types";

export function ApplyPartnershipPage({ content }: { content: ApplyPartnershipContent }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof (window as any).zf_SetDateAndMonthRegexBasedOnDateFormate === "function") {
        (window as any).dateAndMonthRegexFormateArray = (window as any).zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy');
        (window as any).zf_DateRegex = new RegExp((window as any).dateAndMonthRegexFormateArray[0]);
        (window as any).zf_MonthYearRegex = new RegExp((window as any).dateAndMonthRegexFormateArray[1]);
      }
      (window as any).zf_MandArray = ["Name_First", "Email", "SingleLine", "SingleLine1", "SingleLine3"];
      (window as any).zf_FieldArray = ["Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "SingleLine", "SingleLine1", "SingleLine2", "SingleLine3", "SingleLine4", "SingleLine5", "MultiLine"];
      (window as any).isSalesIQIntegrationEnabled = false;
      (window as any).salesIQFieldsArray = [];

      const form = document.getElementById("form") as HTMLFormElement;
      if (form) {
        form.setAttribute("onsubmit", 'javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();');
      }
    }
  }, []);

  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/partners">Partnership</a> <span>/</span>
              Apply
            </div>{" "}
            <h1>{content.hero?.title || "Apply for Partnership"}</h1>{" "}
            <p>
              {content.hero?.description ||
                "As an industry voice that upholds best practice and promotes access to markets and discussions, we invite you to partner with FCC."}
            </p>
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
              <circle
                cx="110"
                cy="120"
                r="52"
                fill="rgba(255,255,255,.15)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>{" "}
              <circle
                cx="190"
                cy="120"
                r="52"
                fill="rgba(255,255,255,.15)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>{" "}
              <path d="M150 86a52 52 0 0 1 0 68a52 52 0 0 1 0-68z" fill="#fff" opacity=".85"></path>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/partners">Our Partners</a>{" "}
          <a href="/partnership-benefits">Partnership Benefits</a>{" "}
          <a href="/apply-partnership" className="on">
            Apply for Partnership
          </a>
        </div>
      </nav>
      <section className="bg-soft">
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr .9fr",
            gap: "40px",
            alignItems: "start",
          }}
          id="formwrap"
        >
          <div className="zf-templateWidth">
            <link href="/css/zoho-form.css" rel="stylesheet" type="text/css" />
            <form
              action="https://forms.zohopublic.in/ia/form/ApplyforPartnership/formperma/s1kOHWTdXdcHjmGz4n-euPMXH4Ni5J8s18fZMFBxECI/htmlRecords/submit"
              name="form"
              method="POST"
              onSubmit={(e) => {
                try {
                  (document as any).charset = "UTF-8";
                } catch {}
                if (typeof (window as any).zf_ValidateAndSubmit === "function") {
                  if (!(window as any).zf_ValidateAndSubmit()) {
                    e.preventDefault();
                    return false;
                  }
                }
              }}
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              id="form"
            >
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              <div className="zf-templateWrapper">
                <div className="zf-subContWrap zf-topAlign">
                  <ul>
                    {/* Name */}
                    <div className="zf-tempFrmWrapper zf-name zf-namelarge">
                      <label className="zf-labelName">
                        Name <em className="zf-important">*</em>
                      </label>
                      <div className="zf-tempContDiv zf-twoType">
                        <div className="zf-nameWrapper">
                          <span>
                            <input
                              type="text"
                              maxLength={255}
                              name="Name_First"
                              fieldType={7}
                              placeholder=""
                            />
                            <label>First Name</label>
                          </span>
                          <span>
                            <input
                              type="text"
                              maxLength={255}
                              name="Name_Last"
                              fieldType={7}
                              placeholder=""
                            />
                            <label>Last Name</label>
                          </span>
                          <div className="zf-clearBoth"></div>
                        </div>
                        <p id="Name_error" className="zf-errorMessage" style={{ display: "none" }}>
                          Invalid value
                        </p>
                      </div>
                      <div className="zf-clearBoth"></div>
                    </div>

                    {/* Email & Phone */}
                    <div className="zfgrid_Wrapper">
                      <div className="zftwoColumn zfMultiColGrid">
                        <div className="zfCol">
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">
                              Email <em className="zf-important">*</em>
                            </label>
                            <div className="zf-tempContDiv">
                              <span>
                                <input
                                  type="text"
                                  name="Email"
                                  checktype="c5"
                                  defaultValue=""
                                  maxLength={255}
                                  fieldType={9}
                                  placeholder=""
                                />
                              </span>
                              <p
                                id="Email_error"
                                className="zf-errorMessage"
                                style={{ display: "none" }}
                              >
                                Invalid value
                              </p>
                            </div>
                            <div className="zf-clearBoth"></div>
                          </div>
                        </div>
                        <div className="zfCol">
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">Phone</label>
                            <div className="zf-tempContDiv zf-phonefld">
                              <div className="zf-phwrapper zf-phNumber">
                                <span>
                                  <input
                                    type="text"
                                    compname="PhoneNumber"
                                    name="PhoneNumber_countrycode"
                                    maxLength={20}
                                    checktype="c7"
                                    defaultValue=""
                                    phoneFormat="1"
                                    isCountryCodeEnabled="false"
                                    fieldType="11"
                                    id="international_PhoneNumber_countrycode"
                                    valType="number"
                                    phoneFormatType="1"
                                    placeholder=""
                                  />
                                  <label>Number</label>
                                </span>
                                <div className="zf-clearBoth"></div>
                              </div>
                              <p
                                id="PhoneNumber_error"
                                className="zf-errorMessage"
                                style={{ display: "none" }}
                              >
                                You must enter at least 6 digits.
                              </p>
                            </div>
                            <div className="zf-clearBoth"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Designation, Organization, Sector/Field */}
                    <div className="zfgrid_Wrapper">
                      <div className="zfthreeColumn zfMultiColGrid">
                        <div className="zfCol">
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">
                              Designation <em className="zf-important">*</em>
                            </label>
                            <div className="zf-tempContDiv">
                              <span>
                                <input
                                  type="text"
                                  name="SingleLine"
                                  checktype="c1"
                                  defaultValue=""
                                  maxLength={255}
                                  fieldType={1}
                                  placeholder=""
                                />
                              </span>
                              <p
                                id="SingleLine_error"
                                className="zf-errorMessage"
                                style={{ display: "none" }}
                              >
                                Invalid value
                              </p>
                            </div>
                            <div className="zf-clearBoth"></div>
                          </div>
                        </div>
                        <div className="zfCol">
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">
                              Organization <em className="zf-important">*</em>
                            </label>
                            <div className="zf-tempContDiv">
                              <span>
                                <input
                                  type="text"
                                  name="SingleLine1"
                                  checktype="c1"
                                  defaultValue=""
                                  maxLength={255}
                                  fieldType={1}
                                  placeholder=""
                                />
                              </span>
                              <p
                                id="SingleLine1_error"
                                className="zf-errorMessage"
                                style={{ display: "none" }}
                              >
                                Invalid value
                              </p>
                            </div>
                            <div className="zf-clearBoth"></div>
                          </div>
                        </div>
                        <div className="zfCol">
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">Sector/Field</label>
                            <div className="zf-tempContDiv">
                              <span>
                                <input
                                  type="text"
                                  name="SingleLine2"
                                  checktype="c1"
                                  defaultValue=""
                                  maxLength={255}
                                  fieldType={1}
                                  placeholder=""
                                />
                              </span>
                              <p
                                id="SingleLine2_error"
                                className="zf-errorMessage"
                                style={{ display: "none" }}
                              >
                                Invalid value
                              </p>
                            </div>
                            <div className="zf-clearBoth"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location, Website, LinkedIn */}
                    <div className="zfgrid_Wrapper">
                      <div className="zfthreeColumn zfMultiColGrid">
                        <div className="zfCol">
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">
                              Your Location <em className="zf-important">*</em>
                            </label>
                            <div className="zf-tempContDiv">
                              <span>
                                <input
                                  type="text"
                                  name="SingleLine3"
                                  checktype="c1"
                                  defaultValue=""
                                  maxLength={255}
                                  fieldType={1}
                                  placeholder=""
                                />
                              </span>
                              <p
                                id="SingleLine3_error"
                                className="zf-errorMessage"
                                style={{ display: "none" }}
                              >
                                Invalid value
                              </p>
                            </div>
                            <div className="zf-clearBoth"></div>
                          </div>
                        </div>
                        <div className="zfCol">
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">Website Link</label>
                            <div className="zf-tempContDiv">
                              <span>
                                <input
                                  type="text"
                                  name="SingleLine4"
                                  checktype="c1"
                                  defaultValue=""
                                  maxLength={255}
                                  fieldType={1}
                                  placeholder=""
                                />
                              </span>
                              <p
                                id="SingleLine4_error"
                                className="zf-errorMessage"
                                style={{ display: "none" }}
                              >
                                Invalid value
                              </p>
                            </div>
                            <div className="zf-clearBoth"></div>
                          </div>
                        </div>
                        <div className="zfCol">
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">LinkedIn Page</label>
                            <div className="zf-tempContDiv">
                              <span>
                                <input
                                  type="text"
                                  name="SingleLine5"
                                  checktype="c1"
                                  defaultValue=""
                                  maxLength={255}
                                  fieldType={1}
                                  placeholder=""
                                />
                              </span>
                              <p
                                id="SingleLine5_error"
                                className="zf-errorMessage"
                                style={{ display: "none" }}
                              >
                                Invalid value
                              </p>
                            </div>
                            <div className="zf-clearBoth"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Comments / Remarks */}
                    <div className="zf-tempFrmWrapper zf-large">
                      <label className="zf-labelName">How can we partner?</label>
                      <div className="zf-tempContDiv">
                        <span>
                          <textarea
                            name="MultiLine"
                            checktype="c1"
                            maxLength={65535}
                            placeholder=""
                          ></textarea>
                        </span>
                        <p
                          id="MultiLine_error"
                          className="zf-errorMessage"
                          style={{ display: "none" }}
                        >
                          Invalid value
                        </p>
                      </div>
                      <div className="zf-clearBoth"></div>
                    </div>
                  </ul>
                </div>
                <ul>
                  <li className="zf-fmFooter">
                    <button className="zf-submitColor" type="submit">
                      Submit
                    </button>
                  </li>
                </ul>
              </div>
            </form>
            <Script
              id="zoho-script-partnership"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  var dateAndMonthRegexFormateArray = typeof zf_SetDateAndMonthRegexBasedOnDateFormate === 'function' ? zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy') : [];
                  var zf_DateRegex = dateAndMonthRegexFormateArray[0] ? new RegExp(dateAndMonthRegexFormateArray[0]) : null;
                  var zf_MonthYearRegex = dateAndMonthRegexFormateArray[1] ? new RegExp(dateAndMonthRegexFormateArray[1]) : null;
                  var zf_MandArray = ["Name_First", "Email", "SingleLine", "SingleLine1", "SingleLine3"];
                  var zf_FieldArray = ["Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "SingleLine", "SingleLine1", "SingleLine2", "SingleLine3", "SingleLine4", "SingleLine5", "MultiLine"];
                  var isSalesIQIntegrationEnabled = false;
                  var salesIQFieldsArray = [];
                `,
              }}
            />
          </div>
          <aside className="reveal">
            <div className="card">
              <span className="eyebrow">
                {content.sidebar?.how_it_works?.eyebrow || "How partnership works"}
              </span>{" "}
              <div className="steps-v" style={{ marginTop: "20px" }}>
                {(content.sidebar?.how_it_works?.steps || [
                  {
                    num: "01",
                    title: "Tell us about you",
                    description: "Share your organisation and the work you do.",
                  },
                  {
                    num: "02",
                    title: "Explore fit",
                    description: "We find programmes where we can work together.",
                  },
                  {
                    num: "03",
                    title: "Launch together",
                    description: "Co-create events, sessions and initiatives.",
                  },
                ]).map((step, idx) => (
                  <div className="s" key={idx}>
                    <span className="n">{step.num || `0${idx + 1}`}</span>{" "}
                    <div>
                      <h4>{step.title}</h4> <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="card"
              style={{
                marginTop: "16px",
                background: "var(--charcoal)",
                color: "#fff",
                border: "0",
              }}
            >
              <h4 style={{ marginBottom: "6px" }}>
                {content.sidebar?.need_help?.heading || "Need help?"}
              </h4>{" "}
              <p style={{ color: "#bbb", fontSize: ".88rem" }}>
                {content.sidebar?.need_help?.lead || "Call"}{" "}
                <a
                  href={content.sidebar?.need_help?.phone_href || "tel:02261766666"}
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  {content.sidebar?.need_help?.phone || "022-61766666"}
                </a>{" "}
                or email{" "}
                <a
                  href={`mailto:${content.sidebar?.need_help?.email || "info@fintechcouncil.in"}`}
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  {content.sidebar?.need_help?.email || "info@fintechcouncil.in"}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
      <style>{`@media(max-width:900px){#formwrap{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
