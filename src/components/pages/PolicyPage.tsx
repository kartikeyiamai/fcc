import Link from "next/link";

interface PolicyRepresentation {
  id: string;
  regulator: string;
  dataR: string;
  title: string;
  tag: string;
  paragraphs: string[];
}

const POLICY_REPRESENTATIONS: PolicyRepresentation[] = [
  {
    id: "fintech-lsps",
    regulator: "RBI",
    dataR: "RBI lend",
    title: "Fintech LSPs: The case for a better data access framework",
    tag: "Representation · RBI · Digital Lending",
    paragraphs: [
      "The concept note discusses the rapid growth of India's fintech sector and the importance of a clear and consistent data access framework for fintech companies.",
      "Fintech companies are playing a crucial role in improving access to credit and enabling greater participation in the economy, particularly for underserved segments. However, certain restrictions under RBI guidelines on digital lending are impacting the ability of fintech companies to collect customer data, which is crucial for their growth and ability to innovate. The note proposes suggestions that may allow fintech LSPs to access data while balancing the regulatory objective to safeguard consumer interests and manage data privacy risks. The note also discusses the role of fintech LSPs, customer expectations from them, and the importance of personalized services and data security measures. The proposed suggestions prioritize data privacy and protection and aim to balance the needs of Fintech LSPs with the concerns of regulators.",
    ],
  },
  {
    id: "fldg",
    regulator: "RBI",
    dataR: "RBI lend",
    title: "FLDG- A lever for financial inclusion",
    tag: "Representation · RBI · Digital Lending",
    paragraphs: [
      "The Fintech Convergence Council's Lending Council in India has identified First Loan Default Guarantee (FLDG) as a concern area in the lending industry.",
      "The council has suggested mitigants to address the concerns, including linking FLDG to the underlying portfolio pool and capping it at 10% of receivables, ensuring FLDG is backed by cash or cash equivalent collateral for enforceability, and requiring disclosure of FLDG arrangements by Regulated Entities (REs) to regulators on a quarterly basis. The proposed mitigants aim to promote responsible growth, better financial inclusion, and credit expansion in India's aspirational economy.",
    ],
  },
  {
    id: "execution-only-platforms",
    regulator: "SEBI",
    dataR: "SEBI wealth",
    title: "Framework for platforms providing “execution-only” services in direct plans of Mutual Funds",
    tag: "Representation · SEBI · WealthTech",
    paragraphs: [
      "The (SEBI) has released a Consultation Paper on a regulatory framework for platforms providing execution-only services in direct plans of Mutual Funds.",
      "The paper proposes Approach 2, which would require EOPs to obtain registration from AMFI and act as agents of AMC. The EOPs may receive a transaction-based fee from the AMC and a minimum-flat fee should be defined to cover platform costs. The proposal to allow EOPs to provide both financial and non-financial services is deemed appropriate. Cybersecurity-related requirements are sufficient, but data protection and KYC requirements should be established. Data sharing among divisions of a body corporate should be encouraged, and transparency and grievance redressal norms are adequate. EOPs should be allowed to connect through any exchange platform, and the EOP code should be considered for transaction-based fees.",
    ],
  },
  {
    id: "guidelines-digital-lending",
    regulator: "RBI",
    dataR: "RBI lend",
    title: "Guidelines on Digital Lending - Industry Representation",
    tag: "Representation · RBI · Digital Lending",
    paragraphs: [
      "The Reserve Bank of India (RBI) has released the 'Guidelines on Digital Lending,' which provide regulatory oversight on digital lending practices and offer clarity on operational and regulatory aspects concerning the digital lending arena.",
      "The Guidelines have been positively received by the industry as a progressive step towards regulating the digital lending space while prioritizing customer protection at all levels. However, the industry is facing implementation challenges with certain clauses of the Guidelines, and they are seeking RBI's guidance to navigate through these changes. Some of the matters requiring consideration include implementation timelines, scope of digital lending, storage of data in servers located in India, loan disbursals, servicing, and repayment, digitally signed documents, and loss-sharing arrangement in case of default. The industry requests an extension of at least 6 months to comply with the Guidelines' requirements and seeks clarification on several clauses, including the scope of lending service providers and the retention of processing fees. The industry is excited about having an established regulatory environment governing digital lending in the future and is willing to support RBI in designing innovative use cases within the regulatory boundaries.",
    ],
  },
  {
    id: "msme-lending",
    regulator: "RBI",
    dataR: "RBI lend",
    title: "Industry Challenges and recommendations in MSME lending",
    tag: "Representation · RBI · Digital Lending",
    paragraphs: [
      "The Fintech Convergence Council (FCC), representing the MSME lending ecosystem, expresses its gratitude to the Reserve Bank of India for its support of fintech and the expansion of financial services.",
      "While fintech has contributed to increased access to financial services, it has also presented the MSME sector with a unique opportunity for growth. FCC recommends that the RBI consider several critical issues affecting the sustainability and expansion of MSME lending, including concerns about FLDG arrangements, borrower classification in case of delinquencies, and co-lending arrangements between two REs. To address these concerns, FCC proposes several mitigants, such as linking FLDG to the underlying portfolio pool, requiring FLDG to be backed by collateral, and creating specific disclosures and monitoring mechanisms. FCC also requests clarification on co-lending arrangements between two REs and suggests incorporating loss sharing arrangements in case of default into the Digital Lending Circular.",
    ],
  },
  {
    id: "two-factor-authentication",
    regulator: "SEBI",
    dataR: "SEBI wealth",
    title: "Industry recommendation on ‘Two-Factor Authentication for transactions in units of Mutual Funds’",
    tag: "Representation · SEBI · WealthTech",
    paragraphs: [
      "The Securities and Exchange Board of India (SEBI) has mandated Two-Factor Authentication (2FA) for online subscription transactions of units of Mutual Funds from April 1, 2023, to ensure investor safety and security.",
      "While the industry appreciates SEBI's investor-first approach, they, with the help of fintech convergence council have requested a review of the Circular to simplify the transaction experience for investors in specific scenarios. The industry has adopted all measures outlined by SEBI in its extant regulations regarding the implementation of the 2FA mechanism. The industry recommends exempting the 2FA mandate for net banking and UPI facilitated orders and enabling a 'time-window' for investors to undertake multiple orders within a single login session for MF Orders under OTM to improve efficiency and facilitate a seamless investor experience.",
    ],
  },
  {
    id: "digital-financial-service-providers",
    regulator: "RBI",
    dataR: "RBI lend",
    title: "Introduction of Regulatory Framework for Digital Financial Service Providers",
    tag: "Representation · RBI · Digital Lending",
    paragraphs: [
      "The FinTech Convergence Council (FCC) has put forward a regulatory framework for Digital Financial Service Providers (DFSPs) in India, which includes all FinTech entities involved in managing savings and current bank accounts in partnership with RBI licensed banks.",
      "This framework is intended to set standards for good conduct, enable monitoring of DFSPs, and establish a fully regulated environment in the future. The proposed framework includes key components such as applicability to all DFSPs in India, adherence to principles such as good governance, transparency, customer protection, compliance, risk management, and information security, as well as compliance with Know Your Customer (KYC) norms and outsourcing guidelines. Additionally, it includes grievance redressal and disclosure mechanisms for customers, ensuring information security and partner bank visibility. The FCC also proposes to introduce a new concept of Digital Business Correspondent (Digital BC) by amending the current Business Correspondent Guidelines to expand digital banking services and enhance customer satisfaction.",
    ],
  },
  {
    id: "irdai-recommendations",
    regulator: "IRDAI",
    dataR: "IRDAI insur",
    title: "Key Industry Recommendations for IRDAI's consideration",
    tag: "Representation · IRDAI · InsurTech",
    paragraphs: [
      "The Insurance Regulatory and Development Authority of India (IRDAI) has taken proactive measures to encourage the growth of Insurance Technology (InsurTech) in India, leading to advancements in the sector through the use of artificial intelligence, big data, and the internet of things.",
      "InsurTech players have successfully catered to the personalized needs of India's relatively underpenetrated insurance market, but their growth and innovation have been constrained due to the highly regulated nature of the industry. The FinTech Convergence Council suggests various recommendations for IRDAI's consideration, including relaxing the regulations around Point-of Sale Person (POSP) onboarding and permissible activities, enabling the Managing General Agent (MGA) model, and allowing Insurance Brokers to undertake Aadhaar Authentication for Insurance Companies. Other recommendations include the creation of a claims repository, the need for flexibility in the expense of management, and the removal of caps on commissions for various voluntary pure risk products and de-tariffed premiums",
    ],
  },
  {
    id: "lending-against-e-gold",
    regulator: "RBI",
    dataR: "RBI lend",
    title: "Representation against RBI regulations for Lending against e-Gold",
    tag: "Representation · RBI · Digital Lending",
    paragraphs: [
      "The representation highlights the restrictions imposed by the Reserve Bank of India (RBI) on lending against e-gold, as the current regulations only allow lending against gold jewelry.",
      "The representation recommends increasing the limit of loan against coins to 100 grams and allowing e-gold loans up to 100 grams. This move is expected to encourage young investors to invest in smaller quantities of gold and subsequently borrow loans against such gold digitally with an e pledge form. The representation further suggests enabling FinTechs to work with RBI and SEBI to build e-gold loan products and integrating blockchain technology to trace, buy, sell, stock, pledge, accept, and release gold. The recommendations are expected to enhance and further e gold investments, increase liquidity, and help financial institutions enter first-level secured loans without physical infrastructure. The representation believes that e-gold loans offer convenience for consumers, safety for lenders, and can help further financial inclusion, especially for the rural population.",
    ],
  },
  {
    id: "p2p-lending",
    regulator: "RBI",
    dataR: "RBI lend",
    title: "Representation on industry Concerns regarding Peer-to-Peer (P2P) Lending",
    tag: "Representation · RBI · Digital Lending",
    paragraphs: [
      "The Fintech Convergence Council (FCC), representing the P2P lending ecosystem, expresses its gratitude to the Reserve Bank of India for its support of fintech and the expansion of financial services.",
      "The P2P lending landscape in India has experienced significant growth, driven by technological advancements and supportive regulations from the Reserve Bank of India (RBI). With an estimated market size projected to reach $10.5 billion by 2026, the sector has transformed traditional borrowing, providing individuals and SMEs with faster and more cost-effective access to credit. The recommendations presented to the RBI include advocating for instant loan disbursals by placing responsibility on P2P platforms, proposing secured lending options to cater to borrowers with weak credit profiles, seeking tax concessions to categorize P2P lenders as debt-fund investors, and urging an increase in lending limits for both lenders and borrowers. These proposals aim to streamline operations, enhance financial inclusion, and stimulate economic growth through increased investments in P2P lending.",
    ],
  },
  {
    id: "nomination-mutual-fund",
    regulator: "SEBI",
    dataR: "SEBI wealth",
    title: "Representation on Nomination for Mutual Fund Unit Holders",
    tag: "Representation · SEBI · WealthTech",
    paragraphs: [
      "The Fintech Convergence Council (FCC) has raised concerns regarding the implementation of SEBI's circular on the subject of Nomination for Mutual Fund Unit Holders,",
      "as operational clarity is still awaited from the Association of Mutual Funds in India (AMFI) despite an interim note issued by RTAs. The guidelines issued by RTAs have some operational challenges and may result in customer inconvenience and higher operational costs. The FCC requests clarifications on the definition of e-signatures, a list of authorized non-Aadhaar based e-sign providers, and an additional 30-day period for implementation to allow time for substantial IT changes to comply with proposed norms.",
    ],
  },
];

export function PolicyPage() {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <Link href="/">Home</Link> <span>/</span> <Link href="/policy">Policy &amp; Research</Link>{" "}
              <span>/</span>Policy
            </div>{" "}
            <h1>Policy</h1>{" "}
            <p>
              How FCC carries the industry&apos;s voice to regulators and government: representations,
              consultation responses and concept notes.
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
                x="70"
                y="30"
                width="130"
                height="170"
                rx="10"
                fill="rgba(255,255,255,.12)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <path
                d="M92 66h86M92 90h86M92 114h60"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <circle cx="200" cy="176" r="38" fill="#fff"></circle>{" "}
              <circle
                cx="200"
                cy="176"
                r="28"
                stroke="#BF1A1F"
                strokeWidth="2"
                fill="none"
                strokeDasharray="3 4"
              ></circle>{" "}
              <text
                x="200"
                y="181"
                fill="#BF1A1F"
                fontSize="12"
                fontWeight="800"
                textAnchor="middle"
                fontFamily="Plus Jakarta Sans"
              >
                FCC
              </text>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/policy" className="on">
            Policy
          </a>{" "}
          <a href="/research">Research</a>
        </div>
      </nav>
      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">At a glance</span> <h2>Where our representations go</h2>{" "}
            <p className="lead">
              Count of representations listed on this page, by regulator or government body.
            </p>
            <div style={{ marginTop: "22px", display: "flex", gap: "28px", flexWrap: "wrap" }}>
              <div>
                <b style={{ fontSize: "2rem", fontWeight: "800" }}>36</b>{" "}
                <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>representations</div>
              </div>{" "}
              <div>
                <b style={{ fontSize: "2rem", fontWeight: "800" }}>7</b>{" "}
                <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>bodies engaged</div>
              </div>{" "}
              <div>
                <b style={{ fontSize: "2rem", fontWeight: "800" }}>7</b>{" "}
                <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>policy sessions</div>
              </div>
            </div>
          </div>
          <div className="card reveal">
            <div className="hbar">
              <div className="r">
                <b>RBI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="100%"></div>
                </div>{" "}
                <span className="v">18</span>
              </div>{" "}
              <div className="r">
                <b>IRDAI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="39%"></div>
                </div>{" "}
                <span className="v">7</span>
              </div>{" "}
              <div className="r">
                <b>SEBI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="33%"></div>
                </div>{" "}
                <span className="v">6</span>
              </div>{" "}
              <div className="r">
                <b>NPCI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="11%"></div>
                </div>{" "}
                <span className="v">2</span>
              </div>{" "}
              <div className="r">
                <b>CERSAI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="6%"></div>
                </div>{" "}
                <span className="v">1</span>
              </div>{" "}
              <div className="r">
                <b>IBBI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="6%"></div>
                </div>{" "}
                <span className="v">1</span>
              </div>{" "}
              <div className="r">
                <b>MeitY</b>{" "}
                <div className="track">
                  <div className="fill" data-w="6%"></div>
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
              <span className="eyebrow">Concept notes</span> <h2>Key representations</h2>{" "}
              <p className="lead">
                In-depth notes setting out the industry&apos;s position on major regulatory questions.
              </p>
            </div>
          </div>
          <div className="filters" data-filter-for="notes">
            <button className="chip active" data-f="all">
              All
            </button>{" "}
            <button className="chip" data-f="RBI">
              RBI
            </button>{" "}
            <button className="chip" data-f="SEBI">
              SEBI
            </button>{" "}
            <button className="chip" data-f="IRDAI">
              IRDAI
            </button>
          </div>
          <div id="notes" style={{ display: "grid", gap: "12px" }}>
            {POLICY_REPRESENTATIONS.map((rep) => (
              <div className="rep" data-r={rep.dataR} key={rep.id}>
                <div className="doc">{rep.regulator}</div>{" "}
                <div className="rep-main">
                  <h4>{rep.title}</h4>{" "}
                  <p>{rep.tag}</p>
                  <div className="rep-details">
                    {rep.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>{" "}
                <button
                  type="button"
                  className="go rep-toggle"
                  aria-expanded="false"
                  aria-label={`Read more about ${rep.title}`}
                >
                  <span className="rep-toggle-label">Read More</span>{" "}
                  <svg
                    className="rep-chevron"
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
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Activity log</span>{" "}
              <h2>Recent submissions &amp; sessions</h2>
            </div>
          </div>
          <div className="filters" data-filter-for="tracker">
            <button className="chip active" data-f="all">
              All
            </button>{" "}
            <button className="chip" data-f="RBI">
              RBI
            </button>{" "}
            <button className="chip" data-f="SEBI">
              SEBI
            </button>{" "}
            <button className="chip" data-f="IRDAI">
              IRDAI
            </button>{" "}
            <button className="chip" data-f="NPCI">
              NPCI
            </button>{" "}
            <button className="chip" data-f="MeitY">
              MeitY
            </button>{" "}
            <button className="chip" data-f="CERSAI">
              CERSAI
            </button>{" "}
            <button className="chip" data-f="IBBI">
              IBBI
            </button>{" "}
            <button className="chip" data-f="Session">
              Knowledge sessions
            </button>
          </div>{" "}
          <div className="tracker" id="tracker" data-limit="12">
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>PAN verification access for Lending Service Providers</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>
                Feedback on the draft omnibus framework for recognising SROs for regulated entities
              </h4>
            </div>{" "}
            <div className="sub" data-r="CERSAI reg">
              <div className="top">
                <span className="tag">CERSAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Improving the quality of KYC data in C-KYCR</h4>
            </div>{" "}
            <div className="sub" data-r="SEBI wealth">
              <div className="top">
                <span className="tag">SEBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Industry feedback on T+0 settlement</h4>
            </div>{" "}
            <div className="sub" data-r="IBBI lend">
              <div className="top">
                <span className="tag">IBBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Submission of information for unsecured loans</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Simplification of KYC for MSMEs</h4>
            </div>{" "}
            <div className="sub" data-r="NPCI lend">
              <div className="top">
                <span className="tag">NPCI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>UPI mandate and UPI AutoPay</h4>
            </div>{" "}
            <div className="sub" data-r="NPCI lend">
              <div className="top">
                <span className="tag">NPCI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Streamlining e-mandate registration for MSMEs</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Aggregation of loan products from multiple lenders</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Industry representation on insurance literacy</h4>
            </div>{" "}
            <div className="sub" data-r="SEBI wealth">
              <div className="top">
                <span className="tag">SEBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>New PAN verification system deadline</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Proposal to introduce Self-V-CIP</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Suggestions on gold loans</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Impact of recent regulations on the securitisation market</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Digital lending guidelines: direct disbursal of funds</h4>
            </div>{" "}
            <div className="sub" data-r="SEBI wealth">
              <div className="top">
                <span className="tag">SEBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Blocking of funds for trading in the secondary market (2023)</h4>
            </div>{" "}
            <div className="sub" data-r="MeitY reg">
              <div className="top">
                <span className="tag">MeitY</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Discussion on the Digital Personal Data Protection Bill, 2022</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Draft IRDAI (Bima Sugam Insurance E-Marketplace) Regulations, 2024</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Representation on Bima Vahak guidelines</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI bureau">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>
                Support for CICs on overlaps between the CIC (Regulation) Act, 2005 and the DPDPA
              </h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Cyber resilience and digital payment security controls for PSOs</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Access to IIB data for insurance intermediaries</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>ISNP: digital advertising</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>FLDG on KCC lending</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Access to data ecosystem for AgriFintech</h4>
            </div>{" "}
            <div className="sub" data-r="Session reg">
              <div className="top">
                <span className="tag g">Masterclass</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Masterclass: DPDP and its impact across the fintech ecosystem</h4>
            </div>{" "}
            <div className="sub" data-r="Session lend">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Empowering MSMEs: OCEN in lending&#x27;s digital transformation</h4>
            </div>{" "}
            <div className="sub" data-r="Session lend">
              <div className="top">
                <span className="tag g">Workshop</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Account Aggregator as a growth accelerator for lending, with Sahamati</h4>
            </div>{" "}
            <div className="sub" data-r="Session insur reg">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Impact of the DPDP Act, 2023 on the insurance sector</h4>
            </div>{" "}
            <div className="sub" data-r="Session wealth">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Financial services and gift cards on ONDC</h4>
            </div>{" "}
            <div className="sub" data-r="Session reg">
              <div className="top">
                <span className="tag g">Roundtable</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Roundtable on the proposed IFSCA (Payment Services) Regulations</h4>
            </div>{" "}
            <div className="sub" data-r="Session lend">
              <div className="top">
                <span className="tag g">Outreach</span> <span className="status">Held</span>
              </div>{" "}
              <h4>NPCI Fintech Outreach Programme, with PCI</h4>
            </div>
          </div>
          <div className="center mt-28">
            <button className="btn btn-outline" data-more-for="tracker">
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
