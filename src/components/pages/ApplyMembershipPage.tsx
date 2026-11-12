"use client";

import { useEffect } from "react";
import Script from "next/script";

export function ApplyMembershipPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof (window as any).zf_SetDateAndMonthRegexBasedOnDateFormate === "function") {
        (window as any).dateAndMonthRegexFormateArray = (window as any).zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy');
        (window as any).zf_DateRegex = new RegExp((window as any).dateAndMonthRegexFormateArray[0]);
        (window as any).zf_MonthYearRegex = new RegExp((window as any).dateAndMonthRegexFormateArray[1]);
      }
      (window as any).zf_MandArray = ["Name_First", "SingleLine", "Email", "SingleLine1", "PhoneNumber_countrycode"];
      (window as any).zf_FieldArray = ["Name_First", "Name_Last", "SingleLine", "Email", "SingleLine1", "PhoneNumber_countrycode"];
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
              <a href="/">Home</a> <span>/</span> <a href="/members">Membership</a> <span>/</span>
              Apply
            </div>{" "}
            <h1>Apply for Membership</h1>{" "}
            <p>
              FCC works with all its members to promote the growth of the fintech industry. Tell us
              about your company and we'll get in touch.
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
              <rect
                x="80"
                y="34"
                width="140"
                height="176"
                rx="12"
                fill="rgba(255,255,255,.12)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <path
                d="M104 74h92M104 102h92M104 130h60"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <rect x="104" y="160" width="70" height="26" rx="13" fill="#fff"></rect>{" "}
              <circle cx="218" cy="190" r="26" fill="#fff"></circle>{" "}
              <path
                d="M206 190l8 8 16-16"
                stroke="#BF1A1F"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/members">Our Members</a> <a href="/membership-benefits">Membership Benefits</a>{" "}
          <a href="/apply-membership" className="on">
            Apply for Membership
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
              action="https://forms.zohopublic.in/ia/form/ApplyforMembership/formperma/uRVtSswYBndsnhv7KRSyvKPX2kaEi0_CZ2iEUXQ2wVI/htmlRecords/submit"
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
              {/* Hidden tracking inputs */}
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              <div className="zf-templateWrapper">
                <div className="zf-subContWrap zf-topAlign">
                  <ul>
                    {/* Name (First & Last) */}
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

                    {/* Designation & Work Email */}
                    <div className="zfgrid_Wrapper">
                      <div className="zftwoColumn zfMultiColGrid">
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
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">
                              Work Email <em className="zf-important">*</em>
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
                                Invalid work email
                              </p>
                            </div>
                            <div className="zf-clearBoth"></div>
                          </div>
                        </div>

                        {/* Organization & Phone */}
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
                          <div className="zf-tempFrmWrapper zf-large">
                            <label className="zf-labelName">
                              Phone <em className="zf-important">*</em>
                            </label>
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
                                    phoneFormatType="2"
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
              id="zoho-script-membership"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  var dateAndMonthRegexFormateArray = typeof zf_SetDateAndMonthRegexBasedOnDateFormate === 'function' ? zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy') : [];
                  var zf_DateRegex = dateAndMonthRegexFormateArray[0] ? new RegExp(dateAndMonthRegexFormateArray[0]) : null;
                  var zf_MonthYearRegex = dateAndMonthRegexFormateArray[1] ? new RegExp(dateAndMonthRegexFormateArray[1]) : null;
                  var zf_MandArray = ["Name_First", "SingleLine", "Email", "SingleLine1", "PhoneNumber_countrycode"];
                  var zf_FieldArray = ["Name_First", "Name_Last", "SingleLine", "Email", "SingleLine1", "PhoneNumber_countrycode"];
                  var isSalesIQIntegrationEnabled = false;
                  var salesIQFieldsArray = [];
                `,
              }}
            />
          </div>
          <aside className="reveal">
            <div className="card">
              <span className="eyebrow">What happens next</span>{" "}
              <div className="steps-v" style={{ marginTop: "20px" }}>
                <div className="s">
                  <span className="n">01</span>{" "}
                  <div>
                    <h4>We review your application</h4>{" "}
                    <p>The membership team looks at your details.</p>
                  </div>
                </div>{" "}
                <div className="s">
                  <span className="n">02</span>{" "}
                  <div>
                    <h4>We reach out</h4> <p>You'll hear from us about the next steps.</p>
                  </div>
                </div>{" "}
                <div className="s">
                  <span className="n">03</span>{" "}
                  <div>
                    <h4>Welcome aboard</h4> <p>Join committees and start taking part.</p>
                  </div>
                </div>
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
              <h4 style={{ marginBottom: "6px" }}>Need help?</h4>{" "}
              <p style={{ color: "#bbb", fontSize: ".88rem" }}>
                Call{" "}
                <a href="tel:02261766666" style={{ color: "#fff", fontWeight: "700" }}>
                  022-61766666
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@fintechcouncil.in"
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  info@fintechcouncil.in
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
