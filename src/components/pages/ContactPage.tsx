"use client";

import { useEffect } from "react";
import Script from "next/script";
import type { ContactContent } from "@/lib/cms-types";

const COUNTRIES = [
  "-Select-",
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Singapore",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "Japan",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "Georgia",
  "Ghana",
  "Greece",
  "Guatemala",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Maldives",
  "Malta",
  "Mauritius",
  "Mexico",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Myanmar",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Tanzania",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Uganda",
  "Ukraine",
  "Uruguay",
  "Uzbekistan",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export function ContactPage({ content }: { content: ContactContent }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof (window as any).zf_SetDateAndMonthRegexBasedOnDateFormate === "function") {
        (window as any).dateAndMonthRegexFormateArray = (window as any).zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy');
        (window as any).zf_DateRegex = new RegExp((window as any).dateAndMonthRegexFormateArray[0]);
        (window as any).zf_MonthYearRegex = new RegExp((window as any).dateAndMonthRegexFormateArray[1]);
      }
      (window as any).zf_MandArray = ["Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "MultiLine"];
      (window as any).zf_FieldArray = ["Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "Address_AddressLine1", "Address_AddressLine2", "Address_City", "Address_Region", "Address_ZipCode", "Address_Country", "MultiLine"];
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
          <div className="zf-templateWidth">
            <link href="/css/zoho-form.css" rel="stylesheet" type="text/css" />
            <form
              action="https://forms.zohopublic.in/ia/form/FCCQuery/formperma/euVQtYRZCAJbxWp7Zxx2vORP7iW6Wlh9h1pM0gkkpNQ/htmlRecords/submit"
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

                    {/* Email */}
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
                        <p id="Email_error" className="zf-errorMessage" style={{ display: "none" }}>
                          Invalid value
                        </p>
                      </div>
                      <div className="zf-clearBoth"></div>
                    </div>

                    {/* Phone */}
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
                          Invalid value
                        </p>
                      </div>
                      <div className="zf-clearBoth"></div>
                    </div>

                    {/* Full Address Block */}
                    <div id="Address" className="zf-tempFrmWrapper zf-address zf-addrlarge">
                      <label className="zf-labelName">Address</label>
                      <div className="zf-tempContDiv zf-address">
                        <div className="zf-addrCont">
                          <div className="address_row_1">
                            <span className="zf-addresCols">
                              <input
                                type="text"
                                maxLength={255}
                                name="Address_AddressLine1"
                                checktype="c1"
                                placeholder=""
                              />
                              <label>Street Address</label>
                            </span>
                          </div>
                          <div className="address_row_2">
                            <span className="zf-addresCols">
                              <input
                                type="text"
                                maxLength={255}
                                name="Address_AddressLine2"
                                checktype="c1"
                                placeholder=""
                              />
                              <label>Address Line 2</label>
                            </span>
                          </div>
                          <div className="address_row_3">
                            <span className="zf-addresCols">
                              <input
                                type="text"
                                maxLength={255}
                                name="Address_City"
                                checktype="c1"
                                placeholder=""
                              />
                              <label>City</label>
                            </span>
                            <span className="zf-addresCols">
                              <input
                                type="text"
                                maxLength={255}
                                name="Address_Region"
                                checktype="c1"
                                placeholder=""
                              />
                              <label>State/Region/Province</label>
                            </span>
                          </div>
                          <div className="address_row_4">
                            <span className="zf-addresCols">
                              <input
                                type="text"
                                maxLength={255}
                                name="Address_ZipCode"
                                checktype="c1"
                                placeholder=""
                              />
                              <label>Postal / Zip Code</label>
                            </span>
                            <span className="zf-addresCols">
                              <select
                                className="zf-form-sBox"
                                name="Address_Country"
                                checktype="c1"
                                defaultValue="-Select-"
                              >
                                <option value="-Select-">-Select-</option>
                                <option value="India">India</option>
                                <option value="United States">United States</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Singapore">Singapore</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                {COUNTRIES.filter(
                                  (c) =>
                                    ![
                                      "-Select-",
                                      "India",
                                      "United States",
                                      "United Kingdom",
                                      "Singapore",
                                      "United Arab Emirates",
                                    ].includes(c)
                                ).map((c) => (
                                  <option key={c} value={c}>
                                    {c}
                                  </option>
                                ))}
                              </select>
                              <label>Country</label>
                            </span>
                          </div>
                          <div className="zf-clearBoth"></div>
                          <p
                            id="Address_error"
                            className="zf-errorMessage"
                            style={{ display: "none" }}
                          >
                            Invalid value
                          </p>
                        </div>
                      </div>
                      <div className="zf-eclearBoth"></div>
                    </div>

                    {/* Query / Message */}
                    <div className="zf-tempFrmWrapper zf-large">
                      <label className="zf-labelName">
                        Query <em className="zf-important">*</em>
                      </label>
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
              id="zoho-script-contact"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  var dateAndMonthRegexFormateArray = typeof zf_SetDateAndMonthRegexBasedOnDateFormate === 'function' ? zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy') : [];
                  var zf_DateRegex = dateAndMonthRegexFormateArray[0] ? new RegExp(dateAndMonthRegexFormateArray[0]) : null;
                  var zf_MonthYearRegex = dateAndMonthRegexFormateArray[1] ? new RegExp(dateAndMonthRegexFormateArray[1]) : null;
                  var zf_MandArray = ["Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "MultiLine"];
                  var zf_FieldArray = ["Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "Address_AddressLine1", "Address_AddressLine2", "Address_City", "Address_Region", "Address_ZipCode", "Address_Country", "MultiLine"];
                  var isSalesIQIntegrationEnabled = false;
                  var salesIQFieldsArray = [];
                `,
              }}
            />
          </div>
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
